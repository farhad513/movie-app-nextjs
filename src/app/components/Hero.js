import heroStyles from "@/styles/hero.module.css";
import styles from "@/styles/common.module.css";
import Link from "next/link";
import Image from "next/image";
const Hero = ({ title, imageUrl }) => {
  return (
    <div className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1 className="font-xl font-bold">{title}</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
            <button>
              <Link href="/movie">Explore Movies</Link>
            </button>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src={imageUrl} width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
