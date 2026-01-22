import { useState } from "react";
import { siteConfig } from "../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ChevronRight } from "../components/icons/icons.jsx";

export default function Contact() {
  const [accent, setAccent] = useState("#00ffff");

  const socialLinks = [
    { name: "GitHub", url: siteConfig.socials.github, description: "Bekijk mijn code en projecten", icon: <GitHub className="w-8 h-8" /> },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, description: "Connect met mij", icon: <LinkedIn className="w-8 h-8" /> },
    { name: "Itch.io", url: siteConfig.socials.itch, description: "Speel mijn games", icon: <Itch className="w-8 h-8" /> },
  ];

  return (
    <section className="relative py-12 px-4 overflow-hidden min-h-screen bg-black">
      {/* Neon grid achtergrond */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accent}33 1px, transparent 1px),
            linear-gradient(to bottom, ${accent}33 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-20"
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl flex flex-col gap-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold mb-4 font-mono glitch"
            style={{ color: accent }}
            onMouseEnter={() => setAccent("#ff00ff")}
            onMouseLeave={() => setAccent("#00ffff")}
          >
            Contact
          </h1>
          <p className="text-xl text-cyan-300 max-w-2xl mx-auto">
            Interesse in samenwerking of gewoon een vraag? Neem gerust contact op!
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Email CTA */}
          <div
            className="lg:flex-1 bg-black/80 rounded-lg border border-cyan-500 p-8 flex flex-col justify-center
                       hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300"
            onMouseEnter={() => setAccent("#00ffff")}
            onMouseLeave={() => setAccent("#ff00ff")}
          >
            <div className="mb-6 text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-full bg-cyan-500/20
                              flex items-center justify-center text-cyan-300 shadow-[0_0_15px_rgba(0,255,255,0.3)]
                              animate-pulse">
                <Envelope className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-cyan-300 mb-2">Direct contact</h2>
              <p className="text-cyan-400 mb-6">
                Stuur me een email en ik reageer zo snel mogelijk.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500
                         text-black rounded-lg font-semibold shadow-[0_0_20px_rgba(0,255,255,0.5)]
                         hover:shadow-[0_0_30px_rgba(0,255,255,0.8)] transition-all duration-300"
            >
              <Envelope className="w-5 h-5" />
              {siteConfig.socials.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="lg:flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-cyan-300 mb-2 font-mono">Vind me online</h2>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setAccent("#facc15")}
                onMouseLeave={() => setAccent("#00ffff")}
                className="group p-4 bg-black/80 rounded-lg border border-cyan-500
                           flex items-center gap-4 hover:shadow-[0_0_25px_rgba(250,204,21,0.5)]
                           transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-cyan-500/10
                                flex items-center justify-center text-cyan-300
                                group-hover:text-yellow-400 group-hover:bg-yellow-400/20
                                shadow-[0_0_10px_rgba(0,255,255,0.2)]
                                transition-all duration-300">
                  {social.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-cyan-300 group-hover:text-yellow-400 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-cyan-400">{social.description}</p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-cyan-400 group-hover:text-yellow-400
                                        group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
