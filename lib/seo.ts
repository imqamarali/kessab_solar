import { Metadata } from "next";

const baseUrl = "https://kessabsolar.com";
const siteName = "KESSAB Solar";

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    image = "/og-image.png",
    url,
    type = "website",
    publishedTime,
    modifiedTime,
    author = "PROFIX MARKETING",
    section,
    tags = [],
  } = config;

  const fullTitle = `${title} | ${siteName}`;
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = `${baseUrl}${image}`;

  const defaultKeywords = [
    "KESSAB Solar",
    "Solar Energy",
    "Solar Power",
    "Renewable Energy",
    "Solar Panels",
    "Solar Water Pumping",
    "Solar Street Light",
    "Solar Camera",
    "Clean Energy",
    "Sustainable Energy",
    "Solar Solutions",
    "Energy Solutions",
    "Solar Installation",
  ];

  return {
    title: fullTitle,
    description,
    keywords: [...defaultKeywords, ...keywords],
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
      publishedTime,
      modifiedTime,
      authors: [author],
      section,
      tags,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@kessabsolar",
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
  };
}

// Predefined metadata for common pages
export const homePageSEO = generateMetadata({
  title: "Solar Energy Solutions",
  description:
    "Leading solar energy company delivering clean, efficient, and affordable renewable energy solutions for residential and commercial applications. Expert installation and support.",
  keywords: [
    "Solar Energy",
    "Renewable Energy",
    "Solar Power Solutions",
    "Clean Energy",
  ],
  url: "/",
});

export const tradingPlatformsSEO = generateMetadata({
  title: "Trading Platforms",
  description:
    "Discover advanced trading platforms and tools designed for professional traders. Access real-time market data, advanced charting, and seamless execution.",
  keywords: [
    "Trading Platforms",
    "MT4",
    "MT5",
    "TradingView",
    "Charting Tools",
  ],
  url: "/trading-platforms",
});

export const clientEducationSEO = generateMetadata({
  title: "Trading Education Hub",
  description:
    "Master the markets with our comprehensive library of trading guides, tutorials, and expert insights. From beginner basics to advanced strategies.",
  keywords: [
    "Trading Education",
    "Trading Guides",
    "Market Tutorials",
    "Trading Strategies",
  ],
  url: "/services/client-education",
  type: "article",
  section: "Education",
});

export const customerCentricSEO = generateMetadata({
  title: "Customer-Centric Trading Services",
  description:
    "Experience personalized trading services tailored to your unique needs. Our customer-centric approach ensures your success in financial markets.",
  keywords: [
    "Customer Service",
    "Personalized Trading",
    "Trading Support",
    "Client Success",
  ],
  url: "/services/customer-centric",
});

export const dedicatedManagersSEO = generateMetadata({
  title: "Dedicated Trading Managers",
  description:
    "Work with experienced trading managers who provide personalized guidance and strategic insights for your investment portfolio.",
  keywords: [
    "Trading Managers",
    "Portfolio Management",
    "Investment Guidance",
    "Trading Strategy",
  ],
  url: "/services/dedicated-managers",
});

export const marketInsightsSEO = generateMetadata({
  title: "Market Insights & Analysis",
  description:
    "Access expert market analysis, real-time insights, and strategic recommendations to make informed trading decisions.",
  keywords: [
    "Market Analysis",
    "Trading Insights",
    "Market Research",
    "Financial Analysis",
  ],
  url: "/services/market-insights",
  type: "article",
  section: "Analysis",
});

// Legal pages SEO
export const privacyPolicySEO = generateMetadata({
  title: "Privacy Policy",
  description:
    "Learn how PROFIX MARKETING protects your privacy and handles your personal information in accordance with data protection regulations.",
  keywords: ["Privacy Policy", "Data Protection", "Personal Information"],
  url: "/legal/privacy-policy",
});

export const termsOfServiceSEO = generateMetadata({
  title: "Terms of Service",
  description:
    "Read our terms of service to understand the conditions and guidelines for using PROFIX MARKETING services.",
  keywords: ["Terms of Service", "Service Agreement", "Terms and Conditions"],
  url: "/legal/terms-of-service",
});

export const riskDisclosureSEO = generateMetadata({
  title: "Risk Disclosure",
  description:
    "Important information about the risks associated with trading financial instruments. Understand the potential losses before trading.",
  keywords: [
    "Risk Disclosure",
    "Trading Risks",
    "Financial Risks",
    "Investment Risks",
  ],
  url: "/legal/risk-disclosure",
});

export const complianceSEO = generateMetadata({
  title: "Compliance & Regulations",
  description:
    "Learn about our compliance with financial regulations and commitment to maintaining the highest standards of professional conduct.",
  keywords: [
    "Compliance",
    "Financial Regulations",
    "Regulatory Compliance",
    "Professional Standards",
  ],
  url: "/legal/compliance",
});

// Blog post SEO generator
export function generateBlogPostSEO(post: {
  title: string;
  description: string;
  slug: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  category?: string;
  tags?: string[];
}): Metadata {
  return generateMetadata({
    title: post.title,
    description: post.description,
    keywords: [post.category, ...(post.tags || [])],
    url: `/services/client-education/blog-detail`,
    type: "article",
    publishedTime: post.publishedTime,
    modifiedTime: post.modifiedTime,
    author: post.author || "PROFIX Team",
    section: post.category,
    tags: post.tags,
  });
}
