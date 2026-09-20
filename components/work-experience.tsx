"use client";
import { MapPin } from "lucide-react";
import Image from "next/image";

interface WorkExperienceProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  logo?: string;
}

export default function WorkExperience({
  company,
  position,
  duration,
  location,
  description,
  logo,
}: WorkExperienceProps) {
  return (
    <div className="mb-10 relative">
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-border ml-4"></div>

      <div className="flex">
        {/* Timeline dot */}
        <div className="relative z-10">
          <div className="w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center">
            {logo ? (
              <Image
                src={logo || "/placeholder.svg"}
                alt={company}
                className="w-4 h-4"
              />
            ) : (
              <div className="w-3 h-3 rounded-full bg-primary"></div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="ml-6 glow-border flex-1 transition-all duration-300">
          <div className="glow-border-content bg-card/50 p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-bold text-foreground">{position}</h3>
              <span className="text-primary font-medium text-sm md:text-base">
                {duration}
              </span>
            </div>

            <h4 className="text-lg font-semibold text-muted-foreground mb-2">
              {company}
            </h4>

            <div className="flex items-center text-muted-foreground mb-4 text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              {description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
