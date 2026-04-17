import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import ParticleCanvas from "@/components/ParticleCanvas";
import Navbar from "@/components/Navbar";
import RightDecor from "@/components/RightDecor";
import Home from "@/pages/Home";
import Experience from "@/pages/Experience";
import Projects from "@/pages/Projects";
import Expertise from "@/pages/Expertise";
import Certifications from "@/pages/Certifications";
import Trainings from "@/pages/Trainings";
import About from "@/pages/About";

type Section = "home" | "experience" | "projects" | "expertise" | "certifications" | "trainings" | "about";

function App() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateTo = (section: string) => {
    if (section === activeSection) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSection(section as Section);
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 200);
  };

  useEffect(() => {
    document.title =
      activeSection === "home"
        ? "Muhammad Faseeh Ul Hassan — AI Red Teamer"
        : `${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} — Faseeh Ul Hassan`;
  }, [activeSection]);

  const renderSection = () => {
    switch (activeSection) {
      case "home": return <Home onNavigate={navigateTo} />;
      case "experience": return <Experience />;
      case "projects": return <Projects />;
      case "expertise": return <Expertise />;
      case "certifications": return <Certifications />;
      case "trainings": return <Trainings />;
      case "about": return <About />;
      default: return <Home onNavigate={navigateTo} />;
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "#07010f" }}>
      <ParticleCanvas />
      <div className="purple-orb purple-orb-1" />
      <div className="purple-orb purple-orb-2" />
      <div className="purple-orb purple-orb-3" />

      <Navbar activeSection={activeSection} onNavigate={navigateTo} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          minHeight: "100vh",
          transition: "opacity 0.2s ease, transform 0.2s ease",
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(8px)" : "translateY(0)",
        }}
      >
        {/* Left: main content */}
        <div style={{ flex: "1 1 0", minWidth: 0, overflowX: "hidden" }}>
          {renderSection()}
        </div>

        {/* Right: decorative panel — hidden on small screens */}
        <div
          style={{
            width: "340px",
            flexShrink: 0,
            display: "none",
          }}
          className="right-decor-panel"
        >
          <div style={{ paddingTop: "5.5rem", height: "100%" }}>
            <RightDecor section={activeSection} />
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1100px) {
          .right-decor-panel { display: block !important; }
        }
      `}</style>
      <Analytics />
    </div>
  );
}

export default App;
