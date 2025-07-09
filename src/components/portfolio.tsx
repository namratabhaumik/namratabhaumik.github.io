"use client";

import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  MessageCircle,
  Instagram,
  BookOpen,
  Briefcase,
  Calendar,
  MapPin,
  GraduationCap,
  Building,
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

export default function Portfolio() {
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

  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState<any>(null);
  const [loadingResume, setLoadingResume] = useState(true);
  const [resumeError, setResumeError] = useState<string | null>(null);

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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null; // or render only the static content

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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="text-4xl">👋</span>
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-gray-300">
                Hi there! I'm Namrata
              </h1>
            </div>
            <p className="text-lg text-gray-600 mb-2 dark:text-gray-300">
              (she/her)
            </p>
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
      </motion.section>

      {/* About Me Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-[#232946] dark:to-[#181c2f] relative overflow-hidden"
      >
        {/* Floating skill badges in background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 opacity-20">
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
              System Design
            </Badge>
          </div>
          <div className="absolute top-32 right-16 opacity-15">
            <Badge className="bg-cyan-100 text-cyan-700 border-cyan-200 text-xs">
              Cloud-Native
            </Badge>
          </div>
          <div className="absolute top-48 left-20 opacity-25">
            <Badge className="bg-green-100 text-green-700 border-green-200 text-xs">
              DevOps
            </Badge>
          </div>
          <div className="absolute bottom-40 right-12 opacity-20">
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 text-xs">
              Performance
            </Badge>
          </div>
          <div className="absolute bottom-60 left-16 opacity-15">
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 text-xs">
              Problem Solving
            </Badge>
          </div>
          <div className="absolute top-60 right-32 opacity-25">
            <Badge className="bg-yellow-100 text-yellow-700 border-yellow-200 text-xs">
              Automation
            </Badge>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                  My Journey
                </h3>
                <div className="text-gray-700 leading-relaxed dark:text-gray-300">
                  I'm a passionate developer with a love for creating innovative
                  solutions that bridge the gap between technology and
                  real-world problems. My journey in tech began with curiosity
                  and has evolved into a deep appreciation for{" "}
                  <Badge className="inline-flex mx-1 bg-cyan-50 text-cyan-700 border-cyan-200 text-xs px-2 py-1">
                    cloud-native architectures
                  </Badge>{" "}
                  and{" "}
                  <Badge className="inline-flex mx-1 bg-purple-50 text-purple-700 border-purple-200 text-xs px-2 py-1">
                    AI-augmented workflows
                  </Badge>
                  .
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                  Current Focus
                </h3>
                <div className="text-gray-700 leading-relaxed dark:text-gray-300">
                  Currently, I'm focused on exploring context-aware systems and
                  building scalable applications. I excel in{" "}
                  <Badge className="inline-flex mx-1 bg-blue-50 text-blue-700 border-blue-200 text-xs px-2 py-1">
                    system design
                  </Badge>
                  ,{" "}
                  <Badge className="inline-flex mx-1 bg-green-50 text-green-700 border-green-200 text-xs px-2 py-1">
                    DevOps automation
                  </Badge>
                  , and{" "}
                  <Badge className="inline-flex mx-1 bg-orange-50 text-orange-700 border-orange-200 text-xs px-2 py-1">
                    performance optimization
                  </Badge>{" "}
                  to drive efficiency and innovation.
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 dark:text-white">
                  Beyond Code
                </h3>
                <div className="text-gray-700 leading-relaxed dark:text-gray-300">
                  When I'm not coding, you'll find me exploring the latest in
                  AI/ML technologies, contributing to open-source projects, or
                  sharing knowledge through{" "}
                  <Badge className="inline-flex mx-1 bg-indigo-50 text-indigo-700 border-indigo-200 text-xs px-2 py-1">
                    technical leadership
                  </Badge>
                  . I believe in the power of{" "}
                  <Badge className="inline-flex mx-1 bg-pink-50 text-pink-700 border-pink-200 text-xs px-2 py-1">
                    collaboration
                  </Badge>{" "}
                  and continuous learning to drive meaningful innovation.
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Image
                src="/profile.jpg"
                alt="Namrata Bhaumik"
                width={256}
                height={256}
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4 dark:text-white">
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
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
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
