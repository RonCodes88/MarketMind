"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  RadialBarChart,
  RadialBar,
  Legend,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  Eye,
  Heart,
  Share2,
  ShoppingCart,
  DollarSign,
  Globe,
  MousePointer,
  MessageSquare,
  ThumbsUp,
  Star,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Package,
} from "lucide-react";
import { Navigation } from "@/components/navigation";

// Mock Data (same as in dashboard)
const contentInteractionData = [
  { month: "Jan", views: 12000, likes: 3400, shares: 1200, comments: 890 },
  { month: "Feb", views: 15000, likes: 4200, shares: 1800, comments: 1200 },
  { month: "Mar", views: 18000, likes: 5100, shares: 2200, comments: 1450 },
  { month: "Apr", views: 22000, likes: 6800, shares: 2800, comments: 1890 },
  { month: "May", views: 28000, likes: 8200, shares: 3400, comments: 2340 },
  { month: "Jun", views: 35000, likes: 10200, shares: 4200, comments: 2890 },
];

const socialMediaData = [
  { platform: "Instagram", followers: 45000, engagement: 8.5, posts: 124 },
  { platform: "Twitter", followers: 32000, engagement: 6.2, posts: 89 },
  { platform: "LinkedIn", followers: 18000, engagement: 12.3, posts: 45 },
  { platform: "TikTok", followers: 67000, engagement: 15.8, posts: 67 },
  { platform: "YouTube", followers: 23000, engagement: 9.4, posts: 23 },
];

const websiteTrafficData = [
  { date: "2024-01-01", visitors: 2400, pageviews: 4800, bounceRate: 35 },
  { date: "2024-01-02", visitors: 1398, pageviews: 2796, bounceRate: 42 },
  { date: "2024-01-03", visitors: 9800, pageviews: 19600, bounceRate: 28 },
  { date: "2024-01-04", visitors: 3908, pageviews: 7816, bounceRate: 38 },
  { date: "2024-01-05", visitors: 4800, pageviews: 9600, bounceRate: 33 },
  { date: "2024-01-06", visitors: 3800, pageviews: 7600, bounceRate: 41 },
  { date: "2024-01-07", visitors: 4300, pageviews: 8600, bounceRate: 29 },
];

const salesData = [
  { month: "Jan", revenue: 45000, orders: 120, conversion: 3.2 },
  { month: "Feb", revenue: 52000, orders: 140, conversion: 3.8 },
  { month: "Mar", revenue: 48000, orders: 130, conversion: 3.5 },
  { month: "Apr", revenue: 61000, orders: 165, conversion: 4.1 },
  { month: "May", revenue: 75000, orders: 200, conversion: 4.8 },
  { month: "Jun", revenue: 89000, orders: 235, conversion: 5.2 },
];

const topProducts = [
  { name: "Premium Package", sales: 1250, revenue: 125000, growth: 12.5 },
  { name: "Standard Package", sales: 890, revenue: 89000, growth: 8.3 },
  { name: "Basic Package", sales: 650, revenue: 32500, growth: -2.1 },
  { name: "Enterprise", sales: 45, revenue: 90000, growth: 25.8 },
];

const trafficSources = [
  { name: "Organic Search", value: 45, color: "#8884d8" },
  { name: "Social Media", value: 25, color: "#82ca9d" },
  { name: "Direct", value: 15, color: "#ffc658" },
  { name: "Email", value: 10, color: "#ff7c7c" },
  { name: "Paid Ads", value: 5, color: "#8dd1e1" },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7c7c", "#8dd1e1"];

// Products data for portfolio summary
const userProducts = [
  {
    id: "eco-water-bottle",
    name: "EcoFlow Water Bottle",
    description:
      "Sustainable smart water bottle with temperature control and hydration tracking",
    category: "Health & Fitness",
    status: "Active",
    monthlyRevenue: 45000,
    totalSales: 1250,
    conversionRate: 4.2,
    rating: 4.8,
    reviews: 324,
    image: "🍃",
    color: "bg-green-500",
    growth: 12.5,
  },
  {
    id: "ai-study-assistant",
    name: "StudyMind AI",
    description:
      "AI-powered study companion that creates personalized learning plans",
    category: "Education",
    status: "Active",
    monthlyRevenue: 32000,
    totalSales: 890,
    conversionRate: 3.8,
    rating: 4.6,
    reviews: 156,
    image: "🧠",
    color: "bg-blue-500",
    growth: 8.3,
  },
  {
    id: "fitness-tracker-pro",
    name: "FitTracker Pro",
    description:
      "Advanced fitness tracking with AI-powered workout recommendations",
    category: "Health & Fitness",
    status: "Beta",
    monthlyRevenue: 18000,
    totalSales: 450,
    conversionRate: 2.9,
    rating: 4.4,
    reviews: 89,
    image: "💪",
    color: "bg-orange-500",
    growth: 15.7,
  },
  {
    id: "smart-garden",
    name: "GrowSmart Garden",
    description:
      "Automated indoor garden system with app-controlled environment",
    category: "Home & Garden",
    status: "Planning",
    monthlyRevenue: 8500,
    totalSales: 120,
    conversionRate: 1.8,
    rating: 4.2,
    reviews: 23,
    image: "🌱",
    color: "bg-emerald-500",
    growth: 25.2,
  },
  {
    id: "task-manager-app",
    name: "TaskFlow Pro",
    description:
      "Professional task management with team collaboration features",
    category: "Productivity",
    status: "Active",
    monthlyRevenue: 28000,
    totalSales: 670,
    conversionRate: 3.5,
    rating: 4.7,
    reviews: 198,
    image: "📋",
    color: "bg-purple-500",
    growth: 6.8,
  },
  {
    id: "recipe-ai",
    name: "ChefAI Recipe Generator",
    description: "AI-powered recipe suggestions based on available ingredients",
    category: "Food & Drink",
    status: "Active",
    monthlyRevenue: 15000,
    totalSales: 340,
    conversionRate: 2.4,
    rating: 4.3,
    reviews: 67,
    image: "👨‍🍳",
    color: "bg-red-500",
    growth: -2.1,
  },
];

export default function Summary() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              Business Summary
            </h1>
            <p className="text-muted-foreground">
              Complete overview of your business performance across all channels
            </p>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89,000</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12.5% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Website Visitors
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">35,247</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +8.2% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Social Engagement
              </CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">10.2K</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +15.3% from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Conversion Rate
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5.2%</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +0.8% from last month
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="content">Content Interactions</TabsTrigger>
            <TabsTrigger value="social">Social Media</TabsTrigger>
            <TabsTrigger value="traffic">Website Traffic</TabsTrigger>
            <TabsTrigger value="sales">Sales Analytics</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Revenue and Traffic Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Revenue Overview
                  </CardTitle>
                  <CardDescription>
                    Monthly revenue across all products
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [
                          `$${Number(value).toLocaleString()}`,
                          "Revenue",
                        ]}
                      />
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Traffic & Engagement
                  </CardTitle>
                  <CardDescription>
                    Website visitors and engagement trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) =>
                          new Date(value).getDate().toString()
                        }
                      />
                      <YAxis />
                      <Tooltip
                        labelFormatter={(value) =>
                          new Date(value).toLocaleDateString()
                        }
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageviews"
                        stroke="#82ca9d"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Product Portfolio Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  Product Portfolio Summary
                </CardTitle>
                <CardDescription>
                  Quick overview of your product performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {userProducts.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Products
                    </div>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {userProducts.filter((p) => p.status === "Active").length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Active Products
                    </div>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">
                      $
                      {userProducts
                        .reduce((sum, p) => sum + p.monthlyRevenue, 0)
                        .toLocaleString()}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Monthly Revenue
                    </div>
                  </div>

                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600">
                      {(
                        userProducts.reduce((sum, p) => sum + p.rating, 0) /
                        userProducts.length
                      ).toFixed(1)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Rating
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">
                    Top Performing Products
                  </h4>
                  <div className="space-y-2">
                    {userProducts
                      .sort((a, b) => b.monthlyRevenue - a.monthlyRevenue)
                      .slice(0, 3)
                      .map((product, index) => (
                        <div
                          key={product.id}
                          className="flex items-center justify-between p-2 bg-muted/50 rounded"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-8 h-8 ${product.color} rounded-lg flex items-center justify-center text-white text-sm`}
                            >
                              {product.image}
                            </div>
                            <span className="font-medium">{product.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">
                              ${product.monthlyRevenue.toLocaleString()}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              #{index + 1} revenue
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Content Interactions Tab */}
          <TabsContent value="content" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    Content Performance Over Time
                  </CardTitle>
                  <CardDescription>
                    Track your content engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={contentInteractionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="views"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="likes"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="shares"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                      <Area
                        type="monotone"
                        dataKey="comments"
                        stackId="1"
                        stroke="#ff7c7c"
                        fill="#ff7c7c"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Engagement Breakdown
                  </CardTitle>
                  <CardDescription>
                    Current month engagement metrics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Views</span>
                      <span className="font-medium">35,000</span>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Likes</span>
                      <span className="font-medium">10,200</span>
                    </div>
                    <Progress value={68} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Shares</span>
                      <span className="font-medium">4,200</span>
                    </div>
                    <Progress value={42} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Comments</span>
                      <span className="font-medium">2,890</span>
                    </div>
                    <Progress value={35} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Top Performing Content
                </CardTitle>
                <CardDescription>
                  Your most engaging posts this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "10 AI Tools That Will Change Your Business",
                      views: 12500,
                      engagement: 18.5,
                    },
                    {
                      title: "The Future of Product Analytics",
                      views: 9800,
                      engagement: 15.2,
                    },
                    {
                      title: "How We Increased Conversion by 300%",
                      views: 8900,
                      engagement: 22.1,
                    },
                    {
                      title: "Market Research Made Simple",
                      views: 7600,
                      engagement: 14.8,
                    },
                  ].map((post, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{post.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {post.views.toLocaleString()} views
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            {post.engagement}% engagement
                          </span>
                        </div>
                      </div>
                      <Badge variant="secondary">#{index + 1}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="h-5 w-5" />
                    Platform Performance
                  </CardTitle>
                  <CardDescription>
                    Followers and engagement across platforms
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={socialMediaData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="platform" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="followers" fill="#8884d8" />
                      <Bar dataKey="engagement" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ThumbsUp className="h-5 w-5" />
                    Engagement Rate by Platform
                  </CardTitle>
                  <CardDescription>Average engagement rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadialBarChart
                      cx="50%"
                      cy="50%"
                      innerRadius="20%"
                      outerRadius="90%"
                      data={socialMediaData}
                    >
                      <RadialBar
                        dataKey="engagement"
                        cornerRadius={10}
                        fill="#8884d8"
                      />
                      <Legend />
                    </RadialBarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {socialMediaData.map((platform) => (
                <Card key={platform.platform}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">
                      {platform.platform}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-2xl font-bold">
                      {platform.followers.toLocaleString()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      followers
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">
                        {platform.engagement}%
                      </span>
                      <Badge
                        variant={
                          platform.engagement > 10 ? "default" : "secondary"
                        }
                      >
                        {platform.engagement > 10 ? "High" : "Medium"}
                      </Badge>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {platform.posts} posts this month
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Website Traffic Tab */}
          <TabsContent value="traffic" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Website Traffic Trends
                  </CardTitle>
                  <CardDescription>
                    Daily visitors and page views
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={websiteTrafficData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="date"
                        tickFormatter={(value) =>
                          new Date(value).getDate().toString()
                        }
                      />
                      <YAxis />
                      <Tooltip
                        labelFormatter={(value) =>
                          new Date(value).toLocaleDateString()
                        }
                      />
                      <Line
                        type="monotone"
                        dataKey="visitors"
                        stroke="#8884d8"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="pageviews"
                        stroke="#82ca9d"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MousePointer className="h-5 w-5" />
                    Traffic Sources
                  </CardTitle>
                  <CardDescription>
                    Where your visitors come from
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={trafficSources}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${((percent || 0) * 100).toFixed(0)}%`
                        }
                      >
                        {trafficSources.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Session Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3m 42s</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0.8s from last week
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Bounce Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">32.5%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -2.1% from last week
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pages per Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.8</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +0.3 from last week
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Sales Analytics Tab */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Revenue Trends
                  </CardTitle>
                  <CardDescription>
                    Monthly revenue and order volume
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="revenue" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Conversion Rate Trend
                  </CardTitle>
                  <CardDescription>Monthly conversion rates</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="conversion"
                        stroke="#82ca9d"
                        strokeWidth={3}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Top Performing Products
                </CardTitle>
                <CardDescription>
                  Best sellers by revenue and growth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topProducts.map((product, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 border rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium">{product.name}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span>{product.sales} sales</span>
                          <span>
                            ${product.revenue.toLocaleString()} revenue
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            product.growth > 0 ? "default" : "destructive"
                          }
                        >
                          {product.growth > 0 ? "+" : ""}
                          {product.growth}%
                        </Badge>
                        {product.growth > 0 ? (
                          <TrendingUp className="h-4 w-4 text-green-600" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Orders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">235</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +17.5% from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Avg. Order Value
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$379</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +$23 from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Customer LTV
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,247</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +$89 from last month
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium">
                    Refund Rate
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">2.1%</div>
                  <div className="flex items-center text-xs text-green-600">
                    <ArrowDownRight className="h-3 w-3 mr-1" />
                    -0.3% from last month
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
