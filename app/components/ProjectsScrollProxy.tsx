"use client";

import { useEffect } from "react";

export default function ProjectsScrollProxy({ targetId }: { targetId: string }) {
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const target = document.getElementById(targetId);
      if (!target) return;
      if (target.contains(e.target as Node)) return;
      e.preventDefault();

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 16;
      else if (e.deltaMode === 2) delta *= window.innerHeight;
      delta *= 1.6;

      target.scrollTop += delta;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [targetId]);

  return null;
}
