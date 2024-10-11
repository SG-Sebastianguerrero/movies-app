"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import styles from "./moviedetail.module.css";
import Link from "next/link";
import { Movie } from "@/app/interfaces/SimulationApiRequest";
import { getMovieById } from "./getMovieById";
import ProgressCircle from "@/app/components/progressCircle/ProgressCircle";
import FilledHeart from "@/app/components/hearts/FilledHeart";
import HighOrderHandler from "@/app/components/highOrderHandler/HighOrderHandler";

const MovieDetail = () => {
  let params = useParams();
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  async function getMovie() {
    let id = params.id as string;
    let res = await getMovieById(id);
    setMovie(res);
  }
  useEffect(() => {
    getMovie();
  }, [params]);

  if (movie !== undefined) {
    return (
      <>
        <HighOrderHandler />
        <main className={styles.movie_detail}>
          <div className={styles.movie_hero}>
            <div className={styles.movie_hero_background}></div>
            <img
              width={1440}
              height={560}
              src={movie.poster_path}
              className={styles.movie_hero_image_background}
              alt={movie.title}
            />
            <div className={styles.movie_info}>
              <Link href={"/"} className={styles.btn_back}>
                <Image
                  src="/icons/navigate_before.svg"
                  width={40}
                  height={40}
                  alt="back button"
                />
              </Link>
              <div className={styles.movie_summary}>
                <div>
                  <img
                    width={305}
                    height={395}
                    src={movie.poster_path}
                    className={styles.movie_hero_image_background}
                    alt={movie.title}
                  />
                  <button className={styles.btn_primary}>
                    <Image
                      src="/icons/play.svg"
                      width={22}
                      height={26}
                      alt="play button"
                    />
                    Official Trailer
                  </button>
                </div>

                <div className={styles.movie_overview}>
                  <h2 className={styles.movie_title}>{movie.title}</h2>
                  <span className={styles.movie_info_text}>
                    {movie.release_date}
                  </span>
                  <span className={styles.movie_overview_subtitle}>
                    Overview:
                  </span>
                  <p>{movie.overview}</p>
                  <div className={styles.movie_acceptance}>
                    <div className={styles.movie_rate}>
                      <ProgressCircle
                        fontSize={"1.3rem"}
                        size={95}
                        percentage={97}
                        strokeSize={"0.5rem"}
                      />
                      <span>Users Score</span>
                    </div>
                    <FilledHeart />
                  </div>
                  <div className={styles.category}>
                    {movie.genres.map((genre) => (
                      <span className={styles.category_name}>{genre}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 
            TODO
          <div>
            <span>Recomendations</span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
            consectetur ut veritatis repellendus, facilis error pariatur eos
            incidunt exercitationem illo? Quam, sit harum? Voluptatibus recusandae
            laborum tempore, eveniet eum et!
          </div> 
          
          */}
        </main>
      </>
    );
  } else {
    return (
      <main className={styles.movie_detail}>
        <label htmlFor="">Cargando..</label>
      </main>
    );
  }
};

export default MovieDetail;
