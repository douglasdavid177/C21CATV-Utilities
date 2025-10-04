import FloorSchedulePage from "./floor-schedule-page";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="fixed bottom-4 min-h-[55vh]">
        <Image
          src="/undraw_business-call_w1gr.svg"
          width={600}
          height={600}
          alt="City Graphic"
          style={{ objectFit: "contain", height: "600px", width: "600px" }}
        />
      </div>
    </div>
  );
}
