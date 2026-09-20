'use client'
import { ArrowRight, Download } from "lucide-react";

export default function HeroSection(){
    return (
        <>
        <section id="hero" className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <div className="gradient-text">
              Horipriya Das Arpita
            </div>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-muted-foreground">AI Engineer</h2>
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            I build AI systems that actually ship — retrieval pipelines, fine-tuned language
            models, and full-stack apps powered by LLMs. Currently an AI R&amp;D Engineer at Sigmoix AI.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="glow-button">
              <a href="#projects" className="glow-button-content inline-flex items-center gap-2">
                View My Work <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="glow-button">
              <a href="/Horipriya-Arpita-CV.pdf" download="Horipriya-Arpita-CV.pdf" className="glow-button-content inline-flex items-center gap-2">
                Download CV <Download className="h-4 w-4" />
              </a>
            </div>
            <div className="glow-button">
              <a href="#contact" className="glow-button-content">
                Contact Me
              </a>
            </div>

          </div>
        </div>
      </section>
        </>
    )
}