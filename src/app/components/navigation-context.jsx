"use client";
import {
  createContext,
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { ViewTransitions } from "next-view-transitions";

import { usePathname } from "next/navigation";
import HeaderBar from "./header-nav-bar";
//import { useRouter } from "next/router";
import { useTransitionRouter } from "next-view-transitions";
export const NavigationContext = createContext(null);
export default function NavContext({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const pathname = usePathname();
  const router = useTransitionRouter();
  const scrollContainer = useRef(null);

  useLayoutEffect(() => {
    const cur = scrollContainer.current;
    if (!cur) return;
    if (openMenu) {
      // document.body.style.overflowY = "hidden";
      pauseScroll();
    } else {
      // document.body.style.overflowY = "";
      resumeScroll();
    }
  }, [openMenu]);

  useLayoutEffect(() => {
    // This code will run whenever the pathname changes
    //console.log("Route changed to:", pathname);
    // setTimeout(() => {
    pauseScroll();
    resumeScroll();
    scrollToTopInstant();
    // }, 10);

    // window.scrollTo({
    //   top: 0,
    //   left: 0,
    //   behavior: "instant",
    // });
    setOpenMenu(false);
    // document.documentElement.scrollTo({ top: 0, behavior: "instant" });

    // Perform actions based on the new route
  }, [pathname]); // Depend on pathname to trigger the effect on change

  useEffect(() => {
    // setTimeout(() => {
    pauseScroll();
    resumeScroll();
    scrollToTopInstant();
    // }, 10);
  }, [pathname]);

  // useEffect(() => {
  //   // This code will run whenever the pathname changes
  //   console.log("Route changed to:", router.route);
  //   setOpenMenu(false);
  //   // Perform actions based on the new route
  // }, [router]); // Depend on pathname to trigger the effect on change

  useLayoutEffect(() => {
    // Check for browser support
    if (!document.startViewTransition) {
      //const timer = setTimeout(setShowContent(true), 0); // For some reason this prevents hydration issues
      setShowContent(true);
      //console.log("showing");

      return;
    }

    // Trigger the view transition
    document.startViewTransition(() => {
      setShowContent(true);
      //console.log("showing");
    });
  }, []);

  // if (!showContent) {
  //   // A loading or empty state for the "before" snapshot
  //   return <div></div>;
  // }
  // useEffect(() => {
  //   const cur = scrollContainer.current;
  //   cur.scrollTo({ top: 0, behavior: "instant" });
  // });
  return (
    <NavigationContext.Provider
      value={{ openMenu, setOpenMenu, scrollToTopInstant }}
    >
      <div
        className="fixed inset-0 overflow-y-auto h-full"
        ref={scrollContainer}
        style={{ scrollbarGutter: "stable", scrollBehavior: "smooth" }}
      >
        <ViewTransitions>{showContent && [children]}</ViewTransitions>
      </div>
      <HeaderBar />
    </NavigationContext.Provider>
  );

  function scrollToTopInstant(smooth = false) {
    console.log("scrolled to top");
    const container = scrollContainer.current;
    if (!container) {
      console.log("problem scrolling content to top");
      return;
    }
    container.scrollTo({ top: 0, behavior: smooth ? "smooth" : "instant" });
  }
  function pauseScroll() {
    const cur = scrollContainer.current;

    if (!cur) return;
    cur.overflowY = "hidden";
    cur.scrollTo({ top: cur.scrollTop, behavior: "instant" });
  }
  function resumeScroll() {
    const cur = scrollContainer.current;
    if (!cur) return;
    cur.overflowY = "";
  }
}
