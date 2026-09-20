'use client'
import HobbyShowcase from "@/components/hobby-showcase";
// import { Button } from "@mui/material";
import { Heart } from "lucide-react";

export default function HobbiesSection(){
    return (
        <>
        <section id="hobbies" className="relative container mx-auto px-4 py-20">
        <div className="flex items-center gap-2 mb-6">
          <Heart className="h-5 w-5 text-purple-500" />
          <h2 className="text-2xl font-semibold">Creative Hobbies</h2>
        </div>
        <h3 className="text-3xl md:text-4xl font-bold mb-10">When {`I'm`} Not Coding</h3>

        <HobbyShowcase />
      </section>
        </>
    )
}