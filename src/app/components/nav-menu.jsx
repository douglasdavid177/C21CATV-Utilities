import { AnimatePresence, motion } from "motion/react";
// import { Link } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { useTransitionRouter } from "next-view-transitions";
import {
  AiFillCalendar,
  AiFillHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { NavMenuLink } from "./buttons";
// import { NavMenuLink } from "./buttons";

export default function NavMenu(props) {
  let path = usePathname();
  let router = useTransitionRouter();
  return (
    <div
      style={
        {
          // viewTransitionName: "nav-menu",
        }
      }
    >
      <AnimatePresence>
        {props.openMenu && (
          <motion.div
            key={"bg"}
            className="fixed inset-0"
            style={{
              background: "rgb(0 0 0/0.5)",
              viewTransitionName: "nav-menu-bg",
            }}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.01 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 1.35, opacity: { duration: 0.35 } }}
            onClick={() => {
              if (!props.openMenu) return;
              props.setOpenMenu(false);
            }}
          ></motion.div>
        )}
      </AnimatePresence>

      {
        <motion.div
          key={"panel"}
          className=" fixed //inset-[20vh] top-0 bottom-0 //top-[50%] //max-h-[75vh] //left-[50%] //p-8 //rounded-2xl backdrop-blur-sm"
          style={{
            //width: "min(75vw, 45rem)",
            width: "min(75vw, 25rem)",
            // backdropFilter: "blur(0.7rem)",
            // background: "rgb(18 18 18/0.75)",
            //translate: "-50% -50%",
            // viewTransitionName: "nav-menu-panel",
            z: 10,
          }}
          // initial={{ scale: "150%", y: "20%", opacity: 0 }}
          // animate={{ scale: "100%", y: "0%", opacity: 1 }}
          // exit={{ scale: "120%", y: "10%", opacity: 0 }}

          initial={{ x: "-100%", opacity: 0.99 }}
          // animate={{ x: "0%", opacity: 1 }}
          // exit={{ x: "-100%", opacity: 0.99 }}
          animate={{
            x: props.openMenu ? "0%" : "-100%",
          }}
          transition={{
            duration: 1.5,
            ease: [0.3, 1, 0.4, 1],
            x: {
              duration: props.openMenu ? 0.5 : 0.75,
              ease: [0.3, 1, 0.4, 1],
            },
          }}
          onClick={(e) => {
            // Without this, clicking anywhere inside the nav panel would also register on the overlay behind it,
            // therefore closing the nav panel prematurely
            e.stopPropagation();
          }}
        >
          {/* <div className="absolute inset-0 backdrop-blur-sm -z-10"></div> */}
          <div
            className="h-full w-full p-8 //backdrop-blur-sm"
            style={{
              background: "rgb(18 18 18/0.75)",

              viewTransitionName: "nav-menu-panel-content",
            }}
          >
            Menu
            <hr />
            <div className="flex flex-col items-start mt-16 gap-8">
              <NavMenuLink text={"Home"} icon={<AiFillHome />} url={"/"} />
              <NavMenuLink
                text={"About"}
                icon={<AiFillQuestionCircle />}
                url={"/"}
              />
              <NavMenuLink
                text={"Floor Schedule"}
                icon={<AiFillCalendar />}
                url={"/floor-schedule"}
              />
            </div>
          </div>
        </motion.div>
      }
    </div>
  );
}
