import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const particlesRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;
    const colors = [
      "rgba(204,0,0,0.5)",
      "rgba(180,20,0,0.3)",
      "rgba(255,50,20,0.4)",
      "rgba(150,0,0,0.3)",
    ];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = `${Math.random() * 100}%`;
      p.style.width = `${Math.random() * 3 + 1}px`;
      p.style.height = `${Math.random() * 3 + 1}px`;
      p.style.background = colors[Math.floor(Math.random() * colors.length)];
      p.style.animationDuration = `${Math.random() * 15 + 10}s`;
      p.style.animationDelay = `${Math.random() * 10}s`;
      container.appendChild(p);
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__bg" />
      <div className="hero__particles" ref={particlesRef} />

      {/* SVG vines */}
      <svg className="hero__vines" viewBox="0 0 200 800" xmlns="http://www.w3.org/2000/svg">
        <path d="M100,0 Q130,100 80,200 Q50,300 120,400 Q160,500 90,600 Q60,700 110,800"
          stroke="rgba(200,100,100,1)" strokeWidth="3" fill="none"/>
        <path d="M80,50 Q30,80 50,130" stroke="rgba(200,100,100,0.8)" strokeWidth="2" fill="none"/>
        <path d="M120,200 Q170,230 160,280" stroke="rgba(200,100,100,0.8)" strokeWidth="2" fill="none"/>
        <path d="M90,400 Q40,440 60,490" stroke="rgba(200,100,100,0.8)" strokeWidth="2" fill="none"/>
      </svg>

      <div className="hero__content">
        <p className="hero__eyebrow">// full stack developer</p>
        <h1 className="hero__name">
          AMAN<br />
          <span className="hero__name--flicker">VERMA</span>
        </h1>
        <p className="hero__role">
          Building from the <span>Upside Down</span> — React &amp; Node.js
        </p>
        <div className="hero__cta">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>
      </div>
    </section>
  );
}
