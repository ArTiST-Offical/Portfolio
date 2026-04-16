interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const NAV_ITEMS = ["experience", "projects", "expertise", "certifications", "about"];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
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
      }}
    >
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
      <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
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
      </div>
    </nav>
  );
}
