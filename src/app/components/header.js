import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-lg">
      <div className="flex items-center justify-between p-5 mx-auto px-10">
        <Link href="/" className="text-xl text-orange-600 font-bold">
          Farhad
        </Link>
        <ul className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/movie">Movie</Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
