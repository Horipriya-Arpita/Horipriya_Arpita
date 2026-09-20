"use client";
import { useState } from "react";
import ProjectCard from "@/components/project-card";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

export default function ProjectSection() {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "AI Storybook Generator",
      description:
        "AI platform that generates illustrated children's books chapter-by-chapter using Google Gemini and Hugging Face. Secure AES-256 key management, a quota system for concurrent users, and multi-model fallback for high uptime.",
      icon: "book",
      githubUrl: "https://github.com/Horipriya-Arpita/AI-Kids-StoryBook-Generator",
      tags: ["Next.js 15", "React 19", "Prisma", "MySQL", "Gemini", "Hugging Face", "Clerk"],
    },
    {
      title: "Dreamify Images",
      description:
        "Full-stack AI image generator with NextAuth.js and AES-256 key encryption. Integrated Hugging Face FLUX.1 and Cloudinary, with rate-limiting and dual-mode fallback for reliable generation.",
      icon: "image",
      githubUrl: "https://github.com/Horipriya-Arpita",
      tags: ["Next.js 15", "Prisma", "PostgreSQL", "FLUX.1", "Cloudinary", "Tailwind"],
    },
    {
      title: "Shahad's Agent",
      description:
        "Open-source AI browser extension (mentored by a senior engineer). Highlight any text on a page to chat with AI about it, plus instant, secure Gmail thread summaries — stable across Chrome and Firefox.",
      icon: "extension",
      githubUrl: "https://github.com/Horipriya-Arpita",
      tags: ["Browser Extension", "AI Chat", "Gmail Summaries", "Chrome", "Firefox"],
    },
    {
      title: "Face Recognition System",
      description:
        "Full-stack app for real-time identity verification from facial features. Stores face embeddings, logs attendance to CSV automatically, and prevents duplicates with timestamped daily tracking.",
      icon: "face",
      githubUrl: "https://github.com/Horipriya-Arpita",
      tags: ["Python", "OpenCV", "Next.js", "Express.js", "MySQL"],
    },
    {
      title: "KnowMe Portfolio",
      description:
        "This portfolio — with an AI agent that answers questions about me, grounded in real facts. Built on LangChain with an OpenAI model behind a server-side API.",
      icon: "bot",
      githubUrl: "https://github.com/Horipriya-Arpita/KnowMe-Portfolio",
      tags: ["Next.js", "LangChain", "OpenAI", "TailwindCSS"],
    },
  ];

  const visibleProjects = showAll ? allProjects : allProjects.slice(0, 3);

  return (
    <>
      <section id="projects" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Projects</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Personal Projects & Creations
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {visibleProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              tags={project.tags}
              icon={project.icon}
            />
          ))}
        </div>
        <div className="mt-12 text-center">
          <div className="glow-button inline-block">
            <button
              onClick={() => setShowAll(!showAll)}
              className="glow-button-content inline-flex items-center gap-2"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  View All Projects ({allProjects.length}) <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
