"use client";

import { BASE_PATH } from "@/app/constants/data";

const IMAGES = [
  { src: `${BASE_PATH}/relay-hero.png`, alt: "Relay" },
  { src: `${BASE_PATH}/reflow-hero.png`, alt: "Reflow" },
  { src: `${BASE_PATH}/observer-hero.png`, alt: "Observer" },
  { src: `${BASE_PATH}/placeholder-image.png`, alt: "mcprobe" },
  { src: `${BASE_PATH}/placeholder-image.png`, alt: "Vault" },
  { src: `${BASE_PATH}/placeholder-image.png`, alt: "Cairn" },
  { src: `${BASE_PATH}/placeholder-image.png`, alt: "Smith" },
  { src: `${BASE_PATH}/placeholder-image.png`, alt: "Pulse" },
];

export default function ImageMarquee() {
  return (
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 backdrop-blur-md [mask-image:linear-gradient(to_right,black,transparent)] pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 backdrop-blur-md [mask-image:linear-gradient(to_left,black,transparent)] pointer-events-none z-10" />

        <div className="flex w-max animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...IMAGES, ...IMAGES].map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="flex-shrink-0 border-r border-dashed border-border p-2 flex items-center justify-center"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={200}
                height={128}
                className="rounded-lg w-[200px] h-32 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
