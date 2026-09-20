'use client'
// import { Button } from "@mui/material";
import { Briefcase } from "lucide-react";
import WorkExperience from "@/components/work-experience";


export default function WorkSection(){
    return (
        <>
        <section id="work" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Briefcase className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Work Experience</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            My Professional Journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <WorkExperience
            company="Sigmoix AI"
            position="AI R&D Engineer, Intern"
            duration="Sep 2025 - Present"
            location="Remote"
            description={[
              "Developed large-scale web scraping pipelines to extract and structure product data (8K+ items) from e-commerce sites using Crawl4AI, Firecrawl, and Selenium.",
              "Implemented multi-threaded scraping with dynamic user-agent rotation, reducing data extraction time from 1 hour to ~30 minutes.",
              "Designed and optimized retrieval pipelines integrating BM25, FAISS, and Hybrid + Reranking strategies; achieved significant improvements in precision and response relevance.",
              "Fine-tuned Gemma 270M SLM using LoRA on 25K+ training examples for product search and query understanding.",
              "Built and evaluated embedding fine-tuning datasets (100K+ query–document pairs) with augmentation and hard negatives for retrieval optimization.",
              "Explored advanced RAG, Agentic RAG, and RAPTOR frameworks to enhance semantic retrieval and LLM-driven search performance.",
            ]}
          />

          <WorkExperience
            company="Luminous Lab"
            position="Software Engineer, Intern"
            duration="Dec 2024 - May 2025"
            location="Dhaka, Bangladesh"
            description={[
              "Built Shopify apps using Remix, Polaris, and Prisma, enabling user registration, referral systems, and seamless REST API integrations.",
              "Enhanced VoiceERP, developing Flowise-based AI voice workflows, Bangla conversational prompts, and optimizing calling-based AI interactions for natural dialogue.",
              "Migrated Flowise functionalities to LangChain.js, implementing custom LLM chains, RAG with ChromaDB and PDF knowledge-based Q&A APIs for contextual AI chat.",
              "Contributed to Beige and Carlo platforms by integrating frontend dashboards with backend APIs, ensuring smooth data flow and consistent UI behavior.",
            ]}
          />
        </div>
      </section>
        </>
    )
}