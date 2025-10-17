"use client";
import { createContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import HeaderBar from "./header-nav-bar";
export const NavigationContext = createContext(null);
export default function NavContext({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    // This code will run whenever the pathname changes
    console.log("Route changed to:", pathname);
    setOpenMenu(false);
    // Perform actions based on the new route
  }, [pathname]); // Depend on pathname to trigger the effect on change

  useEffect(() => {
    // Check for browser support
    if (!document.startViewTransition) {
      const timer = setTimeout(setShowContent(true), 20); // For some reason this prevents hydration issues
      //setShowContent(true);
      return;
    }

    // Trigger the view transition
    document.startViewTransition(() => {
      setShowContent(true);
    });
  }, []);

  // if (!showContent) {
  //   // A loading or empty state for the "before" snapshot
  //   return <div></div>;
  // }
  return (
    <NavigationContext.Provider value={{ openMenu, setOpenMenu }}>
      {showContent && [children]}
      <HeaderBar />
      {/* {children} */}
    </NavigationContext.Provider>
  );
}
