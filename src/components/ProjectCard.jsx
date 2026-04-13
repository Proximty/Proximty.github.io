import { Link } from "react-router-dom";
import { useState } from "react";
import InteractiveFlora from "./InteractiveFlora";

// Kleuren per rarity, aangepast voor lichte ondergrond
const rarityMap = {
  common:    { color: '#9d6bf0', label: 'Common',    emoji: '⭐' },
  rare:      { color: '#0ea5e9', label: 'Rare',      emoji: '💎' },
  epic:      { color: '#db2777', label: 'Epic',      emoji: '🔮' },
  legendary: { color: '#d97706', label: 'Legendary', emoji: '⚡' },
};

export default function ProjectCard({ project }) {
  const [hover, setHover] = useState(false);
  const rarity = rarityMap[project.rarity] || rarityMap.common;

  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card block group relative"
      style={{
        borderColor: hover ? rarity.color : 'var(--bordercolor)',
        boxShadow: hover
          ? `0 8px 24px ${rarity.color}22, 0 0 0 1px ${rarity.color}33`
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
          <span className="text-sm font-bold" style={{ color: rarity.color }}>
            {rarity.emoji} Bekijk project →
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="text-lg font-bold" style={{ color: rarity.color }}>
            {project.title}
          </h3>
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{
              background: `${rarity.color}1a`,
              color: rarity.color,
              border: `1px solid ${rarity.color}44`,
            }}
          >
            {rarity.label}
          </span>
        </div>

        <p className="text-sm mb-3 line-clamp-2" style={{ color: 'var(--muted)' }}>
          {project.tagline}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
