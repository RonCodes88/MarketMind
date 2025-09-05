"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Results() {
  const searchParams = useSearchParams();
  const productIdea = searchParams.get("product") || "Your Product";
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());

  const copyToClipboard = async (text: string, itemId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItems((prev) => new Set(prev).add(itemId));
      setTimeout(() => {
        setCopiedItems((prev) => {
          const newSet = new Set(prev);
          newSet.delete(itemId);
          return newSet;
        });
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const slogans = [
    `${productIdea} - Revolutionizing Your Experience`,
    `The Future is Here with ${productIdea}`,
    `${productIdea}: Where Innovation Meets Excellence`,
    `Discover the Power of ${productIdea}`,
    `${productIdea} - Beyond Your Expectations`,
    `Transform Your World with ${productIdea}`,
    `${productIdea}: The Smart Choice`,
    `Unleash Potential with ${productIdea}`,
  ];

  const campaignMessages = {
    "Problem-Solution": [
      `Tired of outdated solutions? ${productIdea} solves what others can't.`,
      `The problem everyone faces, ${productIdea} is the answer everyone needs.`,
      `Why settle for less when ${productIdea} delivers more?`,
    ],
    "Social Proof": [
      `Join thousands who've already transformed their experience with ${productIdea}.`,
      `"${productIdea} changed everything for me" - Sarah M., Verified Customer`,
      `Rated #1 by industry experts and loved by users worldwide.`,
    ],
    "Emotional Appeal": [
      `Feel the difference ${productIdea} makes in your daily life.`,
      `Experience the joy of having ${productIdea} by your side.`,
      `${productIdea} - because you deserve the best.`,
    ],
    "Urgency & Scarcity": [
      `Limited time offer: Get ${productIdea} before it's gone!`,
      `Only 100 units of ${productIdea} left - secure yours now!`,
      `Early bird special: ${productIdea} at an unbeatable price!`,
    ],
  };

  const socialMediaPosts = {
    Instagram: [
      `✨ Just discovered ${productIdea} and I'm obsessed! 😍 Who else needs this in their life? #${productIdea.replace(
        /\s+/g,
        ""
      )} #GameChanger #MustHave`,
      `📸 Behind the scenes with ${productIdea} - the results speak for themselves! 💯 #Innovation #${productIdea.replace(
        /\s+/g,
        ""
      )} #Results`,
      `🔥 Hot take: ${productIdea} is about to change everything. You heard it here first! 🚀 #Trending #${productIdea.replace(
        /\s+/g,
        ""
      )}`,
    ],
    Twitter: [
      `🧵 Thread: Why ${productIdea} is the game-changer we've all been waiting for 👇`,
      `Hot take: If you're not using ${productIdea} yet, you're missing out big time 🔥`,
      `${productIdea} just dropped and it's exactly what we needed. The future is here! 🚀`,
    ],
    LinkedIn: [
      `Excited to share my experience with ${productIdea}. Here's how it's transforming our industry approach:`,
      `Professional insight: ${productIdea} represents a significant advancement in our field. Here's my analysis:`,
      `Case study: How ${productIdea} delivered 300% ROI for our team in just 30 days.`,
    ],
    TikTok: [
      `POV: You discover ${productIdea} and your life changes forever 🤯 #${productIdea.replace(
        /\s+/g,
        ""
      )} #LifeHack #Viral`,
      `Trying ${productIdea} for the first time... the results are INSANE! 😱 #${productIdea.replace(
        /\s+/g,
        ""
      )} #MindBlown`,
      `Rating ${productIdea} features until I find the best one ⭐ #${productIdea.replace(
        /\s+/g,
        ""
      )} #Review`,
    ],
  };

  return (
    <div
      className="min-h-screen bg-background font-sans"
      style={{ fontFamily: '"UberMove", "Helvetica Neue", Arial, sans-serif' }}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Chat
            </Button>
          </Link>

          <div className="text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Complete Marketing Package
            </Badge>
            <h1 className="text-4xl font-bold mb-2">Marketing Results for</h1>
            <h2 className="text-5xl font-black bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent mb-6">
              {productIdea}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your comprehensive marketing toolkit with copy-ready slogans,
              campaign messages, and social media content.
            </p>
          </div>
        </div>

        <div className="grid gap-8">
          {/* Slogans Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Catchy Slogans & Taglines
                <Badge variant="outline">{slogans.length} options</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {slogans.map((slogan, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg border hover:bg-muted/70 hover:border-border dark:hover:bg-muted/40 transition-all duration-200"
                  >
                    <span className="font-medium">{slogan}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(slogan, `slogan-${index}`)}
                      className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors"
                    >
                      {copiedItems.has(`slogan-${index}`) ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Campaign Messages Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📢 Campaign Message Strategies
                <Badge variant="outline">4 approaches</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(campaignMessages).map(
                  ([category, messages]) => (
                    <div key={category}>
                      <h3 className="font-semibold text-lg mb-3 text-primary">
                        {category}
                      </h3>
                      <div className="grid gap-2">
                        {messages.map((message, index) => (
                          <div
                            key={index}
                            className="flex items-start justify-between p-3 bg-muted/30 rounded-lg border hover:bg-muted/50 hover:border-border dark:hover:bg-muted/20 transition-all duration-200"
                          >
                            <span className="flex-1">{message}</span>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() =>
                                copyToClipboard(
                                  message,
                                  `campaign-${category}-${index}`
                                )
                              }
                              className="hover:bg-accent/20 hover:text-accent-foreground dark:hover:bg-accent/10 transition-colors"
                            >
                              {copiedItems.has(
                                `campaign-${category}-${index}`
                              ) ? (
                                <Check className="w-4 h-4 text-green-500" />
                              ) : (
                                <Copy className="w-4 h-4" />
                              )}
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>

          {/* Social Media Posts Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📱 Social Media Content
                <Badge variant="outline">Ready-to-post content</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(socialMediaPosts).map(([platform, posts]) => (
                  <div key={platform}>
                    <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <span className="text-primary">{platform}</span>
                      <Badge variant="secondary">{posts.length} posts</Badge>
                    </h3>
                    <div className="grid gap-3">
                      {posts.map((post, index) => (
                        <div
                          key={index}
                          className="flex items-start justify-between p-4 border rounded-lg hover:bg-muted/30 hover:border-primary/20 dark:hover:bg-muted/20 dark:hover:border-primary/30 transition-all duration-200"
                        >
                          <span className="flex-1 whitespace-pre-line">
                            {post}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              copyToClipboard(
                                post,
                                `social-${platform}-${index}`
                              )
                            }
                            className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent dark:hover:text-accent-foreground transition-colors"
                          >
                            {copiedItems.has(`social-${platform}-${index}`) ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Copy All Section */}
          <Card className="border-primary/20">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Need everything at once?
                </h3>
                <Button
                  size="lg"
                  onClick={() => {
                    const allContent = [
                      "SLOGANS & TAGLINES:",
                      ...slogans,
                      "\n\nCAMPAIGN MESSAGES:",
                      ...Object.entries(campaignMessages).flatMap(
                        ([category, messages]) => [
                          `\n${category}:`,
                          ...messages,
                        ]
                      ),
                      "\n\nSOCIAL MEDIA POSTS:",
                      ...Object.entries(socialMediaPosts).flatMap(
                        ([platform, posts]) => [`\n${platform}:`, ...posts]
                      ),
                    ].join("\n");
                    copyToClipboard(allContent, "all-content");
                  }}
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 dark:from-primary dark:to-purple-600 dark:hover:from-primary/80 dark:hover:to-purple-600/80 transition-all duration-200 hover:shadow-lg dark:hover:shadow-primary/20"
                >
                  {copiedItems.has("all-content") ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied All Content!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy All Marketing Content
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
