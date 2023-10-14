import React from "react";
import styles from "@/styles/common.module.css";
import Image from "next/image";
const Movies = async ({ params }) => {
  const id = params.id;
  const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "f7912f8240mshda886bc3062da29p1d8fcajsn607a95991259",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data[0].details;

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix / <span>{main_data.type}</span>
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image src={main_data.backgroundImage.url} width={600} height={300} />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default Movies;
