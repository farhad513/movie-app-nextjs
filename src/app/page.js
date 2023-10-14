import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Hero title={"LET'S GO HOME"} imageUrl={"./hero.svg"} />
    </div>
  );
}
