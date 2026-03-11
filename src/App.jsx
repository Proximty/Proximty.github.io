import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RainbowCursor from "./components/RainbowCursor";
import FloatingClouds from "./components/FloatingClouds";
import PartyCannon from "./components/PartyCannon";
import FloatingPonies from "./components/FloatingPonies";
import BouncingPony from "./components/BouncingPony";
import ChaosMonkey from "./components/ChaosMonkey";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-(--bg) text-(--text)">
      <FloatingClouds />
      <FloatingPonies />
      <BouncingPony />
      <ChaosMonkey />
      <RainbowCursor />
      <PartyCannon />
      <Header />

      <main className="flex-1 container mx-auto relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
