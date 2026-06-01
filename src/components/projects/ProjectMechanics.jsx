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
          <div className="grid grid-cols-1 md:grid-cols-[65%_35%] gap-4">
            
            {/* Code Block */}
            <div className="
              h-64 overflow-auto rounded-lg
              border border-pink-200
              shadow-sm
            ">
              <SyntaxHighlighter
                language="csharp"
                style={vscDarkPlus}
                customStyle={{
                  margin: 0,
                  height: "100%",
                  background: "rgba(0,0,0,0.85)",
                  fontSize: "0.9rem",
                }}
                showLineNumbers
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
