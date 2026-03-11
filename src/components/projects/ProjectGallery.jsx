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
    <div className="mb-12 mx-4">
      <h2 className="text-3xl font-extrabold text-pink-500 drop-shadow-sm font-main text-center mb-6 flex items-center justify-center gap-2">
         <span>📸</span> MAGISCHE GALERIJ <span>📸</span>
      </h2>

      {slides.length > 0 && (
        <div className="relative group mt-6 max-w-5xl mx-auto">
          {/* Slide Container */}
          <div className="overflow-hidden bg-pink-50 rounded-3xl aspect-video border-8 border-purple-200 shadow-xl relative">
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
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 group-hover:scale-105"
                onClick={() => window.open(slides[currentIndex].src, "_blank")}
              />
            )}
             
            {/* Playful Corner Stars */}
            <div className="absolute -top-3 -left-3 text-3xl animate-bounce" style={{animationDelay: '0s'}}>⭐</div>
            <div className="absolute -bottom-3 -right-3 text-3xl animate-bounce" style={{animationDelay: '0.5s'}}>✨</div>
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 lg:-left-6 top-1/2 -translate-y-1/2 p-4 rounded-full 
                           bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-600 shadow-lg 
                           transition-all duration-300 transform md:-translate-x-1/2 border-2 border-pink-200 z-10 hover:scale-110"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 lg:-right-6 top-1/2 -translate-y-1/2 p-4 rounded-full 
                           bg-white text-pink-500 hover:bg-pink-100 hover:text-pink-600 shadow-lg 
                           transition-all duration-300 transform md:translate-x-1/2 border-2 border-pink-200 z-10 hover:scale-110"
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`rounded-full transition-all duration-300 shadow-sm ${
                      idx === currentIndex
                        ? "bg-gradient-to-r from-pink-400 to-purple-400 w-8 h-3"
                        : "bg-pink-200 hover:bg-pink-300 w-3 h-3"
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
