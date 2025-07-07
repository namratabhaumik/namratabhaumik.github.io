"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  GitBranch,
  Code,
  Calendar,
  Folder,
  Zap,
  ExternalLink,
} from "lucide-react";
import { useEffect, useState } from "react";

interface GithubMiniStatsProps {
  username?: string;
}

interface GitHubData {
  publicRepos: number;
  totalCommits: number;
  topLanguages: Array<{ name: string; percentage: number; color: string }>;
  featuredProjects: Array<{
    name: string;
    description: string;
    language: string;
    url: string;
    category: string;
    techStack: string[];
  }>;
}

export default function GithubMiniStats({
  username = "namratabhaumik",
}: GithubMiniStatsProps) {
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGitHubData();
    // eslint-disable-next-line
  }, []);

  const fetchGitHubData = async () => {
    try {
      // Fetch user data
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();

      // Fetch repositories
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
      );
      const reposData = await reposResponse.json();

      // Calculate real total commits across all repos (limit to 20 for rate limits)
      let totalCommits = 0;
      const commitPromises = reposData.slice(0, 20).map(async (repo: any) => {
        try {
          const commitsResponse = await fetch(
            `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
          );
          if (commitsResponse.ok) {
            const linkHeader = commitsResponse.headers.get("link");
            if (linkHeader) {
              const match = linkHeader.match(/page=(\d+)>; rel="last"/);
              if (match) {
                return Number.parseInt(match[1]);
              }
            }
            // If no pagination, count the commits directly
            const commits = await commitsResponse.json();
            return Array.isArray(commits) ? commits.length : 0;
          }
          return 0;
        } catch {
          return 0;
        }
      });

      const commitCounts = await Promise.all(commitPromises);
      totalCommits = commitCounts.reduce((sum, count) => sum + count, 0);

      // Calculate language statistics
      const languageStats: { [key: string]: number } = {};
      let totalSize = 0;

      reposData.forEach((repo: any) => {
        if (repo.language) {
          languageStats[repo.language] =
            (languageStats[repo.language] || 0) + (repo.size || 1);
          totalSize += repo.size || 1;
        }
      });

      // Convert to percentages and get top languages
      const topLanguages = Object.entries(languageStats)
        .map(([name, size]) => ({
          name,
          percentage: Math.round((size / totalSize) * 100),
          color: getLanguageColor(name),
        }))
        .filter((lang) => lang.percentage > 0)
        .sort((a, b) => b.percentage - a.percentage)
        .slice(0, 5);

      // Get featured projects with enhanced categorization based on resume
      const featuredProjects = getFeaturedProjectsFromResume(reposData);

      setGithubData({
        publicRepos: userData.public_repos,
        totalCommits: totalCommits || 500, // Fallback if API calls fail
        topLanguages,
        featuredProjects,
      });
    } catch (error) {
      // Fallback to resume-based static data
      setGithubData({
        publicRepos: 16,
        totalCommits: 800, // Estimated based on 4+ years experience
        topLanguages: [
          { name: "Python", percentage: 35, color: "bg-blue-500" },
          { name: "JavaScript", percentage: 30, color: "bg-yellow-400" },
          { name: "Java", percentage: 20, color: "bg-red-500" },
          { name: "C#", percentage: 10, color: "bg-purple-500" },
          { name: "HTML", percentage: 5, color: "bg-orange-500" },
        ],
        featuredProjects: getFeaturedProjectsFromResume([]),
      });
    } finally {
      setLoading(false);
    }
  };

  const getFeaturedProjectsFromResume = (reposData: any[]) => {
    // Enhanced project data based on resume
    const resumeProjects = [
      {
        name: "ExpenseTrackerExtended",
        description:
          "Cloud-native expense tracking platform with AWS (Cognito, DynamoDB, S3, SNS), Docker, Kubernetes (EKS), and Python-Django/React",
        language: "Python",
        url: `https://github.com/${username}/ExpenseTrackerExtended`,
        category: "Cloud Platform",
        techStack: ["AWS", "GCP", "Kubernetes", "Docker", "React", "Django"],
      },
      {
        name: "VR-Evacuation-Simulation",
        description:
          "Virtual Reality evacuation simulation game using Unity, Oculus SDK and C# to analyze pedestrian behavior during fire emergencies",
        language: "C#",
        url: `https://github.com/${username}/VR-Evacuation-Simulation`,
        category: "VR/AR",
        techStack: ["Unity", "Oculus", "C#", "VR"],
      },
      {
        name: "DalVacationHome",
        description:
          "Cross-cloud distributed system using AWS IAM, Lambda, Cognito, DynamoDB, S3, Lex, SNS/SQS, GCP Pub/Sub, Functions, Cloud Run and IaC",
        language: "JavaScript",
        url: `https://github.com/${username}/DalVacationHome`,
        category: "Cloud Platform",
        techStack: ["AWS", "GCP", "Node.js", "React", "Terraform"],
      },
      {
        name: "BlogIt",
        description:
          "Full-stack blogging platform implementing secure authentication, RESTful APIs, and dynamic content management",
        language: "JavaScript",
        url: `https://github.com/${username}/BlogIt`,
        category: "Full Stack",
        techStack: ["React", "Flask", "MongoDB", "Firebase"],
      },
      {
        name: "MealMate",
        description:
          "Android app for meal planning, recommending and sharing recipes with Firebase integration",
        language: "Java",
        url: `https://github.com/${username}/MealMate`,
        category: "Mobile",
        techStack: ["Android Studio", "Java", "Firebase"],
      },
    ];

    // Try to match with actual repos, fallback to resume data
    return resumeProjects.slice(0, 3).map((project) => {
      const matchingRepo = reposData.find(
        (repo: any) => repo.name.toLowerCase() === project.name.toLowerCase()
      );
      return {
        ...project,
        language: matchingRepo?.language || project.language,
        url: matchingRepo?.html_url || project.url,
      };
    });
  };

  const getLanguageColor = (language: string): string => {
    const colors: { [key: string]: string } = {
      JavaScript: "bg-yellow-400",
      Python: "bg-blue-500",
      TypeScript: "bg-blue-600",
      Java: "bg-red-500",
      "C#": "bg-purple-500",
      HTML: "bg-orange-500",
      CSS: "bg-blue-400",
      Go: "bg-cyan-500",
      Rust: "bg-orange-600",
      PHP: "bg-indigo-500",
    };
    return colors[language] || "bg-gray-400";
  };

  if (loading) {
    return (
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#232946] dark:to-[#181c2f]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Loading GitHub data...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (!githubData) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-[#232946] dark:to-[#181c2f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-gray-700 dark:text-white" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Development Overview
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            4+ years of professional software development experience
          </p>
        </div>

        {/* Development Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Folder className="w-6 h-6 text-blue-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubData.publicRepos}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Public Repos
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <GitBranch className="w-6 h-6 text-green-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  {githubData.totalCommits}+
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Total Commits
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-purple-600 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  4+
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Years Experience
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-2">
                <Zap className="w-6 h-6 text-orange-500 mr-2" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  5
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Major Projects
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Language Distribution */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="w-5 h-5" />
                Most Used Languages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {githubData.topLanguages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        {lang.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-300">
                        {lang.percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${lang.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${lang.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Featured Projects */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Folder className="w-5 h-5" />
                Featured Projects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {githubData.featuredProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Code className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="text-xs font-medium"
                          >
                            {project.name}
                          </Badge>
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-200 group-hover:text-gray-900 mb-2">
                          {project.description}
                        </p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">
                            {project.language}
                          </Badge>
                          {project.techStack
                            .slice(0, 3)
                            .map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs bg-blue-50 text-blue-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-6 text-center">
                <a
                  href={`https://github.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Github className="w-4 h-4" />
                  View All Repositories
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
