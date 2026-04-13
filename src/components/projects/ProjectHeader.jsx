export default function ProjectHeader({ project }) {
  return (
    <div className="relative w-full mb-6 overflow-hidden rounded-xl">
      {/* Background image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full h-56 sm:h-72 object-cover scale-110"
      />

      {/* Soft cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t 
        from-pink-900/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <h1 className="
          text-4xl md:text-5xl font-extrabold tracking-widest text-white
          drop-shadow-md
        ">
          {project.title}
        </h1>

        <p className="
          mt-2 max-w-xl text-sm md:text-base font-medium
          text-pink-100
          drop-shadow-sm
        ">
          {project.tagline}
        </p>
      </div>
    </div>
  );
}
