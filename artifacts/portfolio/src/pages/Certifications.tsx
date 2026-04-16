const CERTS = [
  {
    name: "Certified AI Email Security Specialist",
    issuer: "Proofpoint",
    year: "2024",
    link: "https://www.proofpoint.com",
    badge: "AESS",
  },
  {
    name: "Certified AI Data Security Specialist",
    issuer: "Proofpoint",
    year: "2024",
    link: "https://www.proofpoint.com",
    badge: "ADSS",
  },
  {
    name: "Certified Cyber Security Analyst",
    issuer: "CyberWarfare Labs",
    year: "2023",
    link: "https://cyberwarfarelabs.com",
    badge: "CCSA",
  },
];

const EDUCATION = [
  {
    degree: "BS Cyber Security",
    school: "Air University",
    location: "Pakistan",
    period: "Current",
  },
];

export default function Certifications() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Certifications</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", maxWidth: "760px", marginBottom: "3rem" }}>
        {CERTS.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item fade-in-up"
            style={{ animationDelay: `${i * 0.1}s`, opacity: 0, textDecoration: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(168,85,247,0.4)",
                  background: "rgba(168,85,247,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", color: "#a855f7", letterSpacing: "0.04em", textAlign: "center" }}>
                  {cert.badge}
                </span>
              </div>
              <div>
                <p className="cert-name">{cert.name}</p>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span className="cert-year">{cert.year}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.7)" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </a>
        ))}
      </div>

      <div className="glow-line" style={{ maxWidth: "760px" }} />

      <div style={{ marginTop: "1.5rem", marginBottom: "2rem" }}>
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.65rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "1rem",
          }}
        >
          Education
        </p>
        {EDUCATION.map((edu, i) => (
          <div
            key={i}
            className="cert-item fade-in-up"
            style={{ animationDelay: `${0.35 + i * 0.1}s`, opacity: 0, maxWidth: "760px", cursor: "default" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  border: "1px solid rgba(168,85,247,0.4)",
                  background: "rgba(168,85,247,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.8)" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <div>
                <p className="cert-name">{edu.degree}</p>
                <p className="cert-issuer">{edu.school} · {edu.location}</p>
              </div>
            </div>
            <span className="cert-year">{edu.period}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "1rem" }}>
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
