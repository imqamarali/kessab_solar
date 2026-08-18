import Link from "next/link";
import {
  ArrowLeft,
  Star,
  CheckCircle,
  Phone,
  MapPin,
  Zap,
  Wrench,
  Eye,
  Smartphone,
  DollarSign,
  TrendingUp,
  Users,
  Lightbulb,
  HandshakeIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { specializedServices } from "@/lib/data/specialized-services";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { generateWhatsAppLink, whatsappMessages } from "@/lib/utils/whatsapp";
import ServicePageClient from "./page-client";

const service = specializedServices["water-pumping"];

export const metadata = {
  title: "Solar Water Pumping Systems | KESSAB SOLAR",
  description:
    "Efficient solar-powered water pumping solutions for agriculture, irrigation, and livestock. Zero fuel costs, 3-5 year ROI.",
  keywords: [
    "solar water pump",
    "agricultural solar",
    "solar irrigation",
    "livestock water",
  ],
};

export default function WaterPumpingPage() {
  return <ServicePageClient service={service} />;
}
