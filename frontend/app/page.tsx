"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Upload, Send, X, ImageIcon, Sparkles, Loader2 } from "lucide-react";
import { Navigation } from "@/components/navigation";
import { generateMarketingContent } from "@/lib/api";

type BotMessage = {
  id: number;
  type: "bot";
  content: string;
  image?: string;
  productIdea?: string;
};
type UserMessage = {
  id: number;
  type: "user";
  content: string;
  image?: string;
};
type Message = BotMessage | UserMessage;

export default function ProductAnalysisLanding() {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "bot" as const,
      content:
        "Ready to drop your product and launch its story? Share your product idea and I'll craft the complete launch narrative - from market positioning to viral storytelling that turns your launch into a movement!",
    },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Animation states
  const [showChatbot, setShowChatbot] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show chatbot when user scrolls down about 50% of viewport height
      if (scrollY > windowHeight * 0.5) {
        setShowChatbot(true);
      }
    };

    // Trigger hero animation on mount
    const timer = setTimeout(() => setHeroVisible(true), 100);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleSendMessage = async () => {
    if (!message.trim() && !selectedImage) return;
    if (isGenerating) return;

    const newMessage = {
      id: messages.length + 1,
      type: "user" as const,
      content: message,
      image: selectedImage ? URL.createObjectURL(selectedImage) : undefined,
    };

    setMessages([...messages, newMessage]);

    // Store product idea for later use
    const productIdea = message.trim();
    setMessage("");
    setSelectedImage(null);
    setIsGenerating(true);

    try {
      // Try to generate actual marketing content
      const marketingContent = await generateMarketingContent({
        product_name: productIdea,
        description: "",
        target_audience: "",
        industry: "",
      });

      // Success response with real data preview
      const aiResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: `🚀 **LAUNCH STORY GENERATED FOR "${productIdea}"**

**✨ Your AI-Generated Marketing Package:**

🎯 **Slogans Created**: ${marketingContent.slogans.length} catchy taglines
📢 **Campaign Messages**: ${marketingContent.campaign_messages.length} strategic approaches  
📱 **Social Posts**: ${marketingContent.social_media_posts.length} ready-to-publish posts

**🔥 Sample Preview:**
• **Top Slogan**: "${marketingContent.slogans[0]}"
• **Key Message**: "${marketingContent.campaign_messages[0]?.title}: ${marketingContent.campaign_messages[0]?.message.substring(0, 100)}..."
• **Social Ready**: ${marketingContent.social_media_posts.length} posts for Instagram, Twitter, LinkedIn & more

**📈 Complete Package Includes:**
• Professional slogans & taglines
• Strategic campaign messages (Problem-Solution, Social Proof, Emotional Appeal, Urgency)
• Platform-optimized social media content
• Copy-ready marketing materials

Ready to launch your product story? Your complete marketing arsenal is waiting!`,
        productIdea: productIdea,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } catch (error) {
      console.error("Failed to generate marketing content:", error);
      
      // Fallback response
      const aiResponse = {
        id: messages.length + 2,
        type: "bot" as const,
        content: `🚀 **LAUNCH STORY INITIATED FOR "${productIdea}"**

**🎯 Your Launch Narrative:**
📖 **The Story**: From problem to breakthrough - "${productIdea}" isn't just a product, it's the hero of your customer's journey
🎬 **The Hook**: "What if I told you that ${productIdea} could change everything you thought you knew about [category]?"
⚡ **The Drop**: Strategic launch sequence designed to create anticipation, exclusivity, and viral momentum

**🔥 Launch Campaign Highlights:**
• **Pre-Launch Teasers**: Build mystery and anticipation
• **Hero Story**: Position your product as the solution everyone's been waiting for
• **Social Proof Pipeline**: Turn early adopters into story ambassadors
• **Viral Launch Hooks**: Shareable moments that amplify your story
• **Community Building**: Create a movement, not just customers

**📱 Story-Driven Content:**
• **Launch Announcement Posts**: Multi-platform story rollout
• **Behind-the-Scenes**: The journey that led to this breakthrough
• **Customer Hero Stories**: Real transformations, real impact
• **Countdown Campaigns**: Building anticipation for the big drop

Ready to turn your product drop into a legendary launch story? Click "Launch Full Story" to see your complete narrative strategy!`,
        productIdea: productIdea,
      };
      setMessages((prev) => [...prev, aiResponse]);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div
      className="min-h-screen bg-background font-sans scroll-smooth"
      style={{ fontFamily: '"UberMove", "Helvetica Neue", Arial, sans-serif' }}
    >
      <Navigation />

      {/* Hero Section */}
      <section className="py-16 px-4 min-h-screen flex items-center">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge
            variant="secondary"
            className={`mb-6 transition-all duration-1000 delay-300 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            AI-Powered Product Launch
          </Badge>

          {/* Big MarketMind Title */}
          <div className="mb-8">
            <h1
              className={`text-6xl md:text-8xl font-black text-foreground mb-4 tracking-tight transition-all duration-1000 delay-500 ${
                heroVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                MarketMind
              </span>
            </h1>
            <div
              className={`w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto mb-6 transition-all duration-1000 delay-700 ${
                heroVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
            ></div>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance transition-all duration-1000 delay-900 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Drop the product. Launch the story.
          </h2>
          <p
            className={`text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto transition-all duration-1000 delay-1100 ${
              heroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            All-in-one platform for market insights, product reports, branding
            strategies, customer dashboards, and creator outreach.
          </p>
        </div>
      </section>

      {/* Chat Interface - Now directly on the page */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card
            className={`h-[700px] flex flex-col transition-all duration-1000 ease-out ${
              showChatbot
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 flex-shrink-0">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  MarketMind Launch Strategist
                </CardTitle>
                <CardDescription>
                  Share your product idea and craft its legendary launch story
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0">
              <div
                className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1 scroll-smooth"
                style={{ scrollbarWidth: "thin" }}
              >
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.type === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-lg px-4 py-2 break-words overflow-hidden ${
                        msg.type === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
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
                            onClick={() =>
                              router.push(
                                `/results?product=${encodeURIComponent(
                                  msg.productIdea!
                                )}`
                              )
                            }
                            className="text-xs bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md dark:hover:shadow-primary/20 transition-all duration-200"
                          >
                            Launch Full Story →
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
                    <span className="text-sm text-muted-foreground flex-1 truncate">
                      {selectedImage.name}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                )}

                <div className="flex gap-2">
                  <Textarea
                    placeholder="Describe your product idea for launch..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="flex-1 min-h-[80px] max-h-[120px] resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
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
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSendMessage}
                      disabled={(!message.trim() && !selectedImage) || isGenerating}
                    >
                      {isGenerating ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
