"use client";

import Image from "next/image";
import { useLayoutEffect, useState } from "react";
export default function ResizableHeroImage() {
  const [onClient, setOnClient] = useState(false);
  useLayoutEffect(() => {
    setOnClient(true);
  }, []);
  return (
    <div className="self-end sm:max-w-[45vw]">
      <Image
        src="/undraw-business-call-colored-gold.svg"
        width={600}
        height={600}
        alt="City Graphic"
        style={
          onClient
            ? { objectFit: "contain", height: "auto", width: "100%" }
            : ""
        }
      />
    </div>
  );

  // function resize() {}
}
