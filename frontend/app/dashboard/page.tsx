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
import {
  Package,
  BarChart3,
  ExternalLink,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Plus,
  X,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

// Products Mock Data
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

type Product = {
  id: string;
  name: string;
  description: string;
  category: string;
  status: string;
  monthlyRevenue: number;
  totalSales: number;
  conversionRate: number;
  rating: number;
  reviews: number;
  image: string;
  color: string;
  growth: number;
};

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>(userProducts);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    category: "",
  });

  const categories = [
    "Health & Fitness",
    "Education",
    "Home & Garden",
    "Productivity",
    "Food & Drink",
    "Technology",
    "Entertainment",
    "Business",
  ];

  const productEmojis = ["🚀", "⭐", "💡", "🎯", "🔥", "💎", "🌟", "🎨"];
  const productColors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-red-500",
    "bg-yellow-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
  ];

  const handleAddProduct = () => {
    if (
      !newProduct.name.trim() ||
      !newProduct.description.trim() ||
      !newProduct.category
    ) {
      return;
    }

    const randomEmoji =
      productEmojis[Math.floor(Math.random() * productEmojis.length)];
    const randomColor =
      productColors[Math.floor(Math.random() * productColors.length)];

    const product: Product = {
      id: newProduct.name.toLowerCase().replace(/\s+/g, "-"),
      name: newProduct.name,
      description: newProduct.description,
      category: newProduct.category,
      status: "Planning",
      monthlyRevenue: 0,
      totalSales: 0,
      conversionRate: 0,
      rating: 0,
      reviews: 0,
      image: randomEmoji,
      color: randomColor,
      growth: 0,
    };

    setProducts([...products, product]);
    setNewProduct({ name: "", description: "", category: "" });
    setShowAddModal(false);
  };

  return (
    <div
      className="min-h-screen bg-background font-sans"
      style={{ fontFamily: '"UberMove", "Helvetica Neue", Arial, sans-serif' }}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Products Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">
                Your Products
              </h2>
              <p className="text-muted-foreground">
                Manage and analyze your product portfolio
              </p>
            </div>
            <Button onClick={() => setShowAddModal(true)}>
              <Package className="w-4 h-4 mr-2" />
              Add New Product
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Card
                key={product.id}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
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
                        <div className="flex items-center gap-2 mt-1">
                          <Badge
                            variant={
                              product.status === "Active"
                                ? "default"
                                : product.status === "Beta"
                                ? "secondary"
                                : "outline"
                            }
                          >
                            {product.status}
                          </Badge>
                          <span className="text-sm text-muted-foreground">
                            {product.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="mt-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-bold">
                        ${product.monthlyRevenue.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Monthly Revenue
                      </div>
                      <div
                        className={`flex items-center text-xs ${
                          product.growth > 0 ? "text-green-600" : "text-red-600"
                        }`}
                      >
                        {product.growth > 0 ? (
                          <ArrowUpRight className="h-3 w-3 mr-1" />
                        ) : (
                          <ArrowDownRight className="h-3 w-3 mr-1" />
                        )}
                        {product.growth > 0 ? "+" : ""}
                        {product.growth}%
                      </div>
                    </div>

                    <div>
                      <div className="text-2xl font-bold">
                        {product.totalSales}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Total Sales
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {product.conversionRate}% conversion
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">
                        {product.rating}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({product.reviews} reviews)
                      </span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link href={`/dashboard/product/${product.id}`}>
                      <Button className="w-full" size="sm">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        View Dashboard
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-background border rounded-lg shadow-lg w-full max-w-md mx-4">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold">Add New Product</h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAddModal(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="p-4 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Product Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  placeholder="Enter product name..."
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Description
                </label>
                <Textarea
                  placeholder="Describe your product..."
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  className="min-h-[80px]"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Category
                </label>
                <select
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex justify-end gap-2 p-4 border-t">
              <Button variant="outline" onClick={() => setShowAddModal(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddProduct}>
                <Plus className="w-4 h-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
