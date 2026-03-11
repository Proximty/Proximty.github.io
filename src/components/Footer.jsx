export default function Footer() {
  return (
    <footer
      className="border-t py-8 mt-16"
      style={{ borderColor: 'var(--bordercolor)', background: 'var(--surface)' }}
    >
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm gradient-text font-bold mb-1">Portfolio ✦</p>
        <p className="text-xs" style={{ color: 'var(--muted)' }}>
          © {new Date().getFullYear()} — Gemaakt met passie 💜
        </p>
      </div>
    </footer>
  );
}