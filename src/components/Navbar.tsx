import type { MouseEvent } from "react";
import { profile } from "../data/profile";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Games & Projects" }
];

const Navbar = () => {
  const scrollTo = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 flex items-center justify-between px-6 md:px-8 py-4 w-full z-50 border-b border-gray-100 shadow-sm">
      <a href="#top" onClick={(e) => scrollTo(e, "top")} className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-xs font-extrabold tracking-wider text-white">AS</span>
        <span className="hidden sm:block text-lg font-bold text-ink tracking-tight">{profile.name}</span>
      </a>

      <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-800">
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} onClick={(e) => scrollTo(e, l.id)} className="hover:text-accent transition">
            {l.label}
          </a>
        ))}
        <a href={profile.resume} download={profile.resumeFileName} className="hover:text-accent transition">
          Resume
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-ink transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-[#0A66C2] transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      <a href={`mailto:${profile.email}`} className="bg-accent hover:bg-accent-dark transition-colors text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md">
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;
