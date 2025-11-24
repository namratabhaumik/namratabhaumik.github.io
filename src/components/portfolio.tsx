"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  MessageCircle,
  Instagram,
  BookOpen,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Building,
  Code,
  Cloud,
  Database,
  Zap,
  Maximize2
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
import Navigation from "@/components/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import WorkExperienceCarousel from "@/components/work-experience-carousel";
import GithubMiniStats from "@/components/GithubMiniStats";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"


export default function Portfolio() {
  const projects = [
    {
      title: "ExpenseTrackerExtended",
      description:
        "A cloud-native expense tracker app leveraging AWS services, Kubernetes (EKS), and Docker for scalable, serverless architecture.",
      link: "https://github.com/namratabhaumik/ExpenseTrackerExtended",
      tags: ["AWS", "Kubernetes", "Docker", "Cloud Architecture"],
      domain: [0, 1, 2, 3, 4], // Backend Engineering, Cloud Infrastructure & DevOps, Data & Analytics Engineering, AI & ML Engineering
    },
    {
      title: "VR-Evacuation-Simulation",
      description:
        "A VR evacuation simulation built with Unity3D to analyze pedestrian behavior during fire emergencies.",
      link: "https://github.com/namratabhaumik/VR-Evacuation-Simulation",
      tags: ["Unity3D", "VR", "Simulation", "C#"],
      domain: [4], // Full Stack Development
    },
    {
      title: "DalVacationHome",
      description:
        "Revolutionizing vacation rental management with a cutting-edge cloud platform, powered by GCP and AWS services.",
      link: "https://github.com/namratabhaumik/DalVacationHome",
      tags: ["GCP", "AWS", "Cloud Platform", "Full Stack"],
      domain: [1, 4], // Cloud Infrastructure & DevOps, Full Stack Development
    },
    {
      title: "BlogIt",
      description:
        "A dynamic platform where content creators unite to share ideas, stories, and insights in a collaborative environment.",
      link: "https://github.com/namratabhaumik/BlogIt",
      tags: ["React", "Node.js", "Content Management", "Social Platform"],
      domain: [2, 4], // Data & Analytics Engineering, Full Stack Development
    },
    {
      title: "MealMate",
      description:
        "An Android application for regular meal planning and sharing recipes with an intuitive user experience.",
      link: "https://github.com/namratabhaumik/MealMate",
      tags: ["Android", "Mobile Development", "Java", "Recipe Management"],
      domain: [4], // Full Stack Development
    },
    {
      title: "FinThesis",
      description:
        "An AI-powered Fintech market research assistant that generates structured investment theses using Google Gemini and FAISS for semantic retrieval.",
      link: "https://github.com/namratabhaumik/FintechMarketThesisGenerator",
      tags: ["Langchain", "FAISS", "Streamlit", "Gemini API"],
      domain: [0, 2, 3, 4], // Backend Engineering, Data & Analytics Engineering, AI & ML Engineering, Full Stack Development
    },
    {
      title: "DreamLayer AI",
      description:
        "An open-source Stable Diffusion WebUI that keeps the familiar Automatic1111 ⁄ Forge layout you know, replaces the clutter with a modern design system, and runs every generation step on ComfyUI in the background.",
      link: "https://github.com/namratabhaumik/DreamLayer",
      tags: ["Flask", "ComfyUI", "React", "TypeScript"],
      domain: [0, 3, 4], // Backend Engineering, AI & ML Engineering, Full Stack Development
    },
  ];

  const certifications = [
    {
      name: "Hugging Face Fundamentals of LLMs - Transformer Models",
      issuer: "Hugging Face",
      image: "/hugging-face-llm-course-certificate.jpg",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/8cceb83b-b7e4-42f8-8a71-20bf2ad712b2/linked_in_profile",
      image: "/aws-certificate.png",
    },
    {
      name: "Microsoft Certified Azure Fundamentals",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/1aab900c-d79f-4b18-93ab-7d1768217c7b/public_url",
      image: "/azure-certificate.png",
    },
    {
      name: "Microsoft Certified: Power Platform Fundamentals",
      issuer: "Microsoft",
      link: "https://www.credly.com/badges/c16b4879-0e08-46af-b834-7b8e0144250e/public_url",
      image: "/power-platform-certificate.png",
    },
  ];

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState<any>(null);
  const [loadingResume, setLoadingResume] = useState(true);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [expandedDomains, setExpandedDomains] = useState<Set<number>>(
    new Set()
  );

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  useEffect(() => {
    setLoadingResume(true);
    fetch("/resume/resume.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setResumeData(data);
        setLoadingResume(false);
      })
      .catch((e) => {
        console.error("Resume fetch error:", e);
        setResumeError("Failed to load resume data");
        setLoadingResume(false);
      });
  }, []);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);
  const toggleDomainExpanded = (domainId: number) => {
    const newExpanded = new Set(expandedDomains);
    if (newExpanded.has(domainId)) {
      newExpanded.delete(domainId);
    } else {
      newExpanded.add(domainId);
    }
    setExpandedDomains(newExpanded);
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // or render only the static content

  // == Insert technicalDomains and skills for the new About Me & Skills UI ==
  const skills = [
    // Languages
    { name: "Python", color: "bg-blue-100 text-blue-800 border-blue-200" },
    {
      name: "JavaScript",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    { name: "Java", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "C#", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Bash", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "HTML", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "CSS", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },

    // Technologies & Frameworks
    { name: "Django", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "FastAPI", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Flask", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "Pydantic", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Next.js", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "Node.js", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
    { name: "jQuery", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "OAuth", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "JWT", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    {
      name: "Firebase",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    { name: "Redis", color: "bg-red-100 text-red-800 border-red-200" },
    {
      name: "Android Studio",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    { name: "Unity", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "Oculus", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Git", color: "bg-gray-100 text-gray-800 border-gray-200" },
    { name: "Jira", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "REST", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Netlify", color: "bg-green-100 text-green-800 border-green-200" },
    {
      name: "Power BI",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    { name: "Figma", color: "bg-purple-100 text-purple-800 border-purple-200" },
    { name: "Miro", color: "bg-pink-100 text-pink-800 border-pink-200" },
    { name: "D3.js", color: "bg-orange-100 text-orange-800 border-orange-200" },
    {
      name: "Huggingface",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    { name: "n8n", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Langchain", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Streamlit", color: "bg-red-100 text-red-800 border-red-200" },

    // Databases
    {
      name: "BigQuery",
      color: "bg-orange-100 text-orange-800 border-orange-200",
    },
    {
      name: "Firestore",
      color: "bg-yellow-100 text-yellow-800 border-yellow-200",
    },
    { name: "MySQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "PostgreSQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Supabase", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "MongoDB", color: "bg-green-100 text-green-800 border-green-200" },
    {
      name: "Elasticsearch",
      color: "bg-green-100 text-green-800 border-green-200",
    },
    { name: "FAISS", color: "bg-blue-100 text-blue-800 border-blue-200" },

    // Cloud & DevOps
    { name: "GCP", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "AWS", color: "bg-orange-100 text-orange-800 border-orange-200" },
    { name: "Azure", color: "bg-blue-100 text-blue-800 border-blue-200" },
    { name: "Docker", color: "bg-blue-100 text-blue-800 border-blue-200" },
    {
      name: "Terraform",
      color: "bg-purple-100 text-purple-800 border-purple-200",
    },
    { name: "GitLab CI", color: "bg-pink-100 text-pink-800 border-pink-200" },
    {
      name: "GitHub Actions",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
    { name: "Jenkins", color: "bg-green-100 text-green-800 border-green-200" },
    { name: "Linux", color: "bg-gray-100 text-gray-800 border-gray-200" },
    {
      name: "Shell Scripting",
      color: "bg-gray-100 text-gray-800 border-gray-200",
    },
  ];
  const technicalDomains = [
    {
      id: 1,
      title: "Backend Engineering",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      description:
        "I design and develop robust, scalable backend systems with production-grade APIs including database optimization.",
      highlights: [
        "Designed REST APIs and backend workflows using Django, FastAPI, and Flask",
        "Improved API performance, searchability, and data retrieval using Elasticsearch and optimized data models",
        "Built full-stack apps integrating React, PostgreSQL, and Docker",
      ],
      achievements: "20%+",
      achievementLabel: "Performance Gain",
    },
    {
      id: 2,
      title: "Cloud Infrastructure & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-900/20",
      description:
        "I can build cloud-native architectures and automate deployment pipelines for maximum efficiency.",
      highlights: [
        "Deployed containerized apps using AWS (Lambda, S3, DynamoDB), GCP (Cloud Run), and Kubernetes (EKS)",
        "Implemented CI/CD pipelines and infrastructure automation with GitHub Actions, Gutlab CI, Docker, and Terraform",
        "Designed serverless architectures for scalability and cost-efficiency",
      ],
      achievements: "5+",
      achievementLabel: "Cloud Platforms",
    },
    {
      id: 3,
      title: "Data & Analytics Engineering",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      description:
        "I can create data pipelines and analytics solutions that power insights and drive decisions.",
      highlights: [
        "Built ETL pipelines and data workflows integrating APIs and structured storage",
        "Experienced with Python data stack (Pandas, NumPy) for data processing",
        "Currently exploring AI + DataOps — how data pipelines feed machine learning and analytics models",
        "Built analytics dashboards with Power BI, Tableau, and D3.js to visualize insights",
      ],
      achievements: "100+",
      achievementLabel: "Projects",
    },
    {
      id: 4,
      title: "AI & Emerging Systems",
      icon: <Zap className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      iconColor: "text-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      description:
        "I integrate AI models into scalable systems with focus on reliability and production-readiness.",
      highlights: [
        "Exploring AI adoption and backend LLM integration with OpenAI, Google Gemini, and Anthropic API keys",
        "Applying system design thinking to intelligent, context-aware architectures",
        "Passionate about how AI systems can be made reliable, explainable, and production-ready",
      ],
      achievements: "4+",
      achievementLabel: "LLM Tools",
    },
    {
      id: 5,
      title: "Full Stack Development",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
      iconColor: "text-indigo-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
      description:
        "I build complete web applications that connect performant frontends with scalable backend services and cloud deployment pipelines.",
      highlights: [
        "Developed full-stack apps like integrating React, Django/Flask, Node.js, and cloud services",
        "Built responsive UIs with React, Next.js, and Tailwind while connecting RESTful APIs for seamless data flow",
        "Implemented secure authentication, state management, and performance optimization across the stack",
        "Deployed containerized full-stack systems using Docker, AWS, and CI/CD pipelines for production readiness",
      ],
      achievements: "10+",
      achievementLabel: "Full Stack Apps",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      {/* Hero Section */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative overflow-hidden bg-white pt-20 dark:bg-gradient-to-br dark:from-[#181c2f] dark:to-[#232946]"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Enhanced Greeting */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <span className="text-5xl animate-bounce">👋</span>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent dark:from-white dark:via-blue-300 dark:to-purple-300">
                Hi there! I'm Namrata
              </h1>
            </motion.div>

            {/* Enhanced Description */}
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-6 mb-10"
              >
                {/* Main intro with highlighted keywords (plain font-semibold, not gradient) */}
                <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Curious about what happens{" "}
                  <span className="font-bold italic text-gray-900 dark:text-gray-100">
                    after
                  </span>{" "}
                  the API works — I build systems that scale, recover, and
                  perform.
                </p>

                {/* Call to action with personality (centered, no gradient box) */}
                <div className="text-center">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Hit me up if you are also exploring the building blocks of
                    large-scale systems or any collaborations, discussions,
                    events, or workshops about technology in general!
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Let's Connect
                  </Button>
                </Link>
                <Link
                  href="https://github.com/namratabhaumik"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 group bg-transparent"
                  >
                    <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    View My Work
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-white dark:bg-[#181c2f] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What I Can Do For You
            </h2>
          </div>
          {/* Main Content Area */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:sticky lg:top-24"
            >
              <div className="relative mb-6 group">
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src="/profile.jpg"
                  alt="Namrata Bhaumik"
                  width={240}
                  height={240}
                  className="relative w-60 h-60 rounded-2xl object-cover shadow-2xl ring-4 ring-white dark:ring-gray-900"
                />
              </div>

              <div className="text-center mb-8 w-full">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  Namrata Bhaumik
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  (she/her)
                </p>
                <div className="mt-6 text-left space-y-3 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    I'm happy to help if:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-blue-600 dark:text-blue-400 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>
                        You're going{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          0 → 1
                        </span>{" "}
                        with your product
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-purple-600 dark:text-purple-400 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>
                        Your infrastructure needs{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          a direction or a rebuild
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-indigo-600 dark:text-indigo-400 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>
                        Your product works end-to-end but needs{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          scaling
                        </span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-cyan-600 dark:text-cyan-400 font-bold flex-shrink-0">
                        •
                      </span>
                      <span>
                        You're doing everything right, but want to{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                          move faster
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Tab Navigation for Desktop (vertical) */}
              <div className="w-full lg:flex flex-col gap-2 hidden">
                {technicalDomains.map((domain, idx) => (
                  <motion.button
                    key={domain.id}
                    onClick={() => setActiveTab(idx)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full px-4 py-3 rounded-lg text-left font-medium transition-all duration-300 flex items-center gap-3 ${activeTab === idx
                      ? `${domain.bgColor} text-gray-900 dark:text-white shadow-md border-l-4 border-current`
                      : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                  >
                    <div className={domain.iconColor}>{domain.icon}</div>
                    <span className="text-sm">{domain.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            {/* Right Column - Main Animated Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              {/* Mobile Tab Buttons */}
              <div className="lg:hidden mb-6 flex gap-2 overflow-x-auto pb-2">
                {technicalDomains.map((domain, idx) => (
                  <motion.button
                    key={domain.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all duration-300 flex-shrink-0 ${activeTab === idx
                      ? `bg-gradient-to-r ${domain.color} text-white shadow-lg`
                      : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                      }`}
                  >
                    {domain.title}
                  </motion.button>
                ))}
              </div>
              {/* Animated Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className={`${technicalDomains[activeTab].bgColor} rounded-2xl border border-gray-100 dark:border-gray-800 p-8 lg:p-10`}
              >
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 bg-white dark:bg-gray-900 shadow-lg group hover:scale-110 transition-transform`}
                  >
                    <div
                      className={`${technicalDomains[activeTab].iconColor} text-3xl`}
                    >
                      {technicalDomains[activeTab].icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {technicalDomains[activeTab].title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {technicalDomains[activeTab].description}
                    </p>
                  </div>
                </div>
                {/* Highlights List */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Key Concepts
                  </h4>
                  <ul className="grid gap-3">
                    {technicalDomains[activeTab].highlights.map(
                      (highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                          className="flex items-start gap-3 bg-white/50 dark:bg-gray-900/50 p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                        >
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 2,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "linear",
                            }}
                            className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-gradient-to-br ${technicalDomains[activeTab].color}`}
                          ></motion.span>
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {highlight}
                          </span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Related Projects
                  </h4>
                  <div className="space-y-3">
                    {(() => {
                      const filteredProjects = projects.filter((p) =>
                        Array.isArray(p.domain)
                          ? p.domain.includes(activeTab)
                          : p.domain === activeTab
                      );
                      const isExpanded = expandedDomains.has(activeTab);
                      const displayedProjects = isExpanded
                        ? filteredProjects
                        : filteredProjects.slice(0, 3);
                      const hasMore = filteredProjects.length > 3;

                      return (
                        <>
                          {displayedProjects.map((project, idx) => (
                            <motion.a
                              key={idx}
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="block p-4 rounded-lg bg-white/60 dark:bg-gray-900/60 hover:bg-white dark:hover:bg-gray-900 transition-colors group border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                            >
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 mt-1">
                                  <Code className="w-5 h-5 text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                                      {project.title}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                                  </div>
                                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                                    {project.description}
                                  </p>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    {project.tags.map((tag, tagIdx) => (
                                      <Badge
                                        key={tagIdx}
                                        variant="outline"
                                        className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                                      >
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.a>
                          ))}
                          {hasMore && (
                            <motion.button
                              onClick={() => toggleDomainExpanded(activeTab)}
                              className="w-full py-3 px-4 mt-2 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-all duration-300 font-medium flex items-center justify-center gap-2 group hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              {isExpanded ? (
                                <>
                                  <span>Show Less</span>
                                  <svg
                                    className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                    />
                                  </svg>
                                </>
                              ) : (
                                <>
                                  <span>
                                    Show {filteredProjects.length - 3} More
                                  </span>
                                  <svg
                                    className="w-4 h-4 transform group-hover:rotate-180 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 10l7-7 7 7m-7 7v-12"
                                    />
                                  </svg>
                                </>
                              )}
                            </motion.button>
                          )}
                          {filteredProjects.length === 0 && (
                            <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-4">
                              More projects coming soon in this domain
                            </p>
                          )}
                        </>
                      );
                    })()}
                  </div>
                </div>
              </motion.div>
              {/* Navigation Info */}
              <div className="text-center mt-8 text-sm text-gray-600 dark:text-gray-400">
                <p>
                  Explore {technicalDomains.length} domains • Click to navigate
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* == END About section == */}

      {/* Skills Section */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-slate-50 dark:bg-[#232946]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              My Foundations Lie In
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Technologies and tools I work with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`${skill.color} px-4 py-2 text-sm font-medium border-2 transition-transform duration-200 hover:scale-110 hover:shadow-lg cursor-pointer`}
              >
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-slate-50 dark:bg-[#232946]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Some of my recent work and contributions
            </p>
          </div>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="h-48 bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-[#181c2f] dark:text-gray-100 dark:shadow-blue-900/30">
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
          )}
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
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent dark:text-blue-400 dark:hover:bg-white dark:hover:text-blue-600"
              >
                <Github className="w-4 h-4 mr-2" />
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        id="certifications"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-white dark:bg-gray-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">Certifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Professional certifications and achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white dark:bg-[#181c2f]">
                    <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Maximize2 className="w-8 h-8 text-white drop-shadow-md" />
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <Badge
                          variant="secondary"
                          className="bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                        >
                          {cert.issuer}
                        </Badge>
                      </div>
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {cert.name}
                      </h3>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-full p-0 overflow-hidden bg-white dark:bg-[#181c2f] border-none">
                  <div className="relative w-full aspect-[4/3] bg-gray-100 dark:bg-gray-900">
                    <Image src={cert.image || "/placeholder.svg"} alt={cert.name} fill className="object-contain" />
                  </div>
                  <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-white dark:bg-[#181c2f]">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Issued by {cert.issuer}
                      </p>
                    </div>
                    {cert.link && (
                      <Button asChild className="bg-blue-600 hover:bg-blue-700">
                        <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Verify Credential
                        </Link>
                      </Button>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Work Experience
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My professional journey in software development
            </p>
          </div>
          <WorkExperienceCarousel />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-slate-50 dark:bg-[#232946]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-purple-600" />
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Education
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Academic background and qualifications
            </p>
          </div>
          {loadingResume ? (
            <div className="space-y-4 animate-pulse">
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="h-32 bg-gray-200 dark:bg-gray-800 rounded-lg"
                />
              ))}
            </div>
          ) : resumeError ? (
            <div className="text-red-500 text-center">{resumeError}</div>
          ) : resumeData?.education ? (
            <div className="grid md:grid-cols-2 gap-8">
              {resumeData.education.map((edu: any, idx: number) => (
                <Card
                  key={idx}
                  className="hover:shadow-xl transition-all duration-300 bg-white dark:bg-[#181c2f] dark:text-gray-100"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-purple-600 font-semibold mb-2">
                          {edu.university}
                        </p>
                        <div className="flex flex-col gap-1 text-sm text-gray-500 mb-4">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.timeline}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{edu.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github" className="py-20 bg-slate-50 dark:bg-[#232946]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <GithubMiniStats />
        </div>
      </section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-gray-900 dark:to-gray-800"
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
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 dark:bg-[#181c2f]">
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
