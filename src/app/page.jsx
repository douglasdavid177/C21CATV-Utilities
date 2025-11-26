import { MenuOpenButton, PrimaryButton } from "./components/buttons";
import ResizableHeroImage from "./components/resizable-hero-image";
import FloorSchedulePage from "./floor-schedule/floor-schedule-calendar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col-reverse sm:flex-row justify-between pt-20">
      <ResizableHeroImage />
      {/* <div className="w-[5vw]"></div> */}
      <div className=" flex flex-col items-center justify-center //sm:items-end ml-3 mr-3 sm:ml-auto sm:mr-auto //sm:mr-8 //sm:mr-[max(auto,8rem)] text-center //sm:text-right  ">
        <span className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-14 sm:leading-16 lg:leading-20">
          <h1>Tierra Verde Office</h1>
          <h1>Web Utilities</h1>
        </span>
        <div className="h-4"></div>

        <p className="text-base text-medium-grey">
          A collection of small web-based tools
          <br />
          to make life easier for agents
        </p>
        <div className="h-8 sm:h-16"></div>
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
