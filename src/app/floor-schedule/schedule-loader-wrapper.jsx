"use client";

import { useState, useEffect, useRef } from "react";
import FloorScheduleCalendar from "./floor-schedule-calendar";
import LoadingIndicator from "./loading-indicator";
import { AnimatePresence, motion } from "motion/react";

export default function ScheduleWithLoaderWrapper() {
  //const iframeRef = useRef(null);
  const [doneLoading, setDoneLoading] = useState(false);
  const [targScale, setTargScale] = useState(0.9);
  const [targOpacity, setTarOpacity] = useState(0);
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
    <div>
      <AnimatePresence
        onExitComplete={() => {
          setTarOpacity(1);
          setTargScale(1);
        }}
      >
        {!doneLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.2 }}
          >
            {<LoadingIndicator />}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{
          scale: 0.9,
          opacity: 0,
        }}
        animate={{
          scale: targScale,
          opacity: targOpacity,
        }}
        transition={{ duration: 0.4, ease: [0.1, 0.1, 0, 1] }}
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
      </motion.div>

      {/* <motion.div
          key={doneLoading}
          initial={{ scale: 0.5 }}
       
        >
          {doneLoading ? <FloorScheduleCalendar /> : <LoadingIndicator />}
        </motion.div> */}
    </div>
    //  </div>
  );
}
