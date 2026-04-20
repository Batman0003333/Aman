import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="navbar__logo">AV</Link>
      <ul className="navbar__links">
        <li><a href="/#about">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
