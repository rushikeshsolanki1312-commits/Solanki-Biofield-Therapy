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
  email: "rushikeshsolanki1312@gmail.com",
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
  image?: string;
};

export type Service = {
  name: string;
  tagline: string;
  image: string;
  points: string[];
};

export const heroImage = "/4.webp";
export const ctaImage = "/5.webp";

export const services: Service[] = [
  {
    name: "Acupuncture Therapy",
    tagline: "Experience healing through expert acupuncture — restore balance and wellness in a serene, professional environment.",
    image: "/1.webp",
    points: ["Restores natural balance", "Relieves pain & stress", "Boosts overall wellness"],
  },
  {
    name: "Chiropractic Care",
    tagline: "Gentle chiropractic care to realign your body and move freely again.",
    image: "/2.png",
    points: ["Relieves neck & back pain", "Improves posture", "Restores mobility"],
  },
  {
    name: "Cupping Therapy",
    tagline: "Traditional cupping therapy for deep relief, better circulation and relaxation.",
    image: "/3.png",
    points: ["Relieves muscle tension", "Improves blood circulation", "Natural pain relief"],
  },
];

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
  {
    slug: "baldness-wellness-drops",
    name: "Baldness Wellness Drops",
    category: "Natural Hair & Scalp Support",
    headline: "Revitalize Your Hair Naturally.",
    short:
      "Harness the power of herbal science for stronger, thicker hair — natural support for regrowth and a healthy scalp.",
    emoji: "💇",
    accent: "from-amber-700 to-yellow-900",
    glow: "shadow-amber-700/30",
    benefits: [
      "Supports Hair Regrowth",
      "Strengthens Hair Roots",
      "Reduces Hair Fall",
      "Nourishes Follicles & Scalp",
      "Natural Herbal Formula",
    ],
    image: "/7.webp",
  },
  {
    slug: "brain-health",
    name: "Brain Health",
    category: "Advanced Cognitive Support Formula",
    headline: "Think Sharper. Stay Focused.",
    short:
      "Advanced cognitive support to improve focus, memory retention and mental clarity for a calm, balanced mind.",
    emoji: "🧠",
    accent: "from-blue-500 to-indigo-700",
    glow: "shadow-blue-500/30",
    benefits: [
      "Improves Focus & Attention Span",
      "Enhances Memory & Recall",
      "Reduces Brain Fog",
      "Promotes Calm & Balanced Mood",
      "Advanced Cognitive Support",
    ],
    image: "/9.webp",
  },
  {
    slug: "thyroid-wellness-drops",
    name: "Thyroid Wellness Drops",
    category: "Hormone & Thyroid Wellness",
    headline: "Balanced Hormones. A Better You.",
    short:
      "Natural support for healthy thyroid function and hormonal balance — feel energized and well every day.",
    emoji: "🦋",
    accent: "from-purple-600 to-fuchsia-800",
    glow: "shadow-purple-500/30",
    benefits: [
      "Supports Balanced Hormones",
      "Promotes Thyroid Wellness",
      "Natural & Herbal Support",
      "Boosts Energy & Metabolism",
      "Supports Overall Well-being",
    ],
    image: "/10.webp",
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
