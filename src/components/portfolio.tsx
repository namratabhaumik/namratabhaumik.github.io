import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  MessageCircle,
  Instagram,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

// Sticky navigation for better UX
const Navigation = () => (
  <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b">
    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="font-bold text-xl">Namrata</div>
      <div className="hidden md:flex space-x-6">
        <a href="#about" className="hover:text-blue-600 transition-colors">
          About
        </a>
        <a href="#projects" className="hover:text-blue-600 transition-colors">
          Projects
        </a>
        <a href="#skills" className="hover:text-blue-600 transition-colors">
          Skills
        </a>
        <a href="#contact" className="hover:text-blue-600 transition-colors">
          Contact
        </a>
      </div>
    </div>
  </nav>
);

export default function Portfolio() {
  const skills = [
    {
      name: "Django",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "React",
      color: "bg-cyan-100 text-cyan-800 border-cyan-200",
    },
    {
      name: "Python",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Java",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "JavaScript",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      name: "MySQL",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "ElasticSearch",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "PostgreSQL",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Azure",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "GitHub",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
    {
      name: "Power BI",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      name: "Jira",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Postman",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "Android",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "D3.js",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "Figma",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      name: "AWS",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "Google Cloud",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Flask",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
    {
      name: "Terraform",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      name: "FastAPI",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "Firebase",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    {
      name: "TypeScript",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Next.js",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
    {
      name: "Node.js",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "Docker",
      color: "bg-blue-100 text-blue-800 border-blue-200",
    },
    {
      name: "Kubernetes",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    {
      name: "MongoDB",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    {
      name: "Unity3D",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
  ];

  const projects = [
    {
      title: "ExpenseTrackerExtended",
      description:
        "A cloud-native expense tracker app leveraging AWS services, Kubernetes (EKS), and Docker for scalable, serverless architecture.",
      link: "https://github.com/namratabhaumik/ExpenseTrackerExtended",
      tags: ["AWS", "Kubernetes", "Docker", "Cloud Architecture"],
    },
    {
      title: "VR-Evacuation-Simulation",
      description:
        "A VR evacuation simulation built with Unity3D to analyze pedestrian behavior during fire emergencies.",
      link: "https://github.com/namratabhaumik/VR-Evacuation-Simulation",
      tags: ["Unity3D", "VR", "Simulation", "C#"],
    },
    {
      title: "DalVacationHome",
      description:
        "Revolutionizing vacation rental management with a cutting-edge cloud platform, powered by GCP and AWS services.",
      link: "https://github.com/namratabhaumik/DalVacationHome",
      tags: ["GCP", "AWS", "Cloud Platform", "Full Stack"],
    },
    {
      title: "BlogIt",
      description:
        "A dynamic platform where content creators unite to share ideas, stories, and insights in a collaborative environment.",
      link: "https://github.com/namratabhaumik/BlogIt",
      tags: ["React", "Node.js", "Content Management", "Social Platform"],
    },
    {
      title: "MealMate",
      description:
        "An Android application for regular meal planning and sharing recipes with an intuitive user experience.",
      link: "https://github.com/namratabhaumik/MealMate",
      tags: ["Android", "Mobile Development", "Java", "Recipe Management"],
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      link: "https://www.credly.com/badges/8cceb83b-b7e4-42f8-8a71-20bf2ad712b2/linked_in_profile",
    },
    {
      name: "Microsoft Certified Azure Fundamentals",
      link: "https://www.credly.com/badges/1aab900c-d79f-4b18-93ab-7d1768217c7b/public_url",
    },
    {
      name: "Microsoft Certified: Power Platform Fundamentals",
      link: "https://www.credly.com/badges/c16b4879-0e08-46af-b834-7b8e0144250e/public_url",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden bg-white pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-4xl">👋</span>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Hi there! I'm Namrata
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-2">(she/her)</p>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                I'm currently exploring AI-augmented development workflows,
                including LLM-powered tools, prompt engineering, and the
                evolving landscape of context-aware systems. Hit me up for
                collaborations, discussions, events, or workshops related to
                Agentic Software Development or any technology in general!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                </Link>
                <Link
                  href="https://github.com/namratabhaumik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Github className="w-4 h-4 mr-2" />
                    View My Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              My Foundations Lie In
            </h2>
            <p className="text-lg text-gray-600">
              Technologies and tools I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`${skill.color} px-4 py-2 text-sm font-medium border-2 hover:scale-105 transition-transform cursor-default`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600">
              Some of my recent work and contributions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-semibold text-blue-600 group-hover:text-blue-700 transition-colors">
                        {project.title}
                      </CardTitle>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Would you like to read more about my projects and journey in tech
              so far?
            </p>
            <Link
              href="https://github.com/namratabhaumik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Certifications
            </h2>
            <p className="text-lg text-gray-600">
              Professional certifications and achievements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Link
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-0 shadow-md bg-gradient-to-br from-blue-50 to-purple-50 cursor-pointer">
                  <CardContent className="p-6">
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Say Hello</h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on exciting
            projects!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/namratabhaumik/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </Link>

            <Link
              href="https://github.com/namratabhaumik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
            </Link>

            <Link href="mailto:namratabhaumik16@gmail.com">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Button>
            </Link>

            <Link
              href="https://discordapp.com/users/namrata2599"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discord
              </Button>
            </Link>

            <Link
              href="https://www.instagram.com/missing.nemo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </Button>
            </Link>

            <Link
              href="https://namrata-bhaumik.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-blue-600 hover:bg-blue-50"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Medium
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Namrata Bhaumik. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with Next.js and deployed on GitHub Pages
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
