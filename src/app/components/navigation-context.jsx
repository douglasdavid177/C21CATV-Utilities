"use client";
import { createContext, useState } from "react";

export const NavigationContext = createContext(null);
export default function NavContext({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <NavigationContext.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </NavigationContext.Provider>
  );
}
