"use client";

import React, { useMemo } from "react";

import styles from "./categories.module.css";
import fetchData from "./fetchData";
import MovieCard from "../movieCard/MovieCard";

const Categories = () => {
  const data = useMemo(() => fetchData(), []);

  const categories = [
    {
      name: "Popular",
      from: 1,
      to: 6,
    },
    {
      name: "Now Paying",
      from: 7,
      to: 12,
    },
    {
      name: "Upcoming",
      from: 13,
      to: 18,
    },
    {
      name: "Top Rated",
      from: 19,
      to: 24,
    },
    {
      name: "Favorites",
      from: 25,
      to: 30,
    },
  ];

  return (
    <div className={styles.categories}>
      {categories.map((category, c_index) => {
        return (
          <article className={styles.category} key={`${category}${c_index}`}>
            <h2>{category.name}</h2>
            <div className={styles.category_movies}>
              {data.map((movie, index) => {
                if (index >= category.from && index <= category.to) {
                  return (
                    <MovieCard
                      title={movie.original_title}
                      date={movie.release_date}
                      url={movie.poster_path}
                      key={`${movie._id}`}
                      id={`${movie._id}`}
                    />
                  );
                }
              })}
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Categories;
