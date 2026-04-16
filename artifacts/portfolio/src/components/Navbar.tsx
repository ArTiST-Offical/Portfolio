interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NAV_ITEMS = ["experience", "projects", "expertise", "certifications", "trainings", "about"];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const isHome = activeSection === "home";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.25rem 2rem",
        background: "linear-gradient(180deg, rgba(7,1,15,0.95) 0%, rgba(7,1,15,0) 100%)",
        backdropFilter: "blur(2px)",
        gap: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexShrink: 0 }}>
        <div
          style={{
            width: 14,
            height: 14,
            background: "linear-gradient(135deg, #a855f7, #7c3aed)",
            transform: "rotate(45deg)",
            cursor: "pointer",
            flexShrink: 0,
          }}
          onClick={() => onNavigate("home")}
          title="Home"
        />

        {!isHome && (
          <button
            onClick={() => onNavigate("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.3)",
              padding: "0.3rem 0.75rem",
              cursor: "pointer",
              transition: "all 0.2s",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,85,247,0.7)";
              (e.currentTarget as HTMLButtonElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(168,85,247,0.3)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.7)";
            }}
          >
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
        )}
      </div>

      <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "flex-end", alignItems: "center" }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            className={`nav-link${activeSection === item ? " active" : ""}`}
            onClick={() => onNavigate(item)}
            style={{ background: "none", border: "none", padding: 0 }}
          >
            {item}
          </button>
        ))}
        <a
          href="/resume.pdf"
          download="Muhammad_Faseeh_Ul_Hassan_Resume.pdf"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.35rem",
            background: "rgba(168,85,247,0.12)",
            border: "1px solid rgba(168,85,247,0.45)",
            padding: "0.3rem 0.75rem",
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#c084fc",
            textDecoration: "none",
            transition: "all 0.2s",
            flexShrink: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168,85,247,0.25)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.8)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "rgba(168,85,247,0.12)";
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(168,85,247,0.45)";
          }}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>
      </div>
    </nav>
  );
}
