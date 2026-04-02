// PATH: src/components/Footer.tsx
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText("schlegale@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="contact" className="w-full flex flex-col">
      <section className="relative w-full pt-24 bg-gradient-to-b from-white to-[#FFFBF5] flex flex-col items-center overflow-hidden">
        <div className="relative z-20 text-center mb-6 px-4">
          <h1 className="text-[44px] md:text-[52px] font-bold text-[#1A1A1A] tracking-tight mb-6 leading-[1.1]">
            Healthcare works best when it isn't fragmented. <br />
            <span className="text-[#615EFC]">Engineering works best when you hire Ale.</span>
          </h1>
          <p className="text-xl md:text-[22px] text-[#4A4A4A] mb-8 max-w-3xl font-medium mx-auto">I'm a Fullstack Engineer with 4+ years of experience ready to help build the future of digital health in Spain.</p>
        </div>

        <div className="relative z-30 text-center px-4 flex gap-4 justify-center flex-wrap">
          <button onClick={handleCopyEmail} className={`${copied ? "bg-[#25D366] hover:bg-[#20bd5a]" : "bg-[#615EFC] hover:bg-[#524FE0]"} text-white px-8 py-3.5 rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg text-[16px] flex items-center gap-2`}>
            {copied ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
            {copied ? "Email Copied!" : "Copy Email"}
          </button>

          <a href="https://wa.me/34613298901" target="_blank" rel="noreferrer" className="bg-[#242529] hover:bg-[#1a1b1e] text-white px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-lg text-[16px] flex items-center gap-2">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.786 5.768-.003 1.012.261 1.996.764 2.868l-.818 2.986 3.056-.801a5.728 5.728 0 002.784.721h.002c3.18 0 5.768-2.586 5.786-5.768.019-3.181-2.569-5.774-5.788-5.774zm0 10.42a4.743 4.743 0 01-2.42-.663l-.173-.103-1.799.472.483-1.755-.113-.18a4.755 4.755 0 01-.734-2.553c.015-2.63 2.164-4.774 4.795-4.774 1.275 0 2.473.504 3.373 1.411a4.767 4.767 0 011.396 3.385c-.015 2.628-2.164 4.772-4.794 4.772v-.012zm2.63-3.593c-.144-.072-.853-.422-.985-.47-.132-.048-.228-.072-.324.072s-.372.47-.456.566c-.084.096-.168.108-.312.036-.144-.072-.609-.225-1.161-.716-.428-.382-.716-.855-.8-1.001-.084-.144-.009-.224.063-.296.065-.065.144-.168.216-.252.072-.084.096-.144.144-.24.048-.096.024-.18-.012-.252-.036-.072-.324-.781-.444-1.07-.116-.282-.234-.244-.324-.248-.084-.004-.18-.004-.276-.004s-.252.036-.384.18c-.132.144-.504.493-.504 1.2s.516 1.394.588 1.49c.072.096 1.016 1.551 2.46 2.147.344.142.613.227.822.291.345.109.659.093.906.056.275-.041.853-.348.973-.685.12-.337.12-.625.084-.685-.036-.06-.132-.096-.276-.168z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <div className="relative z-10 w-[500px] md:w-[650px] flex justify-center pointer-events-none mt-8 translate-y-[24%] -mb-10">
          <img src="/alan-footer.webp" alt="Alan Bear Peeking" className="w-full h-auto object-cover" />
        </div>
      </section>

      <section className="bg-[#242529] text-white w-full py-16 px-8 border-t border-[#242529]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-6">
            <div className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 681 142" className="h-7 w-auto" aria-hidden="true">
                <g fill="currentColor" fillRule="evenodd">
                  <path d="M58.228 25.335C55.406 8.675 40.153-2.477 24.224.473 12.468 2.651 3.593 11.915.878 23.316q-.007.035-.017.07-.148.628-.27 1.264l-.03.149q-.116.618-.207 1.243-.014.078-.025.155a32 32 0 0 0-.17 1.402l-.01.098q-.061.635-.093 1.272-.013.204-.021.408c-.015.335-.02.672-.025 1.01 0 .133-.01.265-.01.4 0 .115.007.229.01.344q.003.27.012.54c.045 1.444.184 2.902.431 4.367 1.611 9.506 10.284 15.847 19.375 14.164 3.281-.609 6.17-2.18 8.444-4.387a6.47 6.47 0 0 1 7.095-1.28 15.96 15.96 0 0 0 9.317 1.061c8.726-1.616 14.658-10.04 13.696-19.122a19 19 0 0 0-.152-1.14m70.276-20.9c-32.175 0-52.163 11.366-52.163 29.659 0 21.327 20.476 50.44 52.163 50.44 31.2 0 52.163-29.44 52.163-50.44 0-18.571-19.5-29.659-52.163-29.659m128.462 24.943q-.008-.212-.02-.422-.034-.63-.093-1.258l-.01-.098q-.07-.705-.17-1.402l-.025-.155a31 31 0 0 0-.508-2.655l-.017-.071C253.408 11.915 244.533 2.65 232.777.473c-15.929-2.95-31.182 8.202-34.004 24.862a18 18 0 0 0-.152 1.139c-.963 9.083 4.97 17.506 13.696 19.122 3.262.605 6.47.176 9.318-1.062a6.47 6.47 0 0 1 7.094 1.28c2.275 2.208 5.163 3.78 8.445 4.388 9.09 1.683 17.764-4.658 19.374-14.164.247-1.465.385-2.923.431-4.367q.01-.27.014-.54c0-.115.007-.23.007-.345 0-.134-.007-.266-.01-.4q-.003-.506-.024-1.01m-82.21 71.979c-8.447-3.802-19.804 2.69-29.398 4.263-5.65.968-11.246 1.47-16.854 1.527a106.4 106.4 0 0 1-16.855-1.527c-9.595-1.573-20.95-8.062-29.399-4.263-4.283 1.943-5.603 6.681-3.863 12.339 1.197 3.866 3.507 7.436 6.443 10.31 6.1 6.004 13.902 10.547 21.086 13.421 7.313 2.947 14.944 4.52 22.588 4.575 7.645-.054 15.274-1.626 22.588-4.575 7.183-2.87 14.986-7.421 21.087-13.422 2.933-2.875 5.246-6.445 6.442-10.31 1.74-5.652.42-10.4-3.864-12.338M645.863 38.3c-12.668 0-22.46 4.606-29.567 15.165V44.3a3.89 3.89 0 0 0-3.89-3.89H587.17a3.89 3.89 0 0 0-3.892 3.89v91.668a3.89 3.89 0 0 0 3.892 3.891h25.235a3.89 3.89 0 0 0 3.891-3.89V86.104c0-11.328 4.031-21.313 15.937-21.313 12.093 0 15.743 11.713 15.743 21.313v49.863a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V84.182c0-21.694-6.144-45.883-35.137-45.883m-195.458 77.58-5.213-.012c-4.138-.143-5.96-3.287-5.96-7.536V106.4h.013V6.891a3.89 3.89 0 0 0-3.892-3.89h-24.567a3.89 3.89 0 0 0-3.892 3.89v99.74c0 28.554 18.343 35.173 35.551 35.173 2.367 0 4.64-.155 8.268-.456a3.897 3.897 0 0 0 3.574-3.878v-17.699a3.89 3.89 0 0 0-3.882-3.89m62.845.172c-14.012 0-22.656-11.518-22.656-26.11 0-14.016 8.256-25.535 22.275-25.535 14.012 0 23.418 10.56 23.418 26.493 0 15.743-9.982 25.152-23.037 25.152m51.401-75.644H539.41a3.89 3.89 0 0 0-3.89 3.891v9.36c-6.144-9.216-17.275-15.36-30.33-15.36-29.18 0-47.806 22.846-47.806 51.642 0 29.374 19.387 52.03 48 52.03 14.01 0 23.804-5.954 30.135-15.744v9.74a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V44.3a3.89 3.89 0 0 0-3.89-3.89m-227.786 75.643c-14.012 0-22.655-11.518-22.655-26.11 0-14.016 8.256-25.535 22.274-25.535 14.012 0 23.418 10.56 23.418 26.493 0 15.743-9.98 25.152-23.037 25.152m51.401-75.644h-25.242a3.89 3.89 0 0 0-3.89 3.891v9.36c-6.144-9.216-17.275-15.36-30.33-15.36C299.624 38.3 281 61.146 281 89.942c0 29.374 19.386 52.03 47.998 52.03 14.012 0 23.805-5.954 30.136-15.744v9.74a3.89 3.89 0 0 0 3.891 3.891h25.242a3.89 3.89 0 0 0 3.891-3.89V44.3a3.89 3.89 0 0 0-3.89-3.89"></path>
                </g>
              </svg>
            </div>
            {/* THIS IS THEIR EXACT SUB-SLOGAN */}
            <p className="text-gray-400 text-sm mt-4 max-w-xs">Alan. Where insurance, care, and prevention finally work together.</p>
          </div>

          <div className="flex gap-16 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[15px] text-white">Quick Links</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li>
                  <a href="#experience" onClick={(e) => scrollToSection(e, "experience")} className="hover:text-white cursor-pointer transition-colors">
                    My Experience
                  </a>
                </li>
                <li>
                  <a href="#why-alan" onClick={(e) => scrollToSection(e, "why-alan")} className="hover:text-white cursor-pointer transition-colors">
                    Why Alan?
                  </a>
                </li>
                <li>
                  <a href="/Alejo_Schlegel_Resume.pdf" className="hover:text-white cursor-pointer transition-colors">
                    Download Resume (PDF)
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-[15px] text-white">Contact</h4>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li>
                  <a href="https://linkedin.com/in/alejoschlegel" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/schlegale" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/34613298901" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    WhatsApp
                  </a>
                </li>
                <li>
                  <button onClick={handleCopyEmail} className="hover:text-white transition-colors text-left flex items-center gap-1.5">
                    {copied ? <span className="text-[#25D366]">Email Copied! ✓</span> : "schlegale@gmail.com"}
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
