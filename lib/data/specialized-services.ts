export interface SpecializedService {
  id: string;
  name: string;
  slug: string;
  badge: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  capacity?: string;
  voltage?: string;
  price: string;
  roi?: string;
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

  roi?: {
    title: string;
    content: string;
    savingsPerYear?: string;
    paybackPeriod?: string;
  };

  testimonials: Array<{
    name: string;
    location: string;
    text: string;
    system: string;
  }>;

  relatedServices: string[];

  color: {
    primary: string;
    secondary: string;
    gradient: string;
    text: string;
  };
}

export const specializedServices: Record<string, SpecializedService> = {
  "water-pumping": {
    id: "water-pumping",
    name: "Solar Water Pumping Systems",
    slug: "water-pumping",
    badge: "Agricultural",
    shortDescription:
      "Efficient solar-powered water pumping solutions for agriculture, livestock, and irrigation needs.",
    longDescription:
      "Our Solar Water Pumping Systems provide reliable, cost-effective water extraction and distribution using solar energy. Perfect for farms, gardens, livestock operations, and remote areas without grid access.",
    heroImage: "/images/services/water-pumping.jpg",
    capacity: "100W - 5kW",
    voltage: "12V, 24V, 48V DC / 110V, 220V AC",
    price: "From $800 - $15,000",
    roi: "3-5 Years",
    warranty: "5 Years (Pump), 25 Years (Panels)",

    overview: {
      title: "Solar Water Pumping Excellence",
      content: [
        "Our solar water pumping systems eliminate dependence on diesel generators and grid electricity for water supply. Direct solar-powered pumps automatically turn on when the sun rises and stop when the sun sets.",
        "Perfect for agricultural irrigation, livestock watering, remote communities, and emergency water supply. Systems range from small household gardens (100W) to large agricultural operations (5+ kW).",
        "Zero fuel costs, minimal maintenance, and environmental-friendly operation make solar pumping the sustainable choice for water management.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "100W to 5kW system capacity options",
        "Multiple pump types: Centrifugal, Submersible, Surface",
        "DC and AC pump compatibility",
        "High-efficiency solar panels (20-22%)",
        "Integrated MPPT charge controller",
        "Optional battery storage for 24/7 operation",
        "Rust-proof, weather-resistant construction",
        "Automatic solar tracking (optional)",
        "Low maintenance, high reliability",
        "Scalable from small to large installations",
        "Float switch auto-shutoff feature",
        "Compatible with existing water systems",
      ],
    },

    benefits: {
      title: "Why Choose Solar Water Pumping?",
      items: [
        {
          title: "Zero Fuel Costs",
          description:
            "No diesel, petrol, or electricity expenses. Solar energy is free and abundant.",
          icon: "DollarSign",
        },
        {
          title: "Reliable Operation",
          description:
            "Works consistently in sunny climates. Optional battery ensures 24/7 water availability.",
          icon: "CheckCircle",
        },
        {
          title: "Environmental Benefits",
          description:
            "Zero emissions, no pollution. Perfect for sustainable agriculture and ecosystem protection.",
          icon: "Leaf",
        },
        {
          title: "Remote Installation",
          description:
            "No grid or infrastructure needed. Ideal for farms, ranches, and remote communities.",
          icon: "MapPin",
        },
        {
          title: "Low Maintenance",
          description:
            "Minimal moving parts. Annual servicing usually sufficient. Self-cleaning operation.",
          icon: "Wrench",
        },
        {
          title: "Quick ROI",
          description:
            "Fastest payback period (3-5 years) of all solar solutions. Then enjoy free water pumping.",
          icon: "TrendingDown",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "Power Range", value: "100W - 5 kW" },
        { label: "Daily Pumping Capacity", value: "500L - 100,000L" },
        { label: "Water Depth Range", value: "Up to 100m" },
        { label: "Pump Types Available", value: "Submersible, Surface, Centrifugal" },
        { label: "Voltage Options", value: "12V, 24V, 48V DC or 110V, 220V AC" },
        { label: "Pressure Rating", value: "0.5 - 8 bar" },
        { label: "Panel Efficiency", value: "18-22%" },
        { label: "Operating Temperature", value: "-20°C to +60°C" },
        { label: "Warranty", value: "5 Years (Pump), 25 Years (Panels)" },
        { label: "Life Expectancy", value: "20-25 Years" },
      ],
    },

    applications: {
      title: "Ideal Applications",
      items: [
        "Agricultural crop irrigation systems",
        "Livestock drinking water supply",
        "Garden and landscape watering",
        "Fish farming and aquaculture operations",
        "Remote well and borehole extraction",
        "Community water supply projects",
        "Desert and arid region development",
        "Emergency water supply during outages",
        "Fountain and decorative water features",
        "Greenhouse and nursery operations",
      ],
    },

    installation: {
      title: "Professional Installation Process",
      steps: [
        "Site Assessment: Survey water source depth, volume needed, and terrain (2-3 hours)",
        "System Design: Calculate solar capacity and select appropriate pump type (2-3 days)",
        "Equipment Procurement: Order solar panels, pump, controller, and all components",
        "Foundation Preparation: Prepare installation area, water tank, and mounting structures (1 day)",
        "Solar Panel Installation: Mount and electrically wire solar panels (1-2 days)",
        "Pump Installation: Install pump, connect to water source and discharge line (1-2 days)",
        "Electrical Integration: Connect controller, panels, and pump system (1 day)",
        "Pressure Testing: Test water flow rate, pressure, and system performance (4-6 hours)",
        "Float Switch Setup: Configure automatic on/off switches and safety features (2-3 hours)",
        "Training & Handover: Provide operation and maintenance instructions (1-2 hours)",
      ],
      duration: "1-2 Weeks (Including Testing)",
    },

    maintenance: {
      title: "Maintenance & Care Schedule",
      tasks: [
        "Monthly: Visual inspection of panels and pump connections",
        "Quarterly: Check water flow rate and system pressure readings",
        "Semi-annual: Professional cleaning of solar panels",
        "Semi-annual: Pump seal and bearing inspection",
        "Annual: Complete pump servicing and water quality testing",
        "Annual: Electrical connection check for corrosion",
        "Biennial: Pressure gauge calibration and replacement",
        "As needed: Float switch adjustment and valve maintenance",
      ],
    },

    roi: {
      title: "Return on Investment Analysis",
      content:
        "Solar water pumping systems have the fastest ROI among all solar solutions, typically 3-5 years. A 2kW system pumping 5,000L daily saves approximately $3,000-5,000 annually compared to diesel pumping. After payback, enjoy 20+ years of virtually free water pumping. Perfect for agricultural operations seeking immediate cost reduction.",
      savingsPerYear: "$3,000 - $8,000 (Fuel/Electricity Saved)",
      paybackPeriod: "3-5 Years",
    },

    testimonials: [
      {
        name: "Saeed Al-Mansoori",
        location: "Al Ain, UAE",
        text: "Transformed my date farm completely. No more diesel expenses. Water flows all day, every day. Best investment in 20 years!",
        system: "2.5 kW Solar Submersible Pump System",
      },
      {
        name: "Hana Al-Kaabi",
        location: "Liwa, UAE",
        text: "Our livestock operation saves thousands monthly. Reliable, clean, and sustainable. The entire system pays for itself in 4 years.",
        system: "1.5 kW Solar Surface Pump with Tank",
      },
      {
        name: "Ahmed Al-Qadi",
        location: "Fujairah, UAE",
        text: "Switched from generator to solar. Unbeatable savings and zero maintenance headaches. Highly recommend for any farm!",
        system: "3 kW Solar Submersible Pump System",
      },
    ],

    relatedServices: ["solar-camera", "custom-solutions"],

    color: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
      gradient:
        "from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
      text: "text-blue-600 dark:text-blue-400",
    },
  },

  "street-light": {
    id: "street-light",
    name: "Solar Street Lighting Systems",
    slug: "street-light",
    badge: "Public Infrastructure",
    shortDescription:
      "Autonomous solar street lights for roads, parking, pathways, and public spaces with zero ongoing costs.",
    longDescription:
      "Our Solar Street Lighting Systems provide intelligent, maintenance-free illumination for streets, roads, parking lots, and pathways. Each unit is completely autonomous with integrated solar panels, batteries, and LED lights.",
    heroImage: "/images/services/street-light.jpg",
    capacity: "10W - 200W",
    voltage: "12V, 24V, 48V DC",
    price: "From $150 - $3,500 per unit",
    roi: "2-4 Years",
    warranty: "3 Years (Electronics), 25 Years (Panels)",

    overview: {
      title: "Smart Solar Street Lighting Solutions",
      content: [
        "Solar street lights are completely autonomous lighting systems that charge during the day and illuminate at night. No wiring, no infrastructure, no ongoing electricity costs.",
        "Ideal for roads, highways, parking lots, pathways, garden areas, and any outdoor space requiring reliable illumination. Available in multiple brightness levels from 10W to 200W.",
        "Our intelligent systems include motion sensors, dimming features, and weather-resistant designs for optimal performance in any climate.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "10W to 200W LED brightness options",
        "Fully autonomous operation, zero wiring needed",
        "Integrated solar panel, battery, and LED in one unit",
        "Motion sensor activation (reduces energy consumption)",
        "Intelligent dimming based on ambient light",
        "IP65 weather-resistant construction",
        "Lithium battery with 5+ year lifespan",
        "High brightness LEDs (5000K-6500K daylight)",
        "Automatic dusk-to-dawn operation",
        "Pole mount or ground stake options",
        "Remote monitoring capability (smart versions)",
        "Maintenance-free operation",
      ],
    },

    benefits: {
      title: "Why Solar Street Lights?",
      items: [
        {
          title: "Zero Ongoing Costs",
          description:
            "No electricity bills, no fuel, no maintenance. Just install and forget.",
          icon: "DollarSign",
        },
        {
          title: "Easy Installation",
          description:
            "No trenching, no electrical work, no infrastructure. Install in minutes.",
          icon: "Zap",
        },
        {
          title: "Smart Technology",
          description:
            "Motion sensors and dimming reduce energy use. Smart monitoring tracks performance.",
          icon: "Settings",
        },
        {
          title: "Reliable 24/7",
          description:
            "Works in any weather. Integrated batteries ensure continuous operation.",
          icon: "Shield",
        },
        {
          title: "Environmental",
          description:
            "Zero emissions, no light pollution through smart directional lighting.",
          icon: "Leaf",
        },
        {
          title: "Rapid Deployment",
          description:
            "Install thousands of lights without infrastructure investment.",
          icon: "Lightning",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "LED Brightness", value: "10W - 200W (equivalent 50-1000W halogen)" },
        { label: "Light Output", value: "500-15,000 Lumens" },
        { label: "Color Temperature", value: "5000K - 6500K (Daylight White)" },
        { label: "Battery Type", value: "Lithium Iron Phosphate (LiFePO4)" },
        { label: "Battery Capacity", value: "5-50 Ah (varies by model)" },
        { label: "Operating Hours", value: "8-15 hours per night" },
        { label: "Solar Panel", value: "10W - 100W Monocrystalline" },
        { label: "Voltage System", value: "12V, 24V, or 48V DC" },
        { label: "IP Rating", value: "IP65 (dust & water resistant)" },
        { label: "Operating Temperature", value: "-20°C to +60°C" },
      ],
    },

    applications: {
      title: "Applications & Use Cases",
      items: [
        "Street and road lighting systems",
        "Parking lot and garage illumination",
        "Pathway and pedestrian lighting",
        "Garden and landscape lighting",
        "Driveway and entrance lighting",
        "Sports field and court lighting",
        "Highway and expressway lighting",
        "Rural and remote area illumination",
        "Emergency and disaster lighting",
        "Smart city and IoT projects",
      ],
    },

    installation: {
      title: "Quick Installation Process",
      steps: [
        "Site Planning: Identify locations and calculate optimal spacing (1-2 hours)",
        "Equipment Delivery: Receive pre-assembled solar light units (ready to install)",
        "Foundation Setup: Install pole mounts or ground stakes at each location (30 min per unit)",
        "Light Installation: Mount light fixture onto pole or stake (15 min per unit)",
        "Testing: Verify operation and sensor functionality (10 min per unit)",
        "Documentation: Record locations and system details (ongoing)",
        "Commissioning: Activate all units and set parameters (complete project)",
        "Handover: Provide monitoring access and maintenance guidelines",
      ],
      duration: "1 Day for 50+ Units (Professional Installation)",
    },

    maintenance: {
      title: "Minimal Maintenance Required",
      tasks: [
        "Quarterly: Visual inspection for physical damage",
        "Quarterly: Check sensor functionality and clean lens",
        "Semi-annual: Clean solar panels to maintain efficiency",
        "Annual: Battery health check and firmware updates",
        "Annual: Replace LED bulbs (if not integral type)",
        "As needed: Repair or replace damaged units",
        "Biennial: Comprehensive system audit and optimization",
        "Monitor: Remote tracking of all unit statuses (via app)",
      ],
    },

    roi: {
      title: "Quick Return on Investment",
      content:
        "Solar street lights deliver rapid ROI, typically 2-4 years. A 100-unit installation replaces expensive electrical grid infrastructure while saving $50,000+ annually in electricity and maintenance. After payback, enjoy 20+ years of free illumination. Municipalities and businesses see immediate cost reduction.",
      savingsPerYear: "$40,000 - $100,000 (per 100 units)",
      paybackPeriod: "2-4 Years",
    },

    testimonials: [
      {
        name: "Dubai Municipality",
        location: "Dubai, UAE",
        text: "Installed 500 solar street lights in residential areas. Massive savings on electricity and maintenance. Citizens love the bright, reliable lighting.",
        system: "500x 50W Solar Street Light System",
      },
      {
        name: "Hilal Al-Mazrouei",
        location: "Abu Dhabi, UAE",
        text: "Lit up our parking lot with 50 solar lights. No wiring, no electrical bills. Best decision for business efficiency!",
        system: "50x 100W Solar Street Lights with Motion Sensors",
      },
      {
        name: "Farm Management Cooperative",
        location: "Liwa, UAE",
        text: "30 solar lights for farm access roads. Robust, reliable, and eliminated our generator lighting costs entirely.",
        system: "30x 75W Solar Street Lights for Rural Access Roads",
      },
    ],

    relatedServices: ["solar-camera", "custom-solutions"],

    color: {
      primary: "from-yellow-500 to-orange-600",
      secondary:
        "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
      gradient:
        "from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20",
      text: "text-yellow-600 dark:text-yellow-400",
    },
  },

  "solar-camera": {
    id: "solar-camera",
    name: "Solar-Powered Security Cameras",
    slug: "solar-camera",
    badge: "Security",
    shortDescription:
      "Autonomous solar security camera systems for 24/7 monitoring with zero wiring and zero electricity costs.",
    longDescription:
      "Our Solar-Powered Security Cameras provide continuous surveillance for properties, farms, and facilities without infrastructure. Each camera includes solar panels, battery backup, WiFi connectivity, and high-definition video recording.",
    heroImage: "/images/services/solar-camera.jpg",
    capacity: "15W - 50W",
    voltage: "12V DC",
    price: "From $300 - $2,000 per camera",
    roi: "2-3 Years",
    warranty: "3 Years (Camera), 25 Years (Panels)",

    overview: {
      title: "Solar Security Camera Excellence",
      content: [
        "Our solar security cameras are completely autonomous surveillance systems that work 24/7 without grid connection. Solar panels charge the camera during the day, batteries provide power at night.",
        "Perfect for remote properties, farms, construction sites, parking lots, and any location where traditional wiring is impractical. High-definition video with night vision provides clear footage in any condition.",
        "Cloud storage and mobile app access let you monitor your property from anywhere, anytime. Intelligent motion detection sends alerts directly to your phone.",
      ],
    },

    features: {
      title: "Key Features",
      items: [
        "4MP to 8MP high-definition video resolution",
        "Full HD (1080p) to 4K recording options",
        "Night vision with infrared LED (up to 30m range)",
        "Integrated solar panel (15-50W)",
        "Lithium battery with 2-3 day autonomy",
        "WiFi and cellular connectivity options",
        "Motion detection with smart alerts",
        "Cloud storage (365-day retention available)",
        "Two-way audio communication",
        "IP66 weatherproof construction",
        "Wide viewing angle (110-130 degrees)",
        "Microphone and speaker built-in",
        "Loop recording with SD card backup",
        "Mobile app for iOS and Android",
      ],
    },

    benefits: {
      title: "Why Solar Cameras?",
      items: [
        {
          title: "Zero Infrastructure",
          description:
            "No wiring, no electrical work, no permits. Install anywhere in minutes.",
          icon: "Zap",
        },
        {
          title: "24/7 Monitoring",
          description:
            "Always recording. Day or night, rain or shine. Never miss an event.",
          icon: "Eye",
        },
        {
          title: "Remote Access",
          description:
            "Watch live video on your phone from anywhere. Get instant alerts.",
          icon: "Smartphone",
        },
        {
          title: "Cost Effective",
          description:
            "No electricity costs, minimal maintenance. Saves thousands annually.",
          icon: "DollarSign",
        },
        {
          title: "Weatherproof",
          description:
            "Rugged construction handles extreme heat, dust, and moisture.",
          icon: "Shield",
        },
        {
          title: "Evidence Quality",
          description:
            "Crystal clear 4K video provides actionable evidence for security issues.",
          icon: "Camera",
        },
      ],
    },

    specifications: {
      title: "Technical Specifications",
      items: [
        { label: "Video Resolution", value: "2MP to 8MP (1080p to 4K)" },
        { label: "Frame Rate", value: "30 FPS (continuous)" },
        { label: "Night Vision", value: "IR LED up to 30m range" },
        { label: "Field of View", value: "110° to 130° wide angle" },
        { label: "Solar Panel", value: "20W to 50W Monocrystalline" },
        { label: "Battery Capacity", value: "20,000-60,000 mAh Lithium" },
        { label: "Battery Autonomy", value: "2-3 days without sunlight" },
        { label: "Connectivity", value: "WiFi 2.4/5GHz, 4G LTE option" },
        { label: "Audio", value: "2-way, built-in mic & speaker" },
        { label: "IP Rating", value: "IP66 (dust & water resistant)" },
        { label: "Operating Temperature", value: "-20°C to +60°C" },
        { label: "Storage", value: "Cloud (365 days) + SD card backup" },
      ],
    },

    applications: {
      title: "Perfect For",
      items: [
        "Residential home security and monitoring",
        "Farm and agricultural property surveillance",
        "Remote cabin and vacation home protection",
        "Construction site monitoring and safety",
        "Parking lot and vehicle security",
        "Business entrance and perimeter monitoring",
        "Warehouse and storage facility coverage",
        "Gate and driveway access control",
        "Backyard and garden security",
        "Livestock and animal protection",
      ],
    },

    installation: {
      title: "Simple Installation Process",
      steps: [
        "Site Survey: Identify optimal camera placement for full coverage (1-2 hours)",
        "Network Setup: Connect camera to WiFi and configure cloud account (30 min)",
        "Physical Installation: Mount camera to pole, wall, or stand (20 min per unit)",
        "Angle Adjustment: Position camera for optimal field of view (15 min)",
        "Testing: Verify video quality, night vision, and connectivity (20 min)",
        "Mobile App Setup: Install app and configure motion detection alerts (15 min)",
        "Cloud Configuration: Set storage preferences and retention policies (10 min)",
        "Handover: Provide access credentials and user training (30 min)",
      ],
      duration: "1-2 Hours per Camera",
    },

    maintenance: {
      title: "Easy Maintenance Schedule",
      tasks: [
        "Monthly: Check video quality and connectivity status",
        "Monthly: Clean camera lens for clear imagery",
        "Quarterly: Verify solar panel cleanliness and positioning",
        "Quarterly: Test audio and motion detection functionality",
        "Semi-annual: Update camera firmware (automatic when available)",
        "Semi-annual: Check battery health and performance",
        "Annual: Professional camera inspection and calibration",
        "Annual: Review cloud storage and adjust retention settings",
      ],
    },

    roi: {
      title: "Security & Cost Savings",
      content:
        "Solar cameras eliminate expensive security system infrastructure and ongoing electricity costs. A 4-camera system saves $200-400 annually in electricity alone. Added security value, insurance premium reductions, and theft prevention justify the investment. Typical payback is 2-3 years, then enjoy 20+ years of savings.",
      savingsPerYear: "$800 - $2,000 (per 4-camera system)",
      paybackPeriod: "2-3 Years",
    },

    testimonials: [
      {
        name: "Amira Al-Mansouri",
        location: "Dubai, UAE",
        text: "4 solar cameras covering my entire villa. Crystal clear video, even at night. Peace of mind without monthly security bills!",
        system: "4x 4MP Solar Security Cameras with Cloud Storage",
      },
      {
        name: "Mohammed Al-Zaabi",
        location: "Al Ain, UAE",
        text: "Protecting my farm with 8 solar cameras. Zero wiring headaches, perfect night vision. Caught thieves stealing equipment!",
        system: "8x 8MP Solar Cameras for Farm Perimeter",
      },
      {
        name: "Layla Al-Amiri",
        location: "Fujairah, UAE",
        text: "Remote property monitoring made easy. Watch my cabin from my phone in Dubai. Solar cameras are game-changer for rural security!",
        system: "2x Solar 4K Cameras with 2-Way Audio",
      },
    ],

    relatedServices: ["water-pumping", "street-light"],

    color: {
      primary: "from-red-500 to-pink-600",
      secondary: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
      gradient:
        "from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20",
      text: "text-red-600 dark:text-red-400",
    },
  },

  "custom-solutions": {
    id: "custom-solutions",
    name: "Custom Solar Solutions",
    slug: "custom-solutions",
    badge: "Bespoke",
    shortDescription:
      "Tailored solar energy solutions designed specifically for your unique requirements and applications.",
    longDescription:
      "We design and implement custom solar solutions for unique applications that don't fit standard packages. From specialized industrial systems to innovative applications, our engineering team creates perfect solutions for your specific needs.",
    heroImage: "/images/services/custom-solutions.jpg",
    price: "From $5,000 - Custom Quotes Available",
    warranty: "10 Years (System), 25 Years (Panels)",

    overview: {
      title: "Custom-Built Solar Solutions",
      content: [
        "Every property and business is unique. Our custom solar solutions are engineered specifically for your requirements, challenges, and goals. Our expert team assesses your situation and designs the perfect system.",
        "From unusual building structures to specialized industrial applications, remote locations to unique power requirements—we create bespoke solar solutions that maximize efficiency and return on investment.",
        "Our design process includes 3D modeling, shading analysis, ROI projections, and performance simulations to ensure your custom system performs optimally.",
      ],
    },

    features: {
      title: "Custom Solution Services",
      items: [
        "Complete site assessment and analysis",
        "3D modeling and shading analysis",
        "Custom system design using advanced CAD software",
        "Hybrid system integration (solar + battery + grid)",
        "Industrial-scale system design and implementation",
        "Integration with existing electrical infrastructure",
        "Smart monitoring and energy management systems",
        "Load analysis and consumption optimization",
        "Government incentive identification and application",
        "Performance guarantees and monitoring",
        "Scalable designs that grow with your needs",
        "Renewable energy storage solutions",
      ],
    },

    benefits: {
      title: "Benefits of Custom Solutions",
      items: [
        {
          title: "Perfect Fit",
          description:
            "System designed specifically for your situation, not a generic package.",
          icon: "Settings",
        },
        {
          title: "Maximum ROI",
          description:
            "Optimized design delivers best financial returns for your investment.",
          icon: "TrendingUp",
        },
        {
          title: "Expert Guidance",
          description:
            "Our engineers guide you through every decision. No surprises.",
          icon: "Users",
        },
        {
          title: "Innovation",
          description:
            "Access to latest technologies and innovative solar applications.",
          icon: "Lightbulb",
        },
        {
          title: "Compliance",
          description:
            "All designs meet local codes, regulations, and safety standards.",
          icon: "CheckCircle",
        },
        {
          title: "Long-term Support",
          description:
            "Ongoing support, monitoring, and optimization throughout system life.",
          icon: "HandshakeIcon",
        },
      ],
    },

    specifications: {
      title: "Custom Design Capabilities",
      items: [
        { label: "System Size Range", value: "10kW to Multi-Megawatt" },
        { label: "Battery Storage", value: "Any capacity from 10kWh to 1MWh+" },
        { label: "Integration Options", value: "On-Grid, Off-Grid, Hybrid" },
        { label: "Monitoring Systems", value: "Real-time cloud & local monitoring" },
        { label: "Design Software", value: "Industry-leading 3D CAD & simulation" },
        { label: "System Efficiency", value: "85-98% depending on configuration" },
        { label: "Scalability", value: "Expandable design for future growth" },
        { label: "Performance Warranty", value: "Production guarantees available" },
        { label: "Timeline", value: "Design to completion: 4-16 weeks" },
        { label: "Support", value: "25-year monitoring and optimization" },
      ],
    },

    applications: {
      title: "Custom Solution Applications",
      items: [
        "Large commercial and industrial facilities",
        "Multi-building commercial complexes",
        "Manufacturing plants and factories",
        "Data centers and server farms",
        "Hospitality complexes (hotels, resorts)",
        "Healthcare facilities and hospitals",
        "Educational institutions and campuses",
        "Government and municipal projects",
        "Micro-grids and community power",
        "Island and remote location systems",
        "Agricultural operations and cooperatives",
        "Electric vehicle charging infrastructure",
      ],
    },

    installation: {
      title: "Custom Project Phases",
      steps: [
        "Consultation: Understand your goals, challenges, and budget (1-2 hours)",
        "Site Assessment: Professional survey and technical analysis (1-3 days)",
        "Design Phase: 3D modeling, simulation, and optimization (2-4 weeks)",
        "Proposal: Detailed plan, budget, timeline, and ROI projections (1 week)",
        "Permitting: Navigate regulations and obtain all necessary approvals (2-6 weeks)",
        "Procurement: Source components at competitive rates (2-4 weeks)",
        "Installation: Professional system installation and integration (1-8 weeks)",
        "Testing & Commissioning: Comprehensive testing and performance verification (1-2 weeks)",
        "Training: Operator training and system handover (2-3 days)",
        "Monitoring: Continuous performance tracking and optimization (ongoing)",
      ],
      duration: "4-16 Weeks (Design to Completion)",
    },

    maintenance: {
      title: "Comprehensive Maintenance Programs",
      tasks: [
        "24/7 remote monitoring with instant alerts",
        "Monthly: System performance analysis and optimization",
        "Quarterly: Professional inspection and testing",
        "Semi-annual: Deep cleaning and maintenance",
        "Annual: Major equipment inspection and servicing",
        "Preventive: Spare parts inventory and emergency replacement",
        "Software: Regular updates and feature improvements",
        "Reporting: Monthly performance reports and insights",
      ],
    },

    testimonials: [
      {
        name: "Dubai Properties Development",
        location: "Dubai, UAE",
        text: "Custom 500kW solar system for our commercial complex. The engineering team designed the perfect solution for our unique building layout. Exceeded our ROI projections!",
        system: "500kW Hybrid Commercial Complex System",
      },
      {
        name: "National Agricultural Cooperative",
        location: "Abu Dhabi, UAE",
        text: "Designed a custom 2MW system powering our entire agricultural operation. Integrated water pumping, cooling, and storage. Transformation of our farm!",
        system: "2MW Custom Agricultural Solar System",
      },
      {
        name: "Remote Research Station",
        location: "Liwa, UAE",
        text: "Off-grid custom system for our remote research facility. No generator noise, no fuel costs. Custom design was perfect for our location and needs!",
        system: "150kW Custom Off-Grid Research Station",
      },
    ],

    relatedServices: ["water-pumping", "street-light", "solar-camera"],

    color: {
      primary: "from-purple-500 to-indigo-600",
      secondary:
        "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
      gradient:
        "from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20",
      text: "text-purple-600 dark:text-purple-400",
    },
  },
};

export type SpecializedServiceKey = keyof typeof specializedServices;
