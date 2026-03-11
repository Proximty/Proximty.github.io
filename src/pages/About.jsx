import { siteConfig } from "../siteConfig";
import { Download, Users, Tech } from "../components/icons/icons.jsx";

export default function About() {
  // Split de about tekst in paragrafen
  const paragraphs = siteConfig.aboutLong
    .split("\n\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="py-12 px-4 bg-pink-50 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-pink-500 mb-4 font-main drop-shadow-sm">Over mij</h1>
        <p className="text-xl text-purple-600 max-w-2xl mx-auto font-medium">{siteConfig.tagline}</p>
      </div>

      <div className="container mx-auto max-w-5xl">
        {/* Main Grid */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Right Column - Photo & Contact Card */}
          <div className="lg:flex-1">
            {/* Profile Card */}
            <div className="bg-white border-4 border-pink-200 shadow-xl rounded-3xl p-8 h-full flex flex-col transform transition-transform hover:-translate-y-2">
              {/* Photo */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-pink-300 rounded-full blur-xl opacity-40 mix-blend-multiply" />
                  <img
                    src={siteConfig.aboutImage}
                    alt={siteConfig.name}
                    className="relative w-full aspect-square object-cover rounded-full border-8 border-white shadow-lg mx-auto"
                    style={{ maxWidth: '80%' }}
                  />
              </div>

              {/* Info */}
              <div className="text-center mb-8 flex-grow flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-pink-600 mb-2 font-main">{siteConfig.name}</h3>
                <p className="text-purple-500 font-bold text-lg bg-purple-50 inline-block px-4 py-1 rounded-full mx-auto">{siteConfig.role}</p>
              </div>

              {/* CV Download */}
              <a
                href={siteConfig.cv}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 
                           px-6 py-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-2xl 
                           font-bold text-lg hover:shadow-lg hover:scale-105 transition-all shadow-md">
                <Download className="w-6 h-6" />
                Magisch CV ✨
              </a>
            </div>
          </div>

          {/* Left Column - Bio & Skills */}
          <div className="flex flex-col gap-8 lg:flex-2">
            {/* Bio */}
            <section className="bg-white border-4 border-purple-200 shadow-xl rounded-3xl p-8 relative overflow-hidden">
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-100 rounded-full blur-2xl opacity-60"></div>
              <h2 className="text-3xl font-bold text-purple-600 mb-6 font-main relative z-10">Mijn Verhaal 📖</h2>
              <div className="space-y-4 relative z-10 text-lg">
                {paragraphs.map((text, i) => (
                  <p key={i} className="text-gray-700 leading-relaxed font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </section>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
              {/* Soft Skills */}
              <section className="bg-white border-4 border-pink-200 shadow-lg rounded-3xl p-8 flex flex-col hover:border-pink-400 transition-colors">
                <h3 className="text-xl font-bold text-pink-500 mb-5 flex items-center gap-3 font-main">
                  <span className="p-2 bg-pink-100 rounded-full text-pink-500">
                    <Users className="w-6 h-6" />
                  </span>
                  Vriendschap Skills
                </h3>
                <ul className="space-y-3 relative z-10">
                  {siteConfig.softSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-gray-700 font-medium font-main">
                      <span className="text-pink-400 mt-0.5 text-lg">💖</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Hard Skills */}
              <section className="bg-white border-4 border-purple-200 shadow-lg rounded-3xl p-8 flex flex-col hover:border-purple-400 transition-colors">
                <h3 className="text-xl font-bold text-purple-500 mb-5 flex items-center gap-3 font-main">
                   <span className="p-2 bg-purple-100 rounded-full text-purple-500">
                     <Tech className="w-6 h-6" />
                   </span>
                  Magie Skills
                </h3>
                <ul className="space-y-3 relative z-10">
                  {siteConfig.hardSkills.map((skill) => (
                    <li key={skill} className="flex items-start gap-3 text-gray-700 font-medium font-main">
                      <span className="text-purple-400 mt-0.5 text-lg">✨</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}