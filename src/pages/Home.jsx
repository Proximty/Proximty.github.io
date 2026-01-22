import { useState } from "react";
import { siteConfig } from "../siteConfig";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData.json";
import Avatar from "../components/Avatar";
import { useState } from "react";
import Avatar3D from "../components/Avatar3D";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Home() {
  const [accent, setAccent] = useState("#00ffff");
  const projects = projectData.projects;


  // Laad GLTF model van MesyIA
  const model = useLoader(GLTFLoader, "/mesyIA-avatar.glb"); // pad naar je 3D model

  return (
    
    <section
      className="relative min-h-screen px-4 py-24 overflow-hidden transition-colors duration-500"
      style={{
        background: `radial-gradient(circle at 30% 30%, #1e1e2f, #0a0a0f)`,
      }}
    >
       <div className="flex justify-center items-center min-h-screen bg-black">
      <Avatar3D modelUrl={model.scene} />
    </div>
      {/* Interactieve neon grid */}
      <div
        className="absolute inset-0 opacity-20 transition-all duration-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accent}33 1px, transparent 1px),
            linear-gradient(to bottom, ${accent}33 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Neon glow / ambient color */}
      <div
        className="absolute inset-0 blur-3xl opacity-20"
        style={{ backgroundColor: accent }}
      />

      {/* HUD info */}
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

        {/* Avatar */}
        <div className="mb-12">
          <Avatar accent={accent} setAccent={setAccent} />
        </div>

        {/* Naam */}
        <h1
          className="glitch text-5xl md:text-6xl font-bold mb-2 font-mono"
          style={{ color: accent }}
          onMouseEnter={() => setAccent("#00ff88")}
          onMouseLeave={() => setAccent("#00ffff")}
        >
          <span aria-hidden="true">{siteConfig.name}</span>
          {siteConfig.name}
          <span aria-hidden="true">{siteConfig.name}</span>
        </h1>

        {/* Rol */}
        <p className="text-cyan-300 tracking-widest mb-4 font-mono">
          {siteConfig.role}
        </p>

        {/* Tagline */}
        <p className="text-cyan-400 max-w-xl mx-auto text-sm md:text-base mb-12">
          {siteConfig.tagline}
        </p>

        {/* Projecten */}
        <div className="w-full">
          <h2 className="text-xl font-mono text-cyan-300 mb-8 tracking-widest">
            PROJECTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                setAccent={setAccent}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

