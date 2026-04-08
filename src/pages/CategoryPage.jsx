import { useParams, Link } from "react-router-dom";
import projectData from "../data/projectData.json";
import ProjectCard from "../components/ProjectCard";

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = projectData.categories?.[categoryId];

  if (!category) {
    return <div className="container mx-auto px-4 py-32 text-center text-pink-700 font-bold">Collectie niet gevonden</div>;
  }

  return (
    <section className="relative min-h-screen px-4 py-20 overflow-hidden">
      <div className="relative z-10 container mx-auto">
        
        {/* Terug Knop */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 bg-white/80 text-pink-700 
                     rounded-lg border border-pink-200 hover:bg-pink-100 transition-colors font-semibold shadow-sm"
        >
          ← Terug naar home
        </Link>

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block text-6xl mb-6">📁</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-pink-700 drop-shadow-sm uppercase tracking-wide">
            {category.title}
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-pink-900/80">
            {category.tagline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {category.projects.map((project, i) => (
             <div key={project.id} className="fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <ProjectCard project={project} />
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
