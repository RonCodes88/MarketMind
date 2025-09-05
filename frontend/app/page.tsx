"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, Send, Sparkles, X, ImageIcon } from "lucide-react"

type BotMessage = { id: number; type: "bot"; content: string, image?: string }
type UserMessage = { id: number; type: "user"; content: string; image?: string }
type Message = BotMessage | UserMessage


export default function ProductAnalysisLanding() {
  const [message, setMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot" as const,
      content:
        "Hi! I'm your AI product analyst. Share your product idea and I'll provide comprehensive market analysis, product reports, and branding suggestions. You can also upload an image of your product!",
    },
  ])
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleSendMessage = () => {
    if (!message.trim() && !selectedImage) return

    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      image: selectedImage ? URL.createObjectURL(selectedImage) : undefined,
    }

    setMessages([...messages, newMessage])
    setMessage("")
    setSelectedImage(null)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content:
          "Great! I'm analyzing your product idea. Here's what I found:\n\n📊 **Market Analysis**: Strong potential in the target demographic\n📋 **Product Report**: Competitive advantages identified\n🎨 **Branding Ideas**: 3 compelling slogans generated\n\nWould you like me to dive deeper into any specific area?",
      }
      setMessages((prev) => [...prev, aiResponse])
    }, 1500)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">ProductAI</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-4">
            AI-Powered Product Analysis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Turn Your Product Ideas Into
            <span className="text-primary"> Market-Ready</span> Insights
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Get comprehensive market analysis, detailed product reports, and creative branding suggestions for any
            product idea in seconds.
          </p>
        </div>
      </section>

      {/* Chat Interface - Now directly on the page */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="h-[600px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  ProductAI Assistant
                </CardTitle>
                <CardDescription>Share your product idea and get instant insights</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[80%] rounded-lg px-4 py-2 ${
                        msg.type === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {msg.image && (
                        <img
                          src={msg.image || "/placeholder.svg"}
                          alt="Uploaded product"
                          className="w-full max-w-xs rounded mb-2"
                        />
                      )}
                      <p className="whitespace-pre-line">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3">
                {selectedImage && (
                  <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground flex-1">{selectedImage.name}</span>
                    <Button variant="ghost" size="sm" onClick={() => setSelectedImage(null)}>
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                )}

                <div className="flex gap-2">
                  <Textarea
                    placeholder="Describe your product idea..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 min-h-[60px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <div className="flex flex-col gap-2">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <Button variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
                      <Upload className="w-4 h-4" />
                    </Button>
                    <Button size="sm" onClick={handleSendMessage} disabled={!message.trim() && !selectedImage}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  )
}
