import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectMechanics({ project }) {
  if (!project.mechanics || project.mechanics.length === 0) return null;

  return (
    <div className="mx-4 mt-12">
      <h2 className="
        text-xl font-bold mb-6 tracking-widest
        text-pink-700
      ">
        CODE HIGHLIGHTS
      </h2>

      {project.mechanics.map((m, i) => (
        <div
          key={i}
          className="
            mb-10 p-6 rounded-xl
            bg-white/60 backdrop-blur-md
            border border-pink-200
            shadow-md
          "
        >
          {/* Title + Description */}
          <div className="mb-4">
            <h3 className="
              text-lg font-bold tracking-wide text-pink-800 mb-2
            ">
              {m.subtitle}
            </h3>
            <p className="text-sm md:text-base text-pink-900/80 leading-relaxed">
              {m.description}
            </p>
          </div>

          {/* Code + Preview */}
          <div className={`grid grid-cols-1 gap-4 ${m.image ? "md:grid-cols-[65%_35%]" : ""}`}>

            {/* Code Block */}
            <div className="code-block rounded-lg border border-pink-200 shadow-sm overflow-hidden">
              {/* Language label */}
              <div
                style={{
                  background: "#1e1e1e",
                  padding: "0.35rem 0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span style={{
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#ec4899",
                  textTransform: "uppercase",
                }}>C#</span>
                <span style={{
                  marginLeft: "auto",
                  display: "flex",
                  gap: "0.35rem",
                }}>
                  {["#ff5f57","#ffbd2e","#28c840"].map((c, ci) => (
                    <span key={ci} style={{
                      width: 10, height: 10,
                      borderRadius: "50%",
                      background: c,
                      display: "inline-block",
                      opacity: 0.8,
                    }} />
                  ))}
                </span>
              </div>
              <SyntaxHighlighter
                language="csharp"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  padding: "1rem",
                  background: "#1e1e1e",
                  fontSize: "0.85rem",
                  lineHeight: "1.75",
                  borderRadius: 0,
                  overflowX: "auto",
                }}
                codeTagProps={{
                  style: {
                    fontFamily: '"Fira Code", "Cascadia Code", Consolas, monospace',
                    whiteSpace: "pre",
                  }
                }}
                showLineNumbers
                lineNumberStyle={{
                  color: "#555",
                  minWidth: "2.5em",
                  paddingRight: "1em",
                  userSelect: "none",
                }}
              >
                {m.code}
              </SyntaxHighlighter>
            </div>

            {/* In-engine Preview */}
            {m.image && (
              <a
                href={m.image}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative h-64 rounded-lg overflow-hidden
                  border border-pink-200
                  shadow-sm
                "
              >
                <img
                  src={m.image}
                  alt={m.subtitle}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105 transition-transform duration-300
                  "
                />

                {/* Hover overlay */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-white/80 flex items-center justify-center
                  text-pink-700 text-sm tracking-widest font-bold
                  transition-opacity
                ">
                  VIEW IN ENGINE
                </div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
