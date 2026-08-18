"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Zap,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { SolarSolution } from "@/lib/data/solar-solutions";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign: () => <span>$</span>,
  TrendingDown: () => <span>↓</span>,
  Zap,
  Shield: () => <Shield />,
  Lightbulb: () => <span>💡</span>,
  Battery: () => <span>🔋</span>,
  Settings: () => <span>⚙️</span>,
  Wrench,
  Leaf: () => <span>🌿</span>,
  Award: () => <span>🏆</span>,
  Home: () => <span>🏠</span>,
  MessageCircle: () => <span>💬</span>,
  CheckCircle,
};

export default function SolarSolutionClient({
  solution,
  iconMap: providedIconMap,
}: {
  solution: SolarSolution;
  iconMap: Record<string, React.ComponentType<{ className?: string }>>;
}) {
  const IconComponent = providedIconMap[solution.features.items[0]] || CheckCircle;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-primary/5 via-background to-muted/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="flex items-center mb-6">
            <Link
              href="/"
              className="flex items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                <Zap className="w-3 h-3 mr-1" />
                {solution.badge}
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {solution.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {solution.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">System Price</p>
                  <p className="text-2xl font-bold">{solution.price}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Payback Period</p>
                  <p className="text-2xl font-bold">{solution.roi}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="text-2xl font-bold">{solution.capacity}</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Warranty</p>
                  <p className="text-2xl font-bold">{solution.warranty}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  Get Quote Now
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link
                    href={generateWhatsAppLink(whatsappMessages.tradingPlatforms)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="w-4 h-4 mr-2" />
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color.primary} rounded-lg transform rotate-6 opacity-30`}
              ></div>
              <div
                className={`absolute inset-0 bg-gradient-to-br ${solution.color.primary} rounded-lg transform -rotate-6 opacity-20`}
              ></div>
              <div
                className={`relative rounded-lg shadow-2xl bg-gradient-to-br ${solution.color.secondary} p-8 flex items-center justify-center min-h-80`}
              >
                <div className="text-center">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${solution.color.primary} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    High-quality solar solution image
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              {solution.overview.title}
            </h2>
            <div className="space-y-4">
              {solution.overview.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-base text-muted-foreground leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {solution.benefits.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.benefits.items.map((benefit, index) => (
              <Card key={index} className="border-0 hover:shadow-md transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${solution.color.primary} rounded-lg flex items-center justify-center flex-shrink-0`}
                    >
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <CardTitle className="text-lg">
                      {benefit.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {solution.features.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {solution.features.items.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
              >
                <CheckCircle
                  className={`w-5 h-5 ${solution.color.text} flex-shrink-0 mt-1`}
                />
                <p className="text-sm">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {solution.specifications.title}
          </h2>
          <div className="bg-background rounded-lg border">
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {solution.specifications.items.map((spec, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-muted/30" : ""}
                    >
                      <td className="px-6 py-3 font-semibold text-sm">
                        {spec.label}
                      </td>
                      <td className="px-6 py-3 text-muted-foreground text-sm">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {solution.applications.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.applications.items.map((app, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
              >
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-sm">{app}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {solution.installation.title}
          </h2>
          <Card className="border-0">
            <CardHeader>
              <Badge className="w-fit mb-3">
                <Zap className="w-3 h-3 mr-1" />
                Timeline: {solution.installation.duration}
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {solution.installation.steps.map((step, index) => (
                <div key={index} className="flex space-x-4">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${solution.color.primary} rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm`}
                  >
                    {index + 1}
                  </div>
                  <div className="pt-1">
                    <p className="text-sm text-muted-foreground">{step}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Maintenance Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">
            {solution.maintenance.title}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {solution.maintenance.tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg"
              >
                <Wrench className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-sm">{task}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-12 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="bg-background rounded-lg p-8 border">
            <h2 className="text-3xl font-bold mb-6">
              {solution.roi.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Annual Savings
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {solution.roi.savingsPerYear}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Payback Period
                </p>
                <p className="text-3xl font-bold text-green-600">
                  {solution.roi.paybackPeriod}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  System Lifespan
                </p>
                <p className="text-3xl font-bold text-green-600">
                  25-30 Years
                </p>
              </div>
            </div>
            <Separator className="my-6" />
            <p className="text-base text-muted-foreground leading-relaxed">
              {solution.roi.content}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-background">
        <div className="container max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {solution.testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex space-x-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground mb-2">
                      {testimonial.location}
                    </p>
                    <p className="text-xs bg-muted/50 px-2 py-1 rounded w-fit">
                      {testimonial.system}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-500/10 via-background to-emerald-500/10 border-t">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Go Solar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and custom quote for your{" "}
            {solution.name.toLowerCase()}. Our expert team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call +974 33680965
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link
                href={generateWhatsAppLink(whatsappMessages.tradingPlatforms)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="w-4 h-4 mr-2" />
                Message on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
