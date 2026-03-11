import { Link } from "react-router-dom";

export default function Timeline({ projects }) {
  return (
    <section className="relative mt-20 w-full max-w-3xl mx-auto px-4 text-left">
      <h2 className="text-xl font-bold mb-10 text-center gradient-text tracking-wide uppercase">
        Projecten
      </h2>

      <div className="timeline-line ml-4 space-y-12 pl-2">
        {projects
          .slice()
          .sort((a, b) => a.id - b.id)
          .map((project, i) => (
            <div key={project.id} className="relative pl-10 fade-up" style={{ animationDelay: `${i * 0.08}s` }}>
              {/* Dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <Link
                to={`/projects/${project.id}`}
                className="card block overflow-hidden group"
              >
                {project.thumbnail && (
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                         style={{ background: 'linear-gradient(to top, rgba(19,17,28,0.9), transparent)' }}>
                      <span className="text-sm font-bold" style={{ color: 'var(--accent)' }}>
                        Bekijk project →
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-lg font-bold mb-1 gradient-text">{project.title}</h3>
                  {project.tagline && (
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{project.tagline}</p>
                  )}
                  {project.tags && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
