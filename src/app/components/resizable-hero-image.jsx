"use client";
import Image from "next/image";
export default function ResizableHeroImage() {
  return (
    <div className="self-end sm:max-w-[45vw]">
      <Image
        src="/undraw-business-call-colored-gold.svg"
        width={600}
        height={600}
        alt="City Graphic"
        style={{ objectFit: "contain", height: "auto", width: "100%" }}
      />
    </div>
  );

  function resize() {}
}
