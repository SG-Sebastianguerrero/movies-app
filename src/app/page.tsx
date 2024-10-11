import Image from "next/image";
import styles from "./mainpage.module.css";
import Sidebar from "./components/sidebar/Sidebar";
import ProgressCircle from "./components/progressCircle/ProgressCircle";
import FilledHeart from "./components/hearts/FilledHeart";
import Categories from "./components/categories/Categories";
import HighOrderHandler from "./components/highOrderHandler/HighOrderHandler";

export default function Home() {
  return (
    <>
      <HighOrderHandler showAdvertising />
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
                <ProgressCircle
                  fontSize={"1.3rem"}
                  size={92}
                  percentage={97}
                  strokeSize={"0.5rem"}
                />
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <Sidebar />
            <Categories />
          </div>
        </main>
      </div>
    </>
  );
}
