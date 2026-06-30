import { Link } from "react-router-dom";
import { useState } from "react";
import InteractiveFlora from "./InteractiveFlora";

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);
  const accentColor = 'var(--accent)';

  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card block group relative"
      style={{
        borderColor: hover ? accentColor : 'var(--bordercolor)',
        boxShadow: hover
          ? `0 8px 24px rgba(236,72,153,0.15), 0 0 0 1px rgba(236,72,153,0.2)`
          : 'var(--shadow-card)',
        transition: 'all 0.35s ease',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      <InteractiveFlora />
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-t-[calc(var(--radius-lg)-1px)]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Status Badge */}
        {project.status === 'In Development' && (
          <div className="absolute top-4 right-4 bg-amber-500/95 backdrop-blur-md border border-amber-400/50 text-white px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-widest flex items-center gap-2 shadow-xl z-20 transition-transform group-hover:scale-105">
            <span className="text-base animate-pulse">🚧</span> 
            <span className="drop-shadow-sm">In Ontwikkeling</span>
          </div>
        )}

        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
          style={{
            opacity: hover ? 1 : 0,
            background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)',
          }}
        >
          <span className="text-sm font-bold" style={{ color: accentColor }}>
            Bekijk project →
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold" style={{ color: accentColor }}>
            {project.title}
          </h3>
        </div>

        <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
