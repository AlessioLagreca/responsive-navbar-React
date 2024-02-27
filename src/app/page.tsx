"use client";

import Link from "next/link";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DiVim } from "react-icons/di";

const navLinks = [
  {
    label: "Feature",
    href: "#",
  },
  {
    label: "Pricing",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
];

export default function Home() {
  const [animationParent] = useAutoAnimate();
  const [showMenu, setshowMenu] = useState(false);

  function toggleMenu() {
    setshowMenu(!showMenu);
  }

  return (
    <div
      className="mx-auto flex w-full items-center justify-between px-8 py-6
      md:px-20">
      <section className="flex items-center gap-8 ">
        {" "}
        {/* DESKTOP NAVBAR */}
        <p className="text-3xl font-semibold">logo</p>
        <div className="hidden md:flex my-8 items-center gap-6 text-gray-400 ">
          {/* mapping through the Link array */}
          {navLinks.map((d, i) => (
            <Link
              key={i}
              className="hover:text-Violet"
              href={d.href}>
              {d.label}
            </Link>
          ))}
        </div>
      </section>

      {/* LOGIN & RESISTER BUTTON */}

      <section className="hidden md:flex gap-8 items-center">
        <Link
          className="hover: opacity-70"
          href={"#"}>
          Login
        </Link>

        <Link
          className="w-[80%] rounded-full bg-cyan-500 px-6 py-2 text-center text-white
          hover:opacity-50"
          href={"#"}>
          Register
        </Link>
      </section>

      {/* MOBILE MENU, only visible if showMenu === true*/}

      {showMenu && (
        <div
          className="fixed inset-x-0 top-24 mx-8 flex flex-col items-center
      rounded-xl bg-Violet text-white md:hidden">
          <section className="my-8 flex flex-col items-center gap-6">
            {navLinks.map((d, i) => (
              <Link
                key={i}
                className="hover:opacity-70"
                href={d.href}>
                {d.label}
              </Link>
            ))}
          </section>

          <hr className="mx-auto w-[80%] border-gray-600" />

          <section className="flex flex-col gap-6 items-center w-full py-6 pb-6">
            <Link
              className="hover: opacity-70"
              href={"#"}>
              Login
            </Link>

            <Link
              className="w-[80%] rounded-full bg-cyan-500 px-6 py-2 text-center text-white
          hover:opacity-50"
              href={"#"}>
              Register
            </Link>
          </section>
        </div>
      )}

      {/* HAMBURGER AND CLOSE MENU ICONS, at the end of the navbar*/}

      <button
        ref={animationParent}
        onClick={toggleMenu}
        className="flex md:hidden text-4xl text-gray-600">
        {showMenu ? <IoClose /> : <LuMenu />}
      </button>
    </div>
  );
}
