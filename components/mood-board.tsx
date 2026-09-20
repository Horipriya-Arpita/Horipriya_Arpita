"use client"

import Image from "next/image"

interface MoodItem {
    type: "image" | "color" | "text"
    content: string
    size?: "small" | "medium" | "large"
  }
  
  export default function MoodBoard() {
    const moodItems: MoodItem[] = [
      { type: "image", content: "/placeholder.svg?height=200&width=200", size: "medium" },
      { type: "color", content: "#8b5cf6", size: "small" },
      { type: "text", content: "Minimalist", size: "small" },
      { type: "image", content: "/placeholder.svg?height=150&width=150", size: "small" },
      { type: "color", content: "#3b82f6", size: "small" },
      { type: "text", content: "Creative", size: "medium" },
      { type: "image", content: "/placeholder.svg?height=250&width=250", size: "large" },
      { type: "color", content: "#ec4899", size: "medium" },
      { type: "text", content: "Innovative", size: "small" },
      { type: "image", content: "/placeholder.svg?height=180&width=180", size: "medium" },
      { type: "color", content: "#10b981", size: "small" },
      { type: "text", content: "Passionate", size: "medium" },
    ]
  
    const getSizeClasses = (size: string) => {
      switch (size) {
        case "small":
          return "col-span-1 row-span-1"
        case "medium":
          return "col-span-1 row-span-2"
        case "large":
          return "col-span-2 row-span-2"
        default:
          return "col-span-1 row-span-1"
      }
    }
  
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[100px] gap-4">
        {moodItems.map((item, index) => (
          <div
            key={index}
            className={`${getSizeClasses(item.size || "small")} rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
          >
            {item.type === "image" && (
              <Image src={item.content || "/placeholder.svg"} alt="Mood" className="w-full h-full object-cover" />
            )}
            {item.type === "color" && <div className="w-full h-full" style={{ backgroundColor: item.content }}></div>}
            {item.type === "text" && (
              <div className="w-full h-full bg-navy-800 flex items-center justify-center p-4">
                <span className="text-lg md:text-xl font-medium text-white">{item.content}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    )
  }
  