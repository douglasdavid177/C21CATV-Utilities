"use client";

import { useLayoutEffect, useEffect } from "react";

export default function ScrollRestorationDisabler() {
  useLayoutEffect(() => {
    // Set scroll restoration to manual to prevent the browser/Next.js from managing scroll position automatically
    history.scrollRestoration = "manual";

    return () => {
      // Optionally, reset to 'auto' when the component unmounts if needed elsewhere
      //history.scrollRestoration = 'auto';
    };
  }, []);

  return null; // This component doesn't render anything
}
