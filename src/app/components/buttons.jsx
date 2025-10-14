"use client";
import { motion } from "motion/react";
import { useContext } from "react";
import { NavigationContext } from "./navigation-context";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export function PrimaryButton({ text, func }) {
  return (
    <motion.div
      key={"primBtn"}
      initial={{ translateY: 40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.25,
        ease: [0.1, 0.1, 0, 1],
      }}
      className="bg-main-gold cursor-pointer w-auto min-w-40 rounded-full font-bold p-4 pl-6 pr-6 text-xl sm:text-2xl text-main-black"
    >
      <button
        className=" cursor-pointer"
        onClick={() => {
          // Move to calendar page
        }}
      >
        {text}
      </button>
    </motion.div>
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
    <motion.div
      key={"linkButton"}
      initial={{ translateY: 50, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: delayAmt > 0 ? delayAmt : 0.35,
        ease: [0.1, 0.1, 0, 1],
      }}
      className="cursor-pointer w-auto min-w-40 font-bold p-4 pl-6 pr-6 text-xl sm:text-2xl text-main-gold"
    >
      <button
        className="cursor-pointer flex //flex-row-reverse items-center gap-2"
        onClick={() => {
          setOpenMenu(true); // Open nav menu
        }}
      >
        <AiOutlineArrowRight />
        <p>{text ? text : "View menu"}</p>
      </button>
    </motion.div>
  );
}
