// =============================================
// EDIT THIS FILE TO MAKE THE PORTFOLIO YOURS
// =============================================

const DOMAIN = "tamishmhatre.com";
export const BASE_URL = `https://${DOMAIN}`;

const BASE_PATH = "/tamish-portfolio";

export const ABOUT_ME = {
  name: "Tamish Mhatre",
  title: "Open Source Developer",
  location: "Bangalore, India",
  email: "tamish.mhatre@gmail.com",
  description: [
    "I'm 21 and I build open source developer tools under Valtors. I can't write code but I ship using AI agents, and that turns out to be a pretty interesting way to build things.",
    "Right now I'm building Relay (a Go MCP server with 40 tools), Reflow (a responsive toolkit that works across 8 frameworks), and Observer (a security-first MCP observability proxy). All open source, all MIT.",
    "Working toward growing Valtors to 10,000+ stars and 100+ contributors.",
  ],
  profileImage: `${BASE_PATH}/profile-avatar.png`,
  profileGif: `${BASE_PATH}/profile-gif.png`,
};

export const USER_NAMES = {
  githubUsername: "tamish560",
  linkedinUsername: "tamish-mhatre-885317243",
  twitterUsername: "TamishMhatre",
  peerlistUsername: "tamish",
  instagramUsername: "tamishmhatre",
  calUsername: "tamish",
};

export const SOCIAL_LINKS = {
  github: `https://github.com/${USER_NAMES.githubUsername}`,
  linkedin: `https://linkedin.com/in/${USER_NAMES.linkedinUsername}`,
  peerlist: `https://peerlist.io/${USER_NAMES.peerlistUsername}`,
  twitter: `https://x.com/${USER_NAMES.twitterUsername}`,
  instagram: `https://instagram.com/${USER_NAMES.instagramUsername}`,
  resume: `${BASE_PATH}/resume.pdf`,
  email: `mailto:${ABOUT_ME.email}?subject=Message%20from%20Website&body=Hi!%20I%27m...`,
};

export const CONTACT_FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

export { PROJECTS } from "./projects";

export const SKILLS = [
  "go", "ts", "react", "nextjs", "tailwind", "nodejs", "npm", "git", "github", "githubactions", "docker", "sqlite", "vite", "vscode", "md", "vercel",
];

export const EXPERIENCE = [
  {
    company: "MegaLLM",
    companyLink: "",
    logo: `${BASE_PATH}/megallm-logo.png`,
    role: "Co-Founder & Head of Business",
    period: "2025 - Present",
    location: "Bengaluru, India",
    description:
      "Building India's fastest growing AI startup. Scaling a developer platform that provides access to 70+ LLMs in a single API. Managing product and business operations.",
    skills: ["Product Management", "Business Development", "AI Platforms"],
  },
  {
    company: "Valtors",
    companyLink: "https://github.com/valtors",
    logo: `${BASE_PATH}/valtors-logo.png`,
    role: "Founder & Open Source Developer",
    period: "2025 - Present",
    location: "Bangalore, India",
    description:
      "Building open source developer tools including Relay (Go MCP server), Reflow (responsive toolkit), and Observer (MCP observability proxy). Managing the org, shipping features via AI agents, and growing the contributor community.",
    skills: ["Go", "TypeScript", "MCP", "SQLite", "GitHub Actions"],
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
