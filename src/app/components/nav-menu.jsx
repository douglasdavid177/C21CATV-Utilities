import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import {
  AiFillCalendar,
  AiFillHome,
  AiFillQuestionCircle,
} from "react-icons/ai";

export default function NavMenu(props) {
  return (
    <div>
      <AnimatePresence>
        {props.openMenu && (
          <motion.div
            key={"bg"}
            className="fixed inset-0"
            style={{
              background: "rgb(0 0 0/0.5)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => {
              if (!props.openMenu) return;
              props.setOpenMenu(false);
            }}
          ></motion.div>
        )}
        {props.openMenu && (
          <motion.div
            key={"panel"}
            className=" fixed //inset-[20vh] top-0 bottom-0 //top-[50%] //max-h-[75vh] //left-[50%] p-8 //rounded-2xl"
            style={{
              //width: "min(75vw, 45rem)",
              width: "min(75vw, 25rem)",
              backdropFilter: "blur(0.7rem)",
              background: "rgb(18 18 18/0.75)",
              //translate: "-50% -50%",
              viewTransitionName: "nav-header-content",
            }}
            // initial={{ scale: "150%", y: "20%", opacity: 0 }}
            // animate={{ scale: "100%", y: "0%", opacity: 1 }}
            // exit={{ scale: "120%", y: "10%", opacity: 0 }}

            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: [0.3, 1, 0.4, 1] }}
            onClick={(e) => {
              // Without this, clicking anywhere inside the nav panel would also register on the overlay behind it,
              // therefore closing the nav panel prematurely
              e.stopPropagation();
            }}
          >
            Menu
            <hr />
            <div className="flex flex-col items-start mt-16 gap-8">
              <Link
                href="/"
                className="text-xl font-bold flex items-center gap-4"
                //onClick={() => setOpenMenu(false)}
              >
                <AiFillHome />
                Home
              </Link>
              <Link
                href="/"
                className="text-xl font-bold flex items-center gap-4"
              >
                <AiFillQuestionCircle />
                About App
              </Link>
              <Link
                href="/floor-schedule"
                className="text-xl font-bold flex items-center gap-4"
              >
                <AiFillCalendar />
                Floor Schedule
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
