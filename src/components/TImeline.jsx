import { Link } from "react-router-dom";

export default function Timeline({ projects }) {
  return (
    <section className="relative mt-24 mx-auto max-w-5xl px-4">
      <h2
        className="
          text-2xl font-mono tracking-widest mb-12 text-center
          text-cyan-300
          drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]
        "
      >
        PROJECT TIMELINE
      </h2>

      <div className="relative border-l border-cyan-500/40 ml-4 space-y-16">
        {projects
          .slice()
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <div key={project.id} className="relative pl-10">

              {/* Timeline dot */}
              <div
                className="
                  absolute left-[-9px] top-1
                  w-4 h-4 rounded-full
                  bg-cyan-400
                  shadow-[0_0_15px_rgba(34,211,238,0.9)]
                "
              />

              {/* Project card */}
              <Link
                to={`/projects/${project.id}`}
                className="
                  mt-2 block
                  bg-black/50 backdrop-blur-md
                  border border-cyan-500/30
                  rounded-xl overflow-hidden
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]
                  transition-all
                "
              >
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 object-cover opacity-90"
                  />
                )}

                <div className="p-4">
                  <h3 className="text-lg font-bold text-cyan-200 tracking-wide">
                    {project.title}
                  </h3>

                  {project.tagline && (
                    <p className="text-sm text-cyan-100/70 mt-1">
                      {project.tagline}
                    </p>
                  )}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
