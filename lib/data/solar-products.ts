export interface SolarProduct {
  id: string;
  name: string;
  type: "residential" | "commercial";
  description: string;
  features: string[];
  badge: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
    text: string;
  };
  icon: string;
  capacity?: string;
  price?: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: {
    primary: string;
    secondary: string;
    gradient: string;
  };
  products: SolarProduct[];
}

export const solarProductsData: ProductCategory[] = [
  {
    id: "residential",
    name: "Residential Systems",
    description: "Complete solar solutions for homes",
    icon: "HouseSolarPanel",
    color: {
      primary: "from-green-500 to-emerald-600",
      secondary: "from-green-50 to-emerald-50",
      gradient: "from-green-950/20 to-emerald-950/20",
    },
    products: [
      {
        id: "on-grid-residential",
        name: "On-Grid System",
        type: "residential",
        description:
          "Grid-connected solar system for homes with net metering and reduced electricity bills.",
        features: [
          "5-10 kW typical system size",
          "30-70% electricity bill reduction",
          "Net metering with grid backup",
          "25-30 year system lifespan",
          "Government tax incentives available",
        ],
        badge: "Popular",
        capacity: "5-10 kW",
        price: "From $10,000",
        color: {
          primary: "from-green-500 to-emerald-600",
          secondary:
            "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
          gradient:
            "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
          text: "text-green-600 dark:text-green-400",
        },
        icon: "HouseSolarPanel",
      },
      {
        id: "off-grid-residential",
        name: "Off-Grid System",
        type: "residential",
        description:
          "Complete energy independence with battery storage for homes in remote areas.",
        features: [
          "3-8 kW solar array",
          "20-40 kWh battery storage",
          "Complete independence from grid",
          "Ideal for remote locations",
          "Manual load management",
        ],
        badge: "Independent",
        capacity: "3-8 kW",
        price: "From $25,000",
        color: {
          primary: "from-emerald-500 to-teal-600",
          secondary:
            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
          gradient:
            "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
          text: "text-emerald-600 dark:text-emerald-400",
        },
        icon: "HouseSolarPanel",
      },
      {
        id: "hybrid-residential",
        name: "Hybrid System",
        type: "residential",
        description:
          "Grid-connected with battery backup for maximum energy independence and reliability.",
        features: [
          "5-10 kW solar capacity",
          "10-20 kWh battery backup",
          "Grid connection with battery storage",
          "Protection during outages",
          "Optimal cost-benefit ratio",
        ],
        badge: "Advanced",
        capacity: "5-10 kW",
        price: "From $18,000",
        color: {
          primary: "from-teal-500 to-cyan-600",
          secondary:
            "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
          gradient:
            "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
          text: "text-teal-600 dark:text-teal-400",
        },
        icon: "HouseSolarPanel",
      },
    ],
  },
  {
    id: "commercial",
    name: "Commercial & Industrial",
    description: "Large-scale solar solutions for businesses",
    icon: "Building",
    color: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "from-blue-50 to-cyan-50",
      gradient: "from-blue-950/20 to-cyan-950/20",
    },
    products: [
      {
        id: "on-grid-commercial",
        name: "Commercial On-Grid",
        type: "commercial",
        description:
          "Large-scale solar installation for businesses with significant energy cost savings.",
        features: [
          "25-100+ kW system capacity",
          "40-60% operational cost reduction",
          "Scalable to any business size",
          "MACRS depreciation benefits",
          "Immediate cash flow improvements",
        ],
        badge: "Enterprise",
        capacity: "25-100+ kW",
        price: "Custom Quote",
        color: {
          primary: "from-blue-500 to-indigo-600",
          secondary:
            "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
          gradient:
            "from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20",
          text: "text-blue-600 dark:text-blue-400",
        },
        icon: "Building",
      },
      {
        id: "industrial-solar",
        name: "Industrial Solar",
        type: "commercial",
        description:
          "Mega-scale solar systems for industrial facilities and manufacturing plants.",
        features: [
          "100+ kW to multi-megawatt systems",
          "Ground-mounted or rooftop installation",
          "Advanced monitoring and management",
          "Professional engineering and design",
          "Long-term energy security",
        ],
        badge: "Industrial",
        capacity: "100+ kW",
        price: "Custom Quote",
        color: {
          primary: "from-indigo-500 to-blue-600",
          secondary:
            "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
          gradient:
            "from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20",
          text: "text-indigo-600 dark:text-indigo-400",
        },
        icon: "Building",
      },
      {
        id: "utility-scale",
        name: "Utility Scale",
        type: "commercial",
        description:
          "Large-scale solar farms generating power for utilities and municipalities.",
        features: [
          "Megawatt-scale systems",
          "Community solar benefits",
          "Grid-scale energy storage",
          "Environmental impact positive",
          "Long-term power purchase agreements",
        ],
        badge: "Utility",
        capacity: "Megawatts",
        price: "Custom Quote",
        color: {
          primary: "from-cyan-500 to-blue-600",
          secondary:
            "bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300",
          gradient:
            "from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
          text: "text-cyan-600 dark:text-cyan-400",
        },
        icon: "Building",
      },
    ],
  },
];

export const solarComparison = {
  onGrid: {
    name: "On-Grid System",
    description: "Most popular and affordable solar solution",
    color: "text-green-600 dark:text-green-400",
    features: [
      "Lowest installation cost",
      "Net metering for bill credits",
      "Grid serves as backup",
      "No battery storage needed",
      "Highest efficiency",
      "Easy system expansion",
    ],
    info: "/learn/on-grid-systems",
  },
  offGrid: {
    name: "Off-Grid System",
    description: "Complete energy independence with battery storage",
    color: "text-emerald-600 dark:text-emerald-400",
    features: [
      "Complete independence from grid",
      "Battery storage included",
      "Perfect for remote locations",
      "Higher upfront cost",
      "Requires maintenance",
      "Guaranteed power supply",
    ],
    info: "/learn/off-grid-systems",
  },
  hybrid: {
    name: "Hybrid System",
    description: "Combines grid reliability with energy independence",
    color: "text-teal-600 dark:text-teal-400",
    features: [
      "Grid connection with battery backup",
      "Protection during outages",
      "Net metering benefits",
      "Energy independence option",
      "Optimal cost-benefit ratio",
      "Maximum flexibility",
    ],
    info: "/learn/hybrid-systems",
  },
};
