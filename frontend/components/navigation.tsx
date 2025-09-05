"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">
            {pathname === "/dashboard"
              ? "MarketMind Products"
              : pathname === "/summary"
              ? "MarketMind Summary"
              : pathname === "/outreach"
              ? "MarketMind Outreach"
              : pathname === "/builder"
              ? "MarketMind Builder"
              : "MarketMind"}
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className={`transition-colors hover:text-foreground ${
              pathname === "/"
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`transition-colors hover:text-foreground ${
              pathname === "/dashboard"
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            Products
          </Link>
          <Link
            href="/summary"
            className={`transition-colors hover:text-foreground ${
              pathname === "/summary"
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            Summary
          </Link>
          <Link
            href="/outreach"
            className={`transition-colors hover:text-foreground ${
              pathname === "/outreach"
                ? "text-foreground font-medium"
                : "text-muted-foreground"
            }`}
          >
            Outreach
          </Link>
          <Link
            href="/builder"
            className={`transition-colors ${
              pathname === "/builder"
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Builder
          </Link>
          <ThemeToggle />
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}
