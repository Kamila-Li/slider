import styles from "./Hero.module.css";
import HeroImage from "../../assets/image/illustration-hero.svg";

const HeroText = {
  title: ["A Simple Bookmark", "Manager"],
  descr:
    "A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.",
};

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerDescr}>
          <div className={styles.title}>
            {" "}
            {HeroText.title[0]}
            <br />
            {HeroText.title[1]}
          </div>
          <div className={styles.text}>{HeroText.descr}</div>
          <div className={styles.containerButtons}>
            <button className={styles.ChromeBtn}>Get it on Chrome</button>
            <button className={styles.FirefoxBtn}>Get it on Firefox</button>
          </div>
        </div>
        <div className={styles.backgroundShape}></div>
        <div className={styles.containerImg}>
          <div className={styles.illustrationContainer}>
            <img src={HeroImage} alt="Browser preview" />
          </div>
        </div>
      </div>
    </>
  );
}
