"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const routes = [
    {
      name: "About us",
      path: "/",
    },
    {
      name: "Contact",
      path: "/",
    },
  ];
  return (
    <nav>
      <button
        className="relative z-10 lg:hidden"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Image src={"/burger.svg"} width={20} height={12} alt="menu button" />
      </button>
      <div
        className={
          "font-figtree gap-4 text-lg lg:gap-10 " +
          (showMenu
            ? "absolute top-0 left-0 flex w-full flex-col items-end bg-black px-10 pt-20 pb-4"
            : "hidden lg:flex")
        }
      >
        {routes.map((item) => {
          return (
            <Link
              key={item.name}
              href={item.path}
              className="text-br-link hover:underline"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
