import { useState } from "react";
import { siteConfig } from "../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ChevronRight } from "../components/icons/icons.jsx";
import InteractiveFlora from "../components/InteractiveFlora";

export default function Contact() {
  const [accent, setAccent] = useState("#00ffff");

  const socialLinks = [
    { name: "GitHub", url: siteConfig.socials.github, description: "Bekijk mijn code en projecten", icon: <GitHub className="w-8 h-8" /> },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, description: "Connect met mij", icon: <LinkedIn className="w-8 h-8" /> },
    { name: "Itch.io", url: siteConfig.socials.itch, description: "Speel mijn games", icon: <Itch className="w-8 h-8" /> },
  ];

  return (
    <section className="relative py-12 px-4 overflow-hidden min-h-screen bg-transparent">
      {/* Subtiel patroon */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${accent}15 1px, transparent 1px),
            linear-gradient(to bottom, ${accent}15 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 blur-3xl opacity-10"
        style={{ backgroundColor: accent }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl flex flex-col gap-12">

        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-5xl font-bold mb-4 font-mono transition-colors duration-500"
            style={{ color: accent }}
            onMouseEnter={() => setAccent("#ec4899")}
            onMouseLeave={() => setAccent("#db2777")}
          >
            Contact
          </h1>
          <p className="text-xl text-pink-700 max-w-2xl mx-auto">
            Interesse in samenwerking of gewoon een vraag? Neem gerust contact op!
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Email CTA */}
          <div
            className="lg:flex-1 bg-white/80 backdrop-blur-sm rounded-lg border border-pink-200 p-8 flex flex-col justify-center
                       hover:shadow-lg transition-all duration-300"
            onMouseEnter={() => setAccent("#fbcfe8")}
            onMouseLeave={() => setAccent("#fce7f3")}
          >
            <div className="mb-6 text-center lg:text-left">
              <div className="w-16 h-16 mx-auto lg:mx-0 mb-4 rounded-full bg-pink-100/50
                              flex items-center justify-center text-pink-600 shadow-sm
                              animate-pulse">
                <Envelope className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-pink-800 mb-2">Direct contact</h2>
              <p className="text-pink-600 mb-6">
                Stuur me een email en ik reageer zo snel mogelijk.
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-3 bg-pink-500
                         text-white rounded-lg font-semibold shadow-md
                         hover:bg-pink-600 hover:shadow-lg transition-all duration-300"
            >
              <InteractiveFlora />
              <Envelope className="w-5 h-5 z-10" />
              <span className="z-10">{siteConfig.socials.email}</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="lg:flex-1 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-pink-800 mb-2 font-mono">Vind me online</h2>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setAccent("#fb923c")}
                onMouseLeave={() => setAccent("#db2777")}
                className="group relative p-4 bg-white/80 rounded-lg border border-pink-200
                           flex items-center gap-4 hover:shadow-md
                           transition-all duration-300"
              >
                <InteractiveFlora />
                {/* Icon */}
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-pink-100/50
                                flex items-center justify-center text-pink-600
                                group-hover:text-orange-500 group-hover:bg-orange-100/50
                                shadow-sm transition-all duration-300">
                  {social.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-pink-800 group-hover:text-orange-600 transition-colors">
                    {social.name}
                  </h3>
                  <p className="text-sm text-pink-600">{social.description}</p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-pink-400 group-hover:text-orange-500
                                        group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
