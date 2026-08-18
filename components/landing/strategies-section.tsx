import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Shield,
  Zap,
  Leaf,
  BarChart3,
  Globe,
  Gauge,
  Target,
  Activity,
} from "lucide-react";

export default function StrategiesSection() {
  return (
    <section id="capabilities" className="py-16 relative">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/50 via-green-500/10 to-background/70" />
      <div className="container max-w-7xl mx-auto px-4 relative overflow-hidden">
        <div className="absolute w-80 h-80 rounded-full bg-green-500/40 top-40 left-1/2 blur-3xl"></div>
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-3 shadow-sm">
            Our Capabilities
          </Badge>
          <h2 className="text-3xl font-bold mb-2">Solar Energy Capabilities</h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive approach to delivering successful solar energy solutions
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mb-12 relative">
          {solarCapabilities.map((item, index) => (
            <Card
              key={index}
              className="border-0 hover:shadow bg-background/50 backdrop-blur-sm group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl ">{item.title}</CardTitle>
                    <CardDescription
                      className={`${item.subtitleColor} font-semibold`}
                    >
                      {item.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Services */}
        <div className="backdrop-blur rounded-2xl p-10 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-500/20 to-green-500/5 blur-3xl opacity-40"></div>
          <h3 className="text-3xl font-bold mb-10 text-green-600 dark:text-green-400 relative">
            Core Solar Services
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-1 relative">
            {coreServices.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} backdrop-blur p-4 group transition-all duration-300/60`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex justify-center items-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
                <h4 className="font-bold mb-1 ">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const solarCapabilities = [
  {
    title: "Expert System Design",
    subtitle: "Customized for your needs",
    description:
      "Our solar experts assess your specific requirements and design custom systems optimized for maximum energy generation, cost efficiency, and long-term performance.",
    icon: <Zap className="w-8 h-8 text-white" />,
    gradient: "from-green-500 to-emerald-600",
    subtitleColor: "text-emerald-600",
  },
  {
    title: "Professional Installation",
    subtitle: "Quality & safety assured",
    description:
      "Certified technicians handle complete installation with rigorous quality control. Every system undergoes comprehensive testing before activation.",
    icon: <Shield className="w-8 h-8 text-white" />,
    gradient: "from-teal-500 to-cyan-600",
    subtitleColor: "text-cyan-600",
  },
  {
    title: "Renewable Energy Transition",
    subtitle: "Clean energy future",
    description:
      "Transform your energy consumption with sustainable solar power. Reduce carbon footprint while gaining energy independence and long-term savings.",
    icon: <Leaf className="w-8 h-8 text-white" />,
    gradient: "from-emerald-500 to-teal-600",
    subtitleColor: "text-teal-600",
  },
  {
    title: "24/7 System Monitoring",
    subtitle: "Real-time performance tracking",
    description:
      "Advanced monitoring systems provide real-time performance data. Our support team proactively maintains optimal system efficiency around the clock.",
    icon: <Gauge className="w-8 h-8 text-white" />,
    gradient: "from-blue-500 to-indigo-600",
    subtitleColor: "text-indigo-600",
  },
];

const coreServices = [
  {
    title: "Design & Engineering",
    description: "System design and technical specifications",
    icon: Target,
    bgColor: "bg-green-500/5",
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-white",
  },
  {
    title: "Supply & Quality",
    description: "Premium components from trusted manufacturers",
    icon: Gauge,
    bgColor: "bg-emerald-500/5",
    gradient: "from-emerald-500 to-teal-600",
    iconColor: "text-white",
  },
  {
    title: "Installation",
    description: "Professional installation with quality assurance",
    icon: Zap,
    bgColor: "bg-teal-500/5",
    gradient: "from-teal-500 to-cyan-600",
    iconColor: "text-white",
  },
  {
    title: "Testing & Commissioning",
    description: "Comprehensive testing and system activation",
    icon: Activity,
    bgColor: "bg-cyan-500/5",
    gradient: "from-cyan-500 to-blue-600",
    iconColor: "text-white",
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance and system care",
    icon: Shield,
    bgColor: "bg-blue-500/5",
    gradient: "from-blue-500 to-indigo-600",
    iconColor: "text-white",
  },
  {
    title: "Expert Support",
    description: "24/7 customer support and assistance",
    icon: Globe,
    bgColor: "bg-indigo-500/5",
    gradient: "from-indigo-500 to-purple-600",
    iconColor: "text-white",
  },
];
