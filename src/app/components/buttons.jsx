"use client";
import { motion } from "motion/react";
import { useContext, useState, useEffect } from "react";
//import Link from "next/link";
import { Link } from "next-view-transitions";
//import { ViewTransitions } from "next-view-transitions";

import { NavigationContext } from "./navigation-context";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export function PrimaryButton({ text, route, delayAmt }) {
  // const [delay, setDelay] = useState(0);

  // useEffect(() => {
  //   const handlePageReveal = () => {
  //     console.log("PageReveal event fired!");
  //     // Your page reveal logic here
  //   };

  //   window.addEventListener("pagereveal", handlePageReveal);

  //   return () => {
  //     window.removeEventListener("pagereveal", handlePageReveal);
  //   };
  // }, []);

  return (
    <Link
      href={route}
      className=" cursor-pointer"
      onClick={() => {
        // Move to calendar page
      }}
    >
      <motion.div
        key={"primBtn"}
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: delayAmt > 0 ? delayAmt : 0.25,
          ease: [0.1, 0.1, 0, 1],
        }}
        className="bg-main-gold cursor-pointer w-auto min-w-40 rounded-full font-bold p-4 pl-6 pr-6 text-xl sm:text-2xl text-main-black"
      >
        {text}
      </motion.div>
    </Link>
  );
}

export function SecondaryButton({ delayAmt, text, func }) {
  return (
    <motion.div
      key={"linkButton"}
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: delayAmt > 0 ? delayAmt : 0.35,
        ease: [0.1, 0.1, 0, 1],
      }}
    >
      <button className={"linkBtn"} onClick={func}>
        <div className=" rightArrowBefore"></div>
        <p>{text ? text : "View menu"}</p>
      </button>
    </motion.div>
  );
}
export function MenuOpenButton({ delayAmt, text }) {
  const { openMenu, setOpenMenu } = useContext(NavigationContext);

  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        setOpenMenu(true); // Open nav menu
      }}
    >
      <motion.div
        key={"linkButton"}
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: delayAmt > 0 ? delayAmt : 0.35,
          ease: [0.1, 0.1, 0, 1],
        }}
        className="cursor-pointer w-auto min-w-40 font-bold p-4 pl-6 pr-6 text-xl sm:text-2xl text-main-gold  flex //flex-row-reverse items-center gap-2"
      >
        <AiOutlineArrowRight />
        <p>{text ? text : "View menu"}</p>
      </motion.div>
    </button>
  );
}
