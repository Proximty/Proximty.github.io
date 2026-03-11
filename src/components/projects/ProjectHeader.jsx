export default function ProjectHeader({ project }) {
  return (
    <div className="relative w-full mb-6 overflow-hidden rounded-3xl border-4 border-pink-200">
      {/* Background image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-56 sm:h-72 object-cover scale-110"
      />

      {/* Magic cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr 
        from-pink-400/70 via-white/40 to-purple-400/70 mix-blend-hard-light" />

      {/* Vignette */}
      <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(255,105,180,0.4)]" />

      {/* Subtle sparkle noise */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(white_1px,transparent_1px)] bg-[size:20px_20px]" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6 text-center">
        <h1 className="
          text-4xl md:text-5xl font-extrabold tracking-widest text-white font-main
          drop-shadow-md mb-2
        ">
          {project.title}
        </h1>

        <p className="
          mx-auto max-w-xl text-sm md:text-base font-bold
          text-pink-100 bg-pink-500/50 backdrop-blur-sm px-4 py-1 rounded-full inline-block
          drop-shadow-sm
        ">
          {project.tagline}
        </p>
      </div>
    </div>
  );
}
