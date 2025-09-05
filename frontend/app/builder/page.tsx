"use client";

import React, { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
// Removed Tabs import since we're using single JSX editor like v0.dev
import {
  RefreshCw,
  Download,
  Code2,
  Eye,
  Sparkles,
  Layout,
  Play,
  Copy,
  Zap,
  Terminal,
} from "lucide-react";

// Next.js + Tailwind product templates (exactly like v0.dev)
const productTemplates = {
  "fitness-tracker": {
    name: "FitTrack Pro",
    category: "Fitness & Health",
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
    category: "Sustainable Products",
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

  "smart-headphones": {
    name: "AirPods Ultra",
    category: "Audio Technology",
    jsx: `import React, { useState } from 'react';

export default function AirPodsUltra() {
  const [selectedColor, setSelectedColor] = useState('white');
  const [isPlaying, setIsPlaying] = useState(false);

  const colors = {
    white: { bg: 'bg-gray-100', accent: 'bg-white' },
    black: { bg: 'bg-gray-900', accent: 'bg-gray-800' },
    blue: { bg: 'bg-blue-500', accent: 'bg-blue-600' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              AirPods <span className="text-purple-600">Ultra</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Revolutionary spatial audio with adaptive noise cancellation. 
              Experience music like never before.
            </p>
            
            {/* Color Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Choose Your Color</h3>
              <div className="flex gap-4">
                {Object.entries(colors).map(([color, styles]) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={\`w-12 h-12 rounded-full border-4 transition-all \${
                      selectedColor === color ? 'border-purple-500 scale-110' : 'border-gray-300'
                    } \${styles.accent}\`}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
                Buy Now - $299
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors">
                Try Free
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={\`w-80 h-80 mx-auto rounded-full \${colors[selectedColor].bg} flex items-center justify-center transition-all duration-500\`}>
              <div className="text-8xl">🎧</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon="🔊" 
              title="Spatial Audio" 
              description="Immersive 3D sound that adapts to your head movements"
            />
            <FeatureCard 
              icon="🔇" 
              title="Noise Cancellation" 
              description="Advanced ANC blocks out distractions completely"
            />
            <FeatureCard 
              icon="⚡" 
              title="30-Hour Battery" 
              description="All-day listening with fast charging case"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 rounded-2xl hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
  },

  "gaming-laptop": {
    name: "GameMaster X1",
    category: "Gaming Hardware",
    jsx: `import React, { useState } from 'react';

export default function GameMasterX1() {
  const [activeSpec, setActiveSpec] = useState('performance');

  const specs = {
    performance: { cpu: 'Intel i9-13900H', gpu: 'RTX 4080', ram: '32GB DDR5' },
    display: { size: '17.3"', refresh: '240Hz', resolution: '2560x1440' },
    storage: { ssd: '2TB NVMe', speed: '7000MB/s', type: 'PCIe 5.0' }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-7xl font-black mb-6 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              GAMEMASTER X1
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Unleash Your Gaming Potential
            </p>
            <div className="text-6xl mb-8">💻</div>
          </div>

          {/* Specs Tabs */}
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center gap-4 mb-8">
              {Object.keys(specs).map((spec) => (
                <button
                  key={spec}
                  onClick={() => setActiveSpec(spec)}
                  className={\`px-6 py-3 rounded-lg font-semibold transition-all \${
                    activeSpec === spec 
                      ? 'bg-red-600 text-white' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }\`}
                >
                  {spec.charAt(0).toUpperCase() + spec.slice(1)}
                </button>
              ))}
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {Object.entries(specs[activeSpec]).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-red-500 text-sm font-semibold uppercase tracking-wide mb-2">
                      {key}
                    </div>
                    <div className="text-2xl font-bold">{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-blue-600 text-white px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
              Configure Your Beast - $2,499
            </button>
          </div>
        </div>
      </div>

      {/* Gaming Performance */}
      <div className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Gaming Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <GameStat game="Cyberpunk 2077" fps="120" quality="Ultra" />
            <GameStat game="Call of Duty" fps="240" quality="Max" />
            <GameStat game="Elden Ring" fps="165" quality="High" />
            <GameStat game="Valorant" fps="400+" quality="Competitive" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GameStat({ game, fps, quality }) {
  return (
    <div className="bg-black rounded-xl p-6 border border-red-600/20 hover:border-red-600/50 transition-colors">
      <h3 className="font-bold text-lg mb-2">{game}</h3>
      <div className="text-3xl font-black text-red-500 mb-1">{fps} FPS</div>
      <div className="text-gray-400 text-sm">{quality} Settings</div>
    </div>
  );
}`,
  },

  "smart-home": {
    name: "HomeAI Hub",
    category: "Smart Home",
    jsx: `import React, { useState } from 'react';

export default function HomeAIHub() {
  const [connectedDevices, setConnectedDevices] = useState(24);
  const [isControlling, setIsControlling] = useState(false);

  const rooms = [
    { name: 'Living Room', devices: 8, temp: '72°F', status: 'active' },
    { name: 'Kitchen', devices: 5, temp: '70°F', status: 'active' },
    { name: 'Bedroom', devices: 6, temp: '68°F', status: 'sleep' },
    { name: 'Office', devices: 5, temp: '71°F', status: 'active' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-8xl mb-6">🏠</div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Home<span className="text-blue-600">AI</span> Hub
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your intelligent home command center. Control everything with voice, 
            AI automation, and seamless integration.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Start Setup - $199
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors">
              See Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600">{connectedDevices}</div>
              <div className="text-gray-600">Connected Devices</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">$127</div>
              <div className="text-gray-600">Monthly Savings</div>
            </div>
          </div>
        </div>

        {/* Room Control */}
        <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Room Control</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {rooms.map((room, index) => (
              <RoomCard key={index} {...room} />
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16">Smart Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SmartFeature 
              icon="🗣️" 
              title="Voice Control" 
              description="Control everything with natural voice commands"
            />
            <SmartFeature 
              icon="🤖" 
              title="AI Automation" 
              description="Learn your habits and automate your home"
            />
            <SmartFeature 
              icon="📱" 
              title="Mobile App" 
              description="Control from anywhere with our mobile app"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoomCard({ name, devices, temp, status }) {
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    sleep: 'bg-blue-100 text-blue-800'
  };

  return (
    <div className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold">{name}</h3>
        <span className={\`px-2 py-1 rounded-full text-xs \${statusColors[status]}\`}>
          {status}
        </span>
      </div>
      <div className="text-2xl font-bold text-blue-600 mb-1">{temp}</div>
      <div className="text-sm text-gray-600">{devices} devices</div>
    </div>
  );
}

function SmartFeature({ icon, title, description }) {
  return (
    <div className="text-center p-6">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
  },

  "electric-car": {
    name: "Tesla Model Y",
    category: "Electric Vehicles",
    jsx: `import React, { useState } from 'react';

export default function TeslaModelY() {
  const [selectedConfig, setSelectedConfig] = useState('long-range');
  const [color, setColor] = useState('white');

  const configs = {
    'long-range': { name: 'Long Range', price: '$52,990', range: '330 mi', speed: '4.8s' },
    'performance': { name: 'Performance', price: '$56,990', range: '303 mi', speed: '3.5s' }
  };

  const colors = {
    white: { name: 'Pearl White', bg: 'bg-gray-100', price: 'Included' },
    black: { name: 'Solid Black', bg: 'bg-gray-900', price: '$1,000' },
    blue: { name: 'Deep Blue', bg: 'bg-blue-600', price: '$1,000' },
    red: { name: 'Pearl Red', bg: 'bg-red-600', price: '$2,000' }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <div className="relative">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-7xl font-light mb-6">Model Y</h1>
            <p className="text-2xl text-gray-300 mb-8">
              The most capable and safe mid-size SUV ever
            </p>
          </div>

          {/* Car Visualization */}
          <div className="relative mb-16">
            <div className={\`w-full h-64 rounded-2xl mx-auto flex items-center justify-center transition-all duration-500 \${colors[color].bg}\`}>
              <div className="text-9xl">🚗</div>
            </div>
          </div>

          {/* Configuration */}
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left: Config Options */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Configure Your Model Y</h2>
                
                {/* Variant Selection */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Choose Variant</h3>
                  <div className="space-y-3">
                    {Object.entries(configs).map(([key, config]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedConfig(key)}
                        className={\`w-full p-4 rounded-xl border-2 transition-all \${
                          selectedConfig === key 
                            ? 'border-blue-500 bg-blue-500/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }\`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-left">
                            <div className="font-semibold">{config.name}</div>
                            <div className="text-sm text-gray-400">
                              {config.range} range • 0-60 mph in {config.speed}
                            </div>
                          </div>
                          <div className="text-xl font-bold">{config.price}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Paint Color</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(colors).map(([key, colorOption]) => (
                      <button
                        key={key}
                        onClick={() => setColor(key)}
                        className={\`p-3 rounded-xl border-2 transition-all \${
                          color === key 
                            ? 'border-blue-500 bg-blue-500/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }\`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={\`w-8 h-8 rounded-full \${colorOption.bg}\`}></div>
                          <div className="text-left">
                            <div className="font-medium">{colorOption.name}</div>
                            <div className="text-sm text-gray-400">{colorOption.price}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Summary */}
              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Your Model Y</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span>Model Y {configs[selectedConfig].name}</span>
                    <span>{configs[selectedConfig].price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{colors[color].name} Paint</span>
                    <span>{colors[color].price}</span>
                  </div>
                  <hr className="border-gray-700" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span>{configs[selectedConfig].price}</span>
                  </div>
                </div>
                
                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors mb-4">
                  Order Now
                </button>
                <button className="w-full border border-gray-600 text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors">
                  Schedule Test Drive
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs */}
      <div className="bg-gray-900 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Performance Specs</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <SpecCard title="Range" value={configs[selectedConfig].range} subtitle="EPA estimated" />
            <SpecCard title="0-60 mph" value={configs[selectedConfig].speed} subtitle="Acceleration" />
            <SpecCard title="Top Speed" value="155 mph" subtitle="Maximum" />
            <SpecCard title="Seating" value="7 seats" subtitle="Maximum capacity" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SpecCard({ title, value, subtitle }) {
  return (
    <div className="text-center">
      <h3 className="text-gray-400 mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
    </div>
  );
}`,
  },

  "coffee-machine": {
    name: "BrewMaster Pro",
    category: "Kitchen Appliances",
    jsx: `import React, { useState } from 'react';

export default function BrewMasterPro() {
  const [selectedBrew, setSelectedBrew] = useState('espresso');
  const [strength, setStrength] = useState(3);

  const brewTypes = {
    espresso: { name: 'Espresso', time: '30s', icon: '☕' },
    americano: { name: 'Americano', time: '45s', icon: '🫖' },
    latte: { name: 'Latte', time: '60s', icon: '🥛' },
    cappuccino: { name: 'Cappuccino', time: '50s', icon: '☕' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Brew<span className="text-amber-600">Master</span> Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional-grade espresso machine for the perfect cup every time. 
              15-bar pressure system with precision temperature control.
            </p>

            {/* Brew Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Choose Your Brew</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(brewTypes).map(([key, brew]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedBrew(key)}
                    className={\`p-4 rounded-xl border-2 transition-all \${
                      selectedBrew === key 
                        ? 'border-amber-500 bg-amber-50' 
                        : 'border-gray-200 hover:border-amber-300'
                    }\`}
                  >
                    <div className="text-2xl mb-2">{brew.icon}</div>
                    <div className="font-semibold">{brew.name}</div>
                    <div className="text-sm text-gray-500">{brew.time}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Strength Control */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Strength Level</h3>
              <div className="flex items-center gap-4">
                <span className="text-sm">Mild</span>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <button
                      key={level}
                      onClick={() => setStrength(level)}
                      className={\`w-8 h-8 rounded-full transition-all \${
                        level <= strength 
                          ? 'bg-amber-500' 
                          : 'bg-gray-200 hover:bg-gray-300'
                      }\`}
                    />
                  ))}
                </div>
                <span className="text-sm">Strong</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-colors">
                Buy Now - $899
              </button>
              <button className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Machine Visualization */}
          <div className="relative">
            <div className="w-80 h-96 mx-auto bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center">
                <div className="text-6xl mb-4">☕</div>
                <div className="text-white font-semibold">
                  {brewTypes[selectedBrew].name}
                </div>
                <div className="text-amber-400 text-sm">
                  Strength: {strength}/5
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16">Premium Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CoffeeFeature 
              icon="🌡️" 
              title="Precision Temperature" 
              description="Optimal brewing temperature maintained at 200°F ±2°"
            />
            <CoffeeFeature 
              icon="⚡" 
              title="15-Bar Pressure" 
              description="Professional-grade pressure for perfect extraction"
            />
            <CoffeeFeature 
              icon="🔄" 
              title="Auto Cleaning" 
              description="Self-cleaning cycle keeps your machine pristine"
            />
          </div>
        </div>

        {/* Coffee Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-8">Why Coffee Lovers Choose BrewMaster</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">2M+</div>
              <div className="text-gray-600">Cups Brewed Daily</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-600 mb-2">3 Year</div>
              <div className="text-gray-600">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CoffeeFeature({ icon, title, description }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
  },

  drone: {
    name: "SkyVision 4K",
    category: "Photography & Drones",
    jsx: `import React, { useState } from 'react';

export default function SkyVision4K() {
  const [activeFeature, setActiveFeature] = useState('camera');
  const [isFlying, setIsFlying] = useState(false);

  const features = {
    camera: { title: '4K HDR Camera', desc: 'Professional-grade imaging with gimbal stabilization' },
    flight: { title: '45min Flight Time', desc: 'Extended battery life for longer adventures' },
    range: { title: '10km Range', desc: 'Ultra-long range transmission with HD video' }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-blue-200">
      {/* Hero */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className={\`text-8xl transition-all duration-1000 \${isFlying ? 'transform -translate-y-4' : ''}\`}>
              🚁
            </div>
            {isFlying && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-blue-600 animate-pulse">
                Flying...
              </div>
            )}
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Sky<span className="text-blue-600">Vision</span> 4K
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Capture breathtaking aerial footage with our most advanced drone. 
            Professional cinematography made accessible.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
              Pre-Order - $1,299
            </button>
            <button 
              onClick={() => setIsFlying(!isFlying)}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {isFlying ? 'Land Drone' : 'Test Flight'}
            </button>
          </div>
        </div>

        {/* Feature Tabs */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex justify-center gap-4 mb-8">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={\`px-6 py-3 rounded-full font-semibold transition-all \${
                  activeFeature === key 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }\`}
              >
                {feature.title}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <h3 className="text-2xl font-bold mb-4">{features[activeFeature].title}</h3>
            <p className="text-gray-600 text-lg">{features[activeFeature].desc}</p>
          </div>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <DroneSpec icon="📹" title="4K 60fps" subtitle="Ultra HD Video" />
          <DroneSpec icon="🔋" title="45 minutes" subtitle="Flight Time" />
          <DroneSpec icon="📡" title="10km" subtitle="Transmission Range" />
          <DroneSpec icon="🎯" title="±0.1m" subtitle="Hovering Precision" />
        </div>

        {/* Flight Modes */}
        <div className="bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Intelligent Flight Modes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FlightMode 
              icon="🎬" 
              title="Cinema Mode" 
              description="Smooth cinematic movements for professional footage"
            />
            <FlightMode 
              icon="🏃" 
              title="ActiveTrack" 
              description="Automatically follows and films moving subjects"
            />
            <FlightMode 
              icon="🌅" 
              title="Hyperlapse" 
              description="Create stunning time-lapse videos from the sky"
            />
          </div>
        </div>

        {/* Safety Features */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Advanced Safety</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🛡️</div>
                <h3 className="text-xl font-bold">Obstacle Avoidance</h3>
              </div>
              <p className="text-gray-600">
                360° sensors detect and avoid obstacles automatically during flight
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-2xl">🏠</div>
                <h3 className="text-xl font-bold">Return to Home</h3>
              </div>
              <p className="text-gray-600">
                Automatically returns to takeoff point when battery is low
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DroneSpec({ icon, title, subtitle }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <div className="text-2xl font-bold text-blue-600 mb-1">{title}</div>
      <div className="text-gray-600 text-sm">{subtitle}</div>
    </div>
  );
}

function FlightMode({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}`,
  },

  skincare: {
    name: "GlowSerum Pro",
    category: "Beauty & Skincare",
    jsx: `import React, { useState } from 'react';

export default function GlowSerumPro() {
  const [skinType, setSkinType] = useState('normal');
  const [step, setStep] = useState(1);

  const skinTypes = {
    normal: { name: 'Normal', color: 'bg-green-100 text-green-800' },
    dry: { name: 'Dry', color: 'bg-blue-100 text-blue-800' },
    oily: { name: 'Oily', color: 'bg-yellow-100 text-yellow-800' },
    sensitive: { name: 'Sensitive', color: 'bg-pink-100 text-pink-800' }
  };

  const routine = [
    { step: 1, title: 'Cleanse', time: '30s', icon: '🧼' },
    { step: 2, title: 'Apply Serum', time: '1min', icon: '💧' },
    { step: 3, title: 'Massage', time: '2min', icon: '👋' },
    { step: 4, title: 'Moisturize', time: '30s', icon: '🧴' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      {/* Hero */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span>✨</span> Dermatologist Approved
            </div>
            
            <h1 className="text-6xl font-bold text-gray-900 mb-6">
              Glow<span className="text-rose-500">Serum</span> Pro
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Revolutionary anti-aging serum with 24K gold nanoparticles and 
              vitamin C. Clinically proven to reduce wrinkles by 40% in 30 days.
            </p>

            {/* Skin Type Selector */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Select Your Skin Type</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(skinTypes).map(([key, type]) => (
                  <button
                    key={key}
                    onClick={() => setSkinType(key)}
                    className={\`p-3 rounded-xl border-2 transition-all \${
                      skinType === key 
                        ? 'border-rose-500 bg-rose-50' 
                        : 'border-gray-200 hover:border-rose-300'
                    }\`}
                  >
                    <span className={\`inline-block px-3 py-1 rounded-full text-sm font-semibold \${type.color}\`}>
                      {type.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button className="bg-rose-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-600 transition-colors">
                Shop Now - $149
              </button>
              <button className="border-2 border-rose-500 text-rose-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-50 transition-colors">
                Try Sample
              </button>
            </div>
          </div>

          {/* Product Visualization */}
          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-gradient-to-br from-rose-200 to-pink-300 rounded-full flex items-center justify-center shadow-2xl">
              <div className="text-8xl">🧴</div>
            </div>
            <div className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-lg">
              <div className="text-2xl">✨</div>
            </div>
          </div>
        </div>

        {/* Usage Routine */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16">Daily Routine</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="flex bg-white rounded-full p-2 shadow-lg">
                {routine.map((item) => (
                  <button
                    key={item.step}
                    onClick={() => setStep(item.step)}
                    className={\`px-4 py-2 rounded-full font-semibold transition-all \${
                      step === item.step 
                        ? 'bg-rose-500 text-white' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }\`}
                  >
                    Step {item.step}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
              <div className="text-6xl mb-4">{routine[step - 1].icon}</div>
              <h3 className="text-2xl font-bold mb-2">{routine[step - 1].title}</h3>
              <p className="text-gray-600 mb-4">Duration: {routine[step - 1].time}</p>
              <div className="max-w-md mx-auto">
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-rose-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: \`\${(step / routine.length) * 100}%\` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-16">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BeautyBenefit 
              percentage="40%" 
              title="Wrinkle Reduction" 
              description="Visible reduction in fine lines and wrinkles"
              color="text-rose-500"
            />
            <BeautyBenefit 
              percentage="95%" 
              title="Skin Hydration" 
              description="Improved moisture retention and skin barrier"
              color="text-blue-500"
            />
            <BeautyBenefit 
              percentage="87%" 
              title="Brightness Boost" 
              description="Enhanced skin radiance and even tone"
              color="text-yellow-500"
            />
          </div>
        </div>

        {/* Ingredients */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8">Key Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <IngredientCard icon="✨" name="24K Gold" benefit="Anti-aging" />
            <IngredientCard icon="🍊" name="Vitamin C" benefit="Brightening" />
            <IngredientCard icon="🌿" name="Hyaluronic Acid" benefit="Hydration" />
            <IngredientCard icon="🧪" name="Retinol" benefit="Renewal" />
          </div>
        </div>
      </div>
    </div>
  );
}

function BeautyBenefit({ percentage, title, description, color }) {
  return (
    <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
      <div className={\`text-4xl font-bold mb-2 \${color}\`}>{percentage}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function IngredientCard({ icon, name, benefit }) {
  return (
    <div className="text-center p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
      <div className="text-3xl mb-2">{icon}</div>
      <h3 className="font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{benefit}</p>
    </div>
  );
}`,
  },
};

export default function WebsiteBuilder() {
  const [selectedTemplate, setSelectedTemplate] =
    useState<keyof typeof productTemplates>("fitness-tracker");
  const [code, setCode] = useState(productTemplates["fitness-tracker"].jsx);
  const [displayedCode, setDisplayedCode] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [isPreviewRefreshing, setIsPreviewRefreshing] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const template = productTemplates[selectedTemplate];
    setCode(template.jsx);
    generateCodeWithTypewriter(template.jsx);
  }, [selectedTemplate]);

  // Initialize with first template
  useEffect(() => {
    setDisplayedCode(productTemplates["fitness-tracker"].jsx);
    setShowPreview(false); // Don't show preview initially - wait for generation
  }, []);

  // Chunk-based typewriter effect for faster generation
  const generateCodeWithTypewriter = (targetCode: string) => {
    setIsGenerating(true);
    setDisplayedCode("");
    setGenerationProgress(0);
    setShowPreview(false);

    // Split code into meaningful chunks (by lines and logical blocks)
    const lines = targetCode.split("\n");
    const chunks: string[] = [];

    // Group lines into chunks for faster generation
    let currentChunk = "";

    lines.forEach((line, index) => {
      currentChunk += line;

      // Create chunk breaks at logical points
      const isImport = line.trim().startsWith("import");
      const isExport = line.trim().startsWith("export");
      const isClosingBrace = line.trim() === "}" || line.trim() === "};";
      const isEmptyLine = line.trim() === "";
      const isComment =
        line.trim().startsWith("//") || line.trim().startsWith("/*");
      const isJSXElement = line.includes("<") && line.includes(">");

      // End chunk at natural break points or every 2-4 lines
      if (
        isImport ||
        isExport ||
        isClosingBrace ||
        (index > 0 && (isEmptyLine || isComment)) ||
        (isJSXElement && Math.random() > 0.6) ||
        currentChunk.split("\n").length >= 3 + Math.floor(Math.random() * 2)
      ) {
        if (index < lines.length - 1) {
          currentChunk += "\n";
        }
        chunks.push(currentChunk);
        currentChunk = "";
      } else if (index < lines.length - 1) {
        currentChunk += "\n";
      }
    });

    // Add any remaining content
    if (currentChunk.trim()) {
      chunks.push(currentChunk);
    }

    let currentChunkIndex = 0;

    const typeNextChunk = () => {
      if (currentChunkIndex < chunks.length) {
        setDisplayedCode((prev) => prev + chunks[currentChunkIndex]);
        currentChunkIndex++;

        // Update progress
        const progress = (currentChunkIndex / chunks.length) * 100;
        setGenerationProgress(progress);

        // Variable delay between chunks for realistic feel
        const delay = Math.random() * 200 + 100; // 100-300ms between chunks
        setTimeout(typeNextChunk, delay);
      } else {
        setIsGenerating(false);
        setGenerationProgress(100);
        // Show preview immediately when progress reaches 100%
        setShowPreview(true);
      }
    };

    setTimeout(typeNextChunk, 500); // Initial delay
  };

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    setDisplayedCode(newCode);
    setIsGenerating(false);
    setShowPreview(true); // Show preview immediately when manually editing
  };

  const handleGenerateCode = () => {
    generateCodeWithTypewriter(code);
  };

  const refreshPreview = () => {
    setIsPreviewRefreshing(true);
    setTimeout(() => setIsPreviewRefreshing(false), 500);
  };

  const generatePreviewContent = () => {
    // Extract component name from the code
    const componentName =
      code.match(/export default function (\w+)/)?.[1] || "Component";

    // Clean up the code for browser execution
    const cleanedCode = code
      .replace(/import React.*?from ['"]react['"];?\s*/g, "")
      .replace(/export default function/, "function")
      .replace(/export default/, "const Component =");

    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Next.js Component Preview</title>
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone@7.23.6/babel.min.js"></script>
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body { margin: 0; padding: 0; }
            #root { width: 100%; min-height: 100vh; }
          </style>
      </head>
      <body>
          <div id="root"></div>
          <script type="text/babel" data-type="module">
            const { useState, useEffect, useRef } = React;
            
            try {
              ${cleanedCode}
              
              const root = ReactDOM.createRoot(document.getElementById('root'));
              root.render(React.createElement(${componentName}));
            } catch (error) {
              console.error('Preview Error:', error);
              document.getElementById('root').innerHTML = \`
                <div style="padding: 20px; color: #ef4444; font-family: monospace; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; margin: 20px;">
                  <h3 style="margin: 0 0 10px 0; color: #dc2626;">Preview Error</h3>
                  <p style="margin: 0; font-size: 14px;">\${error.message}</p>
                </div>
              \`;
            }
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
          <Card className="flex flex-col bg-white border-gray-200 shadow-lg">
            <CardHeader className="pb-3 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
                  <Terminal className="w-5 h-5 text-blue-600" />
                  AI Code Generator
                  {isGenerating && (
                    <div className="flex items-center gap-1 ml-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-100"></div>
                      <div className="w-1 h-1 bg-blue-600 rounded-full animate-pulse delay-200"></div>
                    </div>
                  )}
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleGenerateCode}
                    disabled={isGenerating}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                  >
                    <Zap className="w-4 h-4 mr-1" />
                    {isGenerating ? "Generating..." : "Regenerate"}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigator.clipboard.writeText(code)}
                    className="text-gray-600 hover:text-gray-700 hover:bg-gray-100"
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col min-h-0 p-0">
              {/* Status Bar */}
              <div className="px-4 py-2 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">
                        Next.js Component
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      {isGenerating
                        ? `Generating code... ${Math.round(
                            generationProgress
                          )}%`
                        : `${code.split("\n").length} lines`}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-blue-100 text-blue-700 border-blue-200"
                    >
                      React + Tailwind
                    </Badge>
                    {isGenerating && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-green-100 text-green-700 border-green-200"
                      >
                        <Play className="w-3 h-3 mr-1" />
                        Generating
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                {isGenerating && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-blue-500 h-1 rounded-full transition-all duration-300 ease-out"
                        style={{ width: `${generationProgress}%` }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Code Editor */}
              <div className="flex-1 relative bg-white">
                {isGenerating ? (
                  // AI Generation View
                  <div className="absolute inset-0 p-4 overflow-auto">
                    <pre className="text-sm font-mono text-gray-800 whitespace-pre-wrap leading-relaxed">
                      <code>
                        {displayedCode}
                        {cursorVisible && isGenerating && (
                          <span className="bg-blue-500 text-white ml-0.5 animate-pulse">
                            ▌
                          </span>
                        )}
                      </code>
                    </pre>
                  </div>
                ) : (
                  // Editable Textarea
                  <textarea
                    value={displayedCode || code}
                    onChange={(e) => handleCodeChange(e.target.value)}
                    className="w-full h-full p-4 text-sm font-mono bg-transparent text-gray-800 border-none resize-none focus:outline-none focus:ring-0 placeholder-gray-400 leading-relaxed"
                    placeholder="// Your Next.js component will appear here...
import React, { useState } from 'react';

export default function MyComponent() {
  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Your component code */}
    </div>
  );
}"
                    style={{
                      caretColor: "#2563eb",
                      scrollbarWidth: "thin",
                      scrollbarColor: "#d1d5db #f3f4f6",
                    }}
                  />
                )}

                {/* Syntax highlighting overlay (visual enhancement) */}
                <div className="absolute top-4 left-4 pointer-events-none opacity-30">
                  <div className="flex items-center gap-1 text-xs">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-gray-100 border-t border-gray-200 flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-4">
                  <span>UTF-8</span>
                  <span>TypeScript React</span>
                  <span>Ln {code.split("\n").length}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3 h-3 text-blue-500" />
                  <span className="text-blue-600">AI Enhanced</span>
                </div>
              </div>
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
                {!showPreview || generationProgress < 100 ? (
                  // Loading state while code is generating
                  <div className="w-full h-full flex items-center justify-center bg-gray-50">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {isGenerating
                          ? "Generating Preview..."
                          : "Preview Ready"}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {isGenerating
                          ? `AI is crafting your component... ${Math.round(
                              generationProgress
                            )}%`
                          : "Your component preview will appear here."}
                      </p>
                      {isGenerating && (
                        <div className="flex items-center justify-center gap-1">
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      )}
                    </div>
                  </div>
                ) : (
                  // Live preview iframe
                  <iframe
                    key={isPreviewRefreshing ? Date.now() : "preview"}
                    srcDoc={generatePreviewContent()}
                    className="w-full h-full border-none"
                    title="Website Preview"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
