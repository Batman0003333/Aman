import { useEffect, useRef } from "react";
import "./Lights.css";

const COLORS = [
  { bg: "#cc0000", shadow: "rgba(204,0,0,0.9)" },
  { bg: "#cc6600", shadow: "rgba(204,102,0,0.9)" },
  { bg: "#00aa44", shadow: "rgba(0,170,68,0.9)" },
  { bg: "#0044cc", shadow: "rgba(0,68,204,0.9)" },
  { bg: "#aa00cc", shadow: "rgba(170,0,204,0.9)" },
  { bg: "#cc9900", shadow: "rgba(204,153,0,0.9)" },
];

export default function Lights() {
  const barRef = useRef(null);

  useEffect(() => {
    if (!barRef.current) return;
    const bar = barRef.current;
    bar.innerHTML = "";
    const num = Math.floor(bar.offsetWidth / 36);
    for (let i = 0; i < num; i++) {
      const c = COLORS[i % COLORS.length];
      const el = document.createElement("div");
      el.className = "light";
      el.style.background = c.bg;
      el.style.boxShadow = `0 0 10px 3px ${c.shadow}`;
      el.style.animationDelay = `${Math.random() * 5}s`;
      el.style.animationDuration = `${2 + Math.random() * 4}s`;
      bar.appendChild(el);
    }
  }, []);

  return (
    <div className="lights-bar" ref={barRef}>
      <div className="light-wire" />
    </div>
  );
}
