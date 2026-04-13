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
        {/* Overlay */}
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

        {/* Folder Badge */}
        <div className="absolute top-3 left-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 text-zinc-300 px-2 py-1 rounded-md text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 z-10">
          <span>📁</span> Map
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold" style={{ color: accentColor }}>
            {category.title}
          </h3>
        </div>

        <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {category.tagline}
        </p>

        {/* Item count */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="tag">
            {category.projects.length} {category.projects.length === 1 ? 'project' : 'projecten'}
          </span>
        </div>
        
        {/* Fake Mechanics area so layout matches ProjectCard */}
        <div className="grid grid-cols-1 gap-2 pt-3 border-t border-zinc-100">
           <div className="group/code relative bg-zinc-950 rounded-lg p-3 text-[10px] text-zinc-300 font-mono h-8 overflow-hidden border border-zinc-800 flex items-center">
             <span className="text-zinc-500 font-bold uppercase tracking-tighter text-[9px]">
                Collectie van projecten
             </span>
           </div>
        </div>
      </div>
    </Link>
  );
}
