import styles from "./page.module.css";
import Hero from "@/sections/hero";
import Slider from "@/sections/slider";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <Slider />
      </main>

      <Contact />
    </div>
  );
}
