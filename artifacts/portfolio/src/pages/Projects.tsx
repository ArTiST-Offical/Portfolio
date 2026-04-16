const PROJECTS = [
  {
    title: "PromptForge",
    desc: "A portfolio-grade AI Red Teaming & Prompt Injection Testing Framework designed to evaluate the security posture of Large Language Models (LLMs) against adversarial prompt-based attacks. Features structured attack campaigns, scoring frameworks, and detailed vulnerability reporting.",
    tags: ["LLM Security", "Python", "Prompt Injection", "Red Teaming"],
    github: "https://github.com/faseeh-ul-hassan/PromptForge",
    demo: null,
  },
  {
    title: "LLM Output Firewall",
    desc: "A drop-in, LLM-based AI Output Firewall that secures AI-generated text using a Model-as-Judge architecture. Prevents system prompt leakage, unsafe instructions, and sensitive data exposure automatically — without modifying the underlying model.",
    tags: ["AI Safety", "Python", "Model-as-Judge", "Firewall"],
    github: "https://github.com/faseeh-ul-hassan/LLM-Output-Firewall",
    demo: null,
  },
  {
    title: "HackaPrompt Competition",
    desc: "Achieved Top 5 & Top 10 rankings on the HackaPrompt leaderboard — a leading AI security competition. Solved complex challenges involving token-based scoring, multi-intent extraction, layered AI exploitation, and multi-turn adversarial strategies against production LLMs.",
    tags: ["Competition", "Jailbreaking", "Multi-turn Attacks", "Top 5"],
    github: null,
    demo: "https://hackaprompt.com",
  },
  {
    title: "AI Attack Labs",
    desc: "Built and maintained local adversarial testing labs for simulating AI attacks across multiple model families. Infrastructure includes automated prompt fuzzing, response behavioral analysis pipelines, and evasion technique benchmarking against major LLM safeguard systems.",
    tags: ["Automation", "Python", "Testing", "Infrastructure"],
    github: null,
    demo: null,
  },
];

export default function Projects() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Projects</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
          maxWidth: "900px",
        }}
      >
        {PROJECTS.map((project, i) => (
          <div
            key={i}
            className="project-card fade-in-up"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <div>
              <p className="project-title" style={{ marginBottom: "0.5rem" }}>{project.title}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3rem", marginBottom: "0.5rem" }}>
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>
            </div>
            <p className="project-desc">{project.desc}</p>
            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://linkedin.com/in/muhammad-faseeh-ul-hassan-609010398" target="_blank" rel="noopener noreferrer" className="social-handle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(168,85,247,0.7)" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
          </svg>
          linkedin.com/in/muhammad-faseeh-ul-hassan-609010398
        </a>
      </div>
    </div>
  );
}
