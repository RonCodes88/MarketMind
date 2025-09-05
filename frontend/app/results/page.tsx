"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Check, ArrowLeft, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link";
import { generateMarketingContent, MarketingResponse, CampaignMessage, SocialMediaPost } from "@/lib/api";

export default function Results() {
  const searchParams = useSearchParams();
  const productIdea = searchParams.get("product") || "Your Product";
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [marketingData, setMarketingData] = useState<MarketingResponse | null>(null);

  // Fallback dummy data (same as before, but organized better)
  const fallbackData = {
    slogans: [
      `${productIdea} - Revolutionizing Your Experience`,
      `The Future is Here with ${productIdea}`,
      `${productIdea}: Where Innovation Meets Excellence`,
      `Discover the Power of ${productIdea}`,
      `${productIdea} - Beyond Your Expectations`,
      `Transform Your World with ${productIdea}`,
      `${productIdea}: The Smart Choice`,
      `Unleash Potential with ${productIdea}`,
    ],
    campaignMessages: [
      {
        title: "Problem-Solution Focus",
        message: `Tired of outdated solutions? ${productIdea} solves what others can't. Experience the difference innovation makes.`,
      },
      {
        title: "Social Proof", 
        message: `Join thousands who've already transformed their experience with ${productIdea}. Don't get left behind – be part of the revolution.`,
      },
      {
        title: "Emotional Appeal",
        message: `Imagine a world where your daily tasks become effortless. ${productIdea} doesn't just promise change – it delivers transformation that you'll feel from day one.`,
      },
      {
        title: "Urgency & Scarcity",
        message: `Limited time offer: Be among the first to experience ${productIdea}. Early adopters get exclusive benefits and priority support. Act now before it's too late.`,
      },
      {
        title: "Value Proposition",
        message: `Why settle for ordinary when you can have extraordinary? ${productIdea} combines premium quality with unbeatable value, giving you more for less.`,
      },
    ],
    socialMediaPosts: [
      {
        platform: "Instagram",
        post: `✨ Just discovered ${productIdea} and I'm obsessed! 😍 Who else needs this in their life? #${productIdea.replace(
          /\s+/g,
          ""
        )} #GameChanger #MustHave`,
        type: "Visual Story",
      },
      {
        platform: "Twitter",
        post: `🔥 Hot take: ${productIdea} is about to change everything. You heard it here first! 🚀 #Trending #${productIdea.replace(
          /\s+/g,
          ""
        )}`,
        type: "Viral Tweet",
      },
      {
        platform: "LinkedIn",
        post: `Professional insight: ${productIdea} represents a significant advancement in our field. Here's my analysis of how it's transforming our industry approach.`,
        type: "Professional Insight",
      },
      {
        platform: "TikTok",
        post: `POV: You discover ${productIdea} and your life changes forever 🤯 #${productIdea.replace(
          /\s+/g,
          ""
        )} #LifeHack #Viral`,
        type: "Viral Video",
      },
      {
        platform: "Facebook",
        post: `🎯 Calling all innovators! Tired of the same old solutions? ${productIdea} has your back! ✅ Easy to use ✅ Proven results ✅ Money-back guarantee. Over 1,000 happy customers can't be wrong. Join the ${productIdea} family today!`,
        type: "Community Engagement",
      },
    ],
  };

  // Fetch marketing content on component mount
  useEffect(() => {
    const fetchMarketingContent = async () => {
      if (!productIdea || productIdea === "Your Product") {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        
        const response = await generateMarketingContent({
          product_name: productIdea,
          description: "",
          target_audience: "",
          industry: "",
        });
        
        setMarketingData(response);
      } catch (error) {
        console.error("Failed to fetch marketing content:", error);
        setError("Failed to generate marketing content. Using sample content.");
        // Don't set loading to false yet, we'll use fallback data
      } finally {
        setIsLoading(false);
      }
    };

    fetchMarketingContent();
  }, [productIdea]);

  // Get data to display (API response or fallback)
  const getDisplayData = () => {
    if (marketingData) {
      return {
        slogans: marketingData.slogans,
        campaignMessages: marketingData.campaign_messages,
        socialMediaPosts: marketingData.social_media_posts,
      };
    }
    return fallbackData;
  };

  const { slogans, campaignMessages, socialMediaPosts } = getDisplayData();

  // Group campaign messages by title for better display
  const groupedCampaignMessages = campaignMessages.reduce((acc: Record<string, string[]>, message: CampaignMessage) => {
    if (!acc[message.title]) {
      acc[message.title] = [];
    }
    acc[message.title].push(message.message);
    return acc;
  }, {});

  // Group social media posts by platform
  const groupedSocialPosts = socialMediaPosts.reduce((acc: Record<string, SocialMediaPost[]>, post: SocialMediaPost) => {
    if (!acc[post.platform]) {
      acc[post.platform] = [];
    }
    acc[post.platform].push(post);
    return acc;
  }, {});

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

  // Show loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background font-sans flex items-center justify-center" style={{ fontFamily: '"UberMove", "Helvetica Neue", Arial, sans-serif' }}>
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Generating Marketing Content</h2>
          <p className="text-muted-foreground">Creating your personalized marketing package...</p>
        </div>
      </div>
    );
  }

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
            {error && (
              <div className="mb-4">
                <Badge variant="destructive" className="mb-2">
                  {error}
                </Badge>
              </div>
            )}
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
                <Badge variant="outline">{Object.keys(groupedCampaignMessages).length} approaches</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {Object.entries(groupedCampaignMessages).map(
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
                {Object.entries(groupedSocialPosts).map(([platform, posts]) => (
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
                          <div className="flex-1">
                            <span className="whitespace-pre-line">
                              {post.post}
                            </span>
                            {post.type && (
                              <div className="mt-2">
                                <Badge variant="outline" className="text-xs">
                                  {post.type}
                                </Badge>
                              </div>
                            )}
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() =>
                              copyToClipboard(
                                post.post,
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
                      ...Object.entries(groupedCampaignMessages).flatMap(
                        ([category, messages]) => [
                          `\n${category}:`,
                          ...messages,
                        ]
                      ),
                      "\n\nSOCIAL MEDIA POSTS:",
                      ...Object.entries(groupedSocialPosts).flatMap(
                        ([platform, posts]) => [`\n${platform}:`, ...posts.map(p => p.post)]
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
