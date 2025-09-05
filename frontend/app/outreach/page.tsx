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

// Mock products data (matching website builder templates)
const userProducts = [
  {
    id: "fitness-tracker",
    name: "FitTrack Pro",
    description:
      "Ultimate fitness companion with heart rate monitoring and smart notifications",
    category: "Fitness & Health",
    image: "💓",
    color: "bg-purple-500",
  },
  {
    id: "eco-bottle",
    name: "EcoFlow Bottle",
    description: "Sustainable hydration with 100% recycled materials",
    category: "Sustainable Products",
    image: "🌱",
    color: "bg-green-500",
  },
  {
    id: "smart-headphones",
    name: "AirPods Ultra",
    description: "Revolutionary spatial audio with adaptive noise cancellation",
    category: "Audio Technology",
    image: "🎧",
    color: "bg-purple-600",
  },
  {
    id: "gaming-laptop",
    name: "GameMaster X1",
    description: "High-performance gaming laptop with RTX 4080",
    category: "Gaming Hardware",
    image: "💻",
    color: "bg-red-500",
  },
  {
    id: "smart-home",
    name: "HomeAI Hub",
    description: "Intelligent home command center with voice control",
    category: "Smart Home",
    image: "🏠",
    color: "bg-blue-500",
  },
  {
    id: "electric-car",
    name: "Tesla Model Y",
    description: "Most capable and safe mid-size SUV with 330-mile range",
    category: "Electric Vehicles",
    image: "🚗",
    color: "bg-gray-800",
  },
  {
    id: "coffee-machine",
    name: "BrewMaster Pro",
    description: "Professional-grade espresso machine with 15-bar pressure",
    category: "Kitchen Appliances",
    image: "☕",
    color: "bg-amber-600",
  },
  {
    id: "drone",
    name: "SkyVision 4K",
    description: "Professional 4K drone with 45-minute flight time",
    category: "Photography & Drones",
    image: "🚁",
    color: "bg-sky-500",
  },
  {
    id: "skincare",
    name: "GlowSerum Pro",
    description: "Revolutionary anti-aging serum with 24K gold nanoparticles",
    category: "Beauty & Skincare",
    image: "🧴",
    color: "bg-rose-500",
  },
];

// Mock creator data generator
const generateCreators = (productCategory: string, productName: string) => {
  const creatorsByCategory = {
    "Fitness & Health": [
      {
        id: 1,
        name: "FitnessTracker_Mike",
        platform: "instagram" as const,
        followers: 245000,
        engagement: 4.8,
        avgViews: 28000,
        niche: "Fitness Wearables & Health Tech",
        location: "Los Angeles, CA",
        email: "mike@fitnesstracker.com",
        recentPosts: 15,
        avatar: "💓",
        verified: true,
        priceRange: "$800-2000",
        demographics: { age: "22-35", gender: "65% Male, 35% Female" },
      },
      {
        id: 2,
        name: "HealthyLifestyle_Sarah",
        platform: "tiktok" as const,
        followers: 180000,
        engagement: 6.2,
        avgViews: 45000,
        niche: "Health & Wellness Tech",
        location: "Austin, TX",
        email: "sarah@healthylifestyle.co",
        recentPosts: 22,
        avatar: "🌟",
        verified: false,
        priceRange: "$600-1500",
        demographics: { age: "18-30", gender: "70% Female, 30% Male" },
      },
      {
        id: 3,
        name: "WearableTech_James",
        platform: "instagram" as const,
        followers: 156000,
        engagement: 5.3,
        avgViews: 19000,
        niche: "Wearable Technology Reviews",
        location: "Miami, FL",
        email: "james@wearabletech.com",
        recentPosts: 18,
        avatar: "⌚",
        verified: true,
        priceRange: "$700-1800",
        demographics: { age: "25-40", gender: "55% Male, 45% Female" },
      },
    ],
    "Sustainable Products": [
      {
        id: 4,
        name: "EcoWarrior_Green",
        platform: "instagram" as const,
        followers: 320000,
        engagement: 7.1,
        avgViews: 52000,
        niche: "Sustainable Living & Eco Products",
        location: "Portland, OR",
        email: "hello@ecowarrior.green",
        recentPosts: 18,
        avatar: "🌱",
        verified: true,
        priceRange: "$900-2500",
        demographics: { age: "25-40", gender: "68% Female, 32% Male" },
      },
      {
        id: 5,
        name: "ZeroWaste_Life",
        platform: "tiktok" as const,
        followers: 198000,
        engagement: 6.8,
        avgViews: 34000,
        niche: "Zero Waste & Sustainable Products",
        location: "Seattle, WA",
        email: "collab@zerowaste.life",
        recentPosts: 25,
        avatar: "♻️",
        verified: true,
        priceRange: "$500-1200",
        demographics: { age: "20-35", gender: "75% Female, 25% Male" },
      },
      {
        id: 6,
        name: "GreenLiving_Emma",
        platform: "instagram" as const,
        followers: 142000,
        engagement: 5.9,
        avgViews: 21000,
        niche: "Eco-Friendly Product Reviews",
        location: "San Diego, CA",
        email: "emma@greenliving.eco",
        recentPosts: 20,
        avatar: "🍃",
        verified: false,
        priceRange: "$400-1000",
        demographics: { age: "28-45", gender: "72% Female, 28% Male" },
      },
    ],
    "Audio Technology": [
      {
        id: 7,
        name: "AudioTech_Pro",
        platform: "tiktok" as const,
        followers: 285000,
        engagement: 5.3,
        avgViews: 38000,
        niche: "Audio Equipment & Headphones",
        location: "Nashville, TN",
        email: "pro@audiotech.com",
        recentPosts: 12,
        avatar: "🎧",
        verified: true,
        priceRange: "$800-2200",
        demographics: { age: "20-35", gender: "75% Male, 25% Female" },
      },
      {
        id: 8,
        name: "SoundExpert_Alex",
        platform: "instagram" as const,
        followers: 167000,
        engagement: 4.7,
        avgViews: 23000,
        niche: "Premium Audio & Sound Quality",
        location: "Los Angeles, CA",
        email: "alex@soundexpert.audio",
        recentPosts: 16,
        avatar: "🔊",
        verified: true,
        priceRange: "$600-1600",
        demographics: { age: "25-45", gender: "80% Male, 20% Female" },
      },
      {
        id: 9,
        name: "MusicTech_Reviews",
        platform: "tiktok" as const,
        followers: 134000,
        engagement: 6.1,
        avgViews: 28000,
        niche: "Music Production & Audio Gear",
        location: "Atlanta, GA",
        email: "reviews@musictech.com",
        recentPosts: 21,
        avatar: "🎵",
        verified: false,
        priceRange: "$500-1400",
        demographics: { age: "18-32", gender: "70% Male, 30% Female" },
      },
    ],
    "Gaming Hardware": [
      {
        id: 10,
        name: "GamerSetup_Max",
        platform: "tiktok" as const,
        followers: 412000,
        engagement: 7.4,
        avgViews: 65000,
        niche: "Gaming Laptops & PC Builds",
        location: "Las Vegas, NV",
        email: "max@gamersetup.gg",
        recentPosts: 28,
        avatar: "💻",
        verified: true,
        priceRange: "$1000-3000",
        demographics: { age: "18-28", gender: "85% Male, 15% Female" },
      },
      {
        id: 11,
        name: "TechGaming_Pro",
        platform: "instagram" as const,
        followers: 298000,
        engagement: 5.8,
        avgViews: 42000,
        niche: "Gaming Hardware Reviews",
        location: "Austin, TX",
        email: "pro@techgaming.gg",
        recentPosts: 19,
        avatar: "🎮",
        verified: true,
        priceRange: "$800-2500",
        demographics: { age: "20-35", gender: "82% Male, 18% Female" },
      },
      {
        id: 12,
        name: "LaptopGamer_Elite",
        platform: "tiktok" as const,
        followers: 189000,
        engagement: 6.3,
        avgViews: 31000,
        niche: "Gaming Laptops & Mobile Gaming",
        location: "New York, NY",
        email: "elite@laptopgamer.pro",
        recentPosts: 24,
        avatar: "⚡",
        verified: true,
        priceRange: "$700-2000",
        demographics: { age: "16-30", gender: "78% Male, 22% Female" },
      },
    ],
    "Smart Home": [
      {
        id: 13,
        name: "SmartHome_Emma",
        platform: "instagram" as const,
        followers: 234000,
        engagement: 5.9,
        avgViews: 31000,
        niche: "Smart Home Tech & Automation",
        location: "Seattle, WA",
        email: "emma@smarthome.tech",
        recentPosts: 20,
        avatar: "🏠",
        verified: true,
        priceRange: "$600-1800",
        demographics: { age: "28-45", gender: "55% Female, 45% Male" },
      },
      {
        id: 14,
        name: "HomeAutomation_Hub",
        platform: "tiktok" as const,
        followers: 178000,
        engagement: 6.4,
        avgViews: 29000,
        niche: "Home Automation & IoT",
        location: "San Francisco, CA",
        email: "hub@homeautomation.io",
        recentPosts: 26,
        avatar: "🤖",
        verified: false,
        priceRange: "$500-1500",
        demographics: { age: "25-40", gender: "65% Male, 35% Female" },
      },
      {
        id: 15,
        name: "ConnectedHome_Tech",
        platform: "instagram" as const,
        followers: 156000,
        engagement: 4.8,
        avgViews: 22000,
        niche: "Connected Home Devices",
        location: "Denver, CO",
        email: "tech@connectedhome.smart",
        recentPosts: 17,
        avatar: "📱",
        verified: true,
        priceRange: "$400-1200",
        demographics: { age: "30-50", gender: "50% Male, 50% Female" },
      },
    ],
    "Electric Vehicles": [
      {
        id: 16,
        name: "ElectricDrive_Tesla",
        platform: "instagram" as const,
        followers: 456000,
        engagement: 6.5,
        avgViews: 78000,
        niche: "Electric Cars & Tesla Reviews",
        location: "Palo Alto, CA",
        email: "tesla@electricdrive.com",
        recentPosts: 25,
        avatar: "🚗",
        verified: true,
        priceRange: "$1500-5000",
        demographics: { age: "30-50", gender: "70% Male, 30% Female" },
      },
      {
        id: 17,
        name: "EVReviews_Pro",
        platform: "tiktok" as const,
        followers: 298000,
        engagement: 7.2,
        avgViews: 52000,
        niche: "Electric Vehicle Reviews & News",
        location: "Austin, TX",
        email: "pro@evreviews.auto",
        recentPosts: 22,
        avatar: "⚡",
        verified: true,
        priceRange: "$1200-4000",
        demographics: { age: "28-45", gender: "75% Male, 25% Female" },
      },
      {
        id: 18,
        name: "GreenCars_Future",
        platform: "instagram" as const,
        followers: 189000,
        engagement: 5.4,
        avgViews: 34000,
        niche: "Sustainable Transportation",
        location: "Los Angeles, CA",
        email: "future@greencars.eco",
        recentPosts: 18,
        avatar: "🌿",
        verified: false,
        priceRange: "$800-2500",
        demographics: { age: "25-40", gender: "60% Male, 40% Female" },
      },
    ],
    "Kitchen Appliances": [
      {
        id: 19,
        name: "CoffeeExpert_Brew",
        platform: "instagram" as const,
        followers: 267000,
        engagement: 5.4,
        avgViews: 38000,
        niche: "Coffee Equipment & Brewing",
        location: "Portland, OR",
        email: "brew@coffeeexpert.com",
        recentPosts: 30,
        avatar: "☕",
        verified: true,
        priceRange: "$700-2000",
        demographics: { age: "25-45", gender: "55% Female, 45% Male" },
      },
      {
        id: 20,
        name: "KitchenTech_Chef",
        platform: "tiktok" as const,
        followers: 198000,
        engagement: 6.8,
        avgViews: 32000,
        niche: "Kitchen Appliances & Cooking Tech",
        location: "Chicago, IL",
        email: "chef@kitchentech.cook",
        recentPosts: 24,
        avatar: "👨‍🍳",
        verified: true,
        priceRange: "$600-1800",
        demographics: { age: "28-50", gender: "65% Female, 35% Male" },
      },
      {
        id: 21,
        name: "HomeBarista_Pro",
        platform: "instagram" as const,
        followers: 145000,
        engagement: 4.9,
        avgViews: 21000,
        niche: "Home Coffee & Espresso",
        location: "Seattle, WA",
        email: "pro@homebarista.coffee",
        recentPosts: 19,
        avatar: "🫘",
        verified: false,
        priceRange: "$500-1500",
        demographics: { age: "30-45", gender: "52% Male, 48% Female" },
      },
    ],
    "Photography & Drones": [
      {
        id: 22,
        name: "DronePhotographer_Sky",
        platform: "tiktok" as const,
        followers: 378000,
        engagement: 6.8,
        avgViews: 58000,
        niche: "Drone Photography & Aerial Filming",
        location: "Denver, CO",
        email: "sky@dronephotographer.com",
        recentPosts: 14,
        avatar: "🚁",
        verified: true,
        priceRange: "$1000-3500",
        demographics: { age: "22-38", gender: "80% Male, 20% Female" },
      },
      {
        id: 23,
        name: "AerialCreator_Max",
        platform: "instagram" as const,
        followers: 234000,
        engagement: 5.7,
        avgViews: 41000,
        niche: "Aerial Photography & Cinematography",
        location: "Los Angeles, CA",
        email: "max@aerialcreator.film",
        recentPosts: 16,
        avatar: "📸",
        verified: true,
        priceRange: "$800-2800",
        demographics: { age: "25-40", gender: "75% Male, 25% Female" },
      },
      {
        id: 24,
        name: "DroneReviews_Tech",
        platform: "tiktok" as const,
        followers: 167000,
        engagement: 7.1,
        avgViews: 35000,
        niche: "Drone Technology & Reviews",
        location: "Austin, TX",
        email: "tech@dronereviews.fly",
        recentPosts: 21,
        avatar: "🎥",
        verified: false,
        priceRange: "$600-2200",
        demographics: { age: "20-35", gender: "85% Male, 15% Female" },
      },
    ],
    "Beauty & Skincare": [
      {
        id: 25,
        name: "SkinCareGuru_Glow",
        platform: "instagram" as const,
        followers: 489000,
        engagement: 7.2,
        avgViews: 68000,
        niche: "Skincare Products & Anti-Aging",
        location: "Miami, FL",
        email: "glow@skincareguru.com",
        recentPosts: 28,
        avatar: "🧴",
        verified: true,
        priceRange: "$1200-3500",
        demographics: { age: "25-45", gender: "85% Female, 15% Male" },
      },
      {
        id: 26,
        name: "BeautyExpert_Luxe",
        platform: "tiktok" as const,
        followers: 356000,
        engagement: 8.1,
        avgViews: 72000,
        niche: "Luxury Beauty & Premium Skincare",
        location: "New York, NY",
        email: "luxe@beautyexpert.glam",
        recentPosts: 32,
        avatar: "✨",
        verified: true,
        priceRange: "$1000-4000",
        demographics: { age: "22-40", gender: "90% Female, 10% Male" },
      },
      {
        id: 27,
        name: "AntiAging_Science",
        platform: "instagram" as const,
        followers: 198000,
        engagement: 6.3,
        avgViews: 34000,
        niche: "Anti-Aging Science & Serums",
        location: "Beverly Hills, CA",
        email: "science@antiaging.beauty",
        recentPosts: 22,
        avatar: "🔬",
        verified: true,
        priceRange: "$800-2500",
        demographics: { age: "30-55", gender: "88% Female, 12% Male" },
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
