import "./About.css";

const SKILLS = [
  "React", "Node.js", "Spring Boot", "Java",
  "JavaScript", "MySQL", "REST APIs", "HTML/CSS",
  "Git", "MongoDB", "Express", "TypeScript",
];

export default function About() {
  return (
    <section className="about" id="about">
      <p className="section-label reveal">// chapter one</p>
      <h2 className="section-title reveal">About Me</h2>

      <div className="about__grid">
        <div className="about__text reveal">
          <p>
            Hey, I'm <strong>Aman Verma</strong> — a Full Stack Developer who loves building
            things that live on the web. Like Eleven navigating the Upside Down, I thrive
            in complex environments and find elegant solutions where others see chaos.
          </p>
          <p>
            I work across the entire stack — from crafting responsive, animated frontends
            to architecting robust backend systems. My weapon of choice:{" "}
            <strong>React, Node.js, Spring Boot, and everything in between.</strong>
          </p>
          <p>
            When I'm not writing code, I'm exploring new frameworks, contributing to
            projects, and pushing the boundaries of what the web can do.
          </p>
        </div>

        <div className="about__skills reveal">
          <p className="section-label" style={{ marginBottom: "1rem" }}>// tech stack</p>
          <div className="skills-grid">
            {SKILLS.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
