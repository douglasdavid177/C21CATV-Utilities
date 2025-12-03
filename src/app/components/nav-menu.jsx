import { AnimatePresence, motion } from "motion/react";
// import { Link } from "next-view-transitions";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";
import { useTransitionRouter } from "next-view-transitions";
import { NavigationContext } from "./navigation-context";

import {
  AiFillCalendar,
  AiFillContacts,
  AiFillHome,
  AiFillQuestionCircle,
} from "react-icons/ai";
import { NavMenuLink } from "./buttons";
import { useContext, useEffect, useRef, useState } from "react";
// import { NavMenuLink } from "./buttons";

export default function NavMenu(props) {
  // const [onClient, setOnClient] = useState(false);
  const { openMenu } = useContext(NavigationContext);

  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (showWarning == true) {
      setShowWarning(false); //This activates warning animation
    }
  }, [showWarning]);
  // const [actuallyOpenMenu, setActuallyOpenMenu] = useState(openMenu);

  const scrollContainer = useRef(null);
  useEffect(() => {
    // setOnClient(true);
    // setActuallyOpenMenu(openMenu);

    if (!scrollContainer.current) {
      return;
    }
    if (openMenu) {
      // activateWarning();
      const cur = scrollContainer.current;
      cur.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [openMenu]);
  return (
    <div
      // className="fixed inset-0 [all:unset]"
      style={
        {
          // viewTransitionName: "nav-menu",
          // pointerEvents: "none",
        }
      }
    >
      {/* <AnimatePresence> */}
      {/* {actuallyOpenMenu && ( */}

      {true && (
        <motion.div
          inert={!openMenu}
          key={"panel"}
          className=" fixed //inset-[20vh] top-0 bottom-0 //top-[50%] //max-h-[75vh] //left-[50%] //p-8 //rounded-2xl //backdrop-blur-sm"
          style={{
            //width: "min(75vw, 45rem)",
            width: "min(75vw, 24rem)",
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
            x: openMenu ? "0%" : "-100%",
          }}
          transition={{
            duration: 1,
            ease: [0.3, 1, 0.4, 1],
            x: {
              duration: openMenu ? 0.5 : 0.5,
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
            ref={scrollContainer}
            className="h-full w-full p-8 //backdrop-blur-sm flex flex-col overflow-y-auto overflow-x-hidden scroll-smooth"
            style={{
              // background: "rgb(18 18 18/0.75)",
              background: "#252526",

              viewTransitionName: "nav-menu-panel-content",
            }}
          >
            Menu
            <hr />
            <div className="flex flex-col items-start mt-8 mb-0 //pb-16 gap-0 relative grow">
              <NavMenuLink text={"Home"} icon={<AiFillHome />} url={"/"} />
              <NavMenuLink
                text={"About"}
                icon={<AiFillQuestionCircle />}
                url={"/about-page"}
              />

              <NavMenuLink
                text={"Floor Schedule"}
                icon={<AiFillCalendar />}
                url={"/floor-schedule"}
              />
              <NavMenuLink
                url={"/"}
                text={"Vendor List"}
                icon={<AiFillContacts />}
                disabled={true}
                warningTrigger={activateWarning}
              />

              <div className="mt-auto h-12 mb-4 w-full right-0 left-0 flex justify-center items-end sticky bottom-[1vh] pointer-events-none">
                <AnimatePresence>
                  {showWarning && (
                    <motion.div
                      className="p-3 text-sm h-min rounded-full bg-red-c21 w-max "
                      initial={{ y: 0, opacity: 0 }}
                      animate={{
                        y: 0,
                        opacity: 0,
                        transition: {
                          duration: 0,
                          delay: 0,
                        },
                      }}
                      exit={{
                        y: -12,
                        opacity: [
                          0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                          1, 1, 1, 1, 1, 1, 0.5, 0,
                        ],
                        // transition: { duration: 1.25, ease: "easeInOut" },
                        transition: {
                          duration: 1.65,
                          ease: "easeInOut",
                          // opacity: { duration: 0.35, delay: 1.15 },
                        },
                      }}
                      // transition={{
                      //   duration: 1.25,
                      //   ease: "easeInOut",
                      //   opacity: { duration: 0.25, delay: 1 },
                      // }}
                    >
                      Coming soon!
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="//h-full //mt-auto grid grid-cols-[1fr_max-content] grid-rows-[max-content_max-content_max-content_max-content] gap-3 items-center justify-end overflow-x-visible mb-4">
              <div className="row-start-1 col-span-2 mb-8">
                Contact Office
                <hr className="" />
              </div>
              <p className="col-start-1 row-start-2">
                150 Pinellas Bayway S, St. Petersburg, FL, 33715{" "}
              </p>
              <Link
                className="text-main-gold col-start-2 row-start-2"
                href={
                  //"https://www.google.com/maps/place/Century+21+Coastal+Alliance/@27.6904439,-82.7230879,17z/data=!3m1!4b1!4m6!3m5!1s0x88c31db2a5e63301:0x735a49c72ee75b8e!8m2!3d27.6904392!4d-82.720513!16s%2Fg%2F11vsbr0ysm!5m1!1e4?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D"
                  // "https://maps.app.goo.gl/CPgsfpEAP4CCRr6d8"
                  // "https://maps.app.goo.gl/vgyFq6swTRiCDeBc6"
                  "https://maps.app.goo.gl/QgRcLbCPFMt9uVeP8"
                }
                target="_blank"
              >
                Map
              </Link>
              <p className="col-start-1 row-start-3">727-867-8633 </p>
              <a
                className="text-main-gold col-start-2 row-start-3"
                href="tel:+1-727-867-8633"
              >
                Call
              </a>
              <p className="row-start-4 col-start-1">
                <span>c21coastalalliancetv</span>
                <br />
                <span>@gmail.com</span>
              </p>

              <a
                href="mailto:c21coastalalliancetv@gmail.com"
                target="_blank"
                className="row-start-4 col-start-2 text-main-gold"
              >
                Email
              </a>
            </div>
          </div>
        </motion.div>
      )}

      {/* )} */}
      {/* </AnimatePresence> */}
    </div>
  );
  function activateWarning() {
    //set showWarning to true
    setShowWarning(true);
  }
}
export function NavMenuBG() {
  const { openMenu, setOpenMenu } = useContext(NavigationContext);
  // const [actuallyOpenMenu, setActuallyOpenMenu] = useState(false);
  // useEffect(() => {
  //   setActuallyOpenMenu(openMenu);
  // }, [openMenu]);

  return (
    // <AnimatePresence>
    <div>
      {/* {actuallyOpenMenu && ( */}
      <motion.div
        inert={!openMenu}
        key={"bg"}
        className="fixed inset-0"
        style={{
          background: "rgb(0 0 0/0.5)",
          pointerEvents: !openMenu ? "none" : "auto",
          viewTransitionName: "nav-menu-bg",
        }}
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: openMenu ? 1 : 0, scale: 1.01 }}
        exit={{ opacity: 0, scale: 1 }}
        transition={{ duration: 1, opacity: { duration: 0.35 } }}
        onClick={() => {
          if (!openMenu) return;
          setOpenMenu(false);
        }}
      ></motion.div>
      {/* )} */}
    </div>
    // </AnimatePresence>
  );
}
