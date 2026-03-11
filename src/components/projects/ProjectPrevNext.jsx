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
                w-16 h-16 rounded-full
                bg-white
                border-4 border-pink-300
                shadow-xl
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:shadow-2xl hover:bg-pink-50
                group
                -ml-20
              "
            >
              <ArrowLeft
                className="
                  w-8 h-8 text-pink-500
                  group-hover:-translate-x-2 transition-transform
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
                w-16 h-16 rounded-full
                bg-white
                border-4 border-purple-300
                shadow-xl
                flex items-center justify-center
                transition-all duration-300
                hover:scale-110
                hover:shadow-2xl hover:bg-purple-50
                group
                -mr-20
              "
            >
              <ArrowRight
                className="
                  w-8 h-8 text-purple-500
                  group-hover:translate-x-2 transition-transform
                "
                aria-hidden
              />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>

      {/* FOOTER NAV – CUTE STYLE */}
      <nav className="
        mt-24 mx-4 pt-10 pb-12
        border-t-4 border-pink-200 border-dashed
      ">
        <div className="flex items-center justify-between gap-6 max-w-5xl mx-auto">

          {/* PREVIOUS */}
          {previous ? (
            <Link
              to={previous.url}
              onClick={scrollToTop}
              className="
                group flex items-center gap-4 max-w-[45%]
                p-5 rounded-3xl
                bg-white
                border-4 border-pink-200
                hover:shadow-lg hover:border-pink-400 hover:-translate-y-1
                transition-all
              "
            >
              <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-200 transition-colors">
                <ArrowLeft
                  className="
                    w-6 h-6 text-pink-500
                    group-hover:-translate-x-1 transition-transform
                  "
                />
               </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs uppercase tracking-widest text-pink-400 font-bold font-main">
                  Vorig Avontuur
                </span>
                <span className="font-bold text-lg truncate text-gray-700 font-main">
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
                p-5 rounded-3xl
                bg-white
                border-4 border-purple-200
                hover:shadow-lg hover:border-purple-400 hover:-translate-y-1
                transition-all text-right
              "
            >
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xs uppercase tracking-widest text-purple-400 font-bold font-main">
                  Volgend Avontuur
                </span>
                <span className="font-bold text-lg truncate text-gray-700 font-main">
                  {next.title}
                </span>
              </div>
               <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                 <ArrowRight
                   className="
                     w-6 h-6 text-purple-500
                     group-hover:translate-x-1 transition-transform
                   "
                 />
               </div>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </>
  );
}
