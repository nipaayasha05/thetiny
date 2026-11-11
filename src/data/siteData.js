export const brand = { name: "thetiny.site", domain: "thetiny.site" };

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Terms", href: "#terms" },
 
];


export const popularLinks = [
  { short: "thetiny.site/launch", long: "https://example.com/product-launch-2026", clicks: "48.2K" },
  { short: "thetiny.site/menu", long: "https://cafe-roma.com/menu/autumn", clicks: "31.9K" },
  { short: "thetiny.site/cv", long: "https://portfolio.dev/jane-doe/resume.pdf", clicks: "22.4K" },
  { short: "thetiny.site/sale", long: "https://shop.example.com/black-friday", clicks: "19.7K" },
  { short: "thetiny.site/join", long: "https://discord.gg/community-invite", clicks: "15.3K" },
  { short: "thetiny.site/talk", long: "https://events.example.org/keynote-live", clicks: "11.8K" },
];

export const premium = {
  features: [
    { icon: "Palette", title: "Custom domains", text: "Use your own brand in every link." },
    { icon: "QrCode", title: "Branded QR codes", text: "Add colors and a logo to your codes." },
    { icon: "Users", title: "Team workspaces", text: "Share links and reports with your team." },
    { icon: "Lock", title: "Password-protected links", text: "Limit who can open a link." },
  ],
};

export const pricing = {
  plans: [
    {
      name: "FREE",
      price: "$0",
      note: "Great for individuals and casual use.",
      features: [
        "Unlimited link shortening",
        "Basic click counter",
        "HTTPS security",
        "QR code (basic)",
        "Cross-device support",
      ],
      cta: "Get Started Free",
    },
    {
      name: "PRO",
      price: "$9",
      note: "For creators, marketers, and power users.",
      features: [
        "Everything in Free",
        "Custom short links",
        "Advanced analytics",
        "UTM builder",
        "QR code (custom)",
        "Browser extension",
        "Priority support",
      ],
      cta: "Start 14-Day Trial",
      featured: true,
    },
    {
      name: "BUSINESS",
      price: "$29",
      note: "For teams and growing companies.",
      features: [
        "Everything in Pro",
        "Team dashboard",
        "Developer API",
        "Bulk link creation",
        "White-label domain",
        "App integrations",
        "Dedicated support",
      ],
      cta: "Subscribe Now",
    },
  ],
};

export const testimonials = {
  items: [
    {
      name: "Nadim Majid",
      role: "User",
      text: `"A good platform for Link management."`,
    },
  ],
};

export const why = {
  title: "Why Choose Our Platform?",
  subtitle: "Everything you need to manage and track your links",
  items: [
    { 
      icon: "Zap", 
      title: "Lightning Fast", 
      text: "Shorten URLs instantly with our optimized infrastructure" 
    },
    { 
      icon: "BarChart3", 
      title: "Detailed Analytics", 
      text: "Track clicks, referrers, locations, and devices" 
    },
    { 
      icon: "Globe", 
      title: "Global CDN", 
      text: "Fast redirects from anywhere in the world" 
    },
    { 
      icon: "QrCode", 
      title: "QR Codes", 
      text: "Generate QR codes for any shortened link" 
    },
    { 
      icon: "ShieldCheck", 
      title: "Secure", 
      text: "All links are encrypted and malware scanned" 
    },
    { 
      icon: "Clock", 
      title: "Expiration Control", 
      text: "Set expiry dates or click limits" 
    },
  ],
};


export const footer = {
  tagline: "The fastest way to shorten, track, and manage your URLs. Trusted by thousands of marketers, developers, and businesses across Bangladesh and beyond.",
  email: "banglapuzzle@gmail.com",
  phone: "+880 1880-811048",
  columns: {
    PRODUCT: ["Features", "Pricing", "API Docs", "Browser Extension", "Report Malicious URL"],
    COMPANY: ["About Us", "Blog", "Terms & Conditions", "Privacy Policy", "Cookie Policy", "Refund Policy"],
  },
  bottomLinks: ["Privacy Policy", "Refund Policy", "Cookie Policy", "Terms & Conditions"],
  copyright: "© 2026 Bangla Puzzle Limited. All rights reserved.",
};