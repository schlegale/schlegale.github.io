import styles from "./index.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.LeftSection}>Lets</div>
      <div className={styles.navLinks}>
        <a href="https://wa.me/613298901">CHAT</a>
      </div>
    </nav>
  );
}
