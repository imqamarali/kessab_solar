"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Sun, Zap, Home, Battery } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function HowSolarWorksSection() {
  const steps = [
    {
      number: 1,
      title: "Solar Energy Capture",
      description:
        "Photovoltaic panels capture sunlight and convert it into direct current (DC) electricity, ensuring optimal solar energy absorption and utilization.",
      icon: Sun,
      color: "from-yellow-500 to-orange-500",
    },
    {
      number: 2,
      title: "DC to AC Conversion",
      description:
        "Inverters transform direct current (DC) into alternating current (AC) for household and business use, providing seamless and efficient power conversion.",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: 3,
      title: "Powering Appliances",
      description:
        "Converted electricity powers appliances, lighting, and equipment, reducing dependency on the main grid and ensuring reliable energy distribution.",
      icon: Home,
      color: "from-green-500 to-emerald-500",
    },
    {
      number: 4,
      title: "Energy Storage & Grid Integration",
      description:
        "Excess energy is stored in batteries or fed into the grid for later use, ensuring uninterrupted power supply and sustainability.",
      icon: Battery,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(6,214,160,0.1),transparent_50%)]"></div>

      <div className="container max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 shadow-sm border-green-500/30 text-green-700 dark:text-green-400">
            Technology Explained
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              How Solar Energy Works?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Understanding the complete process from sunlight capture to powering your home or business
          </p>
        </div>

        {/* Process Flow */}
        <div className="space-y-6 max-w-4xl mx-auto mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-24 w-0.5 h-12 bg-gradient-to-b from-green-500/50 to-emerald-500/50 md:hidden"></div>
                )}

                <div className="flex gap-6">
                  {/* Number Circle */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-2xl font-bold text-white">
                        {step.number}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                        <ArrowRight className="w-6 h-6 text-green-500 rotate-90" />
                      </div>
                    )}
                  </div>

                  {/* Content Card */}
                  <Card className="flex-1 border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-background/80 backdrop-blur">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            );
          })}
        </div>

        {/* Benefits Summary */}
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            {
              title: "100% Clean",
              description: "Zero emissions, completely renewable energy",
              icon: "🌱",
            },
            {
              title: "Cost Effective",
              description: "Reduce electricity bills by up to 70%",
              icon: "💰",
            },
            {
              title: "24/7 Available",
              description: "Battery backup ensures power anytime",
              icon: "⚡",
            },
            {
              title: "Long Lasting",
              description: "Solar panels last 25-30 years with minimal maintenance",
              icon: "🔋",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-4 rounded-lg bg-gradient-to-br from-background to-muted border border-green-500/20 text-center hover:border-green-500/50 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <h4 className="font-bold text-sm mb-1">{benefit.title}</h4>
              <p className="text-xs text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
