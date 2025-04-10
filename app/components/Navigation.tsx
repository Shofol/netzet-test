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
        className="lg:hidden z-10 relative"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <Image src={"/burger.svg"} width={20} height={12} alt="menu button" />
      </button>
      <div
        className={
          "gap-4 lg:gap-10 font-figtree text-lg " +
          (showMenu
            ? "flex flex-col items-end absolute left-0 top-0 bg-black w-full px-10 pt-20 pb-4"
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
