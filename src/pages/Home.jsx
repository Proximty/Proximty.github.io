import projectData from "../data/projectData.json";
import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const projects = projectData.projects;

  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">



      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">

        {/* Foto */}
        <div className="fade-up mb-8">
          <div
            className="w-36 h-36 rounded-full overflow-hidden ring-4 mx-auto"
            style={{ ringColor: 'var(--accent)', boxShadow: '0 0 0 4px #a78bfa, 0 8px 40px rgba(167,139,250,0.35)' }}
          >
            <img
              src="/meine-foto.png"
              alt="Profielfoto"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Naam */}
        <h1 className="fade-up fade-up-delay-1 text-5xl md:text-6xl font-extrabold mb-3 leading-tight">
          <span className="gradient-text">{siteConfig.name}</span>
        </h1>

        {/* Rol */}
        <p className="fade-up fade-up-delay-2 text-lg font-semibold mb-4"
           style={{ color: 'var(--accent-2)' }}>
          {siteConfig.role}
        </p>

        {/* Tagline */}
        <p className="fade-up fade-up-delay-3 max-w-2xl mb-14 leading-relaxed text-base md:text-lg"
           style={{ color: 'var(--muted)' }}>
          {siteConfig.tagline}
        </p>

        {/* Projecten */}
        <div className="mt-20 w-full max-w-6xl text-left">
          <h2 className="text-3xl font-bold mb-10 text-center gradient-text tracking-wide uppercase">
            Projecten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={project.id} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
