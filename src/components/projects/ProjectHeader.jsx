export default function ProjectHeader({ project }) {
  return (
    <div className="relative w-full mb-6 overflow-hidden rounded-xl">
      {/* Background image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-56 sm:h-72 object-cover scale-110"
      />

      {/* Neon cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr 
        from-purple-900/80 via-black/70 to-cyan-900/80" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_140px_rgba(0,0,0,0.95)]" />

      {/* Subtle neon noise / scanline feel */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:100%_4px]" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <h1 className="
          text-4xl md:text-5xl font-extrabold tracking-widest text-cyan-300
          drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
        ">
          {project.title}
        </h1>

        <p className="
          mt-2 max-w-xl text-sm md:text-base font-medium
          text-purple-200
          drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]
        ">
          {project.tagline}
        </p>
      </div>
    </div>
  );
}
