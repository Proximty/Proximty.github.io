import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  //Helper functie om te checken of een link actief is
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname.startsWith("/projects");
    }
    return location.pathname.startsWith(path);
  };

  //Scroll naar boven bij navigatie
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header className="sticky top-0 z-50 bg-(--surface) border-b-4 border-pink-300 shadow-sm">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Site naam */}
        <Link 
          to="/" 
          onClick={scrollToTop}
          className="text-2xl font-bold text-pink-500 hover:text-purple-500 transition-colors drop-shadow-sm font-main"
        >
          Portfolio
        </Link>

        {/* Navigatie links */}
        <div className="flex gap-6">
          <Link
            to="/"
            onClick={scrollToTop}
            className={`transition-colors ${
              isActive("/") 
                ? "text-pink-500 font-bold bg-pink-100 px-3 py-1 rounded-full" 
                : "text-purple-600 hover:text-pink-400 hover:bg-pink-50 px-3 py-1 rounded-full"
            }`}
          >
            Projects
          </Link>

          <Link
            to="/about"
            onClick={scrollToTop}
            className={`transition-colors ${
              isActive("/about") 
                ? "text-pink-500 font-bold bg-pink-100 px-3 py-1 rounded-full" 
                : "text-purple-600 hover:text-pink-400 hover:bg-pink-50 px-3 py-1 rounded-full"
            }`}
          >
            Over Mij
          </Link>

          <Link
            to="/contact"
            onClick={scrollToTop}
            className={`transition-colors ${
              isActive("/contact") 
                ? "text-pink-500 font-bold bg-pink-100 px-3 py-1 rounded-full" 
                : "text-purple-600 hover:text-pink-400 hover:bg-pink-50 px-3 py-1 rounded-full"
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}