import styles from "./index.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.wrapper}>
      <a
        href="/Resume.pdf"
        target="_blank"
        download="Resume.pdf"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Resume
      </a>
      <a
        href="https://www.linkedin.com/in/alejoschlegel/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
      <span>
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Built With Next JS!
      </span>
    </section>
  );
}
