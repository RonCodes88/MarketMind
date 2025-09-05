"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowLeft, Copy, Check, MessageSquare, ChevronDown, ChevronUp } from "lucide-react"
import { useState, useEffect, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [copiedSlogan, setCopiedSlogan] = useState<number | null>(null)
  const [copiedMessage, setCopiedMessage] = useState<number | null>(null)
  const [copiedSocialPost, setCopiedSocialPost] = useState<number | null>(null)
  const [visibleSection, setVisibleSection] = useState<number>(0)
  const [expandedCards, setExpandedCards] = useState<{
    slogans: boolean
    messages: boolean
    posts: boolean
  }>({
    slogans: true,
    messages: true,
    posts: true
  })
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])
  const contentRefs = useRef<{
    slogans: HTMLDivElement | null
    messages: HTMLDivElement | null
    posts: HTMLDivElement | null
  }>({
    slogans: null,
    messages: null,
    posts: null
  })
  const [contentHeights, setContentHeights] = useState<{
    slogans: number
    messages: number
    posts: number
  }>({
    slogans: 0,
    messages: 0,
    posts: 0
  })
  const productIdea = searchParams.get("product") || "Unknown Product"

  // Generate mock marketing suggestions based on the product
  const generateSlogans = (product: string) => [
    `${product} - Revolutionizing Your Experience`,
    `The Future is Here with ${product}`,
    `${product}: Where Innovation Meets Excellence`,
    `Transform Your Life with ${product}`,
    `${product} - Simply Better, Simply Smarter`
  ]

  const generateCampaignMessages = (product: string) => [
    {
      title: "Problem-Solution Focus",
      message: `Tired of outdated solutions? ${product} brings cutting-edge technology to solve your everyday challenges. Experience the difference innovation makes.`
    },
    {
      title: "Social Proof",
      message: `Join thousands of satisfied customers who have already discovered the power of ${product}. Don't get left behind – be part of the revolution.`
    },
    {
      title: "Emotional Appeal",
      message: `Imagine a world where your daily tasks become effortless. ${product} doesn't just promise change – it delivers transformation that you'll feel from day one.`
    },
    {
      title: "Urgency & Scarcity",
      message: `Limited time offer: Be among the first to experience ${product}. Early adopters get exclusive benefits and priority support. Act now before it's too late.`
    },
    {
      title: "Value Proposition",
      message: `Why settle for ordinary when you can have extraordinary? ${product} combines premium quality with unbeatable value, giving you more for less.`
    }
  ]

  const generateSocialMediaPosts = (product: string) => [
    {
      platform: "Instagram",
      post: `✨ Meet ${product} - the game-changer you've been waiting for! 🚀\n\nSwipe to see how it's transforming lives daily 👉\n\n#${product.replace(/\s+/g, '')} #Innovation #GameChanger #TechLife`,
      type: "Visual Story"
    },
    {
      platform: "Twitter/X",
      post: `🔥 Hot take: ${product} is about to change everything.\n\nWhat took hours now takes minutes. What seemed impossible is now effortless.\n\nThe future is here. 🚀\n\n#${product.replace(/\s+/g, '')} #ProductLaunch`,
      type: "Viral Tweet"
    },
    {
      platform: "LinkedIn",
      post: `I've been testing ${product} for the past month, and the results speak for themselves.\n\n• 3x faster workflow\n• 50% less manual work\n• Seamless integration\n\nThis isn't just another product—it's a paradigm shift.\n\nWhat productivity challenges are you facing that ${product} could solve?\n\n#ProductivityHack #Innovation #${product.replace(/\s+/g, '')}`,
      type: "Professional Insight"
    },
    {
      platform: "TikTok",
      post: `POV: You discover ${product} and your life gets 10x easier 😱\n\n*Shows before vs after scenarios*\n\nWait for the plot twist at the end! 🤯\n\n#${product.replace(/\s+/g, '')}Check #LifeHack #ProductReview #GameChanger`,
      type: "Viral Video"
    },
    {
      platform: "Facebook",
      post: `🎯 Calling all [target audience]!\n\nTired of [common pain point]? ${product} has your back!\n\n✅ Easy to use\n✅ Proven results\n✅ Money-back guarantee\n\nOver 1,000 happy customers can't be wrong. Join the ${product} family today!\n\n👇 Comment 'INTERESTED' for early access`,
      type: "Community Engagement"
    }
  ]

  const slogans = generateSlogans(productIdea)
  const campaignMessages = generateCampaignMessages(productIdea)
  const socialMediaPosts = generateSocialMediaPosts(productIdea)

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setVisibleSection(index)
          }
        },
        { 
          threshold: [0.1, 0.3, 0.5, 0.7],
          rootMargin: '-20% 0px -20% 0px'
        }
      )
      
      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [])

  // Calculate content heights for smooth animations
  useEffect(() => {
    const calculateHeights = () => {
      Object.keys(contentRefs.current).forEach((key) => {
        const ref = contentRefs.current[key as keyof typeof contentRefs.current]
        if (ref) {
          const height = ref.scrollHeight
          setContentHeights(prev => ({
            ...prev,
            [key]: height
          }))
        }
      })
    }

    // Calculate heights after initial render and when content changes
    const timeoutId = setTimeout(calculateHeights, 100)
    return () => clearTimeout(timeoutId)
  }, [slogans, campaignMessages, socialMediaPosts])

  // Recalculate heights on window resize
  useEffect(() => {
    const handleResize = () => {
      Object.keys(contentRefs.current).forEach((key) => {
        const ref = contentRefs.current[key as keyof typeof contentRefs.current]
        if (ref) {
          const height = ref.scrollHeight
          setContentHeights(prev => ({
            ...prev,
            [key]: height
          }))
        }
      })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const copyToClipboard = async (text: string, type: 'slogan' | 'message' | 'social', index: number) => {
    try {
      await navigator.clipboard.writeText(text)
      if (type === 'slogan') {
        setCopiedSlogan(index)
        setTimeout(() => setCopiedSlogan(null), 2000)
      } else if (type === 'message') {
        setCopiedMessage(index)
        setTimeout(() => setCopiedMessage(null), 2000)
      } else if (type === 'social') {
        setCopiedSocialPost(index)
        setTimeout(() => setCopiedSocialPost(null), 2000)
      }
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }

  const toggleCard = useCallback((cardType: 'slogans' | 'messages' | 'posts') => {
    setExpandedCards(prev => ({
      ...prev,
      [cardType]: !prev[cardType]
    }))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">MarketMind</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* Back to Chat Button */}
      <div className="container mx-auto px-4 py-2">
        <Button variant="outline" size="sm" onClick={() => router.push('/')}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Chat
        </Button>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Product Info */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4">
            Marketing Suggestions Generated
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Marketing Ideas for <span className="text-primary">{productIdea}</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Here are AI-generated marketing suggestions to help promote your product effectively
          </p>
        </div>

        <div className="space-y-8">
          {/* Slogans Section */}
          <Card>
            <CardHeader 
              className="cursor-pointer transition-colors duration-200"
              onClick={() => toggleCard('slogans')}
            >
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Catchy Slogans
                </div>
                <div className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.slogans ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardTitle>
              <CardDescription>
                Memorable taglines that capture your product's essence
              </CardDescription>
            </CardHeader>
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                height: expandedCards.slogans ? `${contentHeights.slogans}px` : '0px',
                opacity: expandedCards.slogans ? 1 : 0
              }}
            >
              <CardContent 
                ref={(el) => { contentRefs.current.slogans = el }}
                className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.slogans ? 'translate-y-0' : '-translate-y-4'
                }`}
              >
                <div className="space-y-4">
                  {slogans.map((slogan, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-4 bg-muted/50 rounded-lg border transition-all duration-300 ease-in-out ${
                        expandedCards.slogans 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-2'
                      }`}
                      style={{
                        transitionDelay: expandedCards.slogans ? `${index * 50}ms` : '0ms'
                      }}
                    >
                      <p className="font-medium text-foreground flex-1">{slogan}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(slogan, 'slogan', index)}
                        className="ml-2 shrink-0"
                      >
                        {copiedSlogan === index ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Campaign Messages Section */}
          <Card>
            <CardHeader 
              className="cursor-pointer transition-colors duration-200"
              onClick={() => toggleCard('messages')}
            >
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Campaign Messages
                </div>
                <div className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.messages ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardTitle>
              <CardDescription>
                Compelling messages for different marketing strategies
              </CardDescription>
            </CardHeader>
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                height: expandedCards.messages ? `${contentHeights.messages}px` : '0px',
                opacity: expandedCards.messages ? 1 : 0
              }}
            >
              <CardContent 
                ref={(el) => { contentRefs.current.messages = el }}
                className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.messages ? 'translate-y-0' : '-translate-y-4'
                }`}
              >
                <div className="space-y-6">
                  {campaignMessages.map((campaign, index) => (
                    <div 
                      key={index} 
                      className={`space-y-2 transition-all duration-300 ease-in-out ${
                        expandedCards.messages 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-2'
                      }`}
                      style={{
                        transitionDelay: expandedCards.messages ? `${index * 75}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-sm text-primary">{campaign.title}</h4>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(campaign.message, 'message', index)}
                          className="shrink-0"
                        >
                          {copiedMessage === index ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed p-3 bg-muted/30 rounded-md border">
                        {campaign.message}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Social Media Posts Section */}
          <Card>
            <CardHeader 
              className="cursor-pointer transition-colors duration-200"
              onClick={() => toggleCard('posts')}
            >
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  Social Media Posts
                </div>
                <div className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.posts ? 'rotate-180' : 'rotate-0'
                }`}>
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                </div>
              </CardTitle>
              <CardDescription>
                Ready-to-use posts for different social platforms
              </CardDescription>
            </CardHeader>
            <div 
              className="overflow-hidden transition-all duration-500 ease-in-out"
              style={{
                height: expandedCards.posts ? `${contentHeights.posts}px` : '0px',
                opacity: expandedCards.posts ? 1 : 0
              }}
            >
              <CardContent 
                ref={(el) => { contentRefs.current.posts = el }}
                className={`transition-all duration-300 ease-in-out transform ${
                  expandedCards.posts ? 'translate-y-0' : '-translate-y-4'
                }`}
              >
                <div className="space-y-6">
                  {socialMediaPosts.map((post, index) => (
                    <div 
                      key={index} 
                      className={`space-y-2 transition-all duration-300 ease-in-out ${
                        expandedCards.posts 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-2'
                      }`}
                      style={{
                        transitionDelay: expandedCards.posts ? `${index * 60}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-sm text-primary">{post.platform}</h4>
                          <Badge variant="outline" className="text-xs">{post.type}</Badge>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(post.post, 'social', index)}
                          className="shrink-0"
                        >
                          {copiedSocialPost === index ? (
                            <Check className="w-4 h-4 text-green-500" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed p-3 bg-muted/30 rounded-md border whitespace-pre-line">
                        {post.post}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <div className="space-x-4">
            <Button onClick={() => router.push('/')} variant="outline">
              Try Another Product
            </Button>
            <Button onClick={() => window.print()} variant="default">
              Save Results
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
