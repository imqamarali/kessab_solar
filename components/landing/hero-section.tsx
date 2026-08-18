"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Activity, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useDynamicCounter } from "@/hooks/use-dynamic-counter";

export default function HeroSection() {
  const { scrollToSection } = useSmoothScroll();

  // Dynamic counters that increase by one every day starting from today
  const satisfiedClientsCount = useDynamicCounter(1200);
  const activeTradersCount = useDynamicCounter(800);

  return (
    <section className="relative py-24 overflow-hidden bg-background text-foreground dark">
      <img
        src="https://kessabsolar.com/wp-content/uploads/2026/06/7874813-400x300.png"
        alt="hero image"
        className="absolute inset-0 object-cover w-full h-full opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-green-600/50 via-black to-muted-foreground/50"></div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-green-900 to-emerald-900 text-slate-200 hover:from-green-200 hover:to-emerald-800 border-0 px-4 py-2 font-medium">
                <Award className="w-4 h-4 mr-2" />
                Clean Energy Solutions
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Enterprise Solar Solutions &
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-300 bg-clip-text text-transparent">
                  {" "}
                  Smart Energy Technology
                </span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                A technology-driven company delivering scalable solar energy
                solutions for residential and commercial applications.
                Transforming the way you power your world.
              </p>
              <p className="text- text-green-400 leading-relaxed max-w-2xl">
                From design to delivery - comprehensive solar energy solutions
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300"
                asChild
              >
                <Link href="#solutions">
                  Explore Solutions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-muted-foreground text-slate-300 hover:bg-slate-40 hover:text-slate-200 hover:border-muted-foreground transition-all duration-300 bg-transparent"
                onClick={() => scrollToSection("capabilities")}
              >
                <Activity className="mr-2 w-4 h-4" />
                Our Capabilities
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              <div className="text-center group">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  500+
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  Projects Completed
                </div>
              </div>
              <div className="text-center group">
                <div className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                  1000+
                </div>
                <div className="text-slate-400 text-sm font-medium">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="relative w-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 rounded-3xl transform rotate-6 blur-3 xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200/10 to-slate-100/10 rounded-3xl transform -rotate-3"></div>
              <Image
                src="https://kessabsolar.com/wp-content/uploads/2026/05/1707285977-applications-of-solar-street-lighting-1000x1000-1-400x300.webp"
                alt="Solar Street Light Solution"
                width={600}
                height={500}
                className="relative object-cover w-full h-full rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
