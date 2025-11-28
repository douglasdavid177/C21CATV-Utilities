"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
export default function ResizableHeroImage({ herotextRef }) {
  const backGroundRef = useRef(null);
  const personRef = useRef(null);
  const [bgImgHeight, setBgImgHeight] = useState("auto");
  const [onClient, setOnClient] = useState(false);
  useLayoutEffect(() => {
    setOnClient(true);
    window.addEventListener("resize", checkIfMobile);
    // window.addEventListener("orientationChange", checkIfMobile);
    screen.orientation.addEventListener("change", checkIfMobile);
    checkIfMobile();

    return () => {
      window.removeEventListener("resize", checkIfMobile);
      screen.orientation.removeEventListener("change", checkIfMobile);
    };
  }, []);
  useEffect(() => {
    checkIfMobile();
  });

  useEffect(() => {});
  return (
    <div
      ref={backGroundRef}
      className="//self-end mt-auto sm:max-w-[45vw] relative w-full //h-[10000px] //h-max: h-full //flex-grow"
      style={{
        height: bgImgHeight,
      }}
    >
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
      <Image
        ref={personRef}
        className="absolute inset-0 left-[42.5%]"
        src="/undraw-business-call-gold-person-only.svg"
        priority={true}
        width={600}
        height={600}
        alt="City Graphic"
        style={
          onClient
            ? { objectFit: "contain", height: "100%", width: "auto" }
            : ""
        }
      />
    </div>
  );

  function checkIfMobile() {
    if (typeof window == undefined) return;

    setHeight();
  }

  function setHeight() {
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
