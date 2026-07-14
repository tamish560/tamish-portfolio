import Link from "next/link";
import { SOCIAL_LINKS, ABOUT_ME } from "@/app/constants/data";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaXTwitter, FaInstagram, FaPinterest } from "react-icons/fa6";

const SOCIAL_BUTTONS = [
  {
    href: SOCIAL_LINKS.github,
    label: "GitHub",
    icon: <Github className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.linkedin,
    label: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.twitter,
    label: "X (Twitter)",
    icon: <FaXTwitter className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.pinterest,
    label: "Pinterest",
    icon: <FaPinterest className="w-5 h-5" />,
  },
  {
    href: SOCIAL_LINKS.email,
    label: "Email",
    icon: (
      <>
        <Mail className="w-5 h-5" /> Email
      </>
    ),
    className: "flex items-center gap-2 font-medium",
  },
];

export default function AboutMe() {
  return (
    <section id="about" className="divide-y divide-dashed divide-border">
      <div className="p-4">
        <div className="space-y-4 text-[15px] sm:text-base text-muted-foreground text-justify leading-relaxed">
          {ABOUT_ME.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex gap-3 flex-wrap">
          {SOCIAL_BUTTONS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-3 py-2 btn text-sm ${btn.className || ""}`}
              aria-label={btn.label}
            >
              {btn.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
