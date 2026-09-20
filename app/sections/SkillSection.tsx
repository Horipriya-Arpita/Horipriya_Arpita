"use client";

import {
  Brain,
  Code,
  Server,
  Database,
  type LucideIcon,
} from "lucide-react";

type SkillCategory = {
  key: string;
  label: string;
  icon: LucideIcon;
  featured?: boolean;
  skills: string[];
};

const categories: SkillCategory[] = [
  {
    key: "ai-ml",
    label: "AI / ML Engineering",
    icon: Brain,
    featured: true,
    skills: [
      "RAG & Retrieval",
      "LLM Fine-tuning (LoRA)",
      "Embeddings",
      "Agentic RAG",
      "LangChain.js",
      "Hugging Face",
      "Flowise",
      "OpenCV",
    ],
  },
  {
    key: "languages",
    label: "Languages",
    icon: Code,
    skills: ["Python", "JavaScript", "C", "C++", "Java", "SQL"],
  },
  {
    key: "web-backend",
    label: "Web & Backend",
    icon: Server,
    skills: ["React.js", "Next.js", "Node.js", "Express.js"],
  },
  {
    key: "data-tools",
    label: "Data & Tools",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Prisma",
      "Firebase",
      "Git",
      "GitHub",
      "Postman",
      "Shopify Polaris",
    ],
  },
];

function CategoryPanel({ category }: { category: SkillCategory }) {
  const Icon = category.icon;
  return (
    <div
      className={`glow-border transition-all duration-300 hover:-translate-y-1 ${
        category.featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="glow-border-content bg-card/70 h-full p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              {category.label}
            </h3>
          </div>
          {/* reasoning-trace style annotation */}
          <span className="font-mono text-xs text-muted-foreground/60">
            {`// ${category.key}`}
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-border bg-muted/60 px-3 py-1.5 text-sm text-foreground/90 transition-all duration-200 hover:border-primary hover:text-primary hover:bg-primary/5"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SkillSection() {
  return (
    <section id="skills" className="relative container mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Code className="h-8 w-8 text-primary" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Skills &amp; Technologies
          </h2>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          Grouped by what I reach for — AI engineering first
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {categories.map((category) => (
          <CategoryPanel key={category.key} category={category} />
        ))}
      </div>
    </section>
  );
}
