import { MenuOpenButton, PrimaryButton } from "./components/buttons";
import ResizableHeroImage from "./components/resizable-hero-image";
import FloorSchedulePage from "./floor-schedule/floor-schedule-calendar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col-reverse sm:flex-row justify-between pt-20">
      <ResizableHeroImage />
      {/* <div className="w-[5vw]"></div> */}
      <div className="text-4xl sm:text-5xl lg:text-6xl flex flex-col items-center justify-center //sm:items-end ml-auto mr-auto //sm:mr-8 //sm:mr-[max(auto,8rem)] text-center //sm:text-right font-bold leading-14 lg:leading-20">
        <h1>Tierra Verde Office</h1>
        <h1>Web Utilities</h1>
        <div className="h-4 sm:h-[20vh]"></div>
        <PrimaryButton
          text={"Floor schedule"}
          route="/floor-schedule"
          delayAmt={0.5}
        />
        <div className="h-2 sm:h-4"></div>

        <MenuOpenButton delayAmt={0.6} />
        <div className="h-0 sm:h-20"></div>
      </div>
    </div>
  );
}
