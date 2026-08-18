import { specializedServices } from "@/lib/data/specialized-services";
import ServicePageClient from "../water-pumping/page-client";

const service = specializedServices["solar-camera"];

export const metadata = {
  title: "Solar-Powered Security Cameras | KESSAB SOLAR",
  description:
    "Autonomous 24/7 solar security cameras with WiFi, cloud storage, and mobile app access. Zero wiring, zero electricity costs.",
  keywords: [
    "solar camera",
    "security camera",
    "wireless security camera",
    "outdoor camera",
  ],
};

export default function SolarCameraPage() {
  return <ServicePageClient service={service} />;
}
