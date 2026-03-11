import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ProjectMechanics({ project }) {
  if (!project.mechanics || project.mechanics.length === 0) return null;

  return (
    <div className="mx-4 mt-12">
      <h2 className="
        text-2xl font-bold mb-8 tracking-widest text-center
        text-purple-500 font-main flex justify-center items-center gap-2
      ">
        <span>🪄</span> MAGISCHE CODE <span>🪄</span>
      </h2>

      {project.mechanics.map((m, i) => (
        <div
          key={i}
          className="
            mb-10 p-8 rounded-3xl
            bg-white
            border-4 border-purple-200
            shadow-lg
          "
        >
          {/* Title + Description */}
          <div className="mb-6 text-center">
            <h3 className="
              text-2xl font-bold tracking-wide text-pink-500 mb-3 font-main
            ">
              {m.subtitle}
            </h3>
            <p className="text-base md:text-lg text-gray-700 font-medium leading-relaxed max-w-3xl mx-auto">
              {m.description}
            </p>
          </div>

          {/* Code + Preview */}
          <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">
            
            {/* Code Block */}
            <div className="
              bg-pink-50 overflow-hidden rounded-2xl
              border-4 border-pink-200
              shadow-inner relative
            ">
             <div className="absolute top-0 left-0 right-0 h-4 bg-pink-200"></div> {/* Cute faux window top */}
              <SyntaxHighlighter
                language="csharp"
                style={oneLight}
                customStyle={{
                  margin: 0,
                  height: "280px", // Increased height slightly
                  background: "transparent",
                  fontSize: "0.95rem",
                  padding: "1.5rem 1rem",
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
                  group relative h-[280px] rounded-2xl overflow-hidden
                  border-4 border-purple-300
                  shadow-md block
                "
              >
                <img
                  src={m.image}
                  alt={m.subtitle}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110 transition-transform duration-500
                  "
                />

                {/* Hover overlay */}
                <div className="
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-white/60 backdrop-blur-sm flex items-center justify-center
                  transition-opacity duration-300
                ">
                  <span className="bg-purple-500 text-white font-bold font-main px-6 py-3 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                     BEKIJK IN ACTIE ✨
                  </span>
                </div>
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
