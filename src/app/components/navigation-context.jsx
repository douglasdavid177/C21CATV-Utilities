"use client";
import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderBar from "./header-nav-bar";
//import { useRouter } from "next/router";
import { useTransitionRouter } from "next-view-transitions";
export const NavigationContext = createContext(null);
export default function NavContext({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showContent, setShowContent] = useState(true);

  const pathname = usePathname();
  const router = useTransitionRouter();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }
  }, [openMenu]);

  useEffect(() => {
    // This code will run whenever the pathname changes
    //console.log("Route changed to:", pathname);
    setOpenMenu(false);
    document.documentElement.scrollTo({ top: 0, behavior: "instant" });

    // Perform actions based on the new route
  }, [pathname]); // Depend on pathname to trigger the effect on change

  // useEffect(() => {
  //   // This code will run whenever the pathname changes
  //   console.log("Route changed to:", router.route);
  //   setOpenMenu(false);
  //   // Perform actions based on the new route
  // }, [router]); // Depend on pathname to trigger the effect on change

  // useEffect(() => {
  //   // Check for browser support
  //   if (!document.startViewTransition) {
  //     //const timer = setTimeout(setShowContent(true), 0); // For some reason this prevents hydration issues
  //     setShowContent(true);
  //     //console.log("showing");

  //     return;
  //   }

  //   // Trigger the view transition
  //   document.startViewTransition(() => {
  //     setShowContent(true);
  //     //console.log("showing");
  //   });
  // }, []);

  // if (!showContent) {
  //   // A loading or empty state for the "before" snapshot
  //   return <div></div>;
  // }
  return (
    <NavigationContext.Provider value={{ openMenu, setOpenMenu }}>
      <div
        className="fixed inset-0 overflow-y-auto h-full"
        style={{ scrollbarGutter: "stable", scrollBehavior: "smooth" }}
      >
        {showContent && [children]}
      </div>
      <HeaderBar />
    </NavigationContext.Provider>
  );
}
