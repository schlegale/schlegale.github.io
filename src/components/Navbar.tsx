import logoImg from "../assets/alan-logo.svg";
import resume from "../assets/Alejo_Schlegel_Resume.pdf";

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 flex items-center justify-between px-8 py-4 w-full z-50 border-b border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 cursor-pointer">
        <img src={logoImg} alt="Alan Logo" className="h-7 w-auto" />
        <span className="text-xl font-bold text-gray-800 tracking-tight hidden sm:block">x Ale</span>
      </div>

      <div className="hidden md:flex items-center space-x-8 text-[15px] font-medium text-gray-800">
        <a href="#experience" onClick={(e) => scrollToSection(e, "experience")} className="hover:text-[#5D5FEF] transition">
          Experience
        </a>

        <a href="#why-alan" onClick={(e) => scrollToSection(e, "why-alan")} className="hover:text-[#5D5FEF] transition">
          Why Alan?
        </a>

        <a href={resume} download="Alejo_Schlegel_Resume.pdf" className="hover:text-[#5D5FEF] transition">
          Resume
        </a>

        <a href="https://www.linkedin.com/in/alejoschlegel/" target="_blank" rel="noopener noreferrer" className="hover:text-[#5D5FEF] transition flex items-center text-gray-600 hover:text-[#0A66C2]" aria-label="LinkedIn">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      <a href="mailto:schlegale@gmail.com" className="bg-[#615EFC] hover:bg-[#524FE0] transition-colors text-white font-semibold text-[15px] px-6 py-2.5 rounded-full shadow-sm hover:shadow-md">
        Let's Talk
      </a>
    </nav>
  );
};

export default Navbar;
