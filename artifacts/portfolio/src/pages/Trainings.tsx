const TRAININGS = [
  {
    name: "Certified Ethical Hacker (CEH v12)",
    provider: "Corvit Institute, Lahore",
    badge: "CEH",
    desc: "Comprehensive ethical hacking training covering penetration testing methodologies, network scanning, system hacking, malware threats, social engineering, and countermeasures across all major attack vectors.",
    tags: ["Ethical Hacking", "Penetration Testing", "Network Security"],
    color: "#a855f7",
  },
  {
    name: "Project Management Professional (PMP)",
    provider: "KnowledgeSquare",
    badge: "PMP",
    desc: "Globally recognized project management training covering predictive, agile, and hybrid frameworks. Includes risk management, stakeholder engagement, scheduling, budgeting, and leadership strategies.",
    tags: ["Project Management", "Agile", "Leadership"],
    color: "#7c3aed",
  },
  {
    name: "AWS Cloud Practitioner Essentials",
    provider: "AWS Trainings",
    badge: "AWS",
    desc: "Foundational training on Amazon Web Services covering core cloud concepts, AWS global infrastructure, security and compliance fundamentals, billing, pricing models, and key AWS services.",
    tags: ["Cloud", "AWS", "Infrastructure"],
    color: "#9333ea",
  },
  {
    name: "Certified Cyber Security Analyst (C3SA)",
    provider: "CyberWarfare Labs",
    badge: "C3SA",
    desc: "Advanced cybersecurity analyst training covering threat intelligence, incident response, SIEM operations, log analysis, vulnerability assessment, and defensive security strategies for enterprise environments.",
    tags: ["Cyber Security", "Threat Intelligence", "SIEM"],
    color: "#c026d3",
  },
];

export default function Trainings() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Trainings</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "800px",
        }}
      >
        {TRAININGS.map((training, i) => (
          <div
            key={i}
            className="fade-in-up"
            style={{
              animationDelay: `${i * 0.1}s`,
              opacity: 0,
              border: "1px solid rgba(168,85,247,0.2)",
              padding: "1.5rem",
              background: "rgba(7,1,15,0.6)",
              transition: "all 0.3s ease",
              display: "flex",
              gap: "1.25rem",
              alignItems: "flex-start",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.5)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(168,85,247,0.06)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(168,85,247,0.2)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(7,1,15,0.6)";
              (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                border: `1px solid ${training.color}66`,
                background: `${training.color}12`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.5rem",
                  color: training.color,
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  lineHeight: 1.3,
                }}
              >
                {training.badge}
              </span>
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap", marginBottom: "0.3rem" }}>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#fff",
                  }}
                >
                  {training.name}
                </p>
              </div>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.75rem",
                  color: training.color,
                  marginBottom: "0.6rem",
                  letterSpacing: "0.03em",
                }}
              >
                {training.provider}
              </p>
              <p
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  marginBottom: "0.75rem",
                }}
              >
                {training.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                {training.tags.map((tag) => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>
            </div>
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
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
            <circle cx="4" cy="4" r="2" />
          </svg>
          linkedin.com/in/muhammad-faseeh-ul-hassan-609010398
        </a>
      </div>
    </div>
  );
}
