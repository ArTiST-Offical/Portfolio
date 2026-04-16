export default function About() {
  return (
    <div className="page-section" style={{ paddingTop: "7rem" }}>
      <h2 className="section-title fade-in-up">About Me</h2>

      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
          maxWidth: "860px",
        }}
      >
        <div className="fade-in-up fade-in-up-delay-1">
          <div
            style={{
              width: 210,
              height: 260,
              border: "1px solid rgba(168,85,247,0.4)",
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(168,85,247,0.15)",
            }}
          >
            <img
              src="/profile.png"
              alt="Muhammad Faseeh Ul Hassan"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 60%, rgba(7,1,15,0.6) 100%)", pointerEvents: "none" }} />
          </div>
        </div>

        <div className="fade-in-up fade-in-up-delay-2" style={{ flex: 1, minWidth: "260px" }}>
          <div
            style={{
              border: "1px solid rgba(168,85,247,0.2)",
              padding: "1.5rem",
              background: "rgba(7,1,15,0.6)",
              marginBottom: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "0.25rem",
                letterSpacing: "-0.01em",
                textTransform: "uppercase",
              }}
            >
              Muhammad Faseeh Ul Hassan
            </p>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.6rem",
                letterSpacing: "0.12em",
                color: "#a855f7",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              AI Red Teamer · LLM Security Specialist
            </p>
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(255,255,255,0.65)",
                lineHeight: 1.75,
              }}
            >
              AI Red Teamer specializing in adversarial testing of Large Language Models (LLMs) and AI
              systems. Experienced in designing and executing advanced prompt injection attacks, jailbreak
              techniques, and multi-turn exploitation strategies to identify high-impact vulnerabilities.
              Proven track record in leading AI security competitions including HackaPrompt (Top 5 &amp; Top 10
              rankings), with hands-on experience building AI attack labs, developing proof-of-concepts
              (PoCs), and evaluating model robustness under real-world threat scenarios.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <a href="mailto:muhammad.faseeh.09@gmail.com" className="contact-row">
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              muhammad.faseeh.09@gmail.com
            </a>
            <a href="tel:+923306947889" className="contact-row">
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              (+92) 330 6947889
            </a>
            <a
              href="https://linkedin.com/in/muhammad-faseeh-ul-hassan-609010398"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </span>
              linkedin.com/in/muhammad-faseeh-ul-hassan-609010398
            </a>
            <a
              href="https://github.com/faseeh-ul-hassan"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-row"
            >
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </span>
              github.com/faseeh-ul-hassan
            </a>
            <div className="contact-row" style={{ cursor: "default" }}>
              <span className="contact-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              Multan, Pakistan
            </div>
          </div>

          <a
            href="/resume.pdf"
            download="Muhammad_Faseeh_Ul_Hassan_Resume.pdf"
            className="download-btn"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
            <span style={{ color: "rgba(168,85,247,0.8)" }}>↓</span>
          </a>
        </div>
      </div>

      <div className="glow-line" style={{ maxWidth: "860px", marginTop: "3rem" }} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "1rem",
          maxWidth: "860px",
          marginTop: "1.5rem",
        }}
      >
        {[
          { number: "4+", label: "Years in AI Security" },
          { number: "3", label: "Companies Worked" },
          { number: "Top 5", label: "HackaPrompt Ranking" },
          { number: "3", label: "Certifications Earned" },
        ].map((stat, i) => (
          <div
            key={i}
            className="fade-in-up"
            style={{
              animationDelay: `${0.3 + i * 0.1}s`,
              opacity: 0,
              border: "1px solid rgba(168,85,247,0.2)",
              padding: "1.25rem",
              textAlign: "center",
              background: "rgba(7,1,15,0.5)",
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: stat.number.length > 3 ? "1.3rem" : "2rem",
                fontWeight: 700,
                color: "#a855f7",
                lineHeight: 1,
                marginBottom: "0.4rem",
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.55rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              {stat.label}
            </p>
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
