"use client";

import { RefObject } from "react";

export function useCardTilt(ref: RefObject<HTMLDivElement | null>) {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const parent = el.parentElement;
    if (!parent) return;
    const rect = parent.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const nx = x / rect.width;
    const ny = y / rect.height;
    const ry = (nx - 0.5) * 10;
    const rx = (ny - 0.5) * -7;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return { onMouseMove, reset };
}
