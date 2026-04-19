"use client";

import { useEffect, useRef, useState } from "react";

export default function IntroOverlay() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => finish());
    const fallback = window.setTimeout(finish, 8000);
    return () => window.clearTimeout(fallback);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const finish = () => {
    if (fading) return;
    setFading(true);
    document.body.classList.add("intro-done");
    window.setTimeout(() => setHidden(true), 900);
  };

  if (hidden) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center pointer-events-none transition-opacity duration-[900ms] ease-out ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <video
        ref={videoRef}
        src="/Signature.mp4"
        muted
        playsInline
        autoPlay
        preload="auto"
        onEnded={finish}
        onError={finish}
        className="max-w-[36vw] max-h-[42vh] object-contain"
      />
    </div>
  );
}
