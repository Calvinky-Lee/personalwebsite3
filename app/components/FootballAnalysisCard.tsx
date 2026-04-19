"use client";

import { useEffect, useRef, useState } from "react";
import { useCardTilt } from "./useCardTilt";

const TECH = ["Python", "YOLO26", "ByteTrack", "OpenCV", "Scikit-learn", "Pandas"];

export default function FootballAnalysisCard() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { onMouseMove, reset } = useCardTilt(cardRef);
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    const touch = window.matchMedia("(hover: none)").matches;
    setIsTouch(touch);
    if (touch) videoRef.current?.play().catch(() => {});
  }, []);

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
        style={{ aspectRatio: "3024 / 1664" }}
      >
        <video
          ref={videoRef}
          src="/Football_analysis.mp4"
          muted
          loop
          playsInline
          autoPlay={isTouch}
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
              AI/ML Soccer Analysis
            </h3>
          </div>

          <div
            className="flex flex-col text-[#555]"
            style={{ fontSize: "clamp(12px, 1.05vw, 14px)", lineHeight: "1.5", marginTop: "clamp(8px, 1vw, 12px)", gap: "clamp(3px, 0.4vw, 6px)" }}
          >
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-[#888]">↳</span>
              <span>YOLO26 + ByteTrack pipeline</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="shrink-0 text-[#888]">↳</span>
              <span>Perspective transformation · K-means clustering</span>
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
