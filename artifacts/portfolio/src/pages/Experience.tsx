import { useState } from "react";

const EXPERIENCES = [
  {
    title: "AI Security Consultant",
    company: "XYZ Cybersecurity",
    period: "Jan 2023 – Present",
    bullets: [
      "Developed and executed adversarial attack simulations against large language models, identifying critical vulnerabilities in production AI systems.",
      "Red-teamed generative AI deployments for financial and healthcare clients, uncovering prompt injection, jailbreak, and data exfiltration vectors.",
      "Built automated security testing pipelines for AI systems, reducing manual assessment time by 60%.",
      "Advised engineering teams on secure AI architecture patterns and mitigation strategies for model theft and misuse.",
    ],
    tags: ["LLM Security", "Red Teaming", "Adversarial ML"],
  },
  {
    title: "Senior AI Red Teamer",
    company: "Tech Defense Solutions",
    period: "May 2021 – Dec 2022",
    bullets: [
      "Conducted systematic red team exercises against autonomous AI pipelines, exposing misalignment and adversarial exploitation paths.",
      "Co-authored internal threat modeling frameworks for AI-based decision systems used by government agencies.",
      "Designed and delivered training programs on AI security for blue teams across 5 enterprise organizations.",
      "Performed security assessments on NLP models, detecting bias exploitation and model inversion attacks.",
    ],
    tags: ["Threat Modeling", "NLP Security", "Enterprise Security"],
  },
  {
    title: "Machine Learning Security Engineer",
    company: "SecureAI Labs",
    period: "Aug 2019 – Apr 2021",
    bullets: [
      "Researched adversarial examples and evasion techniques against image classification models in autonomous vehicle contexts.",
      "Developed tooling for membership inference and model extraction detection in deployed ML services.",
      "Published research on secure federated learning protocols, cited in 3 industry security standards.",
    ],
    tags: ["Adversarial ML", "Federated Learning", "Research"],
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
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-handle"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(168,85,247,0.7)" }}>
            <circle cx="12" cy="12" r="2" />
            <circle cx="4" cy="12" r="2" />
            <circle cx="20" cy="12" r="2" />
          </svg>
          @reallygreatsite
        </a>
      </div>
    </div>
  );
}
