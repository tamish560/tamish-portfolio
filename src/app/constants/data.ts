// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================

const DOMAIN = "tamishmhatre.com";
export const BASE_URL = `https://${DOMAIN}`;

export const ABOUT_ME = {
  name: "Tamish Mhatre",
  title: "Open Source Developer",
  location: "Bangalore, India",
  email: "tamish.mhatre@gmail.com",
  description: [
    "I'm 21 and I build open source developer tools under Valtors. I can't write code but I ship using AI agents, and that turns out to be a pretty interesting way to build things.",
    "Right now I'm building Relay (a Go MCP server with 40 tools), Reflow (a responsive toolkit that works across 8 frameworks), and Observer (a security-first MCP observability proxy). All open source, all MIT.",
    "I'm also contributing to Agent Orchestrator on the UX side, and I'm working toward growing Valtors to 10,000+ stars and 100+ contributors.",
  ],
  profileImage: "/placeholder-avatar.png",
  profileGif: "/placeholder-avatar.png",
};

export const USER_NAMES = {
  githubUsername: "tamish560",
  linkedinUsername: "tamish-mhatre-885317243",
  twitterUsername: "TamishMhatre",
  peerlistUsername: "tamish",
  instagramUsername: "tamish",
  calUsername: "tamish",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  peerlist: `https://peerlist.io/${USER_NAMES.peerlistUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: "/resume.pdf",
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

export const SKILLS = [
  "go",
  "ts",
  "react",
  "nextjs",
  "tailwind",
  "nodejs",
  "npm",
  "git",
  "github",
  "githubactions",
  "docker",
  "sqlite",
  "vite",
  "vscode",
  "md",
  "vercel",
];

export const EXPERIENCE = [
  {
    company: "Valtors",
    companyLink: "https://github.com/valtors",
    logo: "/placeholder-logo.png",
    role: "Founder & Open Source Developer",
    period: "2025 - Present",
    location: "Bangalore, India",
    description:
      "Building open source developer tools including Relay (Go MCP server), Reflow (responsive toolkit), and Observer (MCP observability proxy). Managing the org, shipping features via AI agents, and growing the contributor community.",
    skills: ["Go", "TypeScript", "MCP", "SQLite", "GitHub Actions"],
  },
  {
    company: "Agent Orchestrator",
    companyLink: "https://github.com/AgentWrapper/agent-orchestrator",
    logo: "/placeholder-logo.png",
    role: "UX Contributor",
    period: "2026 - Present",
    location: "Remote",
    description:
      "Contributing to Agent Orchestrator, an open source IDE for parallel AI coding agents. Working on UX improvements, agent-friendliness audits, and Windows compatibility fixes.",
    skills: ["Go", "Electron", "React", "TypeScript"],
  },
];

export const EDUCATION = [
  {
    degree: "Self-taught",
    institution: "Open Source",
    institutionLink: "https://github.com/tamish560",
    period: "2024 - Present",
    score: "Building in public",
  },
];

export const TESTIMONIALS = [
  {
    name: "Placeholder",
    role: "Contributor @ Valtors",
    content:
      "Add testimonials here when you get them from collaborators and community members.",
  },
];
