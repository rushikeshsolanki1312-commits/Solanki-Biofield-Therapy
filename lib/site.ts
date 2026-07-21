export const site = {
  name: "Solanki Biofield Therapy",
  shortName: "Solanki",
  tagline: "Frequency Infused Wellness Supplements",
  description:
    "Solanki Biofield Therapy offers frequency-infused natural wellness supplements — Horse Power, Brain Spark, Deep Sleep, Immuni Kids, Slimitra & Dia Wellness Drops. 100% natural, safe and scientifically inspired support for vitality, focus, sleep, immunity, weight and blood-sugar wellness.",
  url: "https://solankibiofieldtherapy.com",
  phone: "+918830918094",
  phoneDisplay: "8830918094",
  whatsapp: "918830918094",
  email: "rocareindia123@gmail.com",
  address: {
    line1: "Shop No 14, Polite Harmony Building",
    line2: "Near Sane Chowk Road, Nair Colony, More Vasti",
    city: "Chikhali, Pimpri-Chinchwad",
    state: "Maharashtra",
    zip: "411062",
    country: "India",
  },
  mapEmbed:
    "https://www.google.com/maps?q=Solanki+Biofield+Therapy+Chikhali+Pimpri-Chinchwad&output=embed",
  mapLink: "https://maps.app.goo.gl/vzXRHX1zP5DJUox27",
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  headline: string;
  short: string;
  emoji: string;
  accent: string; // tailwind gradient stops
  glow: string;
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: "horse-power",
    name: "Horse Power",
    category: "Energy & Stamina Support",
    headline: "Revive Your Strength. Reclaim Your Confidence.",
    short:
      "Frequency-infused support for male vitality, stamina, performance and overall well-being.",
    emoji: "🐎",
    accent: "from-red-600 to-rose-800",
    glow: "shadow-red-500/30",
    benefits: [
      "Improves Stamina & Endurance",
      "Supports Strength & Energy",
      "Enhances Drive & Performance",
      "Reduces Stress & Fatigue",
      "Supports Overall Vitality",
    ],
  },
  {
    slug: "brain-spark-drops",
    name: "Brain Spark Drops",
    category: "Focus & Memory for Young Minds",
    headline: "Nourish Their Mind. Ignite Their Future.",
    short:
      "Daily support for memory, focus, learning and mental clarity — helping kids think sharper.",
    emoji: "🧠",
    accent: "from-emerald-500 to-green-800",
    glow: "shadow-emerald-500/30",
    benefits: [
      "Enhances Focus & Concentration",
      "Supports Memory & Recall",
      "Improves Learning Ability",
      "Boosts Mental Clarity",
      "Supports Academic Performance",
    ],
  },
  {
    slug: "deep-sleep-drops",
    name: "Deep Sleep Drops",
    category: "Natural Support for Restful Sleep",
    headline: "Rest Deeply. Wake Refreshed. Live Better.",
    short:
      "Crafted to support deep, natural sleep — relax the mind and body and wake up energized.",
    emoji: "🌙",
    accent: "from-indigo-600 to-slate-900",
    glow: "shadow-indigo-500/30",
    benefits: [
      "Promotes Deep & Restful Sleep",
      "Calms Mind & Reduces Stress",
      "Reduces Nervousness",
      "Improves Sleep Quality",
      "Wake Up Refreshed & Energized",
    ],
  },
  {
    slug: "immuni-kids-drops",
    name: "Immuni Kids Drops",
    category: "Immunity Support for Kids",
    headline: "Strong Today. Healthy Tomorrow.",
    short:
      "Crafted to support kids' natural defenses, keep them active, strong and ready for the world.",
    emoji: "🛡️",
    accent: "from-sky-500 to-cyan-700",
    glow: "shadow-sky-500/30",
    benefits: [
      "Strengthens Immunity & Defense",
      "Keeps Kids Active & Energetic",
      "Protects From Frequent Cold",
      "Supports Healthy Growth",
      "Supports Overall Well-being",
    ],
  },
  {
    slug: "slimitra",
    name: "Slimitra",
    category: "Weight Management Support",
    headline: "Lighter. Healthier. Happier.",
    short:
      "Crafted to support healthy weight management, boost metabolism and keep you energetic every day.",
    emoji: "⚖️",
    accent: "from-amber-500 to-orange-700",
    glow: "shadow-amber-500/30",
    benefits: [
      "Supports Weight Management",
      "Boosts Metabolism",
      "Curbs Cravings",
      "Supports Healthy Digestion",
      "Helps You Feel Light & Confident",
    ],
  },
  {
    slug: "dia-wellness-drops",
    name: "Dia Wellness Drops",
    category: "Daily Support for Diabetes Wellness",
    headline: "Balance Today. Live Healthier Tomorrow.",
    short:
      "Crafted to support blood-sugar balance, improve metabolism and promote overall diabetic wellness.",
    emoji: "🍃",
    accent: "from-green-600 to-teal-800",
    glow: "shadow-green-500/30",
    benefits: [
      "Helps Maintain Healthy Blood Sugar",
      "Supports Natural Insulin Function",
      "Promotes Better Metabolism & Energy",
      "Supports Heart & Nerve Health",
      "Improves Overall Diabetic Wellness",
    ],
  },
];

export const techSteps = [
  { title: "Biofield Activated", desc: "Formula activated through biofield frequency infusion.", icon: "📡" },
  { title: "Water Infused", desc: "Frequencies imprinted into a pure water base.", icon: "💧" },
  { title: "Faster Absorption", desc: "Designed for quick and efficient absorption.", icon: "⚡" },
  { title: "Cellular Activation", desc: "Supports the body at a cellular level.", icon: "🧬" },
  { title: "Holistic Well-being", desc: "Promotes balanced, natural well-being.", icon: "🌿" },
];

export const whyChoose = [
  { title: "100% Natural & Safe", desc: "Clean, natural formulas you can trust every day.", icon: "🌱" },
  { title: "No Harmful Chemicals", desc: "Free from harsh chemicals and additives.", icon: "🚫" },
  { title: "Scientifically Inspired", desc: "Rooted in frequency infusion technology.", icon: "🔬" },
  { title: "Improves Energy Levels", desc: "Feel more active and energetic naturally.", icon: "🔋" },
  { title: "Supports Overall Health", desc: "Holistic support for the whole family.", icon: "❤️" },
  { title: "Better Performance", desc: "Perform and feel your best, naturally.", icon: "🏆" },
];
