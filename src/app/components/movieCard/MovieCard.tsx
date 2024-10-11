"use client";

import FilledHeart from "../hearts/FilledHeart";
import dynamic from "next/dynamic";
import styles from "./moviecard.module.css";
import Link from "next/link";

interface PropsMovieCard {
  title: string;
  date: string;
  url: string;
  id: string;
}
const ProgressCircle = dynamic(
  () => import("../progressCircle/ProgressCircle"),
  { ssr: false }
);
const MovieCard = ({ title, date, url, id }: PropsMovieCard) => {
  return (
    <div className={styles.card}>
      <Link href={`/movie/${id}`}>
        <img
          className={styles.card_image}
          src={url}
          width={200}
          height={223}
          alt={title}
        />
      </Link>
      <div className={styles.card_info}>
        <h2>{title}</h2>
        <span>{date}</span>
        <div className={styles.card_popularity}>
          <div className={styles.card_popularity_detail}>
            <span>Rating</span>
            <ProgressCircle
              fontSize={"0.5rem"}
              size={35}
              percentage={Math.floor(Math.random() * 100)}
              strokeSize={"0.15rem"}
            />
          </div>
          <div className={styles.card_popularity_detail}>
            <span>Favorites</span>
            <FilledHeart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
