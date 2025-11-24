"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import NavPanel from "./nav-panel";
import { useContext, useState } from "react";
import { NavigationContext } from "./navigation-context";
import NavMenu from "./nav-menu";
import { motion } from "motion/react";
import { HomeLinkWrapper } from "./buttons";
// import { PrimaryButton } from "./buttons";

export default function HeaderBar() {
  const { openMenu, setOpenMenu } = useContext(NavigationContext);
  return (
    <div
      style={
        {
          // viewTransitionName: "nav",
        }
      }
    >
      <div
        className="fixed top-0 w-full ml-auto mr-auto h-16 pt-4 backdrop-blur-sm"
        style={{
          background: "rgb(18 18 18/0.75)",
          //backdropFilter: "blur(0.7rem)",
          //viewTransitionName: "nav-header-bg",
        }}
      ></div>
      <NavMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />

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

        <div className="pl-4 pr-4 flex flex-row-reverse gap-8 items-center">
          {!openMenu && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 0.1 }}
            >
              <button
                className="cursor-pointer z-200"
                onClick={(e) => {
                  e.stopPropagation(); // This prevents the button click from also activating the button click of the header bg
                  setOpenMenu(!openMenu);
                }}
              >
                <AiOutlineMenu />
              </button>
            </motion.div>
          )}

          {/* <h2 className="text-[#727273] text-xl sm:text-3xl">
            Floor Time Schedule
          </h2> */}
        </div>
        <div className="pr-4 pl-4 //sm:pr-20">
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
    </div>
  );
}
