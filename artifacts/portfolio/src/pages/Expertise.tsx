const EXPERTISE = [
  {
    name: "AI Red Teaming",
    subs: [
      "Structured red team operations against LLMs",
      "Agentic system manipulation",
      "Multi-turn adversarial attack design",
    ],
  },
  {
    name: "Prompt Injection & Jailbreaking",
    subs: [
      "Multilayered & evasive prompt strategies",
      "Instruction override techniques",
      "Encoding & obfuscation methods",
    ],
  },
  {
    name: "LLM Vulnerability Research",
    subs: [
      "Safety bypass identification",
      "Data leakage & context manipulation",
      "Model misalignment exploitation",
    ],
  },
  {
    name: "Attack Chain Development",
    subs: [
      "Token-based scoring exploitation",
      "Multi-intent extraction strategies",
      "Layered AI exploitation frameworks",
    ],
  },
  {
    name: "Security Tool Building",
    subs: [
      "Adversarial prompt testing frameworks",
      "AI attack lab infrastructure",
      "PoC development & automation",
    ],
  },
  {
    name: "Vulnerability Reporting",
    subs: [
      "Risk assessment & documentation",
      "Responsible disclosure practices",
      "Mitigation strategy recommendations",
    ],
  },
];

const SKILL_BARS = [
  { label: "Prompt Injection & Jailbreaking", value: 98 },
  { label: "LLM Red Teaming", value: 96 },
  { label: "Adversarial Attack Design", value: 94 },
  { label: "Agent Exploitation", value: 90 },
  { label: "Security Tool Development (Python)", value: 87 },
  { label: "Vulnerability Research & Reporting", value: 92 },
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
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.3rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)" }}>
                {skill.label}
              </span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "rgba(168,85,247,0.8)" }}>
                {skill.value}%
              </span>
            </div>
            <div style={{ height: "2px", background: "rgba(168,85,247,0.15)", borderRadius: "1px", overflow: "hidden" }}>
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
        <a href="https://linkedin.com/in/muhammad-faseeh-ul-hassan-609010398" target="_blank" rel="noopener noreferrer" className="social-handle">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(168,85,247,0.7)" }}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
          </svg>
          linkedin.com/in/muhammad-faseeh-ul-hassan-609010398
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
