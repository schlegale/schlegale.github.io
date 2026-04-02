"use client";
// PATH: src/App.tsx
import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Footer from "../components/Footer";

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [visualProgress, setVisualProgress] = useState(0);
  const pullAccumulator = useRef(0);
  const THRESHOLD = 2000;

  const calculateDays = () => {
    const targetDate = new Date("2026-03-31T00:00:00").getTime();
    const today = new Date().getTime();
    return Math.ceil(Math.abs((targetDate - today) / (1000 * 60 * 60 * 24)));
  };

  const daysDifference = calculateDays();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isRevealed) return;

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isAtBottom && e.deltaY > 0) {
        pullAccumulator.current += e.deltaY;
        const progress = Math.min((pullAccumulator.current / THRESHOLD) * 100, 100);
        setVisualProgress(progress);

        if (pullAccumulator.current > THRESHOLD) {
          setIsRevealed(true);
          triggerConfetti();
          setTimeout(() => {
            document.getElementById("secret-prize")?.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } else if (!isAtBottom) {
        pullAccumulator.current = 0;
        setVisualProgress(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isRevealed]);

  const triggerConfetti = () => {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);
      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: ["#615EFC", "#00A388", "#FF0000", "#FFFBF5"] });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: ["#615EFC", "#00A388", "#FF0000", "#FFFBF5"] });
    }, 250);
  };

  const r = Math.floor(156 + (239 - 156) * (visualProgress / 100));
  const g = Math.floor(163 - (163 - 68) * (visualProgress / 100));
  const b = Math.floor(175 - (175 - 68) * (visualProgress / 100));
  const iconColor = `rgb(${r}, ${g}, ${b})`;

  // Adjusted scale math: It now maxes out much smaller (was /40, now /70)
  const lockScale = 1 + visualProgress / 70;

  return (
    <>
      <div className="relative z-10 min-h-screen bg-white font-sans w-full overflow-x-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <section className="relative w-full pt-32 pb-16 flex flex-col items-center justify-center">
          <div className="z-20 flex flex-col items-center px-4 text-center max-w-5xl">
            <h1 className="text-[52px] md:text-[84px] font-extrabold text-[#1A1A1A] tracking-tight leading-[0.95] mb-8">
              Day <span className="text-[#615EFC]">#{daysDifference}</span> trying <br />
              to get hired by <span className="text-[#615EFC]">Alan</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#4A4A4A] max-w-2xl font-medium leading-relaxed">
              Designed with the mindset of an <span className="text-[#615EFC] font-bold">Alaner</span>.
            </p>

            <div className="mt-8 flex gap-3 items-center text-sm font-semibold text-gray-400 uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-gray-300"></span>
              Fullstack Engineer @ Alejo
              <span className="w-8 h-[1px] bg-gray-300"></span>
            </div>
          </div>
        </section>

        <section id="why-alan" className="relative z-30 bg-white w-full py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6 tracking-tight">
              Why Alan? <span className="text-gray-400 font-normal text-2xl">(The honest answer)</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed md:text-xl text-left md:text-center">
              I could give you the standard corporate pitch, but the truth is much simpler. Over the last 4 years, I've built high-traffic platforms for fashion e-commerce and real-time dashboards for robotics. It's cool tech, but my ultimate goal as an engineer is to write code that genuinely helps
              the world.
              <br />
              <br />
              You are building a system that removes friction from healthcare, supporting people when they are most vulnerable. That is the kind of tangible, real-world impact I want to dedicate my skills to, and it's exactly why I want this opportunity right now.
            </p>
          </div>
        </section>

        {/* REASONS SECTION - SHORT, PUNCHY, MEMORABLE */}
        <main id="experience" className="relative z-30 bg-white w-full py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-[#1A1A1A] mb-12 tracking-tight">How I fit the Engineering Team</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">⚒️</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Distributed Ownership</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  <strong>I build it, I own it.</strong> From provisioning AWS environments to writing pixel-perfect React, I take full responsibility for the product lifecycle. No hand-holding required.
                </p>
              </div>

              {/* REPLACED WITH ALWAYS GROWING + KOTLIN EXAMPLE */}
              <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Always Growing</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  <strong>I adapt and learn fast.</strong> When I joined WELBO, I had zero Kotlin experience. I dove in, learned it on the fly, and successfully worked on the Android app. I am never afraid of an unfamiliar stack.
                </p>
              </div>

              <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📖</div>
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">Written-First & Async</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  <strong>I thrive without meetings.</strong> I embrace radical transparency and deep documentation. I communicate clearly, give direct feedback, and ship features asynchronously.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">Want the standard timeline?</p>
              <a href="/Alejo_Schlegel_Resume.pdf" download="Alejo_Schlegel_Resume.pdf" className="text-[#615EFC] font-semibold hover:underline">
                Download my Resume instead.
              </a>
            </div>
          </div>
        </main>

        <Footer />

        {isRevealed && (
          <div id="secret-prize" className="w-full bg-[#1A1A1A] text-white py-24 px-6 flex flex-col items-center justify-center animate-[fadeIn_0.8s_ease-out]">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Secret Section Revealed! 🕵️‍♂️</h2>
            <p className="text-gray-400 mb-8 text-center max-w-lg">You've just demonstrated curiosity (a core engineering trait at Alan). Here is an exclusive promo code if you ever need an excuse to hire me:</p>
            <div className="bg-[#615EFC] text-white px-8 md:px-12 py-5 rounded-2xl font-mono text-2xl md:text-4xl font-bold shadow-lg transform rotate-2">HIRE-ALEJO-2026</div>
          </div>
        )}
      </div>

      {!isRevealed && (
        <div className="fixed bottom-0 left-0 w-full h-[10px] z-0 flex items-end justify-center pb-4 bg-white pointer-events-none">
          <div
            className="transition-transform duration-75 ease-out"
            style={{
              transform: `scale(${lockScale})`,
              color: iconColor,
              opacity: visualProgress > 5 ? 1 : 0,
              transition: "transform 75ms ease-out, color 75ms ease-out, opacity 150ms ease-out"
            }}>
            {/* Reduced size from 24x24 to 16x16, thinner stroke */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
