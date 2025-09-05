"use client";

import React from "react";
import { useParams } from "next/navigation";
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
import { Button } from "@/components/ui/button";
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
  Star,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeft,
  MessageSquare,
  Target,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

// Product-specific mock data generator
const generateProductData = (productId: string) => {
  const productInfo = {
    "eco-water-bottle": {
      name: "EcoFlow Water Bottle",
      image: "🍃",
      color: "bg-green-500",
      category: "Health & Fitness",
    },
    "ai-study-assistant": {
      name: "StudyMind AI",
      image: "🧠",
      color: "bg-blue-500",
      category: "Education",
    },
    "fitness-tracker-pro": {
      name: "FitTracker Pro",
      image: "💪",
      color: "bg-orange-500",
      category: "Health & Fitness",
    },
    "smart-garden": {
      name: "GrowSmart Garden",
      image: "🌱",
      color: "bg-emerald-500",
      category: "Home & Garden",
    },
    "task-manager-app": {
      name: "TaskFlow Pro",
      image: "📋",
      color: "bg-purple-500",
      category: "Productivity",
    },
    "recipe-ai": {
      name: "ChefAI Recipe Generator",
      image: "👨‍🍳",
      color: "bg-red-500",
      category: "Food & Drink",
    },
  };

  const product = productInfo[productId as keyof typeof productInfo] || {
    name: "Unknown Product",
    image: "📦",
    color: "bg-gray-500",
    category: "General",
  };

  // Generate realistic data based on product
  const baseMultiplier = Math.random() * 0.5 + 0.75; // 0.75-1.25 multiplier

  return {
    product,
    salesData: [
      {
        month: "Jan",
        revenue: Math.floor(15000 * baseMultiplier),
        orders: Math.floor(80 * baseMultiplier),
        conversion: 2.8 + Math.random(),
      },
      {
        month: "Feb",
        revenue: Math.floor(18000 * baseMultiplier),
        orders: Math.floor(95 * baseMultiplier),
        conversion: 3.1 + Math.random(),
      },
      {
        month: "Mar",
        revenue: Math.floor(22000 * baseMultiplier),
        orders: Math.floor(110 * baseMultiplier),
        conversion: 3.4 + Math.random(),
      },
      {
        month: "Apr",
        revenue: Math.floor(28000 * baseMultiplier),
        orders: Math.floor(135 * baseMultiplier),
        conversion: 3.8 + Math.random(),
      },
      {
        month: "May",
        revenue: Math.floor(35000 * baseMultiplier),
        orders: Math.floor(160 * baseMultiplier),
        conversion: 4.2 + Math.random(),
      },
      {
        month: "Jun",
        revenue: Math.floor(42000 * baseMultiplier),
        orders: Math.floor(190 * baseMultiplier),
        conversion: 4.6 + Math.random(),
      },
    ],
    userEngagement: [
      {
        month: "Jan",
        activeUsers: Math.floor(2500 * baseMultiplier),
        sessions: Math.floor(8500 * baseMultiplier),
        retention: 65 + Math.random() * 10,
      },
      {
        month: "Feb",
        activeUsers: Math.floor(3200 * baseMultiplier),
        sessions: Math.floor(10200 * baseMultiplier),
        retention: 68 + Math.random() * 10,
      },
      {
        month: "Mar",
        activeUsers: Math.floor(4100 * baseMultiplier),
        sessions: Math.floor(12800 * baseMultiplier),
        retention: 72 + Math.random() * 10,
      },
      {
        month: "Apr",
        activeUsers: Math.floor(5300 * baseMultiplier),
        sessions: Math.floor(16200 * baseMultiplier),
        retention: 75 + Math.random() * 10,
      },
      {
        month: "May",
        activeUsers: Math.floor(6800 * baseMultiplier),
        sessions: Math.floor(20500 * baseMultiplier),
        retention: 78 + Math.random() * 10,
      },
      {
        month: "Jun",
        activeUsers: Math.floor(8200 * baseMultiplier),
        sessions: Math.floor(24800 * baseMultiplier),
        retention: 81 + Math.random() * 10,
      },
    ],
    customerSegments: [
      {
        name: "New Customers",
        value: Math.floor(35 + Math.random() * 20),
        color: "#8884d8",
      },
      {
        name: "Returning Customers",
        value: Math.floor(45 + Math.random() * 20),
        color: "#82ca9d",
      },
      {
        name: "Premium Users",
        value: Math.floor(15 + Math.random() * 15),
        color: "#ffc658",
      },
      {
        name: "Enterprise",
        value: Math.floor(5 + Math.random() * 10),
        color: "#ff7c7c",
      },
    ],
    reviews: [
      { rating: 5, count: Math.floor(150 * baseMultiplier) },
      { rating: 4, count: Math.floor(80 * baseMultiplier) },
      { rating: 3, count: Math.floor(25 * baseMultiplier) },
      { rating: 2, count: Math.floor(8 * baseMultiplier) },
      { rating: 1, count: Math.floor(3 * baseMultiplier) },
    ],
  };
};

export default function ProductDashboard() {
  const params = useParams();
  const productId = params.productId as string;
  const data = generateProductData(productId);

  const totalReviews = data.reviews.reduce((sum, r) => sum + r.count, 0);
  const averageRating =
    data.reviews.reduce((sum, r) => sum + r.rating * r.count, 0) / totalReviews;
  const currentRevenue = data.salesData[data.salesData.length - 1].revenue;
  const currentOrders = data.salesData[data.salesData.length - 1].orders;
  const currentUsers =
    data.userEngagement[data.userEngagement.length - 1].activeUsers;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/dashboard">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>

          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 ${data.product.color} rounded-xl flex items-center justify-center text-white text-2xl`}
            >
              {data.product.image}
            </div>
            <div>
              <h1 className="text-3xl font-bold">{data.product.name}</h1>
              <p className="text-muted-foreground">
                {data.product.category} • Product Analytics
              </p>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Monthly Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${currentRevenue.toLocaleString()}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />+
                {(
                  (currentRevenue /
                    data.salesData[data.salesData.length - 2].revenue -
                    1) *
                  100
                ).toFixed(1)}
                % from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{currentOrders}</div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />+
                {(
                  (currentOrders /
                    data.salesData[data.salesData.length - 2].orders -
                    1) *
                  100
                ).toFixed(1)}
                % from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Users
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {currentUsers.toLocaleString()}
              </div>
              <div className="flex items-center text-xs text-green-600">
                <ArrowUpRight className="h-3 w-3 mr-1" />+
                {(
                  (currentUsers /
                    data.userEngagement[data.userEngagement.length - 2]
                      .activeUsers -
                    1) *
                  100
                ).toFixed(1)}
                % from last month
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Average Rating
              </CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {averageRating.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">
                From {totalReviews} reviews
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="sales" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="sales">Sales & Revenue</TabsTrigger>
            <TabsTrigger value="users">User Analytics</TabsTrigger>
            <TabsTrigger value="customers">Customer Insights</TabsTrigger>
            <TabsTrigger value="reviews">Reviews & Feedback</TabsTrigger>
          </TabsList>

          {/* Sales Tab */}
          <TabsContent value="sales" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Revenue Trend
                  </CardTitle>
                  <CardDescription>Monthly revenue growth</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data.salesData}>
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
                    <Target className="h-5 w-5" />
                    Conversion Rate
                  </CardTitle>
                  <CardDescription>
                    Monthly conversion performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data.salesData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip
                        formatter={(value) => [
                          `${Number(value).toFixed(2)}%`,
                          "Conversion Rate",
                        ]}
                      />
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
                  <ShoppingCart className="h-5 w-5" />
                  Order Volume
                </CardTitle>
                <CardDescription>Monthly order trends</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={data.salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="orders" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Active Users Growth
                  </CardTitle>
                  <CardDescription>Monthly active user trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={data.userEngagement}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="activeUsers"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="h-5 w-5" />
                    User Sessions
                  </CardTitle>
                  <CardDescription>Monthly session volume</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data.userEngagement}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="sessions" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>User Retention Rate</CardTitle>
                <CardDescription>
                  Monthly user retention percentage
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {data.userEngagement.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.month}</span>
                      <span className="font-medium">
                        {item.retention.toFixed(1)}%
                      </span>
                    </div>
                    <Progress value={item.retention} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Customers Tab */}
          <TabsContent value="customers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Customer Segments
                </CardTitle>
                <CardDescription>
                  Distribution of customer types
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <PieChart>
                    <Pie
                      data={data.customerSegments}
                      cx="50%"
                      cy="50%"
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) =>
                        `${name} ${((percent || 0) * 100).toFixed(0)}%`
                      }
                    >
                      {data.customerSegments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5" />
                    Rating Distribution
                  </CardTitle>
                  <CardDescription>
                    Breakdown of customer ratings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {data.reviews.reverse().map((review, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="flex items-center gap-1 w-20">
                        <span className="text-sm font-medium">
                          {review.rating}
                        </span>
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <Progress
                          value={(review.count / totalReviews) * 100}
                          className="h-2"
                        />
                      </div>
                      <div className="text-sm text-muted-foreground w-12">
                        {review.count}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Review Summary
                  </CardTitle>
                  <CardDescription>Overall review statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold">
                      {averageRating.toFixed(1)}
                    </div>
                    <div className="flex items-center justify-center gap-1 mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= averageRating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">
                      Based on {totalReviews} reviews
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Positive Reviews</span>
                      <span className="text-sm font-medium">
                        {(
                          (((data.reviews[3]?.count || 0) +
                            (data.reviews[4]?.count || 0)) /
                            totalReviews) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Neutral Reviews</span>
                      <span className="text-sm font-medium">
                        {(
                          ((data.reviews[2]?.count || 0) / totalReviews) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Negative Reviews</span>
                      <span className="text-sm font-medium">
                        {(
                          (((data.reviews[0]?.count || 0) +
                            (data.reviews[1]?.count || 0)) /
                            totalReviews) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
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
