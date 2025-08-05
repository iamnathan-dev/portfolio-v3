import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"} className="outline-none font-bold md:text-4xl text-2xl">
      Nathan
    </Link>
  );
};

export default Logo;
