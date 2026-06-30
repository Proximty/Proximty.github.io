import { Link } from "react-router-dom";
import { useState } from "react";
import InteractiveFlora from "./InteractiveFlora";

export default function FolderCard({ category }) {
  const [hover, setHover] = useState(false);
  const accentColor = 'var(--accent)';

  return (
    <Link
      to={`/category/${category.id}`}
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
          src={category.thumbnail}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay matches ProjectCard */}
        <div
          className="absolute inset-0 flex items-end p-4 transition-opacity duration-300"
          style={{
            opacity: hover ? 1 : 0,
            background: 'linear-gradient(to top, rgba(255,255,255,0.95), transparent)',
          }}
        >
          <span className="text-sm font-bold" style={{ color: accentColor }}>
            Bekijk map →
          </span>
        </div>

        {/* Category name badge on image */}
        <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5">
          {category.title}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <span>📁</span>
          <h3 className="text-lg font-bold" style={{ color: accentColor }}>
            Map
          </h3>
        </div>

        <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {category.tagline}
        </p>

        {/* Item count tag matching ProjectCard tags style */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag">
            {category.projects.length} {category.projects.length === 1 ? 'project' : 'projecten'}
          </span>
        </div>
      </div>
    </Link>
  );
}
