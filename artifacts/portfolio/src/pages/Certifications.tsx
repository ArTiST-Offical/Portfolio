const CERTS = [
  {
    name: "Certified AI Security Professional (CAISP)",
    issuer: "AI Security Alliance",
    year: "2024",
    link: "https://example.com/cert/caisp",
    badge: "CAISP",
  },
  {
    name: "Offensive AI Practitioner",
    issuer: "Adversarial Robustness Institute",
    year: "2023",
    link: "https://example.com/cert/oap",
    badge: "OAP",
  },
  {
    name: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    year: "2022",
    link: "https://example.com/cert/ceh",
    badge: "CEH",
  },
  {
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services",
    year: "2022",
    link: "https://example.com/cert/aws",
    badge: "AWS",
  },
  {
    name: "Google Professional ML Engineer",
    issuer: "Google Cloud",
    year: "2021",
    link: "https://example.com/cert/gcp",
    badge: "GCP",
  },
  {
    name: "CompTIA Security+",
    issuer: "CompTIA",
    year: "2020",
    link: "https://example.com/cert/sec+",
    badge: "SEC+",
  },
  {
    name: "OSCP – Offensive Security Certified Professional",
    issuer: "Offensive Security",
    year: "2020",
    link: "https://example.com/cert/oscp",
    badge: "OSCP",
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera",
    year: "2019",
    link: "https://example.com/cert/dl",
    badge: "DL",
  },
];

export default function Certifications() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">Certifications</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          maxWidth: "760px",
        }}
      >
        {CERTS.map((cert, i) => (
          <a
            key={i}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-item fade-in-up"
            style={{ animationDelay: `${i * 0.07}s`, opacity: 0, textDecoration: "none" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: 38,
                  height: 38,
                  border: "1px solid rgba(168,85,247,0.4)",
                  background: "rgba(168,85,247,0.08)",
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
                    color: "#a855f7",
                    letterSpacing: "0.05em",
                    textAlign: "center",
                  }}
                >
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
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(168,85,247,0.7)"
                strokeWidth="2"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </a>
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
