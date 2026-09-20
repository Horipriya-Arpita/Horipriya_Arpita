
"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { MessageSquare, Send, X } from "lucide-react"
import { Button } from "@mui/material"

type Message = {
  id: number
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      content: "Hi there! I'm Arpita’s AI assistant. How can I help you learn more about Arpita?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const sendingRef = useRef(false)

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Close chat when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".floating-chat-button")
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen])

  const handleSendMessage = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault()

    // Synchronous guard: Enter can fire both onKeyDown and the form's
    // native submit in the same tick — this ensures we send exactly once.
    if (!input.trim() || sendingRef.current) return
    sendingRef.current = true

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Send message to API route
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input, history: messages }),
      })

      if (!response.ok) {
        throw new Error("Failed to get bot response")
      }

      const data = await response.json()
      const botMessage: Message = {
        id: messages.length + 2,
        content: data.response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error fetching bot response:", error)
      const errorMessage: Message = {
        id: messages.length + 2,
        content: "Sorry, something went wrong. Please try again.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
      sendingRef.current = false
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="floating-chat-button fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#4361ee] to-[#22d3ee] hover:opacity-90 transition text-white rounded-full p-4 shadow-lg transition-all duration-300 flex items-center justify-center"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat modal */}
      {isOpen && (
        <div
          ref={chatContainerRef}
          className="glow-border !fixed bottom-24 right-6 z-40 w-full max-w-[350px] sm:max-w-[400px] shadow-xl transition-all duration-300 flex flex-col"
          style={{ maxHeight: "calc(100vh - 120px)" }}
        >
          <div className="glow-border-content bg-navy-900/95 rounded-lg flex flex-col h-full">
          {/* Chat header */}
          <div className="p-4 border-b border-navy-800 flex items-center justify-between">
            <h3 className="font-semibold text-white">Chat with Arpita’s Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-purple-600 text-white rounded-tr-none"
                      : "bg-navy-800 text-white rounded-tl-none"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-navy-800 text-white rounded-lg rounded-tl-none p-3">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat input */}
          <form onSubmit={handleSendMessage} className="p-3 border-t border-navy-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  handleSendMessage(e)
                }
              }}
              placeholder="Ask me anything about Arpita..."
              className="flex-1 px-3 py-2 bg-navy-800 border border-navy-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/50 text-white text-sm"
            />
            <Button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-2"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          </div>
        </div>
      )}
    </>
  )
}