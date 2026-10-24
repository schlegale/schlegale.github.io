import { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack.tsx";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const THRESHOLD = 2000;
const CONFETTI_COLORS = ["#6C4DFF", "#10B981", "#14141A", "#FFFFFF"];

function triggerConfetti() {
  const duration = 3000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };
  const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);
    const particleCount = 50 * (timeLeft / duration);
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }, colors: CONFETTI_COLORS });
    confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }, colors: CONFETTI_COLORS });
  }, 250);
}

function App() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [visualProgress, setVisualProgress] = useState(0);
  const pullAccumulator = useRef(0);

  // Scroll to a #section if the URL has one
  useEffect(() => {
    const handleHashScroll = () => {
      const id = window.location.hash.replace("#", "");
      if (!id) return;
      const element = document.getElementById(id);
      if (element) setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 300);
    };
    handleHashScroll();
    window.addEventListener("hashchange", handleHashScroll);
    return () => window.removeEventListener("hashchange", handleHashScroll);
  }, []);

  // Easter egg: keep pulling past the bottom of the page to unlock a secret level
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isRevealed) return;

      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isAtBottom && e.deltaY > 0) {
        pullAccumulator.current += e.deltaY;
        setVisualProgress(Math.min((pullAccumulator.current / THRESHOLD) * 100, 100));

        if (pullAccumulator.current > THRESHOLD) {
          setIsRevealed(true);
          triggerConfetti();
          setTimeout(() => document.getElementById("secret-prize")?.scrollIntoView({ behavior: "smooth" }), 100);
        }
      } else if (!isAtBottom) {
        pullAccumulator.current = 0;
        setVisualProgress(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isRevealed]);

  const r = Math.floor(156 + (108 - 156) * (visualProgress / 100));
  const g = Math.floor(163 + (77 - 163) * (visualProgress / 100));
  const b = Math.floor(175 + (255 - 175) * (visualProgress / 100));
  const iconColor = `rgb(${r}, ${g}, ${b})`;
  const lockScale = 1 + visualProgress / 70;

  return (
    <>
      <div className="relative z-10 min-h-screen bg-white font-sans w-full overflow-x-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
        <Navbar />
        <Hero />
        <About />
        <Stack />
        <Experience />
        <Work />
        <Projects />
        <Footer />

        {isRevealed && (
          <div id="secret-prize" className="w-full bg-ink text-white py-24 px-6 flex flex-col items-center justify-center animate-[fadeIn_0.8s_ease-out]">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">Secret level unlocked 🎮</h2>
            <p className="text-gray-400 mb-8 text-center max-w-lg">You kept scrolling past the end of the page. Curiosity is my favourite trait in an engineer. Here's your cheat code:</p>
            <div className="bg-accent text-white px-8 md:px-12 py-5 rounded-2xl font-mono text-xl md:text-3xl font-bold shadow-lg transform rotate-2 text-center">↑ ↑ ↓ ↓ ← → ← → B A</div>
          </div>
        )}
      </div>

      {!isRevealed && (
        <div className="fixed bottom-0 left-0 w-full h-[10px] z-0 flex items-end justify-center pb-4 bg-white pointer-events-none">
          <div
            style={{
              transform: `scale(${lockScale})`,
              color: iconColor,
              opacity: visualProgress > 5 ? 1 : 0,
              transition: "transform 75ms ease-out, color 75ms ease-out, opacity 150ms ease-out"
            }}>
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
