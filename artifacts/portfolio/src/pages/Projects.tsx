const PROJECTS = [
  {
    title: "AI Security Testing Platform",
    desc: "A comprehensive automated platform for red-teaming large language models. Runs adversarial prompt campaigns, tracks vulnerability patterns across model versions, and generates structured security reports for compliance teams.",
    tags: ["LLM", "Python", "FastAPI"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Adversarial Attack Simulator",
    desc: "A research-grade tool simulating white-box and black-box adversarial attacks on image classifiers and NLP models. Supports FGSM, PGD, C&W, and TextFooler attack families with configurable threat modeling scenarios.",
    tags: ["PyTorch", "Research", "CV"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Malware Analysis with AI",
    desc: "Hybrid malware analysis engine combining static disassembly with an AI classifier trained on behavioral sequences. Achieves 94.7% detection accuracy on novel obfuscated samples across the SOREL-20M dataset.",
    tags: ["ML", "Security", "YARA"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Secure AI Data Pipeline",
    desc: "End-to-end privacy-preserving ML pipeline implementing differential privacy, secure aggregation, and cryptographic data provenance. Enables compliant model training on sensitive regulated data without centralizing raw records.",
    tags: ["Privacy", "Crypto", "MLOps"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Prompt Injection Detector",
    desc: "Real-time detection middleware for production LLM deployments. Uses a fine-tuned classifier combined with semantic heuristics to block prompt injection, jailbreak, and indirect instruction override attempts.",
    tags: ["NLP", "Defense", "API"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "AI Model Fingerprinting Tool",
    desc: "A watermarking and extraction-detection system that embeds cryptographic fingerprints into model weights. Detects unauthorized clones or stolen model derivatives with 98%+ precision across major architectures.",
    tags: ["Watermarking", "PyTorch", "IP"],
    github: "https://github.com",
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
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "2rem" }}>
        <a href="https://instagram.com/reallygreatsite" target="_blank" rel="noopener noreferrer" className="social-handle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(168,85,247,0.7)" }}>
            <circle cx="12" cy="12" r="2" /><circle cx="4" cy="12" r="2" /><circle cx="20" cy="12" r="2" />
          </svg>
          @reallygreatsite
        </a>
      </div>
    </div>
  );
}
