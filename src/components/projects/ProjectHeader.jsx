export default function ProjectHeader({ project }) {
  return (
    <div className="relative w-full mb-4 overflow-hidden">
      {/* Banner Image */}
      <img 
        src={project.thumbnail} 
        alt={project.title} 
        className="w-full h-48 sm:h-64 object-cover" 
      />

      {/* Gradient overlay voor leesbaarheid */}
      <div className="absolute inset-0, from-black/80 to-transparent" />

      {/* Text overlay */}
      <div className="absolute bottom-4 left-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md mb-1">{project.title}</h1>
        <p className="text-base text-gray-300 max-w-xl drop-shadow-sm font-medium">{project.tagline}</p>
      </div>
        <script>
         const circle = document.getElementById("circle");

          document.addEventListener("mousemove", (e) = 
         circle.style.transform = `translate(${e.clientX / 20}px, ${e.clientY / 20}px)`;
  );
</script>
<section id="banner" class="relative h-[70vh] bg-indigo-600 overflow-hidden">
  <div id="circle"
       class="absolute w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
</section>
    </div>
  );
}