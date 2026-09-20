"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Palette, Music } from "lucide-react"
import Image from "next/image"

interface ArtworkItem {
  title: string
  description: string
  imageUrl: string
  date: string
}

interface MusicItem {
  title: string
  artist?: string
  type: "cover" | "original"
  embedUrl?: string
  description: string
}

export default function HobbyShowcase() {
  const [activeTab, setActiveTab] = useState("artwork")

  const artworks: ArtworkItem[] = [
    {
      title: "Abstract Cityscape",
      description: "Digital painting exploring urban landscapes with vibrant colors.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "June 2023",
    },
    {
      title: "Portrait Study",
      description: "Charcoal portrait focusing on light and shadow.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "March 2023",
    },
    {
      title: "Nature Series",
      description: "Watercolor paintings of natural landscapes.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "January 2023",
    },
    {
      title: "Digital Concept Art",
      description: "Concept art for a personal game project.",
      imageUrl: "/placeholder.svg?height=400&width=600",
      date: "November 2022",
    },
  ]

  const musicItems: MusicItem[] = [
    {
      title: "Acoustic Cover - 'Hallelujah'",
      artist: "Leonard Cohen",
      type: "cover",
      description: "My acoustic guitar cover of this beautiful classic.",
    },
    {
      title: "Original Composition - 'Midnight Thoughts'",
      type: "original",
      description: "An original piano piece composed during late night inspiration.",
    },
    {
      title: "Vocal Cover - 'Someone Like You'",
      artist: "Adele",
      type: "cover",
      description: "Vocal cover with minimal accompaniment.",
    },
    {
      title: "Original Song - 'Rainy Day Memories'",
      type: "original",
      description: "Original song written and performed with acoustic guitar.",
    },
  ]

  return (
    <div className="bg-navy-900/50 rounded-lg border border-navy-800 p-6">
      <Tabs defaultValue="artwork" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="artwork" 
          onClick={() => {
            setActiveTab("artwork")
            console.log(activeTab);
          }} 
            className="flex items-center gap-2">
            <Palette className="h-4 w-4" />
            <span>Artwork</span>
          </TabsTrigger>
          <TabsTrigger value="music" 
          onClick={() => {
            setActiveTab("music")
            console.log(activeTab);
          }}
          className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            <span>Music</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="artwork" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {artworks.map((artwork, index) => (
              <div
                key={index}
                className="bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-purple-500/30 transition-all duration-300"
              >
                <Image
                  src={artwork.imageUrl || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-lg font-semibold mb-1">{artwork.title}</h4>
                  <p className="text-sm text-gray-400 mb-2">{artwork.date}</p>
                  <p className="text-gray-300">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="music" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {musicItems.map((music, index) => (
              <div
                key={index}
                className="bg-navy-800 rounded-lg overflow-hidden border border-navy-700 hover:border-purple-500/30 transition-all duration-300 p-4"
              >
                <div className="flex items-center justify-center h-32 mb-4 bg-navy-900 rounded-lg">
                  <Music className="h-12 w-12 text-purple-500/70" />
                </div>
                <h4 className="text-lg font-semibold mb-1">{music.title}</h4>
                {music.artist && <p className="text-sm text-purple-400 mb-2">Original by {music.artist}</p>}
                <div className="flex items-center mb-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      music.type === "original" ? "bg-green-500/20 text-green-400" : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {music.type === "original" ? "Original Composition" : "Cover"}
                  </span>
                </div>
                <p className="text-gray-300">{music.description}</p>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
