const EXPERTISE = [
  {
    name: "AI Red Teaming",
    subs: [
      "Adversarial prompt engineering",
      "Jailbreak & bypass research",
      "Multimodal attack surfaces",
    ],
  },
  {
    name: "Secure Machine Learning",
    subs: [
      "Threat modeling for AI systems",
      "AI model hardening techniques",
      "AI security benchmarking",
    ],
  },
  {
    name: "AI-Based Attack Simulation",
    subs: [
      "Custom AI attack frameworks",
      "Fuzzing & boundary testing",
      "End-to-end attack automation",
    ],
  },
  {
    name: "AI Security Assessments",
    subs: [
      "AI security risk management",
      "Regulatory compliance audits",
      "Penetration testing for ML APIs",
    ],
  },
  {
    name: "Secure AI Data Pipeline",
    subs: [
      "Differential privacy implementation",
      "Federated learning security",
      "Data provenance & integrity",
    ],
  },
  {
    name: "Security Tool Development",
    subs: [
      "Custom red team tooling",
      "Vulnerability scanner development",
      "Secure CI/CD for AI systems",
    ],
  },
];

const SKILL_BARS = [
  { label: "LLM Security & Red Teaming", value: 97 },
  { label: "Adversarial Machine Learning", value: 94 },
  { label: "AI Security Architecture", value: 90 },
  { label: "Threat Modeling", value: 88 },
  { label: "Security Tool Development", value: 85 },
  { label: "Privacy-Preserving ML", value: 82 },
];

export default function Expertise() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Expertise</h2>

      <div className="expertise-grid" style={{ maxWidth: "900px", marginBottom: "3rem" }}>
        {EXPERTISE.map((item, i) => (
          <div
            key={i}
            className="expertise-item fade-in-up"
            style={{ animationDelay: `${i * 0.08}s`, opacity: 0 }}
          >
            <p className="expertise-name">{item.name}</p>
            <ul className="expertise-sub">
              {item.subs.map((sub, j) => (
                <li key={j}>{sub}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="glow-line" style={{ maxWidth: "900px" }} />

      <div style={{ maxWidth: "600px" }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "1.5rem",
          }}
        >
          Proficiency
        </p>
        {SKILL_BARS.map((skill, i) => (
          <div
            key={i}
            className="fade-in-up"
            style={{ marginBottom: "1rem", animationDelay: `${0.4 + i * 0.08}s`, opacity: 0 }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.3rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                {skill.label}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.6rem",
                  color: "rgba(168,85,247,0.8)",
                }}
              >
                {skill.value}%
              </span>
            </div>
            <div
              style={{
                height: "2px",
                background: "rgba(168,85,247,0.15)",
                borderRadius: "1px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${skill.value}%`,
                  background: "linear-gradient(90deg, #7c3aed, #a855f7, #c084fc)",
                  borderRadius: "1px",
                  animation: "expandWidth 1s ease forwards",
                  animationDelay: `${0.5 + i * 0.1}s`,
                  transformOrigin: "left",
                  transform: "scaleX(0)",
                }}
              />
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

      <style>{`
        @keyframes expandWidth {
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
