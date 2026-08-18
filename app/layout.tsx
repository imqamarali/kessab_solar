import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { homePageSEO } from "@/lib/seo";
import {
  ProfixOrganizationSchema,
  ProfixWebSiteSchema,
} from "@/components/seo/structured-data";
import { ClientCoreWebVitalsMonitor } from "@/components/seo/client-monitor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  ...homePageSEO,
  generator: "Next.js",
  applicationName: "KESSAB Solar",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "KESSAB Solar", url: "https://kessabsolar.com" }],
  creator: "KESSAB Solar",
  publisher: "KESSAB Solar",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  category: "Energy",
  classification: "Business",
  other: {
    "msapplication-TileColor": "#10b981",
    "theme-color": "#10b981",
  },
};

export const viewport: Viewport = {
  themeColor: "#10b981",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/image.png?v=1" type="image/png" />
        <link rel="shortcut icon" href="/images/image.png?v=1" />
        <link rel="apple-touch-icon" href="/images/image.png?v=1" />
        {/* Structured data for KESSAB Solar */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "KESSAB Solar",
            "url": "https://kessabsolar.com",
            "logo": "https://kessabsolar.com/wp-content/uploads/2026/04/Kessab-Logo-04-e1776929331100.png",
            "description": "Leading solar energy solutions provider",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+974-4417-8557",
              "email": "info@kessabsolar.com"
            }
          })}
        </script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClientCoreWebVitalsMonitor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
