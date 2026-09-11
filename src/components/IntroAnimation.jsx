"use client";

import { useEffect, useState } from "react";
import "./IntroAnimation.css";

const HOLD_MS = 1000;
const EXIT_MS = 600;

export default function IntroAnimation() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => setExiting(true), HOLD_MS);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, HOLD_MS + EXIT_MS);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(removeTimer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro ${exiting ? "intro--exiting" : ""}`} aria-hidden="true">
      <div className="intro__glow" />
      <img src="/assets/brand/logo.png" alt="" className="intro__logo" />
      <span className="intro__bar" />
    </div>
  );
}
