import React from "react";
import styles from "@/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";
const MovieCard = (currentData) => {
  const { id, title, type, synopsis } = currentData.jawSummary;
  return (
    <div className={styles.card}>
      <div className={""}>
        <div className={styles.card_image}>
          <Image
            src={currentData.jawSummary.backgroundImage.url}
            width={200}
            height={250}
          />
        </div>
        <div className={styles.card_data}>
          <h2 className="font-bold mb-0 pb-0">{title.substring(0, 16)}</h2>
          <p>{synopsis.substring(0, 70)}</p>
          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
