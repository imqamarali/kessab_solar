import { specializedServices } from "@/lib/data/specialized-services";
import ServicePageClient from "../water-pumping/page-client";

const service = specializedServices["street-light"];

export const metadata = {
  title: "Solar Street Lighting Systems | KESSAB SOLAR",
  description:
    "Autonomous solar street lights for roads, parking, and public spaces. Zero wiring, zero electricity costs. 2-4 year ROI.",
  keywords: [
    "solar street lights",
    "solar street lamp",
    "public lighting",
    "outdoor lighting",
  ],
};

export default function StreetLightPage() {
  return <ServicePageClient service={service} />;
}
