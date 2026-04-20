import { useState, useEffect } from "react";
import "./Projects.css";

// Fallback data if server is offline
const FALLBACK = [
  {
    id: 1, number: "01", type: "enterprise tool",
    name: "IT Helpdesk Ticket System",
    description: "A full-featured IT helpdesk management system for tracking, assigning, and resolving support tickets. Streamlines enterprise support workflows with role-based access and ticket lifecycle management.",
    tech: ["Spring Boot", "Java", "MySQL"],
    github: "https://github.com/Batman0003333",
  },
  {
    id: 2, number: "02", type: "certification platform",
    name: "CertVault",
    description: "A secure platform for storing, managing, and verifying employee certifications. Enables organizations to track certification expiry, upload documents, and maintain compliance records.",
    tech: ["Full Stack", "Document Management", "Secure Storage"],
    github: "https://github.com/Batman0003333",
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(FALLBACK);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then(setProjects)
      .catch(() => setProjects(FALLBACK));
  }, []);

  return (
    <section className="projects" id="projects">
      <p className="section-label reveal">// chapter two</p>
      <h2 className="section-title reveal">Projects</h2>

      <div className="projects__grid">
        {projects.map((p) => (
          <div key={p.id} className="project-card reveal">
            <div className="project-card__number">{p.number}</div>
            <p className="project-card__type">// {p.type}</p>
            <h3 className="project-card__name">{p.name}</h3>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__tech">
              {p.tech.map((t) => (
                <span key={t} className="tech-badge">{t}</span>
              ))}
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" className="project-card__link">
                → View on GitHub
              </a>
            )}
            {p.live && (
              <a href={p.live} target="_blank" rel="noreferrer" className="project-card__link" style={{ marginLeft: "1rem" }}>
                → Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
