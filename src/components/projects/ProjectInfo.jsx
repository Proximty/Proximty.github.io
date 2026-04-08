export default function ProjectInfo({ project }) {
  const paragraphs = project.description.split("\n\n");

  return (
    <div className="mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* DESCRIPTION PANEL */}
        <div className="
          md:col-span-2 space-y-4
          bg-white/60 backdrop-blur-md
          border border-pink-200
          rounded-xl p-6
          shadow-md
        ">
          <h2 className="
            text-xl font-bold tracking-widest text-pink-700
          ">
            OVER DIT PROJECT
          </h2>

          {paragraphs.map((text, i) => (
            <p
              className="text-sm md:text-base leading-relaxed text-pink-900/80"
            >
              {text}
            </p>
          ))}
        </div>

        {/* SIDEBAR / HUD */}
        <div className="
          h-fit md:self-start
          bg-white/70 backdrop-blur-md
          border border-pink-300/50
          rounded-xl p-6
          shadow-md
        ">
          <h3 className="
            text-lg font-bold tracking-widest mb-4
            text-pink-700
            border-b border-pink-200 pb-2
          ">
            DETAILS
          </h3>

          <ul className="text-sm space-y-3 text-pink-800/90">
            <li className="flex justify-between border-b border-pink-100 pb-1">
              <span className="text-pink-700 font-medium">ROL</span>
              <span>{project.projectRole}</span>
            </li>

            <li className="flex justify-between border-b border-pink-100 pb-1">
              <span className="text-pink-700 font-medium">DUUR</span>
              <span>{project.timeline}</span>
            </li>

            <li className="space-y-2">
              <span className="text-pink-700 font-medium block">TAGS</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-2 py-1 text-xs font-semibold
                      rounded-md
                      bg-pink-100 text-pink-700
                      border border-pink-200
                      shadow-sm
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
                    border border-pink-300
                    text-pink-700
                    hover:bg-pink-50
                    hover:shadow-md
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
                    bg-pink-500 text-white
                    hover:bg-pink-600
                    hover:shadow-md
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
