export default function ProjectInfo({ project }) {
  const paragraphs = project.description.split("\n\n");

  return (
    <div className="mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* DESCRIPTION PANEL */}
        <div className="
          md:col-span-2 space-y-4
          bg-black/40 backdrop-blur-md
          border border-cyan-500/30
          rounded-xl p-6
          shadow-[0_0_30px_rgba(34,211,238,0.15)]
        ">
          <h2 className="
            text-xl font-bold tracking-widest text-cyan-300
            drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]
          ">
            OVER DIT PROJECT
          </h2>

          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-sm md:text-base leading-relaxed text-cyan-100/80"
            >
              {text}
            </p>
          ))}
        </div>

        {/* SIDEBAR / HUD */}
        <div className="
          h-fit md:self-start
          bg-black/50 backdrop-blur-md
          border border-purple-500/30
          rounded-xl p-6
          shadow-[0_0_30px_rgba(168,85,247,0.2)]
        ">
          <h3 className="
            text-lg font-bold tracking-widest mb-4
            text-purple-300
            border-b border-purple-500/30 pb-2
            drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]
          ">
            DETAILS
          </h3>

          <ul className="text-sm space-y-3 text-purple-100/80">
            <li className="flex justify-between border-b border-purple-500/20 pb-1">
              <span className="text-purple-300 font-medium">ROL</span>
              <span>{project.projectRole}</span>
            </li>

            <li className="flex justify-between border-b border-purple-500/20 pb-1">
              <span className="text-purple-300 font-medium">TIJDLIJN</span>
              <span>{project.timeline}</span>
            </li>

            <li className="space-y-2">
              <span className="text-purple-300 font-medium block">TAGS</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-2 py-1 text-xs font-semibold
                      rounded-md
                      bg-cyan-500/10 text-cyan-300
                      border border-cyan-400/30
                      shadow-[0_0_6px_rgba(34,211,238,0.4)]
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          </ul>

          {/* ACTION BUTTONS */}
          {(project.git || project.itch) && (
            <div className="mt-6 flex gap-3 justify-end">
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-2 text-sm font-semibold
                    rounded-lg
                    border border-cyan-400/40
                    text-cyan-300
                    hover:bg-cyan-400/10
                    hover:shadow-[0_0_12px_rgba(34,211,238,0.8)]
                    transition-all
                  "
                >
                  GITHUB
                </a>
              )}

              {project.itch && (
                <a
                  href={project.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-4 py-2 text-sm font-semibold
                    rounded-lg
                    bg-purple-600/80 text-white
                    hover:bg-purple-500
                    hover:shadow-[0_0_16px_rgba(168,85,247,0.9)]
                    transition-all
                  "
                >
                  ITCH.IO
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
