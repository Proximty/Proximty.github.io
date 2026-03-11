import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import FloatingFlowers from "./components/FloatingFlowers";

export default function App() {
  return (
    <>
      {/* Always-visible custom cursor */}
      <Cursor />

      {/* Floating flower decorations behind everything */}
      <FloatingFlowers />

      <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)" style={{ position: 'relative', zIndex: 1 }}>
        <Header />

        <main className="flex-1 container mx-auto">
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
