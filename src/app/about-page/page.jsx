"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedParagraphs, { AnimatedHeading } from "./animated-paragraphs";
import { MenuOpenButton } from "../components/buttons";
// import { motion } from "motion/dist/react";
export default function Home() {
  const [doneLoading, setDoneLoading] = useState(false);
  useEffect(() => {
    setDoneLoading(true);
  }, []);
  return (
    <div
      // className="pt-16 pl-[7.5%] pr-[7.5%] sm:pl-[20%] sm:pr-[20%] xl:pl-[30%] xl:pr-[30%]"
      className="pt-16 pr-8 pl-8 flex flex-col max-w-[670px] ml-auto mr-auto"
    >
      <div className="w-full flex justify-center items-center">
        <Image
          priority={true}
          src="/undraw_code-inspection-gold-dark.svg"
          width={175}
          height={175}
          alt="Coding Graphic"
          //style={{ objectFit: "contain", height: "auto", width: "100%" }}
          style={
            {
              //viewTransitionName: doneLoading ? "" : "about-image",
            }
          }
        />
      </div>
      {/* <h1 className="text-xl font-bold text-medium-grey mt-5 mb-5">
        About this App
      </h1> */}
      <AnimatedHeading />
      <AnimatedParagraphs />
      {/* <div className="flex flex-col items-center gap-4">
        <p>
          This web app was created to be a convenient tool for agents working
          out of the Century 21 Coastal Alliance Tierra Verde office. It was
          originally built to enable easy viewing of the floor time schedule,
          but other small tools are also being added over time.
        </p>
        <p>
          With regards to development, I built this web app myself from scratch.
          It was written completely in JavaScript, using the NextJS app router
          framework and ReactJS architecture on the front end to modularize the
          components. The calendar component is made by “Styled Calendar” and
          uses Google Calendar as a back end to display the floor time schedule.
          The vendor list uses Google Sheets as a back end database and utilizes
          a JavaScript api to read the spreadsheet in real time and display its
          contents. It’s always up to date and refreshes when you refresh the
          page.
        </p>
      </div> */}
      <div className="ml-auto mr-0 w-max">
        <MenuOpenButton delayAmt={1.1} />
      </div>
      <div className="h-28"></div>
    </div>
  );
}
