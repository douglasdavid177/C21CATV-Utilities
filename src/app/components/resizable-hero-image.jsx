"use client";

import Image from "next/image";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { NavigationContext } from "./navigation-context";
import { motion } from "motion/react";

export default function ResizableHeroImage() {
  const backGroundRef = useRef(null);
  const personRef = useRef(null);
  const [bgImgHeight, setBgImgHeight] = useState("auto");
  const { scrollToTopInstant } = useContext(NavigationContext);

  const [onClient, setOnClient] = useState(false);
  useLayoutEffect(() => {
    setOnClient(true);
    window.addEventListener("resize", checkIfMobile);
    screen.orientation.addEventListener("change", checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      screen.orientation.removeEventListener("change", checkIfMobile);
    };
  }, []);
  useLayoutEffect(() => {
    checkIfMobile();
  }, []);

  useEffect(() => {});
  return (
    <div
      ref={backGroundRef}
      className="//self-end mt-auto sm:w-[45vw] relative w-full //h-[10000px] //h-max: h-full //flex-grow"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.4,
          ease: [0.1, 0.1, 0.1, 1],
          opacity: { duration: 0.2, delay: 0.5 },
        }}
        style={{
          height: bgImgHeight,
        }}
      >
        <div>
          <Image
            // className="absolute inset-0"
            src="/undraw-business-call-city-only.svg"
            priority={true}
            // width={384}
            // height={384}
            fill
            alt="City Graphic"
            style={{ objectFit: "fill" }}
            // style={
            //   false ? { objectFit: "contain", height: "auto", width: "100%" } : ""
            // }
          />
        </div>

        <motion.div
          initial={{ y: 150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.4,
            ease: [0.1, 0.1, 0.1, 1],
            // opacity: { delay: 0.2 },
          }}
          className="absolute inset-0 left-[47%] mt-auto flex items-end"
        >
          <Image
            // className="mt-auto"
            ref={personRef}
            src="/undraw-business-call-gold-person-only.svg"
            priority={true}
            width={600}
            height={600}
            alt="City Graphic"
            style={
              onClient
                ? {
                    objectFit: "contain",
                    width: "auto",
                    height: bgImgHeight * 0.8,
                  }
                : ""
            }
          />
        </motion.div>
      </motion.div>
    </div>
  );

  function checkIfMobile() {
    if (typeof window == undefined) return;

    setHeight();
  }

  function setHeight() {
    scrollToTopInstant();
    if (typeof window == undefined || !backGroundRef.current) return;
    const isMobile = window.innerWidth <= 640;
    const bgRect = backGroundRef.current.getBoundingClientRect();
    const currentHeight = bgRect.height;
    const newHeight = bgRect.width * 1.03;
    console.log("new height " + newHeight);
    console.log("wind width: " + window.innerWidth);
    const computedMarginTop = parseInt(
      window.getComputedStyle(backGroundRef.current).marginTop
    );
    console.log("margin: " + computedMarginTop);
    if (isMobile) {
      const canvasHeight =
        window.innerHeight - (bgRect.top - computedMarginTop - window.scrollY);
      console.log("canvas h: " + canvasHeight);
      console.log("scroll y: " + window.scrollY);

      if (canvasHeight < newHeight) {
        setBgImgHeight(canvasHeight);
        return;
      }
    }
    setBgImgHeight(newHeight);

    // if (isMobile && currentHeight > newHeight) {
    //   console.log("gotcha");
    //   setBgImgHeight(newHeight);
    // } else if (!isMobile && currentHeight < newHeight) {
    //   setBgImgHeight(newHeight);
    // } else {
    //   setBgImgHeight("auto");
    // }
  }

  function resizeForMobile() {}
}
