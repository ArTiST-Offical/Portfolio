interface HomeProps {
  onNavigate: (section: string) => void;
}

const SECTION_BUTTONS = [
  { label: "Experience", key: "experience" },
  { label: "Projects", key: "projects" },
  { label: "Expertise", key: "expertise" },
  { label: "Certifications", key: "certifications" },
  { label: "Trainings", key: "trainings" },
  { label: "About Me", key: "about" },
];

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div
      className="page-section"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        minHeight: "100vh",
        paddingTop: "6rem",
        paddingBottom: "4rem",
        maxWidth: "900px",
      }}
    >
      <div className="fade-in-up fade-in-up-delay-1">
        <h1 className="hero-name" style={{ marginBottom: "0.5rem" }}>
          Muhammad
          <br />
          Faseeh Ul Hassan
        </h1>
      </div>

      <div className="fade-in-up fade-in-up-delay-2" style={{ marginBottom: "2.5rem" }}>
        <p className="hero-role">
          AI Red Teamer &ndash; LLM Security Specialist
        </p>
      </div>

      <div
        className="fade-in-up fade-in-up-delay-3"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, auto)",
          gap: "0.75rem",
          marginBottom: "4rem",
          width: "fit-content",
        }}
      >
        {SECTION_BUTTONS.map(({ label, key }) => (
          <button
            key={key}
            className="section-btn"
            onClick={() => onNavigate(key)}
          >
            <span>{label}</span>
            <span className="chevron">&gt;</span>
          </button>
        ))}
      </div>

      <div className="fade-in-up fade-in-up-delay-4" style={{ display: "flex", gap: "1.5rem", alignItems: "center", flexWrap: "wrap" }}>
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

        <a
          href="https://linkedin.com/in/muhammad-faseeh-ul-hassan-609010398"
          target="_blank"
          rel="noopener noreferrer"
          className="social-handle"
          style={{ color: "rgba(168,85,247,0.8)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(168,85,247,0.7)" strokeWidth="2">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          Visit Profile
        </a>
      </div>
    </div>
  );
}
