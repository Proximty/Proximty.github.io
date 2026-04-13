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
          <div className="absolute top-3 right-3 bg-amber-500/90 backdrop-blur-sm border border-amber-400 text-white px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-sm z-10">
            <span>🚧</span> In Ontwikkeling
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

        {/* Mechanics Preview ("Code Vakken") */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-100">
          {project.mechanics?.slice(0, 2).map((m, idx) => (
            <div 
              key={idx} 
              className="group/code relative bg-zinc-950 rounded-lg p-3 text-[10px] text-zinc-300 font-mono h-24 overflow-hidden border border-zinc-800 transition-colors hover:border-zinc-700"
            >
              <div className="flex justify-between items-start mb-1.5 overflow-hidden whitespace-nowrap">
                <span className="text-zinc-500 font-bold uppercase tracking-tighter text-[9px] truncate">
                  {m.subtitle}
                </span>
                <span className="text-zinc-600 block leading-none">{}</span>
              </div>
              <div className="leading-tight opacity-70 group-hover/code:opacity-100 transition-opacity break-all line-clamp-4">
                {m.code}
              </div>
              
              {/* Fake gradient to indicate more code */}
              <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none" />
              
              {/* Floating "code" label */}
              <div className="absolute bottom-1 right-2 text-[8px] text-zinc-600 uppercase font-black tracking-widest pointer-events-none">
                C#
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
