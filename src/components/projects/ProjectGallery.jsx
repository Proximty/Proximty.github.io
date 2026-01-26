import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";

export default function ProjectGallery({ project }) {
  const { screenshots, youtube } = project;

  const slides = [
    ...(youtube ? [{ type: "video", src: youtube }] : []),
    ...screenshots.map((s) => ({ type: "image", src: s })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="mb-6 mx-4">
      <h2 className="text-2xl font-extrabold text-neon-pink drop-shadow-neon">Gallery</h2>

      {slides.length > 0 && (
        <div className="relative group mt-6">
          {/* Slide Container */}
          <div className="overflow-hidden bg-black/90 rounded-xl aspect-video border-4 border-neon-blue shadow-neon">
            {/* Video Slide */}
            {slides[currentIndex].type === "video" && (
              <iframe
                src={slides[currentIndex].src}
                title="Project Video"
                allowFullScreen
                className="w-full h-full"
              />
            )}

            {/* Image Slide */}
            {slides[currentIndex].type === "image" && (
              <img
                src={slides[currentIndex].src}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(slides[currentIndex].src, "_blank")}
              />
            )}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-neon-purple/70 text-white hover:bg-neon-purple/90 shadow-neon 
                           transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-neon-purple/70 text-white hover:bg-neon-purple/90 shadow-neon 
                           transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "bg-neon-pink shadow-neon-glow w-5 h-5"
                        : "bg-neon-cyan/60 hover:bg-neon-cyan/90"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
