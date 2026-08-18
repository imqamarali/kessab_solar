import { specializedServices } from "@/lib/data/specialized-services";
import ServicePageClient from "../water-pumping/page-client";

const service = specializedServices["custom-solutions"];

export const metadata = {
  title: "Custom Solar Solutions | KESSAB SOLAR",
  description:
    "Bespoke solar energy solutions designed for your unique requirements. Industrial, commercial, and specialized applications.",
  keywords: [
    "custom solar",
    "solar design",
    "industrial solar",
    "solar engineering",
  ],
};

export default function CustomSolutionsPage() {
  return <ServicePageClient service={service} />;
}
