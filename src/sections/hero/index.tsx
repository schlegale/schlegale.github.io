import styles from "./index.module.css";

export default function Hero() {
  return (
    <section>
      <h1>Alejo Schlegel</h1>
      <h3 className={styles.highlighted}>Software Engineer</h3>
    </section>
  );
}
