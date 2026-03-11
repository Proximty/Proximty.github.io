import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/" || location.pathname.startsWith("/projects");
    return location.pathname.startsWith(path);
  };

  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <header
      className="sticky top-0 z-50 border-b"
      style={{
        background: 'rgba(19, 17, 28, 0.75)',
        backdropFilter: 'blur(16px)',
        borderColor: 'var(--bordercolor)',
      }}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={scrollToTop}
          className="text-xl font-extrabold gradient-text hover:opacity-80 transition-opacity tracking-tight"
        >
          Portfolio ✦
        </Link>

        {/* Nav links */}
        <div className="flex gap-6">
          {[
            { to: "/",       label: "Projecten" },
            { to: "/about",  label: "Over mij"  },
            { to: "/contact",label: "Contact"    },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={scrollToTop}
              className="relative text-sm font-semibold transition-colors group"
              style={{ color: isActive(to) ? 'var(--accent)' : 'var(--muted)' }}
            >
              {label}
              {/* Active indicator */}
              <span
                className="absolute -bottom-1 left-0 h-0.5 rounded transition-all duration-300"
                style={{
                  width: isActive(to) ? '100%' : '0%',
                  background: 'linear-gradient(90deg, var(--accent), var(--accent-2))',
                }}
              />
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}