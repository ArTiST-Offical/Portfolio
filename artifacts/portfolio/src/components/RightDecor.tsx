import { useEffect, useState, useRef } from "react";

type Section = "home" | "experience" | "projects" | "expertise" | "certifications" | "trainings" | "about";

interface RightDecorProps {
  section: Section;
}

/* ── HOME: floating security keywords ── */
const SEC_TERMS = [
  "PROMPT_INJECTION", "JAILBREAK", "LLM_EXPLOIT", "RED_TEAM",
  "ADVERSARIAL", "AGENT_MANIPULATION", "SAFETY_BYPASS", "MULTI_TURN",
  "INSTRUCTION_OVERRIDE", "TOKEN_EXTRACTION", "CONTEXT_POISONING",
  "ATTACK_CHAIN", "MODEL_INVERSION", "DATA_LEAKAGE", "AI_VULN",
  "EVASION", "HALLUCINATION", "PROMPT_FORGE", "PENTEST_AI",
];

function HomeDec() {
  const [terms, setTerms] = useState<{ id: number; text: string; x: number; y: number; opacity: number; size: number }[]>([]);
  const counter = useRef(0);

  useEffect(() => {
    const spawn = () => {
      const id = counter.current++;
      const text = SEC_TERMS[Math.floor(Math.random() * SEC_TERMS.length)];
      setTerms((prev) => [
        ...prev.slice(-18),
        { id, text, x: 5 + Math.random() * 85, y: 90 + Math.random() * 10, opacity: 0, size: 8 + Math.random() * 5 },
      ]);
    };
    const iv = setInterval(spawn, 800);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const tick = setInterval(() => {
      setTerms((prev) =>
        prev
          .map((t) => ({ ...t, y: t.y - 0.4, opacity: t.y > 60 ? Math.min(1, (90 - t.y) / 15) : t.y < 20 ? t.y / 20 : 1 }))
          .filter((t) => t.y > -5)
      );
    }, 50);
    return () => clearInterval(tick);
  }, []);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {terms.map((t) => (
        <div
          key={t.id}
          style={{
            position: "absolute",
            left: `${t.x}%`,
            top: `${t.y}%`,
            fontFamily: "'Space Mono', monospace",
            fontSize: `${t.size}px`,
            color: `rgba(168,85,247,${(t.opacity * 0.6).toFixed(2)})`,
            letterSpacing: "0.1em",
            whiteSpace: "nowrap",
            transition: "none",
            userSelect: "none",
          }}
        >
          {t.text}
        </div>
      ))}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(7,1,15,0.7) 0%, transparent 20%, transparent 80%, rgba(7,1,15,0.8) 100%)", pointerEvents: "none" }} />

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <div style={{ position: "relative", width: 160, height: 160 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: `${i * 22}px`,
                border: `1px solid rgba(168,85,247,${0.4 - i * 0.1})`,
                borderRadius: "50%",
                animation: `spin${i % 2 === 0 ? "Cw" : "Ccw"} ${10 + i * 5}s linear infinite`,
              }}
            />
          ))}
          <div style={{
            position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "rgba(168,85,247,0.9)",
            letterSpacing: "0.1em", textAlign: "center", lineHeight: 1.6,
          }}>
            AI<br />RED<br />TEAM
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── EXPERIENCE: animated terminal ── */
const TERMINAL_LINES = [
  { text: "$ initializing red_team_session...", color: "rgba(168,85,247,0.9)" },
  { text: "> target: gray_swan_ai_systems", color: "rgba(255,255,255,0.7)" },
  { text: "> loading attack_vectors.json", color: "rgba(255,255,255,0.7)" },
  { text: "[+] prompt_injection loaded", color: "rgba(100,220,100,0.8)" },
  { text: "[+] jailbreak_suite loaded", color: "rgba(100,220,100,0.8)" },
  { text: "[+] agent_manipulation loaded", color: "rgba(100,220,100,0.8)" },
  { text: "> running multi_turn_exploit.py", color: "rgba(255,180,50,0.8)" },
  { text: "[!] safety_bypass detected", color: "rgba(255,100,100,0.9)" },
  { text: "[!] instruction_override confirmed", color: "rgba(255,100,100,0.9)" },
  { text: "> documenting findings...", color: "rgba(168,85,247,0.8)" },
  { text: "[✓] vuln_report.md saved", color: "rgba(100,220,100,0.8)" },
  { text: "> session: hackerOne_program_active", color: "rgba(255,255,255,0.5)" },
  { text: "> top_5_leaderboard: hackaprompt", color: "rgba(168,85,247,0.8)" },
];

function ExpDec() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const iv = setInterval(() => setVisibleCount((c) => c < TERMINAL_LINES.length ? c + 1 : 0), 900);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => setCursor((c) => !c), 500);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    if (visibleCount === TERMINAL_LINES.length) {
      const t = setTimeout(() => setVisibleCount(0), 2500);
      return () => clearTimeout(t);
    }
  }, [visibleCount]);

  return (
    <div style={{ padding: "1.5rem" }}>
      <div
        style={{
          border: "1px solid rgba(168,85,247,0.3)",
          background: "rgba(7,1,15,0.85)",
          padding: "1.25rem",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          lineHeight: 1.9,
          minHeight: 320,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(168,85,247,0.2)" }}>
          {["#c026d3", "#7c3aed", "#a855f7"].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />
          ))}
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", marginLeft: "0.5rem" }}>red_team_console.sh</span>
        </div>
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} style={{ color: line.color }}>{line.text}</div>
        ))}
        {visibleCount < TERMINAL_LINES.length && (
          <span style={{ color: "rgba(168,85,247,0.9)" }}>{cursor ? "█" : " "}</span>
        )}
      </div>
    </div>
  );
}

/* ── PROJECTS: code snippet display ── */
const CODE_SNIPPET = `# PromptForge Attack Engine
import promptforge as pf

target = pf.LLMTarget(
  model="gpt-4",
  endpoint="/v1/chat"
)

# Load injection payloads
payloads = pf.load_payloads(
  "injection",
  "jailbreak",
  "multi_turn"
)

# Execute red team campaign
results = pf.Campaign(
  target=target,
  payloads=payloads,
  scoring="token_based"
).run()

# Generate vuln report
pf.Report(results).export(
  fmt="markdown",
  include_poc=True
)
print(f"Vulns found: {results.critical}")`;

function ProjectsDec() {
  const [chars, setChars] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => {
      setChars((c) => {
        if (c >= CODE_SNIPPET.length) {
          setTimeout(() => setChars(0), 2000);
          return c;
        }
        return c + 2;
      });
    }, 30);
    return () => clearInterval(iv);
  }, []);

  const displayed = CODE_SNIPPET.slice(0, chars);

  const colorize = (line: string) => {
    if (line.startsWith("#")) return "rgba(100,180,100,0.7)";
    if (line.includes("import") || line.includes("def ")) return "rgba(168,85,247,0.9)";
    if (line.includes("=") && !line.includes("==")) return "rgba(255,255,255,0.85)";
    if (line.startsWith("print")) return "rgba(255,180,50,0.9)";
    return "rgba(200,200,255,0.7)";
  };

  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ border: "1px solid rgba(168,85,247,0.3)", background: "rgba(7,1,15,0.85)", padding: "1.25rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(168,85,247,0.2)" }}>
          {["#c026d3", "#7c3aed", "#a855f7"].map((c, i) => (
            <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c, opacity: 0.8 }} />
          ))}
          <span style={{ fontFamily: "'Space Mono', monospace", color: "rgba(255,255,255,0.3)", fontSize: "0.55rem", marginLeft: "0.5rem" }}>promptforge_attack.py</span>
        </div>
        <pre style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", lineHeight: 1.8, margin: 0, overflow: "hidden" }}>
          {displayed.split("\n").map((line, i) => (
            <div key={i} style={{ color: colorize(line) }}>{line || " "}</div>
          ))}
          <span style={{ color: "#a855f7" }}>█</span>
        </pre>
      </div>
    </div>
  );
}

/* ── EXPERTISE: animated hex skill grid ── */
const HEX_SKILLS = [
  { label: "PROMPT\nINJECTION", pct: 98 },
  { label: "LLM\nRED TEAM", pct: 96 },
  { label: "JAILBREAK", pct: 94 },
  { label: "AGENT\nEXPLOIT", pct: 90 },
  { label: "TOOL\nBUILD", pct: 87 },
  { label: "VULN\nREPORT", pct: 92 },
];

function ExpertiseDec() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 50);
    return () => clearInterval(iv);
  }, []);

  const r = 28;
  const cx = 40;
  const cy = 40;
  const circ = 2 * Math.PI * r;

  return (
    <div style={{ padding: "1.5rem" }}>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.25rem" }}>
        SKILL RADAR
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
        {HEX_SKILLS.map((skill, i) => {
          const offset = circ - (circ * skill.pct) / 100;
          return (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
              <svg width="80" height="80" viewBox="0 0 80 80">
                <circle cx={cx} cy={cy} r={r} fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth="4" />
                <circle
                  cx={cx} cy={cy} r={r}
                  fill="none"
                  stroke={`rgba(168,85,247,${0.6 + Math.sin(tick * 0.05 + i) * 0.2})`}
                  strokeWidth="4"
                  strokeDasharray={circ}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${cx} ${cy})`}
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
                <text x={cx} y={cy - 4} textAnchor="middle" fill="rgba(255,255,255,0.9)" fontSize="9" fontFamily="Space Mono" fontWeight="700">
                  {skill.pct}%
                </text>
              </svg>
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.48rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.4 }}>
                {skill.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ── CERTIFICATIONS: orbiting shield ── */
function CertsDec() {
  const [angle, setAngle] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setAngle((a) => (a + 0.4) % 360), 16);
    return () => clearInterval(iv);
  }, []);

  const badges = ["AESS", "ADSS", "CCSA"];
  const orbR = 90;

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", minHeight: 360 }}>
      <div style={{ position: "relative", width: 260, height: 260 }}>
        {/* Outer ring */}
        <svg width="260" height="260" style={{ position: "absolute", inset: 0 }}>
          <circle cx="130" cy="130" r="110" fill="none" stroke="rgba(168,85,247,0.1)" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="130" cy="130" r="85" fill="none" stroke="rgba(168,85,247,0.08)" strokeWidth="1" />
        </svg>

        {/* Orbiting badge dots */}
        {badges.map((badge, i) => {
          const a = ((angle + i * 120) * Math.PI) / 180;
          const x = 130 + orbR * Math.cos(a);
          const y = 130 + orbR * Math.sin(a);
          return (
            <div
              key={badge}
              style={{
                position: "absolute",
                left: x - 20,
                top: y - 20,
                width: 40,
                height: 40,
                border: "1px solid rgba(168,85,247,0.5)",
                background: "rgba(168,85,247,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.45rem",
                color: "#c084fc",
                letterSpacing: "0.05em",
              }}
            >
              {badge}
            </div>
          );
        })}

        {/* Center shield */}
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.3rem",
        }}>
          <svg width="52" height="60" viewBox="0 0 52 60">
            <path d="M26 2 L50 12 L50 30 C50 44 38 54 26 58 C14 54 2 44 2 30 L2 12 Z"
              fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.5)" strokeWidth="1.5" />
            <path d="M26 10 L42 18 L42 30 C42 40 34 47 26 50 C18 47 10 40 10 30 L10 18 Z"
              fill="rgba(168,85,247,0.05)" stroke="rgba(168,85,247,0.3)" strokeWidth="1" />
            <text x="26" y="33" textAnchor="middle" fill="rgba(168,85,247,0.9)" fontSize="8" fontFamily="Space Mono" fontWeight="700">SEC</text>
          </svg>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.5rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>VERIFIED</span>
        </div>
      </div>
    </div>
  );
}

/* ── TRAININGS: learning path ── */
const TRAINING_ITEMS = ["CEH v12", "PMP", "AWS CPE", "Blue Team", "Purple Team"];

function TrainingsDec() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setProgress((p) => (p >= 100 ? 0 : p + 0.5)), 50);
    return () => clearInterval(iv);
  }, []);

  return (
    <div style={{ padding: "1.5rem" }}>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "1.5rem" }}>
        LEARNING PATH
      </p>
      <div style={{ position: "relative" }}>
        {/* vertical line */}
        <div style={{ position: "absolute", left: 19, top: 0, bottom: 0, width: 1, background: "rgba(168,85,247,0.2)" }} />
        <div style={{ position: "absolute", left: 19, top: 0, width: 1, background: "linear-gradient(180deg, #a855f7, transparent)", height: `${progress}%`, transition: "height 0.1s linear" }} />

        {TRAINING_ITEMS.map((item, i) => {
          const itemPct = ((i + 1) / TRAINING_ITEMS.length) * 100;
          const done = progress >= itemPct;
          const active = progress >= (i / TRAINING_ITEMS.length) * 100 && !done;
          return (
            <div key={item} style={{ display: "flex", gap: "1.25rem", alignItems: "center", marginBottom: "1.5rem", position: "relative" }}>
              <div style={{
                width: 38, height: 38, flexShrink: 0, border: `1px solid ${done ? "#a855f7" : active ? "rgba(168,85,247,0.6)" : "rgba(168,85,247,0.2)"}`,
                background: done ? "rgba(168,85,247,0.2)" : "rgba(7,1,15,0.8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1,
                transition: "all 0.3s",
                boxShadow: done ? "0 0 12px rgba(168,85,247,0.4)" : "none",
              }}>
                {done
                  ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                  : <div style={{ width: 6, height: 6, borderRadius: "50%", background: active ? "#a855f7" : "rgba(168,85,247,0.3)", animation: active ? "pulse 1s ease-in-out infinite" : "none" }} />
                }
              </div>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: done ? "#fff" : active ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {item}
                </p>
                {done && <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "rgba(168,85,247,0.7)" }}>Completed</p>}
                {active && <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.65rem", color: "rgba(255,180,50,0.8)" }}>In Progress</p>}
              </div>
            </div>
          );
        })}
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }`}</style>
    </div>
  );
}

/* ── ABOUT: stats visualization ── */
function AboutDec() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const iv = setInterval(() => setTick((t) => t + 1), 80);
    return () => clearInterval(iv);
  }, []);

  const stats = [
    { label: "Years Active", value: 4, max: 10, unit: "yrs" },
    { label: "Companies", value: 3, max: 10, unit: "" },
    { label: "Leaderboard", value: 5, max: 10, unit: "top" },
    { label: "Certs Earned", value: 3, max: 10, unit: "" },
  ];

  return (
    <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" }}>
        PROFILE STATS
      </p>
      {stats.map((s, i) => {
        const w = (s.value / s.max) * 100;
        const pulse = 0.7 + Math.sin(tick * 0.07 + i * 1.2) * 0.2;
        return (
          <div key={i}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.4rem" }}>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{s.label}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", color: "#a855f7" }}>{s.unit}{s.value}+</span>
            </div>
            <div style={{ height: "3px", background: "rgba(168,85,247,0.1)", borderRadius: "2px" }}>
              <div style={{ height: "100%", width: `${w}%`, background: `linear-gradient(90deg, #7c3aed, rgba(168,85,247,${pulse}))`, borderRadius: "2px", transition: "width 0.5s ease" }} />
            </div>
          </div>
        );
      })}

      <div style={{ marginTop: "0.5rem", border: "1px solid rgba(168,85,247,0.2)", padding: "1rem", background: "rgba(168,85,247,0.04)" }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.58rem", color: "rgba(168,85,247,0.8)", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>// CURRENT STATUS</p>
        <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>
          Actively red-teaming AI systems at Gray Swan AI while competing on HackaPrompt leaderboards.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "0.75rem" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "blink 2s ease-in-out infinite" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", color: "rgba(100,220,100,0.8)", letterSpacing: "0.1em" }}>AVAILABLE FOR OPPORTUNITIES</span>
        </div>
      </div>
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
    </div>
  );
}

/* ── MAIN EXPORT ── */
export default function RightDecor({ section }: RightDecorProps) {
  return (
    <div
      style={{
        position: "sticky",
        top: "5rem",
        width: "100%",
        maxHeight: "calc(100vh - 6rem)",
        overflow: "hidden",
        borderLeft: "1px solid rgba(168,85,247,0.1)",
      }}
    >
      {section === "home" && <HomeDec />}
      {section === "experience" && <ExpDec />}
      {section === "projects" && <ProjectsDec />}
      {section === "expertise" && <ExpertiseDec />}
      {section === "certifications" && <CertsDec />}
      {section === "trainings" && <TrainingsDec />}
      {section === "about" && <AboutDec />}

      <style>{`
        @keyframes spinCw { to { transform: rotate(360deg); } }
        @keyframes spinCcw { to { transform: rotate(-360deg); } }
      `}</style>
    </div>
  );
}
