import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "../icons/icons.jsx";

export default function ProjectPrevNext({ previous, next }) {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <>
      {/* STICKY SIDE HUD NAV */}
      <div className="fixed top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none z-40 hidden lg:block">
        <div className="max-w-screen-2xl mx-auto px-4 flex justify-between items-center">

          {/* PREVIOUS */}
          {previous ? (
            <Link
              to={previous.url}
              onClick={scrollToTop}
              title={`Vorige: ${previous.title}`}
              className="
                pointer-events-auto
                w-14 h-14 rounded-full
                bg-white/70 backdrop-blur-md
                border border-pink-200
                shadow-md
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:shadow-lg
                group
                -ml-24
              "
            >
              <ArrowLeft
                className="
                  w-6 h-6 text-pink-500
                  group-hover:-translate-x-1 transition-transform
                "
                aria-hidden
              />
            </Link>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {next ? (
            <Link
              to={next.url}
              onClick={scrollToTop}
              title={`Volgende: ${next.title}`}
              className="
                pointer-events-auto
                w-14 h-14 rounded-full
                bg-white/70 backdrop-blur-md
                border border-pink-200
                shadow-md
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:shadow-lg
                group
                -mr-24
              "
            >
              <ArrowRight
                className="
                  w-6 h-6 text-pink-500
                  group-hover:translate-x-1 transition-transform
                "
                aria-hidden
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* FOOTER NAV – LEVEL SELECT STYLE */}
      <nav className="
        mt-20 mx-4 pt-8
        border-t border-pink-200
      ">
        <div className="flex items-center justify-between gap-6">

          {/* PREVIOUS */}
          {previous ? (
            <Link
              to={previous.url}
              onClick={scrollToTop}
              className="
                group flex items-center gap-4 max-w-[45%]
                p-4 rounded-xl
                bg-white/50 backdrop-blur-md
                border border-pink-200
                hover:shadow-md
                transition-all
              "
            >
              <ArrowLeft
                className="
                  w-5 h-5 text-pink-500
                  group-hover:-translate-x-1 transition-transform
                "
              />
              <div className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-widest text-pink-400">
                  Vorige Level
                </span>
                <span className="font-semibold truncate text-pink-700">
                  {previous.title}
                </span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* NEXT */}
          {next ? (
            <Link
              to={next.url}
              onClick={scrollToTop}
              className="
                group flex items-center gap-4 max-w-[45%] ml-auto
                p-4 rounded-xl
                bg-white/50 backdrop-blur-md
                border border-pink-200
                hover:shadow-md
                transition-all
              "
            >
              <div className="flex flex-col min-w-0 text-right">
                <span className="text-xs uppercase tracking-widest text-pink-400">
                  Volgende Level
                </span>
                <span className="font-semibold truncate text-pink-700">
                  {next.title}
                </span>
              </div>
              <ArrowRight
                className="
                  w-5 h-5 text-pink-500
                  group-hover:translate-x-1 transition-transform
                "
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}
