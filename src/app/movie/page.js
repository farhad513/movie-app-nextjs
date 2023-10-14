import Link from "next/link";
import React from "react";
import style from "@/styles/common.module.css";
import MovieCard from "../components/MovieCard";

const Movie = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const url =
    "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7912f8240mshda886bc3062da29p1d8fcajsn607a95991259",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles;

  return (
    <div className={style.movieSection}>
      <div className={style.container}>
        <h1>ALL Netflix Movie</h1>
        <div className={style.card_section}>
          {main_data.map((currentData) => {
            return <MovieCard key={currentData.id} {...currentData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Movie;
