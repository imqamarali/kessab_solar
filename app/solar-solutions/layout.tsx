import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Energy Solutions | KESSAB SOLAR",
  description: "Explore our comprehensive range of solar energy solutions for residential, commercial, and specialized applications.",
};

export default function SolarSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
