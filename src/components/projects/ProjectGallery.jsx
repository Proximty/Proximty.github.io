import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "../icons/icons.jsx";

// Haalt de YouTube video-ID uit elke veelvoorkomende URL-vorm
// Geeft null terug als het geen YouTube-link is (bijv. een lokaal videobestand)
function getYoutubeId(url) {
  if (!url) return null;

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return shortMatch[1];

  const watchMatch = url.match(/[?&]v=([^&]+)/);
  if (watchMatch) return watchMatch[1];

  const embedMatch = url.match(/youtube\.com\/embed\/([^?&]+)/);
  if (embedMatch) return embedMatch[1];

  return null;
}

// Herkent of een pad/URL een lokaal videobestand is (mp4, webm, mov, etc.)
function isLocalVideoFile(src) {
  if (!src) return false;
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

export default function ProjectGallery({ project }) {
  const { screenshots, youtube, thumbnail } = project;

  const slides = [
    ...(youtube ? [{ type: "video", src: youtube }] : []),
    ...screenshots.map((s) => ({ type: "image", src: s })),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Zodra je naar een andere slide gaat, reset de video naar de thumbnail
  useEffect(() => {
    setIsPlaying(false);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[currentIndex];
  const videoId = currentSlide?.type === "video" ? getYoutubeId(currentSlide.src) : null;
  const isLocalVideo = currentSlide?.type === "video" && !videoId && isLocalVideoFile(currentSlide.src);

  const PlayButtonOverlay = ({ onClick, posterSrc }) => (
    <button onClick={onClick} className="relative w-full h-full group/play" aria-label="Video afspelen">
      {posterSrc && (
        <img src={posterSrc} alt="Video thumbnail" className="w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover/play:bg-black/40 transition-colors">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
          <div
            className="w-0 h-0 ml-1"
            style={{
              borderTop: "12px solid transparent",
              borderBottom: "12px solid transparent",
              borderLeft: "20px solid #ec4899",
            }}
          />
        </div>
      </div>
    </button>
  );

  return (
    <div className="mb-6 mx-4">
      <h2 className="text-2xl font-extrabold text-pink-700">Gallery</h2>

      {slides.length > 0 && (
        <div className="relative group mt-6">
          {/* Slide Container */}
          <div className="overflow-hidden bg-white/90 rounded-xl aspect-video border border-pink-200 shadow-md">
            {/* YouTube Video Slide */}
            {currentSlide.type === "video" && videoId && (
              isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="Project Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <PlayButtonOverlay
                  onClick={() => setIsPlaying(true)}
                  posterSrc={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                />
              )
            )}

            {/* Local Video File Slide */}
            {currentSlide.type === "video" && isLocalVideo && (
              isPlaying ? (
                <video
                  src={currentSlide.src}
                  className="w-full h-full"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <PlayButtonOverlay
                  onClick={() => setIsPlaying(true)}
                  posterSrc={thumbnail}
                />
              )
            )}

            {/* Image Slide */}
            {currentSlide.type === "image" && (
              <img
                src={currentSlide.src}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => window.open(currentSlide.src, "_blank")}
              />
            )}
          </div>

          {/* Navigation Arrows */}
          {slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-white/80 text-pink-600 hover:bg-white shadow-md 
                           transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full 
                           bg-white/80 text-pink-600 hover:bg-white shadow-md 
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
                        ? "bg-pink-500 shadow-sm w-5 h-5"
                        : "bg-pink-200 hover:bg-pink-300"
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
