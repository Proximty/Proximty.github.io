export default function ProjectInfo({ project }) {
  const paragraphs = project.description.split("\n\n");

  return (
    <div className="mb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* DESCRIPTION PANEL */}
        <div className="
          md:col-span-2 space-y-4
          bg-white
          border-4 border-pink-200
          rounded-3xl p-8
          shadow-lg
        ">
          <h2 className="
            text-2xl font-bold tracking-widest text-pink-500 font-main
            mb-4 flex items-center gap-2
          ">
            <span>✨</span> OVER DIT PROJECT <span>✨</span>
          </h2>

          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-base md:text-lg leading-relaxed text-gray-700 font-medium"
            >
              {text}
            </p>
          ))}
        </div>

        {/* SIDEBAR / HUD */}
        <div className="
          h-fit md:self-start
          bg-pink-50
          border-4 border-purple-200
          rounded-3xl p-8
          shadow-lg
        ">
          <h3 className="
            text-xl font-bold tracking-widest mb-6
            text-purple-600 font-main
            border-b-4 border-purple-200 pb-3
            text-center
          ">
            MAGISCHE DETAILS
          </h3>

          <ul className="text-base space-y-4 text-gray-700 font-medium">
            <li className="flex justify-between border-b-2 border-pink-100 pb-2 items-center">
              <span className="text-pink-500 font-bold bg-pink-100 px-2 py-0.5 rounded-md text-sm">ROL</span>
              <span>{project.projectRole}</span>
            </li>

            <li className="flex justify-between border-b-2 border-pink-100 pb-2 items-center">
              <span className="text-pink-500 font-bold bg-pink-100 px-2 py-0.5 rounded-md text-sm">TIJDLIJN</span>
              <span>{project.timeline}</span>
            </li>

            <li className="space-y-3 pt-2">
              <span className="text-purple-500 font-bold bg-purple-100 px-2 py-0.5 rounded-md text-sm block w-fit">TAGS</span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                      px-3 py-1 text-sm font-bold font-main
                      rounded-full
                      bg-white text-purple-600
                      border-2 border-purple-200
                      shadow-sm hover:scale-105 transition-transform
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
            <div className="mt-8 flex flex-col gap-3">
              {project.git && (
                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full text-center px-4 py-3 text-lg font-bold font-main
                    rounded-full
                    border-4 border-pink-300
                    bg-white text-pink-500
                    hover:bg-pink-50
                    hover:scale-105
                    transition-all shadow-sm
                  "
                >
                  BEKIJK CODE 💖
                </a>
              )}

              {project.itch && (
                <a
                  href={project.itch}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full text-center px-4 py-3 text-lg font-bold font-main
                    rounded-full
                    bg-gradient-to-r from-purple-400 to-pink-400 text-white
                    hover:from-purple-500 hover:to-pink-500
                    hover:scale-105 hover:shadow-lg
                    transition-all shadow-md
                  "
                >
                  SPEEL NU 🎮
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
