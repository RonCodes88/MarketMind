"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Removed Tabs import since we're using single JSX editor like v0.dev
import {
  Play,
  RefreshCw,
  Download,
  Code2,
  Eye,
  Sparkles,
  Palette,
  Layout,
  Settings,
} from "lucide-react";

// Next.js + Tailwind product templates (exactly like v0.dev)
const productTemplates = {
  "fitness-tracker": {
    name: "FitTrack Pro",
    category: "Fitness Wearable",
    jsx: `import React, { useState, useEffect } from 'react';

export default function FitTrackPro() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePreOrder = () => {
    alert('Thank you for your interest! Pre-order functionality coming soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="hero bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 text-white py-20 px-6 text-center">
        <div className={\`transition-all duration-1000 \${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}\`}>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FitTrack Pro
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            The ultimate fitness companion that tracks your every move and motivates you to achieve your goals
          </p>
          <button
            onClick={handlePreOrder}
            onMouseEnter={() => setButtonHovered(true)}
            onMouseLeave={() => setButtonHovered(false)}
            className={\`bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform \${buttonHovered ? 'scale-105 shadow-xl' : 'scale-100'}\`}
          >
            Pre-Order Now - $199
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose FitTrack Pro?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: '💓', title: 'Heart Rate Monitoring', desc: '24/7 continuous heart rate tracking with advanced sensors for accurate health insights' },
            { icon: '🏃', title: 'Activity Tracking', desc: 'Track steps, distance, calories burned, and 20+ workout modes automatically' },
            { icon: '💤', title: 'Sleep Analysis', desc: 'Comprehensive sleep tracking with REM, deep sleep, and light sleep analysis' },
            { icon: '📱', title: 'Smart Notifications', desc: 'Stay connected with call, text, and app notifications right on your wrist' }
          ].map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Product Showcase */}
      <div className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 text-gray-800">See It In Action</h2>
        <div className="max-w-md mx-auto bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-2xl h-80 flex items-center justify-center text-white text-2xl font-semibold">
          FitTrack Pro Device
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={\`bg-white p-8 rounded-2xl shadow-lg text-center transition-all duration-300 transform \${isHovered ? 'scale-105 shadow-2xl' : 'scale-100'}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}`,
  },

  "eco-bottle": {
    name: "EcoFlow Bottle",
    category: "Sustainable Product",
    jsx: `import React, { useState, useEffect, useRef } from 'react';

export default function EcoFlowBottle() {
  const [countersAnimated, setCountersAnimated] = useState(false);
  const [stats, setStats] = useState({ bottles: 0, recycled: 0, chemicals: 0, retention: 0 });
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersAnimated) {
          animateCounters();
          setCountersAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        bottles: Math.floor(500 * progress),
        recycled: Math.floor(100 * progress),
        chemicals: 0,
        retention: Math.floor(24 * progress)
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats({ bottles: 500, recycled: 100, chemicals: 0, retention: 24 });
      }
    }, stepTime);
  };

  const handleOrder = () => {
    alert('🌱 Thank you for choosing sustainable! Order processing coming soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-8 animate-bounce">
            🌱 100% Eco-Friendly
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            EcoFlow Bottle
          </h1>
          <p className="text-xl md:text-2xl mb-10 opacity-95">
            Sustainable hydration that doesn't cost the earth. Made from 100% recycled materials.
          </p>
          <button
            onClick={handleOrder}
            className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            Order Now - $29.99
          </button>
        </div>
      </div>

      {/* Environmental Impact Stats */}
      <div ref={statsRef} className="py-20 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
            Our Environmental Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number={\`\${stats.bottles}M\`} label="Plastic bottles saved" />
            <StatCard number={\`\${stats.recycled}%\`} label="Recycled materials" />
            <StatCard number={stats.chemicals} label="Harmful chemicals" />
            <StatCard number={\`\${stats.retention}h\`} label="Temperature retention" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Premium Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { icon: '♻️', title: '100% Recycled Materials', desc: 'Made entirely from post-consumer recycled plastic, giving new life to waste materials.' },
            { icon: '❄️', title: '24-Hour Temperature Control', desc: 'Advanced insulation keeps drinks cold for 24 hours or hot for 12 hours.' },
            { icon: '💧', title: 'Leak-Proof Design', desc: 'Innovative seal technology ensures zero leaks, perfect for any adventure.' },
            { icon: '🌍', title: 'Carbon Neutral Shipping', desc: 'Every order is shipped carbon-neutral, minimizing our environmental footprint.' }
          ].map((feature, index) => (
            <FeatureItem key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-white p-8 rounded-2xl text-center shadow-lg">
      <div className="text-4xl md:text-5xl font-bold text-green-500 mb-3">
        {number}
      </div>
      <div className="text-gray-600 text-lg">
        {label}
      </div>
    </div>
  );
}

function FeatureItem({ icon, title, desc }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={\`flex items-start gap-6 p-6 rounded-xl transition-all duration-300 \${isHovered ? 'bg-green-50 shadow-lg' : 'bg-transparent'}\`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-xl text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  );
}`,
  },
};

export default function WebsiteBuilder() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof productTemplates>("fitness-tracker");
  const [code, setCode] = useState(productTemplates["fitness-tracker"].jsx);
  const [isPreviewRefreshing, setIsPreviewRefreshing] = useState(false);

  useEffect(() => {
    const template = productTemplates[selectedTemplate];
    setCode(template.jsx);
  }, [selectedTemplate]);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };

  const refreshPreview = () => {
    setIsPreviewRefreshing(true);
    setTimeout(() => setIsPreviewRefreshing(false), 500);
  };

  const generatePreviewContent = () => {
    // Convert React JSX to a preview-friendly format
    // In a real implementation, you'd use a JSX transformer like Babel
    // For this demo, we'll create a simplified preview
    const componentName =
      code.match(/export default function (\w+)/)?.[1] || "Component";

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Next.js Component Preview</title>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
          <div id="root"></div>
          <script type="text/babel">
            ${code}
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(React.createElement(${componentName}));
          </script>
      </body>
      </html>
    `;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  Website Builder
                </h1>
                <p className="text-sm text-muted-foreground">
                  Create stunning product websites with AI assistance
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={refreshPreview}>
                <RefreshCw
                  className={`w-4 h-4 mr-2 ${
                    isPreviewRefreshing ? "animate-spin" : ""
                  }`}
                />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Template Selector */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-foreground">
              Template:
            </span>
            <div className="flex gap-2">
              {Object.entries(productTemplates).map(([key, template]) => (
                <Button
                  key={key}
                  variant={selectedTemplate === key ? "default" : "outline"}
                  size="sm"
                  onClick={() =>
                    setSelectedTemplate(key as keyof typeof productTemplates)
                  }
                  className="text-xs"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {template.name}
                </Button>
              ))}
            </div>
          </div>

          <Badge variant="secondary" className="mb-4">
            <Layout className="w-3 h-3 mr-1" />
            {productTemplates[selectedTemplate].category}
          </Badge>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-200px)]">
          {/* Code Editor Panel */}
          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Code2 className="w-4 h-4" />
                  Code Editor
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Settings className="w-4 h-4 text-muted-foreground" />
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0 p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm font-medium">Next.js Component</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  React + Tailwind CSS
                </Badge>
              </div>

              <textarea
                value={code}
                onChange={(e) => handleCodeChange(e.target.value)}
                className="flex-1 w-full p-4 text-sm font-mono bg-muted border border-border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Enter your Next.js component code here..."
              />
            </CardContent>
          </Card>

          {/* Live Preview Panel */}
          <Card className="flex flex-col">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Eye className="w-4 h-4" />
                Live Preview
                {isPreviewRefreshing && (
                  <div className="ml-2 w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 min-h-0 p-0">
              <div className="h-full border border-border rounded-lg overflow-hidden bg-white">
                <iframe
                  key={isPreviewRefreshing ? Date.now() : "preview"}
                  srcDoc={generatePreviewContent()}
                  className="w-full h-full border-none"
                  title="Website Preview"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Assistant Panel (Future Enhancement) */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              AI Next.js Generator
              <Badge variant="outline" className="text-xs">
                Coming Soon
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Just like v0.dev! Generate complete Next.js components with
              Tailwind CSS from simple prompts. Create product landing pages,
              e-commerce sites, and marketing pages with modern React patterns,
              responsive design, and beautiful animations - all in a single
              component file.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
