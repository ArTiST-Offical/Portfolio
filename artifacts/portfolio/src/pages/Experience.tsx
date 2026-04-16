import { useState } from "react";

const EXPERIENCES = [
  {
    title: "AI Red Team Consultant",
    company: "Gray Swan AI",
    location: "Remote, United States",
    period: "February 2026 – Present",
    tags: ["AI Agents", "Prompt Injection", "Red Team", "LLM Exploitation", "Agentic System Manipulation", "Adversarial Testing"],
    bullets: [
      "Perform offensive security testing against AI systems in structured red teaming environments.",
      "Develop adversarial prompt techniques to bypass safety safeguards in LLMs and agentic AI systems.",
      "Identify vulnerabilities such as prompt injection, instruction override, and model manipulation.",
      "Conduct adversarial testing on large language models to identify safety bypasses and harmful behavior generation.",
      "Design and craft advanced prompts to evaluate model safeguards against policy violations.",
      "Analyze model responses to determine successful or failed safety breaks and document findings.",
    ],
  },
  {
    title: "AI Red Teamer",
    company: "HackAPrompt",
    location: "Remote, United States",
    period: "July 2025 – Present",
    tags: ["AI Agents", "Jailbreaking", "Prompt Engineering", "Attack Strategy Design", "Multi-turn Attacks"],
    bullets: [
      "Conduct AI Red Teaming assessments on LLMs, AI agents, and interactive AI systems.",
      "Design, implement, and test prompt injection attacks, including multilayered and evasive strategies.",
      "Achieved Top 5 & Top 10 on the HackaPrompt Leaderboard by solving complex challenges involving token-based scoring, multi-intent extraction, and layered AI exploitation.",
      "Develop PoCs, scoring frameworks, and structured methodologies for AI vulnerabilities.",
      "Build and refine tools and local labs to simulate AI attacks, measure effectiveness, and automate testing.",
      "Document vulnerabilities, attack strategies, and mitigation recommendations in structured reports.",
    ],
  },
  {
    title: "AI Bug Bounty Hunter",
    company: "HackerOne",
    location: "Remote, United States",
    period: "February 2021 – February 2026",
    tags: ["Security Testing", "LLM Security", "AI Vulnerability Research", "Analysis", "Red Team"],
    bullets: [
      "Conducted comprehensive AI red teaming assessments on LLMs and AI-driven applications across public programs and research environments.",
      "Identified vulnerabilities such as prompt injection, jailbreaks, data leakage, instruction override, context manipulation, and model misalignment issues.",
      "Performed manual adversarial testing using crafted prompts, multi-turn attack chains, and behavioral analysis of model responses.",
      "Validated exploitation scenarios and developed detailed proof-of-concepts (PoCs) demonstrating real-world impact on AI systems.",
      "Prepared professional vulnerability reports including risk assessment, attack methodology, and actionable mitigation strategies for AI safety.",
      "Continuously researched and applied advanced AI attack techniques, including evasive prompting, encoding strategies, and agent manipulation.",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Experience</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", maxWidth: "800px" }}>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className="exp-item fade-in-up"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0 }}
            onClick={() => setExpanded(expanded === i ? null : i)}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <p className="exp-title">{exp.title}</p>
                <p className="exp-company">{exp.company}</p>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", marginTop: "0.1rem" }}>{exp.location}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span className="exp-date">{exp.period}</span>
                <span
                  style={{
                    color: "rgba(168,85,247,0.8)",
                    fontSize: "0.75rem",
                    transition: "transform 0.3s",
                    transform: expanded === i ? "rotate(90deg)" : "rotate(0deg)",
                    display: "inline-block",
                  }}
                >
                  &gt;
                </span>
              </div>
            </div>

            {expanded === i && (
              <div style={{ marginTop: "1rem" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.75rem" }}>
                  {exp.tags.map((tag) => (
                    <span key={tag} className="tag-badge">{tag}</span>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {exp.bullets.map((bullet, j) => (
                    <p key={j} className="exp-bullet">{bullet}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a
          href="https://linkedin.com/in/muhammad-faseeh-ul-hassan-609010398"
          target="_blank"
          rel="noopener noreferrer"
          className="social-handle"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(168,85,247,0.7)" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
          </svg>
          linkedin.com/in/muhammad-faseeh-ul-hassan-609010398
        </a>
      </div>
    </div>
  );
}
