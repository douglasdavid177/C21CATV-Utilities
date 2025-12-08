"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import NavPanel from "./nav-panel";
import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "./navigation-context";
import NavMenu, { NavMenuBG } from "./nav-menu";
import { AnimatePresence, motion } from "motion/react";
import { HeaderLink, HomeLinkWrapper } from "./buttons";
// import { PrimaryButton } from "./buttons";

export default function HeaderBar() {
  const [onClient, setOnClient] = useState(false);
  const { openMenu, setOpenMenu } = useContext(NavigationContext);
  useEffect(() => {
    setOnClient(true);
  }, []);
  return (
    <div
      style={
        {
          // viewTransitionName: "nav",
        }
      }
    >
      {/* <NavMenuBG /> */}
      <NavMenuBG />

      <div
        style={
          {
            // viewTransitionName: "nav-header-bg",
          }
        }
      >
        <motion.div
          animate={{
            background: openMenu ? "#252526" : "rgb(18 18 18/0.75)",
          }}
          className="fixed top-0 w-full ml-auto mr-auto h-16 pt-4 backdrop-blur-sm"
          style={{
            // background: "rgb(18 18 18/0.75)",
            // backdropFilter: "blur(0.7rem)",
            viewTransitionName: "nav-header-bg-motion",
          }}
        ></motion.div>
      </div>

      <div
        className="fixed top-0 w-full ml-auto mr-auto h-16 //pt-4 flex //flex-row-reverse items-center justify-between //bg-red-500 text-4xl"
        // style={{
        //   background: "rgb(18 18 18/0.75)",
        //   backdropFilter: "blur(0.7rem)",
        // }}
        onClick={() => setOpenMenu(false)}
        style={{ viewTransitionName: "nav-header-content" }}
      >
        {/* {true && (
          <div
            className=" absolute inset-0 "
            style={{
              background: "rgb(0 0 0/0.35)",
            }}
          ></div>
        )} */}

        {/* <PrimaryButton
          text={"Floor schedule"}
          route="/floor-schedule"
          delayAmt={0.5}
        /> */}

        <AnimatePresence>
          {!openMenu && (
            <motion.div
              className="pl-4 pr-4 flex gap-8 items-center h-9"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.25, delay: 0.15 },
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, delay: 0 }}
            >
              <div className="flex items-center">
                <button
                  className="cursor-pointer z-200"
                  onClick={(e) => {
                    e.stopPropagation(); // This prevents the button click from also activating the button click of the header bg
                    setOpenMenu(!openMenu);
                  }}
                >
                  <AiOutlineMenu />
                </button>
              </div>

              <div className="max-sm:hidden flex gap-8 //text-base //text-medium-grey h-full">
                <HeaderLink url={"/"}>Home</HeaderLink>
                <HeaderLink url={"/about-page"}>About</HeaderLink>
                <HeaderLink url={"/floor-schedule"}>Floor Schedule</HeaderLink>
                {/* <h1>Home</h1>
            <h1>About</h1>
            <h1>Floor Schedule</h1> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pr-4 pl-4 //sm:pr-20 relative z-5 ml-auto">
          <HomeLinkWrapper>
            <Image
              src="/C21CA-logo.svg"
              width={"150"}
              height={40}
              alt="C21 Coastal Alliance Logo "
              style={{ objectFit: "contain", display: "block", height: "45px" }}
            />
          </HomeLinkWrapper>
        </div>
      </div>
      {/* <NavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} /> */}

      <NavMenu openMenu={openMenu} />
    </div>
  );
}
