import Image from "next/image";
import styles from "./css/mainpage.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import ProgressCircle from "./components/progressCircle/ProgressCircle";
import FilledHeart from "./components/hearts/FilledHeart";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <div className={styles.hero_background}></div>
          <Image
            width={1440}
            height={435}
            src={"/assets/hero_kungfu_panda.png"}
            className={styles.hero_img}
            alt="kung fu panda"
            priority
          />
          <div className={styles.hero_info}>
            <div className={styles.hero_title}>
              <h1>Kung Fu Panda 4</h1>
            </div>
            <div className={styles.hero_info_text}>
              <p>
                Join Po and the Furious Five on a new epic adventure! Discover
                the power of friendship and the strength within! Get ready to
                unleash your inner warrior! 🥋✨
              </p>
            </div>
            <div className={styles.hero_info_stadistics}>
              <FilledHeart />
              <ProgressCircle percentage={97} colour="#4DA14F" />
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <Sidebar />
          <article className={styles.categories}>
            <div>MOVIE</div>
          </article>
        </div>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
