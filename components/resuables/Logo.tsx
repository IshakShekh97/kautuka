import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <nav className="flex flex-1 items-center justify-center gap-3">
        <Image src={"/logo.png"} alt="logo" height={30} width={30} />
        {/* <h1 className="text-4xl font-black bg-gradient-to-tr from-amber-500 to-emerald-500 text-transparent bg-clip-text "> */}
        <h1 className="sm:text-4xl text-2xl font-black">Kautuka</h1>
      </nav>
    </Link>
  );
};

export default Logo;
