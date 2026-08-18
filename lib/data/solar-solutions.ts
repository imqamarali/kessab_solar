export interface SolarSolution {
  id: string;
  name: string;
  slug: string;
  category: "residential" | "commercial" | "specialized";
  badge: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  capacity: string;
  voltage: string;
  batteryCapacity?: string;
  price: string;
  roi: string;
  warranty: string;

  overview: {
    title: string;
    content: string[];
  };

  features: {
    title: string;
    items: string[];
  };

  benefits: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };

  specifications: {
    title: string;
    items: Array<{
      label: string;
      value: string;
    }>;
  };

  applications: {
    title: string;
    items: string[];
  };

  installation: {
    title: string;
    steps: string[];
    duration: string;
  };

  maintenance: {
    title: string;
    tasks: string[];
  };

  roi: {
    title: string;
    content: string;
    savingsPerYear: string;
    paybackPeriod: string;
  };

  testimonials: Array<{
    name: string;
    location: string;
    text: string;
    system: string;
  }>;

  relatedProducts: string[];

  color: {
    primary: string;
    secondary: string;
    gradient: string;
    text: string;
  };
}

export const solarSolutions: Record<string, SolarSolution> = {
  "on-grid-residential": {
    id: "on-grid-residential",
    name: "On-Grid Solar System",
    slug: "on-grid-residential",
    category: "residential",
    badge: "Popular",
    shortDescription:
      "Grid-connected solar system for homes with net metering and reduced electricity bills.",
    longDescription:
      "Our On-Grid Solar System is the most popular and affordable residential solar solution. It connects directly to your local utility grid, allowing you to sell excess energy back while drawing power when needed. Perfect for homeowners looking to reduce electricity bills immediately.",
    heroImage: "/images/solar/on-grid-residential.jpg",
    capacity: "5-10 kW",
    voltage: "400V 3-Phase",
    price: "From $10,000",
    roi: "6-8 Years",
    warranty: "25 Years (Panels), 10 Years (Inverter)",

    overview: {
      title: "What is an On-Grid Solar System?",
      content: [
        "An On-Grid (also called Grid-Tied) solar system generates electricity that flows directly into your home first, then any excess is sent to the utility grid. Your utility meter measures the flow of electricity both ways.",
        "When the sun isn't shining, you automatically draw power from the grid—no batteries needed. This makes it the most cost-effective and efficient solar solution for most homeowners.",
        "On-Grid systems require no maintenance, have excellent reliability, and provide immediate savings on your electricity bills.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "5-10 kW typical system size for residential homes",
        "Grid-connected with automatic switchover",
        "Net metering capability to earn credits",
        "No battery storage required",
        "25-30 year solar panel lifespan",
        "Government tax incentives (30% ITC in USA)",
        "Monitoring system with mobile app access",
        "Weather-resistant components",
        "Minimal maintenance required",
        "Can be expanded later if needed",
      ],
    },

    benefits: {
      title: "Why Choose On-Grid Solar?",
      items: [
        {
          title: "Lower Installation Cost",
          description:
            "No expensive battery storage system needed. On-Grid systems are 30-50% cheaper than off-grid alternatives.",
          icon: "DollarSign",
        },
        {
          title: "Immediate Savings",
          description:
            "Reduce your electricity bills by 30-70% from day one of installation.",
          icon: "TrendingDown",
        },
        {
          title: "Net Metering Benefits",
          description:
            "Earn credits for excess solar energy sent to the grid, further reducing your annual energy costs.",
          icon: "Zap",
        },
        {
          title: "Reliable Power",
          description:
            "The grid acts as your backup, ensuring you always have power available 24/7.",
          icon: "Shield",
        },
        {
          title: "Increase Home Value",
          description:
            "Solar systems increase home value by approximately 3-4% and make homes more attractive to buyers.",
          icon: "Home",
        },
        {
          title: "Government Incentives",
          description:
            "Take advantage of solar tax credits, rebates, and accelerated depreciation benefits.",
          icon: "Award",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "System Size", value: "5-10 kW" },
        { label: "Panel Type", value: "Monocrystalline (400-450W each)" },
        { label: "Inverter Type", value: "String Inverter or Micro-Inverter" },
        { label: "Panel Efficiency", value: "20-22%" },
        { label: "System Efficiency", value: "85-90%" },
        { label: "Voltage", value: "400V 3-Phase" },
        { label: "DC Side Wiring", value: "10mm² per 20A" },
        { label: "AC Side Wiring", value: "4mm² per 20A" },
        { label: "Monitoring", value: "WiFi/Cellular Cloud Monitoring" },
        { label: "Lifespan", value: "25-30 Years" },
      ],
    },

    applications: {
      title: "Ideal For",
      items: [
        "Single-family homes with average to high electricity consumption",
        "Properties with good sun exposure (minimum 4 peak sun hours daily)",
        "Homeowners looking for immediate ROI without large upfront investment",
        "Areas with net metering policies",
        "Locations with reliable grid connection",
        "Homeowners in urban and suburban areas",
      ],
    },

    installation: {
      title: "Installation Process",
      steps: [
        "Site Assessment: Our engineers evaluate your roof, sun exposure, and electrical setup (2-3 hours)",
        "Design & Permits: Custom system design and permit application (5-7 business days)",
        "Material Procurement: Order solar panels, inverter, and mounting equipment",
        "Roof Installation: Secure mounting structures and install solar panels (1-2 days)",
        "Electrical Work: Install inverter, disconnect switch, and electrical wiring (1-2 days)",
        "Grid Connection: Utility company inspection and grid connection approval (2-4 weeks)",
        "System Testing: Comprehensive testing and performance verification (1 day)",
        "Handover: Training on system monitoring and maintenance (2-3 hours)",
      ],
      duration: "2-3 Weeks (Including Utility Approval)",
    },

    maintenance: {
      title: "Maintenance & Care",
      tasks: [
        "Annual visual inspection of panels and electrical components",
        "Professional cleaning of panels every 1-2 years (more often in dusty areas)",
        "Inverter check and software updates annually",
        "Monitoring system check to ensure proper data logging",
        "Electrical safety inspection every 3-5 years",
        "Tree trimming to prevent shade on panels",
        "Verify grid connection and net metering functionality quarterly",
      ],
    },

    roi: {
      title: "Return on Investment",
      content:
        "An average 6-8 kW on-grid system provides excellent ROI with payback periods of 6-8 years. After payback, you'll enjoy 20+ years of nearly free electricity. Average homeowners save $10,000-$30,000 over the system lifespan.",
      savingsPerYear: "$1,200 - $3,600",
      paybackPeriod: "6-8 Years",
    },

    testimonials: [
      {
        name: "Ahmed Al-Mansouri",
        location: "Dubai, UAE",
        text: "Our electricity bill has been cut in half since installing the on-grid system. Best investment we made for our home!",
        system: "8 kW On-Grid System",
      },
      {
        name: "Fatima Al-Mazrouei",
        location: "Abu Dhabi, UAE",
        text: "The installation was smooth and professional. We're already seeing great savings. Highly recommended!",
        system: "6 kW On-Grid System",
      },
      {
        name: "Mohammad Al-Amiri",
        location: "Sharjah, UAE",
        text: "No complications, no batteries to maintain. It just works perfectly. Great customer support too!",
        system: "10 kW On-Grid System",
      },
    ],

    relatedProducts: [
      "hybrid-residential",
      "battery-storage-system",
      "solar-monitoring-system",
    ],

    color: {
      primary: "from-green-500 to-emerald-600",
      secondary: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
      gradient:
        "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
      text: "text-green-600 dark:text-green-400",
    },
  },

  "off-grid-residential": {
    id: "off-grid-residential",
    name: "Off-Grid Solar System",
    slug: "off-grid-residential",
    category: "residential",
    badge: "Independent",
    shortDescription:
      "Complete energy independence with battery storage for homes in remote areas.",
    longDescription:
      "Achieve complete energy independence with our Off-Grid Solar System. Perfect for remote locations, vacation homes, or properties that want total freedom from utility dependency. Includes integrated battery storage for 24/7 power.",
    heroImage: "/images/solar/off-grid-residential.jpg",
    capacity: "3-8 kW",
    voltage: "48V DC System",
    batteryCapacity: "20-40 kWh",
    price: "From $25,000",
    roi: "12-15 Years",
    warranty: "25 Years (Panels), 10 Years (Battery & Inverter)",

    overview: {
      title: "What is an Off-Grid Solar System?",
      content: [
        "An Off-Grid solar system operates independently from the utility grid. It generates electricity, stores it in batteries, and provides power whenever needed—day or night.",
        "This system is ideal for remote properties, vacation homes, or areas with unreliable grid connection. You have complete energy independence and control over your power generation.",
        "Off-Grid systems require more sophisticated equipment and regular monitoring but provide unmatched freedom and security.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "3-8 kW solar array for reliable daily generation",
        "20-40 kWh lithium battery storage",
        "100% grid independence",
        "Automatic load management system",
        "Backup generator connection option",
        "Advanced battery management system",
        "24/7 power availability",
        "Remote monitoring capability",
        "Scalable battery storage",
        "Ideal for remote locations",
      ],
    },

    benefits: {
      title: "Why Choose Off-Grid Solar?",
      items: [
        {
          title: "Complete Independence",
          description:
            "No dependence on utility grid or fuel deliveries. You control your entire power supply.",
          icon: "Zap",
        },
        {
          title: "Remote Location Solution",
          description:
            "Perfect for cabins, farms, or properties where grid extension is expensive or impossible.",
          icon: "MapPin",
        },
        {
          title: "Long-term Savings",
          description:
            "After the initial investment, enjoy decades of free electricity without monthly bills.",
          icon: "TrendingDown",
        },
        {
          title: "Environmental Benefits",
          description:
            "Zero emissions, no fuel consumption, and minimal environmental impact for off-grid living.",
          icon: "Leaf",
        },
        {
          title: "Battery Backup",
          description:
            "Multiple days of stored energy ensures power availability even during poor weather.",
          icon: "Battery",
        },
        {
          title: "Customizable Power",
          description:
            "Design your system capacity based on exact energy needs and usage patterns.",
          icon: "Settings",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "Solar Array", value: "3-8 kW (8-20 panels)" },
        { label: "Battery Storage", value: "20-40 kWh Lithium" },
        { label: "Nominal Voltage", value: "48V DC" },
        { label: "Inverter Capacity", value: "8-12 kW (Peak 16-24 kW)" },
        { label: "Battery Type", value: "LiFePO4 (Lithium Iron Phosphate)" },
        { label: "System Efficiency", value: "85-90%" },
        { label: "Backup Option", value: "Diesel/Petrol Generator Ready" },
        { label: "Monitoring", value: "WiFi Cloud Monitoring" },
        { label: "Lifespan", value: "25-30 Years (Panels), 10+ Years (Batteries)" },
        { label: "Depth of Discharge", value: "90-95%" },
      ],
    },

    applications: {
      title: "Ideal For",
      items: [
        "Remote cabins and vacation homes",
        "Agricultural properties and farms",
        "Properties with unreliable grid connection",
        "Geographic areas with frequent power outages",
        "Environmentally conscious homeowners",
        "Properties in developing regions",
        "Off-grid communities and settlements",
      ],
    },

    installation: {
      title: "Installation Process",
      steps: [
        "Energy Audit: Determine your daily consumption and design system size (3-4 hours)",
        "Battery Sizing: Calculate battery capacity needed for your location and season",
        "System Design: Create detailed electrical and structural design (5-7 days)",
        "Foundation Work: Prepare ground or roof installation area (1 day)",
        "Solar Panel Installation: Mount and connect solar array (1-2 days)",
        "Battery Installation: Install and configure battery storage system (1-2 days)",
        "Inverter & Balance System: Install inverter and control systems (1 day)",
        "Backup System: Connect generator or backup power source (1 day)",
        "System Integration: Wire all components together (1-2 days)",
        "Testing & Commissioning: Full system testing and optimization (1-2 days)",
        "Training: Comprehensive training on system operation (3-4 hours)",
      ],
      duration: "2-3 Weeks (Installation Only)",
    },

    maintenance: {
      title: "Maintenance & Care",
      tasks: [
        "Monthly battery health check and voltage monitoring",
        "Quarterly system efficiency audit and optimization",
        "Semi-annual professional inspection of all components",
        "Annual cleaning of solar panels and inspection of connections",
        "Battery firmware updates as they become available",
        "Generator testing (if equipped) every 6 months",
        "Load management review and adjustment",
        "Detailed performance logs and monitoring",
      ],
    },

    roi: {
      title: "Return on Investment",
      content:
        "Off-Grid systems have longer ROI periods (12-15 years) due to higher upfront battery costs, but provide complete energy independence. Over 25 years, the savings and lifestyle benefits are substantial.",
      savingsPerYear: "$2,500 - $5,000 (Fuel/Generator Savings)",
      paybackPeriod: "12-15 Years",
    },

    testimonials: [
      {
        name: "Hassan Al-Kaabi",
        location: "Al Ain, UAE",
        text: "Living off-grid was a dream, now it's reality. The system works flawlessly even during sandstorms!",
        system: "6 kW Off-Grid System with 30 kWh Battery",
      },
      {
        name: "Layla Al-Falahi",
        location: "Ras Al Khaimah, UAE",
        text: "Perfect solution for our farm. No more generator expenses and fuel costs. Excellent support from the team.",
        system: "8 kW Off-Grid System with 40 kWh Battery",
      },
      {
        name: "Ibrahim Al-Dhaheri",
        location: "Fujairah, UAE",
        text: "Reliable, independent, and environmentally friendly. Worth every dirham invested!",
        system: "5 kW Off-Grid System with 25 kWh Battery",
      },
    ],

    relatedProducts: ["battery-storage-system", "solar-monitoring-system"],

    color: {
      primary: "from-emerald-500 to-teal-600",
      secondary:
        "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
      gradient:
        "from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20",
      text: "text-emerald-600 dark:text-emerald-400",
    },
  },

  "hybrid-residential": {
    id: "hybrid-residential",
    name: "Hybrid Solar System",
    slug: "hybrid-residential",
    category: "residential",
    badge: "Advanced",
    shortDescription:
      "Grid-connected with battery backup for maximum energy independence and reliability.",
    longDescription:
      "Enjoy the best of both worlds with our Hybrid Solar System. Connect to the grid for reliability while maintaining battery backup for emergencies. Maximize self-consumption and achieve energy independence without sacrificing grid benefits.",
    heroImage: "/images/solar/hybrid-residential.jpg",
    capacity: "5-10 kW",
    voltage: "400V 3-Phase",
    batteryCapacity: "10-20 kWh",
    price: "From $18,000",
    roi: "8-10 Years",
    warranty: "25 Years (Panels), 10 Years (Battery & Inverter)",

    overview: {
      title: "What is a Hybrid Solar System?",
      content: [
        "A Hybrid system combines the best features of both On-Grid and Off-Grid systems. It's connected to the utility grid but also includes battery storage for maximum flexibility and reliability.",
        "During sunny days, solar energy powers your home and charges batteries. At night, you use stored battery power. If batteries run low, the grid provides backup. Excess energy can be sold back to the utility.",
        "Hybrid systems provide maximum energy independence while maintaining grid reliability—the perfect middle ground for modern homeowners.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "5-10 kW solar array with grid connection",
        "10-20 kWh battery storage for backup",
        "Grid connection with net metering",
        "Smart load management system",
        "Automatic switchover during outages",
        "Mobile monitoring and control app",
        "EV charging capability option",
        "Weather forecasting integration",
        "Multi-mode operation (grid, battery, solar)",
        "Expandable battery storage",
      ],
    },

    benefits: {
      title: "Why Choose Hybrid Solar?",
      items: [
        {
          title: "Grid + Battery Benefits",
          description:
            "Get grid reliability AND battery backup. Enjoy the benefits of both systems in one.",
          icon: "Zap",
        },
        {
          title: "Peak Shaving",
          description:
            "Use battery power during peak hours when electricity rates are highest, reducing peak demand charges.",
          icon: "TrendingDown",
        },
        {
          title: "Blackout Protection",
          description:
            "Continue powering essential appliances during grid outages. Never sit in the dark.",
          icon: "Lightbulb",
        },
        {
          title: "Maximum Self-Consumption",
          description:
            "Store and use your own generated solar energy, reducing dependency on grid electricity.",
          icon: "Battery",
        },
        {
          title: "Optimal Economics",
          description:
            "Balance the cost of storage with maximum savings. More affordable than full off-grid.",
          icon: "DollarSign",
        },
        {
          title: "Future-Proof",
          description:
            "Easy to add more battery capacity later as your needs or budget allows.",
          icon: "Upgrade",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "Solar Array", value: "5-10 kW" },
        { label: "Battery Storage", value: "10-20 kWh Lithium" },
        { label: "Nominal Voltage", value: "400V 3-Phase" },
        { label: "Hybrid Inverter", value: "8-10 kW (Peak 16-20 kW)" },
        { label: "Battery Type", value: "LiFePO4 (Lithium Iron Phosphate)" },
        { label: "System Efficiency", value: "90-95%" },
        { label: "Switchover Time", value: "Instant (Zero Downtime)" },
        { label: "Monitoring", value: "Cloud + Local App" },
        { label: "Lifespan", value: "25-30 Years (Panels), 10+ Years (Battery)" },
        { label: "Load Transfer Capability", value: "Automatic/Manual" },
      ],
    },

    applications: {
      title: "Ideal For",
      items: [
        "Homeowners wanting energy independence with grid backup",
        "Areas with frequent power outages",
        "Homes with time-of-use electricity rates",
        "Electric vehicle owners wanting cheaper charging",
        "Properties with essential appliances",
        "Future-proofing against rising energy costs",
        "Commercial properties with critical loads",
      ],
    },

    installation: {
      title: "Installation Process",
      steps: [
        "Site Analysis: Assess roof, consumption, and grid conditions (2-3 hours)",
        "System Design: Design optimal hybrid configuration (3-5 days)",
        "Permitting: Apply for necessary permits and approvals (5-7 days)",
        "Procurement: Order all equipment and materials",
        "Roof Installation: Install mounting and solar panels (1-2 days)",
        "Battery Installation: Set up battery storage system (1 day)",
        "Electrical Work: Install hybrid inverter and wiring (1-2 days)",
        "Integration: Connect all systems together (1 day)",
        "Testing & Commissioning: Full system testing (1 day)",
        "Grid Connection: Final utility inspection and approval (2-4 weeks)",
        "Training: System operation and maintenance training (2-3 hours)",
      ],
      duration: "2-4 Weeks (Including Approvals)",
    },

    maintenance: {
      title: "Maintenance & Care",
      tasks: [
        "Monthly battery health monitoring",
        "Quarterly system efficiency review",
        "Semi-annual professional inspection",
        "Annual solar panel cleaning",
        "Battery firmware and software updates",
        "Grid connection verification every 6 months",
        "Load balancing and optimization quarterly",
        "Annual comprehensive system report",
      ],
    },

    roi: {
      title: "Return on Investment",
      content:
        "Hybrid systems have ROI periods of 8-10 years while providing immediate backup protection. Savings come from reduced electricity bills and peak demand charge reductions. Over 25 years, substantial long-term value.",
      savingsPerYear: "$1,500 - $4,000",
      paybackPeriod: "8-10 Years",
    },

    testimonials: [
      {
        name: "Amira Al-Mansouri",
        location: "Dubai, UAE",
        text: "Perfect solution! I get great electricity savings AND protection from blackouts. Best decision for peace of mind.",
        system: "8 kW Hybrid System with 15 kWh Battery",
      },
      {
        name: "Rashid Al-Maktoum",
        location: "Abu Dhabi, UAE",
        text: "The system intelligently manages my electricity use. Saves money daily and keeps essentials running during outages.",
        system: "10 kW Hybrid System with 20 kWh Battery",
      },
      {
        name: "Noor Al-Nuaimi",
        location: "Sharjah, UAE",
        text: "Excellent technology! Using it to charge my EV during solar hours. Highly recommend for modern homes!",
        system: "9 kW Hybrid System with 18 kWh Battery + EV Charging",
      },
    ],

    relatedProducts: [
      "on-grid-residential",
      "off-grid-residential",
      "battery-storage-system",
    ],

    color: {
      primary: "from-teal-500 to-cyan-600",
      secondary:
        "bg-teal-100 text-teal-700 dark:bg-teal-900 dark:text-teal-300",
      gradient:
        "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
      text: "text-teal-600 dark:text-teal-400",
    },
  },

  "water-pumping": {
    id: "water-pumping",
    name: "Solar Water Pumping System",
    slug: "water-pumping",
    category: "specialized",
    badge: "Specialized",
    shortDescription:
      "Efficient solar-powered water pumping solutions for agriculture, livestock, and irrigation.",
    longDescription:
      "Pump water independently using the sun's energy with our Solar Water Pumping Systems. Perfect for farms, gardens, livestock, and remote areas. No fuel costs, no grid dependency, reliable and environmentally friendly.",
    heroImage: "/images/solar/water-pumping.jpg",
    capacity: "100W - 5kW",
    voltage: "12V, 24V, 48V DC / 110V, 220V AC",
    price: "From $800",
    roi: "3-5 Years",
    warranty: "5 Years (Pump), 25 Years (Panels)",

    overview: {
      title: "What is Solar Water Pumping?",
      content: [
        "Solar water pumping systems use photovoltaic panels to power electric pumps without grid electricity or fuel. Direct or through battery storage for reliable 24/7 pumping.",
        "Ideal for agricultural irrigation, livestock watering, garden maintenance, and remote water supply. No recurring fuel or electricity costs—just sun and water.",
        "Systems scale from small home gardens (100W) to large agricultural operations (5+ kW).",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "100W to 5kW system capacity",
        "Multiple pump types: Centrifugal, Submersible, Surface",
        "DC and AC pump compatibility",
        "High-efficiency solar panels (20-22%)",
        "Integrated charge controller",
        "Optional battery storage for 24/7 operation",
        "Rust-proof, weather-resistant construction",
        "Automatic on/off with sunlight",
        "Low maintenance requirements",
        "Scalable from small to large installations",
      ],
    },

    benefits: {
      title: "Why Choose Solar Water Pumping?",
      items: [
        {
          title: "Zero Fuel Costs",
          description:
            "No diesel, petrol, or electricity bills. The sun is your only energy source.",
          icon: "DollarSign",
        },
        {
          title: "Reliable Operation",
          description:
            "Works consistently in sunny climates. Optional battery storage ensures 24/7 availability.",
          icon: "CheckCircle",
        },
        {
          title: "Environmentally Friendly",
          description:
            "Zero emissions, no pollution. Perfect for sustainable agriculture and livestock management.",
          icon: "Leaf",
        },
        {
          title: "Remote Operation",
          description:
            "No grid or infrastructure needed. Perfect for farms and areas far from utilities.",
          icon: "MapPin",
        },
        {
          title: "Low Maintenance",
          description:
            "Minimal moving parts. Annual servicing is usually all that's needed.",
          icon: "Wrench",
        },
        {
          title: "Long-Term Savings",
          description:
            "Payback in 3-5 years, then enjoy 20+ years of free water pumping.",
          icon: "TrendingDown",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "Power Range", value: "100W - 5 kW" },
        { label: "Panel Type", value: "Polycrystalline / Monocrystalline" },
        { label: "Panel Efficiency", value: "18-22%" },
        { label: "Pump Types", value: "Submersible, Surface, Centrifugal" },
        { label: "Water Depth", value: "Up to 100m (depending on pump)" },
        { label: "Daily Pumping", value: "500L - 100,000L (system dependent)" },
        { label: "Voltage Options", value: "12V, 24V, 48V DC / 110V, 220V AC" },
        { label: "Pressure Rating", value: "0.5 - 8 bar" },
        { label: "Temperature Range", value: "-20°C to +60°C" },
        { label: "Warranty", value: "5 Years (Pump), 25 Years (Panels)" },
      ],
    },

    applications: {
      title: "Ideal For",
      items: [
        "Agricultural irrigation and crop watering",
        "Livestock drinking water supply",
        "Garden and landscape irrigation",
        "Fish farming and aquaculture",
        "Remote well and borehole water extraction",
        "Community water supply projects",
        "Fountain and decorative water features",
        "Emergency water supply in rural areas",
      ],
    },

    installation: {
      title: "Installation Process",
      steps: [
        "Site Survey: Assess water source, depth, and volume needed (1-2 hours)",
        "System Design: Determine solar capacity and pump type required (2-3 days)",
        "Procurement: Order solar panels, pump, controller, and accessories",
        "Foundation Work: Prepare installation area and mount supports (1 day)",
        "Panel Installation: Install and wire solar panels (1 day)",
        "Pump Installation: Mount pump and connect to water source (1-2 days)",
        "Electrical Work: Connect controller, panels, and pump (1 day)",
        "Testing: Test pressure, flow rate, and performance (4-6 hours)",
        "Training: Explain operation and maintenance (1-2 hours)",
      ],
      duration: "1-2 Weeks",
    },

    maintenance: {
      title: "Maintenance & Care",
      tasks: [
        "Monthly: Check water flow and pressure",
        "Quarterly: Clean solar panels of dust and debris",
        "Semi-annual: Inspect pump for leaks or wear",
        "Annual: Professional pump servicing and testing",
        "Check electrical connections for corrosion",
        "Monitor water quality and output",
        "Test pressure gauges and safety valves",
        "Lubricate pump bearings annually",
      ],
    },

    roi: {
      title: "Return on Investment",
      content:
        "Solar water pumping has the quickest ROI among all solar solutions—typically 3-5 years. Fuel and electricity costs immediately drop to zero. Long-term savings are substantial for agricultural operations.",
      savingsPerYear: "$2,000 - $10,000 (Fuel/Electricity Saved)",
      paybackPeriod: "3-5 Years",
    },

    testimonials: [
      {
        name: "Saeed Al-Mansoori",
        location: "Al Ain, UAE",
        text: "This system transformed my farm. No more fuel costs, and the water keeps flowing all day. Excellent investment!",
        system: "2 kW Solar Water Pumping with Submersible Pump",
      },
      {
        name: "Hana Al-Kaabi",
        location: "Liwa, UAE",
        text: "Reliable, efficient, and environmentally friendly. Perfect for our livestock operation. Highly satisfied!",
        system: "1.5 kW Surface Pump System with Battery",
      },
      {
        name: "Ahmed Al-Qadi",
        location: "Fujairah, UAE",
        text: "Best agricultural investment we made. Saves thousands annually and the pump never stops working!",
        system: "3 kW Solar Submersible Pump System",
      },
    ],

    relatedProducts: ["battery-storage-system", "solar-controller-system"],

    color: {
      primary: "from-blue-500 to-cyan-600",
      secondary:
        "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      gradient:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      text: "text-blue-600 dark:text-blue-400",
    },
  },
};

export type SolarSolutionKey = keyof typeof solarSolutions;
