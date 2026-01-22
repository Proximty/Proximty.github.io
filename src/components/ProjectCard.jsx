import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProjectCard({ project, setAccent }) {
  const rarityColors = {
    common: "#00ffff",
    rare: "#0066ff",
    epic: "#a855f7",
    legendary: "#facc15",
  };

  const color = rarityColors[project.rarity] || "#00ffff";
  const [isHover, setIsHover] = useState(false);

  return (
    <Link
      to={`/projects/${project.id}`}
      onMouseEnter={() => {
        setAccent(color);
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setAccent("#00ffff");
        setIsHover(false);
      }}
      className={`group block rounded-lg overflow-hidden bg-black border transition-all duration-300
                  hover:shadow-[0_0_25px_${color}66]`}
      style={{
        borderColor: color,
        transform: isHover ? "scale(1.03) rotateX(2deg) rotateY(2deg)" : "scale(1)",
        boxShadow: isHover ? `0 0 25px ${color}77` : `0 0 10px ${color}33`,
        transition: "all 0.3s ease",
      }}
    >

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center
                        transition-opacity duration-300 ${isHover ? "opacity-100" : "opacity-0"}`}>
          <span
            className="font-mono text-sm tracking-widest"
            style={{ color }}
          >
            VIEW PROJECT →
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3
          className="text-lg font-semibold mb-1 font-mono transition-colors duration-300"
          style={{ color }}
        >
          {project.title}
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
                backgroundColor: isHover ? `${color}22` : "transparent",
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
