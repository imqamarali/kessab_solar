"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Leaf, Handshake, Star } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Innovation",
      description:
        "We embrace cutting-edge solar technologies and continuously seek smarter, cleaner, and more efficient energy solutions.",
      icon: Lightbulb,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Integrity",
      description:
        "We believe in honesty, transparency, and accountability — with our clients, our partners, and the planet.",
      icon: Heart,
      color: "from-red-500 to-pink-500",
    },
    {
      title: "Sustainability",
      description:
        "Every project we undertake is designed to reduce carbon impact and create long-term environmental value.",
      icon: Leaf,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Collaboration",
      description:
        "We work closely with communities, governments, and businesses to accelerate the transition to renewable energy.",
      icon: Handshake,
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Excellence",
      description:
        "We set high standards for quality, safety, and performance in everything we do — from design to delivery.",
      icon: Star,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(6,214,160,0.1),transparent_50%)]"></div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 shadow-sm border-green-500/30 text-green-700 dark:text-green-400">
            Our Core Values
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            What We <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Stand For</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our values guide every decision we make and every project we undertake. They represent our commitment to excellence and our vision for a sustainable energy future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-background/80 backdrop-blur"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Values Statement */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-2xl border border-slate-700">
          <h3 className="text-2xl font-bold mb-4 text-center">Our Commitment</h3>
          <p className="text-center text-slate-200 leading-relaxed max-w-3xl mx-auto">
            These core values are not just words on a page — they are the foundation of everything we do. From our engineers to our executives, every member of the KESSAB Solar team is dedicated to upholding these principles and delivering exceptional solar energy solutions that power a sustainable future.
          </p>
        </div>
      </div>
    </section>
  );
}
