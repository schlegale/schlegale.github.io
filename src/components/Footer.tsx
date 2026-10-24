import { useState } from "react";
import type { MouseEvent } from "react";
import { profile } from "../data/profile";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="contact" className="w-full flex flex-col">
      <section className="relative w-full py-24 bg-gradient-to-b from-white to-[#F3F1FF] flex flex-col items-center overflow-hidden">
        <div className="relative z-20 text-center px-4">
          <h2 className="text-[40px] md:text-[56px] font-bold text-ink tracking-tight mb-6 leading-[1.1]">
            Let's build something <span className="text-accent">good.</span>
          </h2>
          <p className="text-xl md:text-[22px] text-gray-600 mb-10 max-w-2xl font-medium mx-auto">Open to senior software roles. Based in Madrid, working remotely across the EU. EU citizen.</p>
        </div>

        <div className="relative z-30 text-center px-4 flex gap-4 justify-center flex-wrap">
          <button onClick={handleCopyEmail} className={`${copied ? "bg-[#25D366] hover:bg-[#20bd5a]" : "bg-accent hover:bg-accent-dark"} text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg text-[16px] flex items-center gap-2`}>
            {copied ? "Email copied ✓" : "Copy email"}
          </button>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="bg-white border border-gray-300 text-ink px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg text-[16px]">
            LinkedIn
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="bg-ink hover:bg-black text-white px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg text-[16px]">
            WhatsApp
          </a>
        </div>
      </section>

      <section className="bg-ink text-white w-full py-14 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div>
            <p className="text-lg font-bold tracking-tight">{profile.name}</p>
            <p className="text-gray-400 text-sm mt-2 max-w-xs">{profile.role}. React, TypeScript, Node.js, AWS. Also makes video games.</p>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[15px]">Explore</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li>
                  <a href="#about" onClick={(e) => scrollTo(e, "about")} className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#experience" onClick={(e) => scrollTo(e, "experience")} className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#projects" onClick={(e) => scrollTo(e, "projects")} className="hover:text-white transition-colors">
                    Games & Projects
                  </a>
                </li>
                <li>
                  <a href={profile.resume} download={profile.resumeFileName} className="hover:text-white transition-colors">
                    Download CV (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[15px]">Contact</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <button onClick={handleCopyEmail} className="hover:text-white transition-colors text-left">
                    {copied ? <span className="text-[#25D366]">Email copied ✓</span> : profile.email}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
