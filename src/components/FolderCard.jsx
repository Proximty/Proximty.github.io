import { Link } from "react-router-dom";
import { useState } from "react";
import InteractiveFlora from "./InteractiveFlora";

export default function FolderCard({ category }) {
  const [hover, setHover] = useState(false);
  const color = '#f472b6'; // pink-400

  return (
    <Link
      to={`/category/${category.id}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="card block group relative bg-pink-50/30"
      style={{
        borderColor: hover ? color : 'var(--bordercolor)',
        boxShadow: hover
          ? `0 8px 24px ${color}22, 0 0 0 1px ${color}33`
          : 'var(--shadow-card)',
        transition: 'all 0.35s ease',
        transform: hover ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      <InteractiveFlora />
      
      {/* Folder Tab Visual */}
      <div className="absolute top-0 left-4 w-1/4 h-1.5 bg-pink-400 rounded-b-md z-20" />

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-t-[calc(var(--radius-lg)-1px)]">
        <img
          src={category.thumbnail}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80"
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(255,255,255,0.95), rgba(255,255,255,0.4))',
          }}
        >
           <div className="bg-white/80 backdrop-blur-sm px-6 py-4 rounded-xl border border-pink-200 text-center shadow-sm transform transition-transform group-hover:scale-110 duration-500">
             <span className="text-4xl block mb-2 drop-shadow-sm">📁</span>
             <span className="font-bold text-pink-700 uppercase tracking-widest text-xs">Collectie</span>
           </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="text-xl font-extrabold mb-1 text-pink-700">
          {category.title}
        </h3>
        <p className="text-sm mb-4 leading-relaxed" style={{ color: 'var(--muted)' }}>
          {category.tagline}
        </p>
        <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 text-xs font-bold rounded-md">
          {category.projects.length} {category.projects.length === 1 ? 'project' : 'projecten'} →
        </div>
      </div>
    </Link>
  );
}
