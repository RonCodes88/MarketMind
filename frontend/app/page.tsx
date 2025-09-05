"use client"

import type React from "react"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, Send, Sparkles, X, ImageIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

type BotMessage = { id: number; type: "bot"; content: string; image?: string; productIdea?: string }
type UserMessage = { id: number; type: "user"; content: string; image?: string }
type Message = BotMessage | UserMessage


export default function ProductAnalysisLanding() {
  const router = useRouter()
  const [message, setMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot" as const,
      content:
        "Hi! I'm your AI marketing assistant. Share your product idea and I'll instantly generate catchy slogans and campaign messaging strategies. You'll see a quick summary here, and can expand to view the full detailed results with copy-to-clipboard functionality!",
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
    
    // Store product idea for later use
    const productIdea = message.trim()
    setMessage("")
    setSelectedImage(null)

    // Show AI response with summary and expand button
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: `Great! I've analyzed "${productIdea}" and generated comprehensive marketing suggestions for you.

**Quick Summary:**
🎯 **Top Slogan Ideas:**
• "${productIdea} - Revolutionizing Your Experience"
• "The Future is Here with ${productIdea}"
• "${productIdea}: Where Innovation Meets Excellence"

📢 **Campaign Message Highlights:**
• Problem-solution focused messaging
• Social proof and testimonials approach  
• Emotional appeal strategies
• Urgency and scarcity tactics
• Clear value proposition messaging

📱 **Social Media Post Ideas:**
• Instagram visual stories with trending hashtags
• Twitter/X viral tweets for maximum engagement
• LinkedIn professional insights and case studies
• TikTok video concepts with trending sounds
• Facebook community engagement posts

Click "Expand Full Results" below to see detailed suggestions and copy all content!`,
        productIdea: productIdea // Store the product idea with the message
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
            <span className="text-xl font-bold text-foreground">MarketMind</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground dark:hover:text-white transition-colors">
              How it Works
            </a>
            <div className="flex items-center space-x-2">
              <ThemeToggle />
              <Button variant="outline" size="sm">
                Sign In
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            AI-Powered Product Analysis
          </Badge>
          
          {/* Big MarketMind Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                MarketMind
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Turn Your Product Ideas Into
            <span className="text-primary"> Market-Ready</span> Insights
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Get comprehensive market analysis, detailed product reports, and creative branding suggestions for any
            product idea in seconds.
          </p>
        </div>
      </section>

      {/* Chat Interface - Now directly on the page */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="h-[700px] flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 flex-shrink-0">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  MarketMind Assistant
                </CardTitle>
                <CardDescription>Share your product idea and get instant insights</CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-2 break-words overflow-hidden ${
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
                      <div className="text-sm leading-relaxed overflow-wrap-anywhere">
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>
                      {msg.type === "bot" && msg.productIdea && (
                        <div className="mt-3 pt-3 border-t border-muted-foreground/20">
                          <Button
                            size="sm"
                            onClick={() => router.push(`/results?product=${encodeURIComponent(msg.productIdea!)}`)}
                            className="text-xs bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md dark:hover:shadow-white/20"
                          >
                            Expand Full Results →
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 flex-shrink-0">
                {selectedImage && (
                  <div className="flex items-center gap-2 p-2 bg-muted rounded-lg">
                    <ImageIcon className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground flex-1 truncate">{selectedImage.name}</span>
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
                    className="flex-1 min-h-[80px] max-h-[120px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                  <div className="flex flex-col gap-2 flex-shrink-0">
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
