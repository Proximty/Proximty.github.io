import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectCard({ project, setAccent }) {
  const rarityColors = {
    common: "#ff80ab", // Pink
    rare: "#b388ff", // Purple
    epic: "#ffb74d", // Orange/Gold
    legendary: "#ffd54f", // Yellow
  };

  const [hover, setHover] = useState(false);
  const color = rarityColors[project.rarity] || "#ff80ab";

  // Emoji per rarity
  const rarityEmoji = {
    common: "🌸",
    rare: "🦄",
    epic: "✨",
    legendary: "👑",
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
        setAccent("#ff4081");
      }}
      className="group relative block rounded-2xl overflow-hidden bg-white border-4 transition-all duration-300"
      style={{
        borderColor: color,
        boxShadow: hover ? `0 10px 25px ${color}66` : `0 4px 10px ${color}33`,
        transform: hover ? "scale(1.03) translateY(-5px)" : "scale(1)",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      }}
    >
      {/* Glow + sparkles */}
      {hover && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full absolute mix-blend-screen"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.8,
                backgroundColor: color,
                boxShadow: `0 0 10px ${color}, 0 0 20px white`,
                animation: `flicker ${Math.random() * 0.5 + 0.5}s infinite alternate`
              }}
            />
          ))}
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden border-b-4" style={{ borderColor: color }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center transition-opacity duration-300 ${
            hover ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="font-main font-bold text-lg tracking-wide px-4 py-2 bg-white rounded-full shadow-md" style={{ color }}>
            ONTDEK MAGIE ✨
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 relative z-10 bg-pink-50/30">
        <h3
          className="text-xl font-bold mb-2 font-main transition-colors duration-300 flex items-center gap-2"
          style={{ color }}
        >
          {project.title} <span className="text-2xl">{rarityEmoji[project.rarity]}</span>
        </h3>
        <p className="text-sm text-purple-700 line-clamp-2 font-medium">{project.tagline}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full font-main font-bold transition-all duration-300"
              style={{
                color: "white",
                backgroundColor: color,
                boxShadow: hover ? `0 4px 10px ${color}66` : "none",
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
