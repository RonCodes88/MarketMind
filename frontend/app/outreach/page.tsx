"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Instagram,
  Play,
  Mail,
  ExternalLink,
  Search,
  Heart,
  MessageCircle,
  Share,
  Eye,
  User,
  Calendar,
  MapPin,
  X,
  Send,
  Copy,
  CheckCircle,
  Filter,
  ArrowUpDown,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

// Mock products data (same as dashboard)
const userProducts = [
  {
    id: "eco-water-bottle",
    name: "EcoFlow Water Bottle",
    description: "Sustainable smart water bottle with temperature control",
    category: "Health & Fitness",
    image: "🍃",
    color: "bg-green-500",
  },
  {
    id: "ai-study-assistant",
    name: "StudyMind AI",
    description:
      "AI-powered study companion that creates personalized learning plans",
    category: "Education",
    image: "🧠",
    color: "bg-blue-500",
  },
  {
    id: "fitness-tracker-pro",
    name: "FitTracker Pro",
    description:
      "Advanced fitness tracking with AI-powered workout recommendations",
    category: "Health & Fitness",
    image: "💪",
    color: "bg-orange-500",
  },
  {
    id: "smart-garden",
    name: "GrowSmart Garden",
    description:
      "Automated indoor garden system with app-controlled environment",
    category: "Home & Garden",
    image: "🌱",
    color: "bg-emerald-500",
  },
  {
    id: "task-manager-app",
    name: "TaskFlow Pro",
    description:
      "Professional task management with team collaboration features",
    category: "Productivity",
    image: "📋",
    color: "bg-purple-500",
  },
  {
    id: "recipe-ai",
    name: "ChefAI Recipe Generator",
    description: "AI-powered recipe suggestions based on available ingredients",
    category: "Food & Drink",
    image: "👨‍🍳",
    color: "bg-red-500",
  },
];

// Mock creator data generator
const generateCreators = (productCategory: string, productName: string) => {
  const creatorsByCategory = {
    "Health & Fitness": [
      {
        id: 1,
        name: "FitnessGuru_Mike",
        platform: "instagram",
        followers: 245000,
        engagement: 4.2,
        avgViews: 12000,
        niche: "Fitness Equipment Reviews",
        location: "Los Angeles, CA",
        email: "collab@fitnessguru.com",
        recentPosts: 15,
        avatar: "💪",
        verified: true,
        priceRange: "$500-1500",
        demographics: { age: "25-34", gender: "60% Male, 40% Female" },
      },
      {
        id: 2,
        name: "HealthyLifestyle_Sarah",
        platform: "tiktok",
        followers: 180000,
        engagement: 6.8,
        avgViews: 25000,
        niche: "Wellness & Healthy Living",
        location: "New York, NY",
        email: "partnerships@sarahwellness.com",
        recentPosts: 23,
        avatar: "🌱",
        verified: true,
        priceRange: "$300-800",
        demographics: { age: "22-30", gender: "70% Female, 30% Male" },
      },
      {
        id: 3,
        name: "WaterBottleReviews",
        platform: "instagram",
        followers: 95000,
        engagement: 5.1,
        avgViews: 8500,
        niche: "Hydration & Water Bottles",
        location: "Austin, TX",
        email: "reviews@waterbottle.co",
        recentPosts: 12,
        avatar: "💧",
        verified: false,
        priceRange: "$200-600",
        demographics: { age: "20-35", gender: "55% Female, 45% Male" },
      },
    ],
    Education: [
      {
        id: 4,
        name: "StudyHacks_Pro",
        platform: "tiktok",
        followers: 320000,
        engagement: 7.2,
        avgViews: 45000,
        niche: "Study Tips & Productivity",
        location: "Toronto, Canada",
        email: "business@studyhacks.com",
        recentPosts: 28,
        avatar: "📚",
        verified: true,
        priceRange: "$800-2000",
        demographics: { age: "16-25", gender: "65% Female, 35% Male" },
      },
      {
        id: 5,
        name: "AI_Learning_Hub",
        platform: "instagram",
        followers: 150000,
        engagement: 4.8,
        avgViews: 18000,
        niche: "AI & Technology Education",
        location: "San Francisco, CA",
        email: "partnerships@ailearning.io",
        recentPosts: 18,
        avatar: "🤖",
        verified: true,
        priceRange: "$600-1200",
        demographics: { age: "22-35", gender: "58% Male, 42% Female" },
      },
    ],
    "Home & Garden": [
      {
        id: 6,
        name: "GardenLife_Emma",
        platform: "instagram",
        followers: 125000,
        engagement: 5.9,
        avgViews: 15000,
        niche: "Indoor Gardening & Plants",
        location: "Portland, OR",
        email: "hello@gardenlife.com",
        recentPosts: 20,
        avatar: "🌿",
        verified: false,
        priceRange: "$400-900",
        demographics: { age: "25-40", gender: "75% Female, 25% Male" },
      },
    ],
    Productivity: [
      {
        id: 7,
        name: "ProductivityPro_Alex",
        platform: "tiktok",
        followers: 280000,
        engagement: 6.5,
        avgViews: 35000,
        niche: "Productivity Apps & Tools",
        location: "London, UK",
        email: "collabs@productivitypro.co.uk",
        recentPosts: 25,
        avatar: "⚡",
        verified: true,
        priceRange: "$700-1800",
        demographics: { age: "24-35", gender: "52% Male, 48% Female" },
      },
    ],
    "Food & Drink": [
      {
        id: 8,
        name: "RecipeCreator_Chef",
        platform: "instagram",
        followers: 195000,
        engagement: 5.4,
        avgViews: 22000,
        niche: "Recipe Creation & Cooking",
        location: "Chicago, IL",
        email: "business@recipecreator.com",
        recentPosts: 30,
        avatar: "👨‍🍳",
        verified: true,
        priceRange: "$500-1300",
        demographics: { age: "25-45", gender: "60% Female, 40% Male" },
      },
    ],
  };

  return (
    creatorsByCategory[productCategory as keyof typeof creatorsByCategory] || []
  );
};

type Creator = {
  id: number;
  name: string;
  platform: "instagram" | "tiktok";
  followers: number;
  engagement: number;
  avgViews: number;
  niche: string;
  location: string;
  email: string;
  recentPosts: number;
  avatar: string;
  verified: boolean;
  priceRange: string;
  demographics: { age: string; gender: string };
};

export default function Outreach() {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [emailTemplate, setEmailTemplate] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [sortBy, setSortBy] = useState<
    "followers" | "engagement" | "avgViews" | "name"
  >("followers");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [filterPlatform, setFilterPlatform] = useState<
    "all" | "instagram" | "tiktok"
  >("all");

  const getCreatorsForProduct = (productId: string) => {
    const product = userProducts.find((p) => p.id === productId);
    if (!product) return [];
    let creators = generateCreators(product.category, product.name);

    // Apply platform filter
    if (filterPlatform !== "all") {
      creators = creators.filter(
        (creator) => creator.platform === filterPlatform
      );
    }

    // Apply sorting
    creators = creators.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case "followers":
          comparison = a.followers - b.followers;
          break;
        case "engagement":
          comparison = a.engagement - b.engagement;
          break;
        case "avgViews":
          comparison = a.avgViews - b.avgViews;
          break;
        case "name":
          comparison = a.name.localeCompare(b.name);
          break;
      }
      return sortOrder === "desc" ? -comparison : comparison;
    });

    return creators;
  };

  const handleSort = (
    field: "followers" | "engagement" | "avgViews" | "name"
  ) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const generateEmailTemplate = (creator: Creator, product: any) => {
    return `Subject: Partnership Opportunity - ${product.name}

Hi ${creator.name},

I hope this email finds you well! I'm reaching out because I've been following your amazing content in the ${creator.niche.toLowerCase()} space, and I think there could be a great partnership opportunity.

I represent ${
      product.name
    }, ${product.description.toLowerCase()}. Given your expertise in ${creator.niche.toLowerCase()} and your engaged audience of ${creator.followers.toLocaleString()} followers, I believe our product would be a perfect fit for your content.

We'd love to collaborate with you on:
• Product review and demonstration
• Exclusive discount code for your followers
• Compensation within your rate range (${creator.priceRange})

Would you be interested in learning more about this partnership? I'd be happy to send you more details about the product and discuss how we can work together.

Looking forward to hearing from you!

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;
  };

  const handleSendEmail = () => {
    // Simulate sending email
    setTimeout(() => {
      setEmailSent(true);
      setTimeout(() => {
        setShowEmailModal(false);
        setEmailSent(false);
        setSelectedCreator(null);
      }, 2000);
    }, 1000);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Creator Outreach
          </h1>
          <p className="text-muted-foreground">
            Find and connect with relevant Instagram and TikTok creators to
            market your products
          </p>
        </div>

        {!selectedProduct ? (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Select a Product</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {userProducts.map((product) => (
                <Card
                  key={product.id}
                  className="cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 ${product.color} rounded-lg flex items-center justify-center text-white text-xl`}
                      >
                        {product.image}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {product.name}
                        </CardTitle>
                        <Badge variant="secondary">{product.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">
                      {product.description}
                    </p>
                    <div className="mt-4 flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {getCreatorsForProduct(product.id).length} creators found
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Button
                  variant="outline"
                  onClick={() => setSelectedProduct(null)}
                  className="mb-4"
                >
                  ← Back to Products
                </Button>
                <h2 className="text-2xl font-bold">
                  Creators for{" "}
                  {userProducts.find((p) => p.id === selectedProduct)?.name}
                </h2>
                <p className="text-muted-foreground">
                  {getCreatorsForProduct(selectedProduct).length} relevant
                  creators found
                </p>
              </div>
            </div>

            {/* Filters and Controls */}
            <div className="flex items-center justify-between mb-4 p-4 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Platform:</span>
                  <div className="flex gap-1">
                    <Button
                      variant={filterPlatform === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setFilterPlatform("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={
                        filterPlatform === "instagram" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setFilterPlatform("instagram")}
                      className="gap-1"
                    >
                      <Instagram className="w-3 h-3" />
                      Instagram
                    </Button>
                    <Button
                      variant={
                        filterPlatform === "tiktok" ? "default" : "outline"
                      }
                      size="sm"
                      onClick={() => setFilterPlatform("tiktok")}
                      className="gap-1"
                    >
                      <Play className="w-3 h-3" />
                      TikTok
                    </Button>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Sorted by {sortBy} (
                {sortOrder === "desc" ? "high to low" : "low to high"})
              </div>
            </div>

            {/* Pure Table */}
            <div className="border border-border rounded-lg overflow-hidden">
              {/* Table Header */}
              <div className="bg-muted/50 border-b border-border">
                <div className="grid grid-cols-12 gap-4 p-4 text-sm font-medium text-muted-foreground">
                  <button
                    className="col-span-3 flex items-center gap-1 hover:text-foreground transition-colors text-left"
                    onClick={() => handleSort("name")}
                  >
                    Creator
                    {sortBy === "name" &&
                      (sortOrder === "desc" ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronUp className="w-3 h-3" />
                      ))}
                  </button>
                  <div className="col-span-1 text-center">Platform</div>
                  <button
                    className="col-span-1 flex items-center justify-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("followers")}
                  >
                    Followers
                    {sortBy === "followers" &&
                      (sortOrder === "desc" ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronUp className="w-3 h-3" />
                      ))}
                  </button>
                  <button
                    className="col-span-1 flex items-center justify-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("engagement")}
                  >
                    Engagement
                    {sortBy === "engagement" &&
                      (sortOrder === "desc" ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronUp className="w-3 h-3" />
                      ))}
                  </button>
                  <button
                    className="col-span-1 flex items-center justify-center gap-1 hover:text-foreground transition-colors"
                    onClick={() => handleSort("avgViews")}
                  >
                    Avg Views
                    {sortBy === "avgViews" &&
                      (sortOrder === "desc" ? (
                        <ChevronDown className="w-3 h-3" />
                      ) : (
                        <ChevronUp className="w-3 h-3" />
                      ))}
                  </button>
                  <div className="col-span-2">Niche</div>
                  <div className="col-span-1 text-center">Location</div>
                  <div className="col-span-1 text-center">Price</div>
                  <div className="col-span-2 text-center">Actions</div>
                </div>
              </div>

              {/* Table Body */}
              <div>
                {getCreatorsForProduct(selectedProduct).map(
                  (creator, index) => (
                    <div
                      key={creator.id}
                      className={`grid grid-cols-12 gap-4 p-4 items-center border-b border-border/50 hover:bg-muted/30 transition-colors ${
                        index % 2 === 0 ? "bg-background" : "bg-muted/10"
                      }`}
                    >
                      {/* Creator Info */}
                      <div className="col-span-3 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                          {creator.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-foreground truncate">
                              {creator.name}
                            </span>
                            {creator.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {creator.demographics.age}
                          </div>
                        </div>
                      </div>

                      {/* Platform */}
                      <div className="col-span-1 flex justify-center">
                        {creator.platform === "instagram" ? (
                          <Instagram className="w-5 h-5 text-pink-500" />
                        ) : (
                          <Play className="w-5 h-5 text-black" />
                        )}
                      </div>

                      {/* Followers */}
                      <div className="col-span-1 text-center font-semibold">
                        {formatNumber(creator.followers)}
                      </div>

                      {/* Engagement */}
                      <div className="col-span-1 text-center font-semibold text-green-600">
                        {creator.engagement}%
                      </div>

                      {/* Avg Views */}
                      <div className="col-span-1 text-center font-medium">
                        {formatNumber(creator.avgViews)}
                      </div>

                      {/* Niche */}
                      <div className="col-span-2">
                        <span className="text-sm text-foreground">
                          {creator.niche}
                        </span>
                      </div>

                      {/* Location */}
                      <div className="col-span-1 text-center text-sm text-muted-foreground">
                        {creator.location.split(",")[0]}
                      </div>

                      {/* Price */}
                      <div className="col-span-1 text-center text-sm font-medium text-orange-600">
                        {creator.priceRange}
                      </div>

                      {/* Actions */}
                      <div className="col-span-2 flex justify-center gap-2">
                        <Button
                          size="sm"
                          onClick={() => {
                            setSelectedCreator(creator);
                            const product = userProducts.find(
                              (p) => p.id === selectedProduct
                            );
                            if (product) {
                              setEmailTemplate(
                                generateEmailTemplate(creator, product)
                              );
                              setShowEmailModal(true);
                            }
                          }}
                        >
                          <Mail className="w-4 h-4 mr-1" />
                          Contact
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Email Modal */}
      {showEmailModal && selectedCreator && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-2xl max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">
                Contact {selectedCreator.name}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowEmailModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-4 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="space-y-4">
                <div className="flex items-center gap-2 p-3 bg-muted rounded-lg">
                  <Mail className="w-5 h-5 text-muted-foreground" />
                  <span className="font-medium">To: </span>
                  <span>{selectedCreator.email}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      navigator.clipboard.writeText(selectedCreator.email)
                    }
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Email Content
                  </label>
                  <Textarea
                    value={emailTemplate}
                    onChange={(e) => setEmailTemplate(e.target.value)}
                    className="min-h-[300px] font-mono text-sm"
                    placeholder="Compose your email..."
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2 p-4 border-t">
              <Button
                variant="outline"
                onClick={() => setShowEmailModal(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendEmail}
                disabled={emailSent}
                className={emailSent ? "bg-green-500 hover:bg-green-600" : ""}
              >
                {emailSent ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Email
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
