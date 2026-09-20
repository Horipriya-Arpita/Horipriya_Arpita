"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  ExternalLink,
  ScanFace,
  BookOpen,
  ImageIcon,
  Puzzle,
  Bot,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string;
  tags: string[];
  icon?: string;
}

const iconMap: Record<string, LucideIcon> = {
  face: ScanFace,
  book: BookOpen,
  image: ImageIcon,
  extension: Puzzle,
  bot: Bot,
};

export default function ProjectCard({
  title,
  description,
  githubUrl,
  liveUrl,
  tags,
  icon = "bot",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = iconMap[icon] ?? Sparkles;

  return (
    <div
      className="relative h-full group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative glow-border h-full overflow-hidden transition-all duration-300 ease-out hover:shadow-2xl"
        style={{ transform: isHovered ? "translateY(-8px)" : "translateY(0)" }}
      >
        <div className="glow-border-content bg-gradient-to-br from-card to-card/90 h-full flex flex-col overflow-hidden">
          {/* Gradient banner with project icon */}
          <div
            className="relative h-36 w-full flex items-center justify-center overflow-hidden"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #4361ee 0%, #3d7dff 50%, #22d3ee 100%)",
            }}
          >
            {/* faint grid texture */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <Icon
              className="relative h-16 w-16 text-white/90 transition-transform duration-500 ease-out group-hover:scale-110"
              strokeWidth={1.5}
            />
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-xs text-white/90 hover:bg-black/50 transition-colors duration-300"
            >
              <Github size={12} className="mr-1" />
              GitHub
            </Link>
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-1">
              {description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 mb-5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border bg-muted/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4">
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-all duration-300 gap-1 group-hover:gap-2"
              >
                View Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              {liveUrl && (
                <Link
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 gap-1"
                >
                  Live <ExternalLink size={14} />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
