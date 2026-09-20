
"use client"

import { Lightbulb } from "lucide-react"

interface CompetitionCardProps {
  title: string
  description: string
}

export default function CompetitionCard({
  title,
  description,
}: CompetitionCardProps) {
  return (
    <div className="glow-border h-full transition-all duration-300">
      <div className="glow-border-content bg-gradient-to-b from-card to-card/90 p-6 flex flex-col gap-3 h-full">
        {/* Icon and Title */}
        <div className="flex items-start gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
          <h4 className="text-base md:text-lg font-semibold text-foreground">{title}</h4>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}