
import type { LucideIcon } from "lucide-react"

interface SkillBadgeProps {
  name: string
  icon: LucideIcon
}

export default function SkillBadge({ name, icon: Icon }: SkillBadgeProps) {
  return (
    <div className="glow-border transition-all duration-300 hover:transform hover:translate-y-[-1px]">
      <div className="glow-border-content bg-card/70 px-4 py-3 flex flex-col items-center justify-center gap-2">
        <Icon className="h-6 w-6 text-primary" />
        <span className="text-foreground">{name}</span>
      </div>
    </div>
  )
}
