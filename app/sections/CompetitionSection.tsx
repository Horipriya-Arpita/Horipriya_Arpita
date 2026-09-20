"use client";
import CompetitionCard from "@/components/competition-card";
import { Award } from "lucide-react";

export default function CompetitionSection() {
  return (
    <>
      <section
        id="competitions"
        className="relative container mx-auto px-4 py-20"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Competitions</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Achievements & Participations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          <CompetitionCard
            title="ICPC Orbitax SUST SWE Technovent 2023"
            description="Participated in ICPC Orbitax SUST SWE Technovent Powered by DSI,
            Orbitax and Cefalo. I was a dedicated volunteer at this event."
          />
          <CompetitionCard
            title="National Girls' Programming Contest 2022"
            description="Participated in 6th National Girls' Programming Contest NGPC 2022
            hosted by Daffodil International University, Powered By BDosn, ICT
            Bangladesh."
          />

          <CompetitionCard
            title="Ada lovelace Programming Competition 2022"
            description="Participated in Ada lovelace Programming Competition 2022 hosted by
            University of Asia Pacific, Dhaka, organized by BDosn."
          />

          <CompetitionCard
            title="BdApps National Hackathon 2022"
            description="Participated in BdApps National Hackathon 2022 Regional Round in Sylhet,
            Organized by SWE Society, SUST, Powered by Robi. Our idea got short-listed
            among numerous teams."
          />
        </div>
      </section>
    </>
  );
}
