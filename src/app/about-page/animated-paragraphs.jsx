"on client";
import { motion } from "motion/react";
import SpanLinkBasic from "../components/buttons";
export default function AnimatedParagraphs() {
  return (
    <div className="flex flex-col items-start gap-4">
      <motion.p
        initial={{ translateY: 40, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.4,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        This web app was created to be a convenient tool for agents working out
        of the Century 21 Coastal Alliance Tierra Verde office. It was
        originally built to enable easy viewing of the floor time schedule, but
        other small tools are also being added over time.
      </motion.p>
      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.5,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        With regards to development, I built this web app myself from scratch.
        It was written entirely in JavaScript, using the NextJS app router
        framework and ReactJS architecture on the front end to modularize the
        components.
      </motion.p>
      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.6,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        Styles were written with Tailwind, all animations were written using the
        Motion api, and page transitions were implemented using the
        next-view-transitions api in conjunction with global CSS animations.
      </motion.p>
      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.7,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        The{" "}
        <SpanLinkBasic text={"floor time schedule"} url={"/floor-schedule"} />{" "}
        utilizes an embedded html calendar component that is made by “Styled
        Calendar” and uses Google Calendar as a back end to handle the creation
        and editing of time slots.
      </motion.p>
      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.8,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        The vendor list (coming soon) uses Google Sheets as a back end, and
        utilizes a JavaScript api to read the spreadsheet in real time like a
        database and display its contents. It’s always up to date and refreshes
        when you refresh the page.
      </motion.p>
      <motion.p
        initial={{ translateY: 50, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.9,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        The{" "}
        <a
          href={"https://github.com/douglasdavid177/C21CATV-Utilities"}
          target={"_blank"}
          className="text-main-gold"
        >
          source code
        </a>{" "}
        for this project can be viewed online on GitHub.
      </motion.p>
    </div>
  );
}

export function AnimatedHeading() {
  return (
    <div>
      <motion.h1
        className="text-2xl font-bold text-medium-grey mt-5 mb-5"
        initial={{ translateY: 30, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{
          duration: 0.7,
          delay: 0.3,
          ease: [0.1, 0.1, 0, 1],
        }}
      >
        About this App
      </motion.h1>
    </div>
  );
}
