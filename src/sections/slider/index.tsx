import styles from "./index.module.css";
import { languages } from "../../../public/data.json";

export default function Slider() {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {languages.map((language, index) => (
          <div className={styles.slide} key={index}>
            <img src={`/images${language.image}`} height="100" alt="404" />
          </div>
        ))}
      </div>

      <div className={styles.slideTrack}>
        {languages.map((language, index) => (
          <div className={styles.slide} key={index}>
            <img src={`/images${language.image}`} height="100" alt="404" />
          </div>
        ))}
      </div>
    </div>
  );
}
