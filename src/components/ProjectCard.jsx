import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectCard({ project, setAccent }) {
  const rarityColors = {
    common: "#00ffff",
    rare: "#0066ff",
    epic: "#a855f7",
    legendary: "#facc15",
  };

  const [hover, setHover] = useState(false);
  const color = rarityColors[project.rarity] || "#00ffff";

  // Emoji per rarity
  const rarityEmoji = {
    common: "⭐",
    rare: "💎",
    epic: "🔮",
    legendary: "⚡",
  };

  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => {
        setHover(true);
        setAccent(color);
      }}
      onMouseLeave={() => {
        setHover(false);
        setAccent("#00ffff");
      }}
      className="group relative block rounded-lg overflow-hidden bg-black border transition-all duration-300"
      style={{
        borderColor: color,
        boxShadow: hover ? `0 0 25px ${color}77` : `0 0 10px ${color}33`,
        transform: hover ? "scale(1.05) rotateX(2deg) rotateY(2deg)" : "scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      {/* Glow + sparkles */}
      {hover && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-white animate-pulse absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.6,
              }}
            />
          ))}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-mono text-sm tracking-widest" style={{ color }}>
            VIEW PROJECT →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 relative z-10">
        <h3
          className="text-lg font-bold mb-1 font-mono transition-colors duration-300 flex items-center gap-1"
          style={{ color }}
        >
          {project.title} <span>{rarityEmoji[project.rarity]}</span>
        </h3>
        <p className="text-sm text-cyan-400 line-clamp-2">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 border rounded font-mono transition-all duration-300"
              style={{
                borderColor: color,
                color,
                backgroundColor: hover ? `${color}22` : "transparent",
                textShadow: hover ? `0 0 3px ${color}` : "none",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
       

}
