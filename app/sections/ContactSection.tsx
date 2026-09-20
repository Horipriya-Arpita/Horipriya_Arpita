'use client'
import { Mail } from "lucide-react";

export default function ContactSection(){
    return (
        <>
        <section id="contact" className="relative container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mail className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Get In Touch</h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Want to collaborate? Let&apos;s talk!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <p className="text-muted-foreground mb-6 text-base md:text-lg leading-relaxed">
              {`I'm`} always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out using the contact form or through my social media profiles.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <span>horipriya288@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 10.999c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10z" />
                  </svg>
                </div>
                <span>Sylhet, Bangladesh</span>
              </div>
            </div>
          </div>
          <div className="glow-border">
            <form className="glow-border-content space-y-6 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <div className="glow-input">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input rounded-md focus:outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <div className="glow-input">
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input rounded-md focus:outline-none text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <div className="glow-input">
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-input rounded-md focus:outline-none text-foreground placeholder:text-muted-foreground"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <div className="glow-input">
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-input rounded-md focus:outline-none text-foreground placeholder:text-muted-foreground resize-none"
                ></textarea>
              </div>
            </div>
            <div className="glow-button w-full">
              <button className="glow-button-content w-full">
                Send Message
              </button>
            </div>
          </form>
          </div>
        </div>
      </section>
        
        </>
    )
}