import { useState } from "react";
import Avatar from "../components/Avatar";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData.json";
import { siteConfig } from "../siteConfig";
import ProjectTimeline from "../components/TImeline";

export default function Home() {
  const [accent, setAccent] = useState("#ff4081");
  const projects = projectData.projects;

  return (
    <section
      className="relative min-h-screen px-4 py-24 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 50%, #ffe6f2, #ffb6c1)",
      }}
    >
      {/* Decorative magical dots/sparkles */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(${accent} 2px, transparent 2px),
            radial-gradient(${accent} 2px, transparent 2px)
          `,
          backgroundSize: "60px 60px",
          backgroundPosition: "0 0, 30px 30px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-30"
        style={{ backgroundColor: accent }}
      />

      {/* Cute Overlay Text */}
      <div className="absolute top-6 left-6 text-sm font-bold text-pink-500 bg-white/50 px-3 py-1 rounded-full shadow-sm border border-pink-200 float">
        <p>✨ MAGIC: 100%</p>
      </div>
      <div className="absolute bottom-6 right-6 text-sm font-bold text-pink-500 bg-white/50 px-3 py-1 rounded-full shadow-sm border border-pink-200 float" style={{animationDelay: '1.5s'}}>
        <p>🐴 FRIENDSHIP IS MAGIC</p>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        {/* Avatar + Foto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 w-full">
          {/* Avatar */}
          <div
            className="flex-shrink-0 cursor-pointer transition-transform hover:scale-105 hover:spin-crazy float"
            onMouseEnter={() => setAccent("#ab47bc")} // Medium purple on hover
            onMouseLeave={() => setAccent("#ff4081")} // Back to pink
          >
            <div className="bg-white rounded-full p-2 shadow-lg border-4 border-pink-300">
              <Avatar accent={accent} />
            </div>
          </div>

          {/* Foto */}
          <div className="flex-shrink-0 float" style={{animationDelay: '0.5s'}}>
            <img
              src={siteConfig.aboutImage}
              alt="Mijn Foto"
              className="w-64 h-64 object-cover rounded-full border-4 border-purple-400 shadow-xl"
            />
          </div>
        </div>

        {/* Naam / Rol / Tagline */}
        <h1
          className="float text-5xl md:text-6xl font-bold mb-4 font-main drop-shadow-md rainbow-text"
          style={{ animationDelay: '1s' }}
        >
          {siteConfig.name}
        </h1>
        <p className="text-purple-700 tracking-wide font-medium text-xl mb-4 font-main bg-white/60 inline-block px-4 py-1 rounded-full shadow-sm">
          {siteConfig.role}
        </p>
        <p className="text-purple-900 max-w-xl mb-12 text-lg md:text-xl font-medium bg-white/40 p-4 rounded-2xl shadow-sm border border-pink-100">
          {siteConfig.tagline}
        </p>
        
        <div className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-200 relative">
          <div className="absolute -top-5 -left-5 text-4xl animate-bounce">🦄</div>
          <ProjectTimeline projects={projects} />
        </div>
      </div>
    </section>
  );
}
