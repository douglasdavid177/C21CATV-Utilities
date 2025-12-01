"use client";
import { motion } from "motion/react";
import { useContext, useState, useEffect } from "react";
//import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import Link from "next/link";
//import { ViewTransitions } from "next-view-transitions";

import { NavigationContext } from "./navigation-context";
import {
  AiOutlineArrowRight,
  AiOutlineArrowLeft,
  AiFillLeftCircle,
} from "react-icons/ai";
import { usePathname } from "next/navigation";

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

  const tRouter = useTransitionRouter();

  return (
    <Link
      href={route}
      className=" cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        tRouter.push(route);
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
        className="cursor-pointer w-auto min-w-40 font-bold p-4 pl-6 pr-6 text-xl //sm:text-2xl text-main-gold  flex //flex-row-reverse items-center gap-2"
      >
        <AiOutlineArrowRight />
        <p>{text ? text : "View menu"}</p>
      </motion.div>
    </button>
  );
}

export default function SpanLinkBasic({ text, url }) {
  const tRouter = useTransitionRouter();

  return (
    <span className="text-main-gold">
      <Link
        href={url}
        onClick={(e) => {
          e.preventDefault();

          tRouter.push(url);
        }}
      >
        {text}
      </Link>
    </span>
  );
}

export function NavMenuLink({
  text,
  icon,
  url,
  disabled = false,
  warningTrigger,
}) {
  const path = usePathname();
  const tRouter = useTransitionRouter();
  const { setOpenMenu } = useContext(NavigationContext);
  const [beingHovered, setBeingHovered] = useState(false);
  const [onClient, setOnClient] = useState(false);
  useEffect(() => {
    setOnClient(true);
  }, []);

  return (
    <Link
      onMouseEnter={() => {
        setBeingHovered(true);
      }}
      onMouseLeave={() => {
        setBeingHovered(false);
      }}
      href={url}
      className="text-xl font-bold flex items-center gap-4 w-full h-16"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (disabled) {
          warningTrigger();
          return;
        }

        if (path == url) {
          console.log("nope");

          setOpenMenu(false);
        } else {
          tRouter.push(url);
        }
      }}
      style={{ cursor: onClient && disabled ? "default" : "" }}
    >
      {icon ? (
        <div style={{ color: disabled ? "var(--color-medium-grey)" : "" }}>
          {icon}
        </div>
      ) : (
        <div className="bg-medium-grey h-4 w-4 rounded-full"></div>
      )}
      <motion.span
        style={{
          color: disabled
            ? "var(--color-medium-grey)"
            : url == path
            ? "var(--color-main-gold)"
            : "",
          // background: disabled ? "red" : "",
        }}
        // animate={{
        //   scale: beingHovered && url != path ? 1.075 : 1,
        //   x: beingHovered && url != path ? "3.5%" : "0%",
        // }}
      >
        {text}
      </motion.span>
      {url != path && !disabled && (
        <motion.span
          className="text-main-gold"
          initial={{ opacity: 0 }}
          animate={{
            opacity: beingHovered ? 1 : 0,
            x: beingHovered ? "0%" : "-50%",
          }}
          transition={{
            ease: [0.1, 0.1, 0, 1],
            duration: 0.15,
          }}
        >
          <AiOutlineArrowRight />
        </motion.span>
      )}
      {url == path && !disabled && (
        <span className="text-main-gold">
          {/* <AiFillLeftCircle /> */}
          <div className=" rounded-full bg-main-gold w-2 h-2"></div>
        </span>
      )}
    </Link>
  );
}

export function HomeLinkWrapper({ children }) {
  const tRouter = useTransitionRouter();
  const path = usePathname();
  const { openMenu, setOpenMenu } = useContext(NavigationContext);

  return (
    <Link
      href={"/"}
      style={
        {
          // cursor: path == "/" ? "auto" : "pointer",
        }
      }
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();

        if (path == "/") {
          setOpenMenu(false);
        } else {
          tRouter.push("/");
        }
      }}
    >
      {children}
    </Link>
  );
}
