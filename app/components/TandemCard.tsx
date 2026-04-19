"use client";

import { useRef } from "react";
import { useCardTilt } from "./useCardTilt";

const TECH = ["FastAPI", "Next.js", "Gemini 2.0", "WebRTC", "ElevenLabs"];

export default function TandemCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { onMouseMove, reset } = useCardTilt(cardRef);

  const play = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pause = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const onLeave = () => {
    reset();
    pause();
  };

  return (
    <div className="project-card-perspective">
    <div
      ref={cardRef}
      onMouseEnter={play}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      className="project-card flex flex-col md:flex-row md:items-stretch border border-black/[0.12] rounded-[16px] bg-white overflow-hidden"
    >
      <div
        className="project-video shrink-0 overflow-hidden w-full md:w-[clamp(320px,56%,500px)]"
        style={{ aspectRatio: "16 / 9" }}
      >
        <video
          ref={videoRef}
          src="/Tandem1.mp4"
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="flex flex-col flex-1 justify-between min-w-0"
        style={{ padding: "clamp(14px, 1.4vw, 22px) clamp(16px, 1.6vw, 24px)" }}
      >
        <div className="min-w-0">
          <div className="flex items-center min-w-0" style={{ gap: "clamp(6px, 0.7vw, 10px)" }}>
            <h3 className="text-[#111] font-bold leading-none whitespace-nowrap" style={{ fontSize: "clamp(15px, 1.3vw, 18px)" }}>
              Tandem
            </h3>
            <a
              href="https://github.com/ItzNotKevin/tandem"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tandem GitHub"
              className="ml-auto inline-flex items-center justify-center rounded-full border border-black/[0.1] bg-[#fafafa] hover:bg-[#111] text-[#222] hover:text-white transition-colors shrink-0"
              style={{ width: "30px", height: "30px" }}
            >
              <svg className="w-[16px] h-[16px] fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>

          <div
            className="flex flex-col text-[#555]"
            style={{ fontSize: "clamp(12px, 1.05vw, 14px)", lineHeight: "1.5", marginTop: "clamp(8px, 1vw, 12px)", gap: "clamp(3px, 0.4vw, 6px)" }}
          >
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-[#888]">↳</span>
              <span>Multimodal voice AI tutor · interruptible conversations</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-[#888]">↳</span>
              <span>Whiteboard reasoning · PDF → interactive React modules</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap" style={{ gap: "3px", marginTop: "clamp(10px, 1.1vw, 14px)" }}>
          {TECH.map((t) => (
            <span
              key={t}
              className="text-[#555] border border-black/[0.1] rounded-full bg-[#fafafa] leading-none whitespace-nowrap"
              style={{ fontSize: "clamp(9px, 0.75vw, 11px)", padding: "3px 7px" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
