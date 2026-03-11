import { useState } from "react";
import { siteConfig } from "../siteConfig";
import { GitHub, LinkedIn, Itch, Envelope, ChevronRight } from "../components/icons/icons.jsx";

export default function Contact() {
  const [accent, setAccent] = useState("#ff4081"); // Pink default

  const socialLinks = [
    { name: "GitHub", url: siteConfig.socials.github, description: "Bekijk mijn magische code", icon: <GitHub className="w-8 h-8" /> },
    { name: "LinkedIn", url: siteConfig.socials.linkedin, description: "Wordt vrienden met mij", icon: <LinkedIn className="w-8 h-8" /> },
    { name: "Itch.io", url: siteConfig.socials.itch, description: "Speel mijn avonturen", icon: <Itch className="w-8 h-8" /> },
  ];

  return (
    <section className="relative py-12 px-4 overflow-hidden min-h-screen"
             style={{ background: "radial-gradient(circle at 50% 0%, #ffe6f2, #fff0f5)" }}>
      {/* Decorative magical dots/sparkles achtergrond */}
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `
            radial-gradient(${accent} 3px, transparent 3px),
            radial-gradient(${accent} 3px, transparent 3px)
          `,
          backgroundSize: "80px 80px",
          backgroundPosition: "0 0, 40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-300 rounded-full blur-[100px] opacity-30 mix-blend-multiply"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-300 rounded-full blur-[100px] opacity-30 mix-blend-multiply"
      />

      <div className="relative z-10 container mx-auto max-w-5xl flex flex-col gap-12 mt-10">

        {/* Header */}
        <div className="text-center mb-12 bg-white/60 backdrop-blur-sm p-8 rounded-3xl border-4 border-pink-200 inline-block mx-auto shadow-sm">
          <h1
            className="text-5xl font-bold mb-4 font-main drop-shadow-sm transition-colors duration-500"
            style={{ color: accent }}
            onMouseEnter={() => setAccent("#ab47bc")} // Purple
            onMouseLeave={() => setAccent("#ff4081")} // Pink
          >
            Stuur een briefje! 💌
          </h1>
          <p className="text-xl text-purple-700 max-w-2xl mx-auto font-medium">
            Interesse in een magische samenwerking of gewoon een vraag? Laat van je horen!
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Email CTA */}
          <div
            className="lg:flex-1 bg-white rounded-3xl border-4 border-pink-300 p-10 flex flex-col justify-center
                       shadow-xl transform hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            onMouseEnter={() => setAccent("#ff4081")}
            onMouseLeave={() => setAccent("#ab47bc")}
          >
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Envelope className="w-32 h-32 text-pink-500" />
             </div>
            <div className="mb-8 text-center lg:text-left relative z-10">
              <div className="w-20 h-20 mx-auto lg:mx-0 mb-6 rounded-full bg-pink-100 border-4 border-pink-200
                              flex items-center justify-center text-pink-500 shadow-md group-hover:scale-110 transition-transform">
                <Envelope className="w-10 h-10" />
              </div>
              <h2 className="text-3xl font-bold text-pink-600 mb-3 font-main">Vriendschapspost</h2>
              <p className="text-gray-600 text-lg font-medium mb-8">
                Stuur me een email via pegasus-post en ik reageer sneller dan Rainbow Dash! 🌈
              </p>
            </div>
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-400 to-purple-400
                         text-white rounded-full font-bold text-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 relative z-10"
            >
              <Envelope className="w-6 h-6" />
              {siteConfig.socials.email}
            </a>
          </div>

          {/* Social Links */}
          <div className="lg:flex-1 flex flex-col gap-5">
            <h2 className="text-2xl font-bold text-purple-600 mb-2 font-main bg-white/60 inline-block px-4 py-1 rounded-full shadow-sm text-center lg:text-left">
              Vind me online 🌐
            </h2>

            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setAccent("#ffd54f")} // Yellow
                onMouseLeave={() => setAccent("#ff4081")}
                className="group p-5 bg-white rounded-2xl border-4 border-purple-200
                           flex items-center gap-5 hover:border-yellow-400 hover:shadow-lg
                           transform hover:-translate-x-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-purple-100 border-2 border-purple-200
                                flex items-center justify-center text-purple-500
                                group-hover:text-yellow-500 group-hover:bg-yellow-100 group-hover:border-yellow-300
                                shadow-sm transition-all duration-300 group-hover:rotate-12">
                  {social.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-purple-600 group-hover:text-yellow-600 transition-colors font-main">
                    {social.name}
                  </h3>
                  <p className="text-md text-gray-500 font-medium">{social.description}</p>
                </div>

                {/* Arrow */}
                <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                  <ChevronRight className="w-6 h-6 text-pink-400 group-hover:text-yellow-500
                                          group-hover:translate-x-1 transition-all" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
