import { Link } from "react-router-dom";

export default function Timeline({ projects }) {
  return (
    <section className="relative mt-24 mx-auto max-w-5xl px-4">
      <h2
        className="
          text-3xl font-main font-bold tracking-widest mb-12 text-center
          text-pink-500 drop-shadow-sm
        "
      >
        ✨ MAGISCHE PROJECTEN ✨
      </h2>

      <div className="relative border-l-4 border-pink-200 ml-4 space-y-16">
        {projects
          .slice()
          .sort((a, b) => a.id - b.id)
          .map((project) => (
            <div key={project.id} className="relative pl-10 group">

              {/* Timeline dot */}
              <div
                className="
                  absolute left-[-11px] top-1
                  w-5 h-5 rounded-full
                  bg-pink-400 border-4 border-white
                  shadow-md group-hover:scale-125 group-hover:bg-purple-400 transition-all
                "
              />

              {/* Project card */}
              <Link
                to={`/projects/${project.id}`}
                className="
                  mt-2 block
                  bg-white/80 backdrop-blur-md
                  border-2 border-pink-100
                  rounded-2xl overflow-hidden
                  hover:shadow-lg hover:border-pink-300
                  transition-all transform hover:-translate-y-1
                "
              >
                {project.thumbnail && (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-40 object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                )}

                <div className="p-5">
                  <h3 className="text-xl font-bold text-pink-600 tracking-wide font-main">
                    {project.title}
                  </h3>

                  {project.tagline && (
                     <p className="text-sm text-purple-600 mt-2 font-medium">
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
