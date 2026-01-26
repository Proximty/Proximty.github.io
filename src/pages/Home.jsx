import { useState } from "react";
import Avatar from "../components/Avatar";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData.json";
import { siteConfig } from "../siteConfig";
import ProjectTimeline from "../components/TImeline";




export default function Home() {
  const [accent, setAccent] = useState("#00ffff");
  const projects = projectData.projects;

  return (
    <section
      className="relative min-h-screen px-4 py-24 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 30% 30%, #1e1e2f, #0a0a0f)",
      }}
    >
      {/* Neon grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accent}33 1px, transparent 1px),
            linear-gradient(to bottom, ${accent}33 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-20"
        style={{ backgroundColor: accent }}
      />

      {/* HUD */}
      <div className="absolute top-6 left-6 text-xs font-mono text-cyan-400">
        <p>ENGINE: UNITY</p>
        <p>MODE: VR / XR</p>
        <p>STATUS: ONLINE</p>
      </div>
      <div className="absolute bottom-6 right-6 text-xs font-mono text-cyan-400">
        <p>BUILD v1.0</p>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        {/* Avatar + Foto */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12 w-full">
          {/* Avatar */}
          <div
            className="flex-shrink-0"
            onMouseEnter={() => setAccent("#00ff88")}
            onMouseLeave={() => setAccent("#00ffff")}
          >
            <Avatar accent={accent} />
          </div>

          {/* Foto */}
          <div className="flex-shrink-0">
            <img
              src="/meine-foto.png" // zet je foto in public
              alt="Mijn Foto"
              className="w-64 h-64 object-cover rounded-xl border-4 border-cyan-400 shadow-lg"
            />
          </div>
        </div>

        {/* Naam / Rol / Tagline */}
        <h1
          className="glitch text-5xl md:text-6xl font-bold mb-2 font-mono"
          style={{ color: accent }}
        >
          {siteConfig.name}
        </h1>
        <p className="text-cyan-300 tracking-widest mb-4 font-mono">
          {siteConfig.role}
        </p>
        <p className="text-cyan-400 max-w-xl mb-12 text-sm md:text-base">
          {siteConfig.tagline}
        </p>
         <ProjectTimeline projects={projects} />
          </div>
    </section>
  );
}
