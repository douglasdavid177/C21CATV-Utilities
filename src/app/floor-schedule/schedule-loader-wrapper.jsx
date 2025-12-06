"use client";

import { useState, useEffect, useRef, useContext } from "react";
import FloorScheduleCalendar from "./floor-schedule-calendar";
import LoadingIndicator from "./loading-indicator";
import { AnimatePresence, motion } from "motion/react";
import NavContext, {
  NavigationContext,
} from "../components/navigation-context";
import { MenuOpenButton } from "../components/buttons";

export default function ScheduleWithLoaderWrapper() {
  //const iframeRef = useRef(null);
  const [doneLoading, setDoneLoading] = useState(false);
  const [displayingCalendar, setDisplayingCalendar] = useState(false);
  const [targScale, setTargScale] = useState(0.9);
  const [targY, setTargY] = useState(60);
  const [targOpacity, setTarOpacity] = useState(0);
  const [portrait, setPortrait] = useState(false);
  const { scrollToTopInstant } = useContext(NavigationContext);
  useEffect(() => {
    window.addEventListener("resize", checkPortrait);
    screen.orientation.addEventListener("change", checkPortrait);
    checkPortrait();
    return () => {
      window.removeEventListener("resize", checkPortrait);
      screen.orientation.removeEventListener("change", checkPortrait);
    };
  });
  function checkPortrait() {
    let result = false;
    if (window.innerWidth < 608) result = true;
    setPortrait(result);
  }
  // const [onClient, setOnClient] = useState(false);
  // useEffect(() => {
  //   setOnClient(true);
  // }, []);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     // This timeout exists because it's impossible to tell when iframe has finished rendering
  //     // and experience shows this to be a safe amount of time
  //     setTarOpacity(1);
  //     setTargScale(1);
  //   }, 1750);

  //   // Cleanup function: Clear the timeout if the component unmounts before the delay
  //   return () => clearTimeout(timer);
  // }, [setDoneLoading]);

  return (
    // <div onClick={() => setDoneLoading(true)}>
    // Subtract 64px because that is height of Nav Bar
    <div className="flex flex-col max-xsc:max-h-[calc(100dvh-64px)]">
      <AnimatePresence
        onExitComplete={() => {
          setTarOpacity(1);
          setTargScale(1);
          setTargY(0);
          scrollToTopInstant();
          setDisplayingCalendar(true);
        }}
      >
        {!doneLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.25, duration: 0.3 }}
          >
            {<LoadingIndicator />}
          </motion.div>
        )}
      </AnimatePresence>
      {displayingCalendar && portrait && (
        <div className="pl-4 pr-4 flex justify-center text-center xsc:hidden pb-2">
          <motion.p
            key={portrait}
            initial={{ opacity: 0, color: "var(--color-medium-grey)" }}
            animate={{
              opacity: 1,
              color: [
                "var(--color-medium-grey)",
                "var(--color-main-gold)",
                "var(--color-medium-grey)",
                "var(--color-medium-grey)",
                "var(--color-main-gold)",
                "var(--color-medium-grey)",
              ],
            }}
            transition={{
              opacity: { duration: 0.35, delay: 0 },
              duration: 3.75,
              delay: 1.25,
            }}
          >
            Rotate your device to landscape mode to view traditional month view
          </motion.p>
        </div>
      )}

      <motion.div
        className="//max-xsc:max-h-[40vh] grow max-xsc:overflow-y-auto relative xsc:flex xsc:flex-col //xsc:min-h-[calc(100dvh-64px)]"
        initial={{
          // scale: 0.9,
          y: 60,
          opacity: 0,
        }}
        animate={{
          // scale: targScale,
          y: targY,
          opacity: targOpacity,
        }}
        transition={{ duration: 0.5, delay: 0.15, ease: [0.1, 0.1, 0.1, 1] }}
      >
        <FloorScheduleCalendar setDoneLoading={setDoneLoading} />
        {/* 
        {onClient && (
          <div className="grow pl-4 pr-4 pb-4">
            <iframe
              src="https://embed.styledcalendar.com/#5yuNF3LX1f4W61kZRXMZ"
              title="Styled Calendar"
              className="styled-calendar-container"
              style={{ width: "100%", border: "none" }}
              data-cy="calendar-embed-iframe"
              //loading="lazy"
              onLoad={() => setDoneLoading(true)}
            ></iframe>
            <script
              async
              type="module"
              src="https://embed.styledcalendar.com/assets/parent-window.js"
            ></script>
          </div>
        )} */}
        {displayingCalendar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="xsc:h-0 sticky bottom-0 translate-y-0.5 left-0 ml-4 mr-4 right-0 h-16 bg-gradient-to-t from-main-black/90 to-transparent pointer-events-none"
          ></motion.div>
        )}
      </motion.div>

      {/* <motion.div
          key={doneLoading}
          initial={{ scale: 0.5 }}
       
        >
          {doneLoading ? <FloorScheduleCalendar /> : <LoadingIndicator />}
        </motion.div> */}

      {displayingCalendar && (
        <div className="pt-0 pr-8 pl-8 flex flex-col max-w-[670px] ml-auto mr-auto">
          <motion.h1
            className="text-2xl font-bold text-medium-grey mt-5 mb-5"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7, ease: [0.1, 0.1, 0, 1] }}
          >
            More Info
          </motion.h1>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.1, 0.1, 0, 1] }}
          >
            This calendar is for viewing purposes only.
          </motion.p>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.1, 0.1, 0, 1] }}
          >
            Please contact Rhonda directly for schedule requests, edits or
            inquiries. Contact information for the front desk (Rhonda) is
            available in the navigation menu.
          </motion.p>

          <div className="ml-auto">
            <MenuOpenButton delayAmt={0.45} />
          </div>
          <div className="h-28"></div>
        </div>
      )}
    </div>
  );
}
