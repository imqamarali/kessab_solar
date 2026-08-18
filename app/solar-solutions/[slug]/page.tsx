import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  DollarSign,
  TrendingDown,
  Phone,
  MapPin,
  Zap,
  Shield,
  Lightbulb,
  Battery,
  Settings,
  Wrench,
  Leaf,
  Award,
  Home,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { solarSolutions, type SolarSolutionKey } from "@/lib/data/solar-solutions";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import SolarSolutionClient from "./page-client";

export function generateStaticParams() {
  return Object.keys(solarSolutions).map((slug) => ({
    slug,
  }));
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  DollarSign,
  TrendingDown,
  Zap,
  Shield,
  Lightbulb,
  Battery,
  Settings,
  Wrench,
  Leaf,
  Award,
  Home,
  MessageCircle,
  CheckCircle,
};

export default function SolarSolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const solution = solarSolutions[slug as SolarSolutionKey];

  if (!solution) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Solution Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The solar solution you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <SolarSolutionClient
      solution={solution}
      iconMap={iconMap}
    />
  );
}
