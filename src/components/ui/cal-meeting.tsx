"use client";

import { USER_NAMES } from "@/app/constants/data";
import { SiGooglemeet } from "react-icons/si";

export default function Meeting() {
  return (
    <a
      href="https://calendly.com/tamish-megallm/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="btn w-full px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 cursor-pointer"
    >
      <SiGooglemeet className="w-4 h-4" />
      Schedule a Meeting
    </a>
  );
}
