"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import GithubMiniStats from "@/components/GithubMiniStats";

const colorPresets = [
  {
    borderColor: "border-l-blue-600",
    gradientFrom: "from-blue-600",
    gradientTo: "to-purple-600",
    badgeColor: "bg-blue-50 text-blue-700",
  },
  {
    borderColor: "border-l-green-600",
    gradientFrom: "from-green-600",
    gradientTo: "to-blue-600",
    badgeColor: "bg-green-50 text-green-700",
  },
  {
    borderColor: "border-l-purple-600",
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600",
    badgeColor: "bg-purple-50 text-purple-700",
  },
  {
    borderColor: "border-l-orange-600",
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600",
    badgeColor: "bg-orange-50 text-orange-700",
  },
  {
    borderColor: "border-l-cyan-600",
    gradientFrom: "from-cyan-600",
    gradientTo: "to-blue-600",
    badgeColor: "bg-cyan-50 text-cyan-700",
  },
];

export default function WorkExperienceCarousel() {
  const [experiences, setExperiences] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/resume/resume.json")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setExperiences(data.experience || []);
        setLoading(false);
      })
      .catch((e) => {
        setError("Failed to load work experience");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || experiences.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, experiences.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length
    );
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  if (loading) {
    return (
      <div className="text-center text-gray-500 py-12">
        Loading work experience...
      </div>
    );
  }
  if (error) {
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }
  if (!experiences.length) {
    return (
      <div className="text-center text-gray-500 py-12">
        No work experience found.
      </div>
    );
  }

  const currentExperience = experiences[currentIndex];
  // Assign color preset based on index
  const getColorPreset = (idx: number) =>
    colorPresets[idx % colorPresets.length];

  return (
    <div className="relative">
      {/* Main Card Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {experiences.map((experience, idx) => {
            const preset = getColorPreset(idx);
            return (
              <div key={idx} className="w-full flex-shrink-0">
                <Card
                  className={cn(
                    "hover:shadow-xl transition-all duration-300 border-l-4",
                    preset.borderColor
                  )}
                >
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={cn(
                            "w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center",
                            preset.gradientFrom,
                            preset.gradientTo
                          )}
                        >
                          <Building className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 dark:text-white">
                              {experience.role}
                            </h3>
                            <p
                              className="text-lg font-semibold text-blue-700 dark:text-blue-300"
                              style={{
                                color: !(
                                  "dark" in document.documentElement.classList
                                )
                                  ? preset.gradientFrom.replace("from-", "")
                                  : undefined,
                              }}
                            >
                              {experience.company}
                            </p>
                          </div>
                          <div className="flex flex-col lg:items-end text-sm text-gray-500 mt-2 lg:mt-0">
                            <div className="flex items-center gap-1 mb-1">
                              <Calendar className="w-4 h-4" />
                              <span>{experience.timeline}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2 text-gray-700 mb-4 dark:text-gray-100">
                          {experience.description.map(
                            (item: string, index: number) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <span
                                  className={cn(
                                    "w-2 h-2 rounded-full mt-2 flex-shrink-0",
                                    preset.borderColor.replace(
                                      "border-l-",
                                      "bg-"
                                    )
                                  )}
                                ></span>
                                <span>{item}</span>
                              </li>
                            )
                          )}
                        </ul>
                        {experience.techStack && (
                          <div className="flex flex-wrap gap-2">
                            {experience.techStack.map(
                              (tech: string, index: number) => (
                                <Badge
                                  key={index}
                                  variant="secondary"
                                  className={preset.badgeColor}
                                >
                                  {tech}
                                </Badge>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 backdrop-blur-sm hover:bg-white shadow-lg z-10 border-none"
        onClick={goToPrevious}
        aria-label="Previous experience"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-200" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 backdrop-blur-sm hover:bg-white shadow-lg z-10 border-none"
        onClick={goToNext}
        aria-label="Next experience"
      >
        <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-200" />
      </Button>

      {/* Dot Indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-blue-600 scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            )}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
        <div
          className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-500"
          style={{
            width: `${((currentIndex + 1) / experiences.length) * 100}%`,
          }}
        />
      </div>

      {/* Experience Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} of {experiences.length} experiences
      </div>
    </div>
  );
}
