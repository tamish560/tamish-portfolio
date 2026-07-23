// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================

const DOMAIN = "tamishmhatre.com";
export const BASE_URL = `https://${DOMAIN}`;

const BASE_PATH = "/tamish-portfolio";

export const ABOUT_ME = {
  name: "Tamish Mhatre",
  title: "i build tools that don't lie to you",
  location: "Bangalore, India",
  email: "tamish.mhatre@gmail.com",
  description: [
    "21 years old. i can't write code. i ship using AI agents. that's not a limitation, it's a different way of building, and in 2026 it turns out to be a pretty good one.",
    "i run valtors - eight open source tools for the MCP ecosystem. a server, a toolkit, a proxy, a scanner, a sandbox, a knowledge store, a package manager, an AI inbox. MIT licensed, zero telemetry, your data stays on your machine. nobody's watching.",
    "28 stars. 1904 monthly npm downloads. 8 contributors. 624 commits. no VC. no telemetry. no bullshit. background is art and writing, not computer science. i think that's why the tools look different. the code is silent. the output speaks.",
  ],
  profileImage: `${BASE_PATH}/profile-avatar.png`,
  profileGif: `${BASE_PATH}/profile-gif.png`,
};

export const USER_NAMES = {
  githubUsername: "tamish560",
  linkedinUsername: "tamish-mhatre-885317243",
  twitterUsername: "TamishMhatre",
  instagramUsername: "tamishmhatre",
  pinterestUsername: "tamish46",
  calUsername: "tamish",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  pinterest: `https://in.pinterest.com/${USER_NAMES.pinterestUsername}/`,
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

export const SKILLS = [
  "go", "rust", "ts", "react", "nextjs", "tailwind", "nodejs", "npm", "git", "github", "githubactions", "docker", "sqlite", "vite", "vscode", "md", "vercel",
];

export const EXPERIENCE = [
  {
    company: "Valtors",
    companyLink: "https://github.com/valtors",
    logo: `${BASE_PATH}/valtors-logo.png`,
    role: "Founder",
    period: "2025 - Present",
    location: "Bangalore, India",
    description:
      "building open source developer tools that don't apologise for being simple. eight tools: relay (40-tool MCP server), reflow (responsive toolkit for 8 frameworks), observer (agent observability proxy), mcprobe (MCP security scanner), vault (agent sandbox), cairn (temporal knowledge store), smith (MCP package manager), pulse (AI inbox). 28 stars, 1904 monthly downloads, 8 contributors. shipping via AI agents. no VC, no telemetry, no bullshit.",
    skills: ["Go", "Rust", "TypeScript", "MCP", "SQLite", "GitHub Actions"],
  },
  {
    company: "MegaLLM",
    companyLink: "",
    logo: `${BASE_PATH}/megallm-logo.png`,
    role: "Co-Founder",
    period: "2025 - Present",
    location: "Bengaluru, India",
    description:
      "co-founding an AI platform. 70+ LLMs, one API. 23k+ discord community. building the business side while the engineers build the product.",
    skills: ["Product", "Business", "AI Platforms"],
  },
];

export const EDUCATION = [
  {
    degree: "Diploma in Music",
    institution: "Akhil Bharatiya Gandharva Mahavidyalaya",
    institutionLink: "",
    period: "2016 - 2022",
    score: "First Class - Indian Classical Music, Harmonium, Lyricism, Poetry",
  },
];

export const TESTIMONIALS: { name: string; role: string; content: string }[] = [];
