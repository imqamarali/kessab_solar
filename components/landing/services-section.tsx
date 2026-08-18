import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  LineChart,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Shield,
  Award,
} from "lucide-react";

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-14 bg-gradient-to-br from-muted/20 via-muted/30 to-muted/20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(var(--primary)/0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(var(--primary)/0.03),transparent_50%)]"></div>

      <div className="container max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            Our Solutions
          </Badge>
          <h2 className="text-3xl font-bold mb-2">Solar Energy Solutions</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solar energy products and services for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-background/80 backdrop-blur-sm overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-50`}
                ></div>
                <Image
                  src={service.image || "/images/placeholder.svg"}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4 h-auto">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-2 mt-auto">
                  <Button
                    variant="link"
                    size="sm"
                    className="py-1 h-auto font-medium"
                    asChild
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-3 h-3 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Service Features */}
        <div className="mt-12 bg-primary/5 backdrop-blur rounded-lg p-6 border border-primary/15 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Expert Installation</h4>
              <p className="text-xs text-muted-foreground">
                Professional setup & commissioning
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Quality Assured</h4>
              <p className="text-xs text-muted-foreground">
                High standards & safety
              </p>
            </div>
            <div className="space-y-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Maintenance Support</h4>
              <p className="text-xs text-muted-foreground">
                Long-term performance guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: LineChart,
    title: "Solar Water Pumping",
    slug: "water-pumping",
    description:
      "Efficient solar-powered water pumping systems for agricultural and residential applications with reliable performance",
    image: "https://kessabsolar.com/wp-content/uploads/2026/06/7874813-400x300.png",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Solar Street Light",
    slug: "street-light",
    description:
      "Renewable energy lighting solutions for public spaces and pathways with automatic control and weather resistance",
    image: "https://kessabsolar.com/wp-content/uploads/2026/05/1707285977-applications-of-solar-street-lighting-1000x1000-1-400x300.webp",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Briefcase,
    title: "Solar Camera",
    slug: "solar-camera",
    description:
      "Advanced solar-powered surveillance systems with continuous operation and remote monitoring capabilities",
    image: "https://kessabsolar.com/wp-content/uploads/2026/05/Solar-Powered-Products-landingpage_image02-400x300.jpg",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Star,
    title: "Custom Solutions",
    slug: "custom-solutions",
    description:
      "Tailored solar energy solutions designed specifically for your residential and commercial power needs",
    image: "https://kessabsolar.com/wp-content/uploads/2026/04/Kessab-Logo-04-e1776929331100.png",
    gradient: "from-orange-500 to-red-600",
  },
];
