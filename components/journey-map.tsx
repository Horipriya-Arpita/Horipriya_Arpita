"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"

interface JourneyPoint {
  id: string
  title: string
  year: string
  description: string
  position: { x: number; y: number }
  category: "education" | "work" | "achievement" | "personal"
}

export default function JourneyMap() {
  const [activePoint, setActivePoint] = useState<string | null>(null)

  const journeyPoints: JourneyPoint[] = [
    {
      id: "education1",
      title: "Computer Science Degree",
      year: "2013-2017",
      description: "Graduated with honors in Computer Science, focusing on web technologies and AI.",
      position: { x: 20, y: 30 },
      category: "education",
    },
    {
      id: "work1",
      title: "First Developer Job",
      year: "2017",
      description: "Started my journey as a junior web developer at WebCraft Studios.",
      position: { x: 35, y: 45 },
      category: "work",
    },
    {
      id: "achievement1",
      title: "Hackathon Winner",
      year: "2019",
      description: "Won my first major hackathon with an innovative accessibility solution.",
      position: { x: 50, y: 25 },
      category: "achievement",
    },
    {
      id: "personal1",
      title: "Started Digital Art",
      year: "2020",
      description: "Began exploring digital art as a creative outlet alongside coding.",
      position: { x: 65, y: 40 },
      category: "personal",
    },
    {
      id: "work2",
      title: "Senior Developer",
      year: "2022",
      description: "Promoted to senior developer role, leading a team of talented engineers.",
      position: { x: 80, y: 30 },
      category: "work",
    },
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "education":
        return "bg-blue-500"
      case "work":
        return "bg-purple-500"
      case "achievement":
        return "bg-green-500"
      case "personal":
        return "bg-pink-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="relative w-full h-[400px] bg-navy-900/50 rounded-lg border border-navy-800 overflow-hidden">
      {/* Journey path */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20,30 Q35,10 50,25 T65,40 T80,30"
          fill="none"
          stroke="rgba(139, 92, 246, 0.5)"
          strokeWidth="3"
          strokeDasharray="5,5"
        />
      </svg>

      {/* Journey points */}
      {journeyPoints.map((point) => (
        <div
          key={point.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
          style={{ left: `${point.position.x}%`, top: `${point.position.y}%` }}
          onMouseEnter={() => setActivePoint(point.id)}
          onMouseLeave={() => setActivePoint(null)}
        >
          <div
            className={`w-6 h-6 rounded-full ${getCategoryColor(
              point.category,
            )} flex items-center justify-center border-2 border-white transition-all duration-300 ${
              activePoint === point.id ? "scale-150" : ""
            }`}
          >
            <MapPin className="h-3 w-3 text-white" />
          </div>

          {/* Tooltip */}
          <div
            className={`absolute bottom-full mb-2 w-48 bg-navy-800 p-3 rounded-lg shadow-lg transition-all duration-300 ${
              activePoint === point.id
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-2 pointer-events-none"
            }`}
          >
            <div className="font-bold text-white">{point.title}</div>
            <div className="text-xs text-purple-400 mb-1">{point.year}</div>
            <div className="text-sm text-gray-300">{point.description}</div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-navy-800/80 p-2 rounded-lg">
        <div className="text-xs font-semibold mb-1 text-white">Journey Legend</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-xs text-gray-300">Education</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span className="text-xs text-gray-300">Work</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-300">Achievements</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-xs text-gray-300">Personal</span>
          </div>
        </div>
      </div>
    </div>
  )
}
