import Image from "next/image";
export default function Home() {
  return (
    <div className="pt-16 pl-[7.5%] pr-[7.5%] sm:pl-[20%] sm:pr-[20%] xl:pl-[30%] xl:pr-[30%]">
      <div className="w-full flex justify-center items-center">
        <Image
          src="/undraw_code-inspection-gold-dark.svg"
          width={175}
          height={175}
          alt="Coding Graphic"
          //style={{ objectFit: "contain", height: "auto", width: "100%" }}
          style={{ viewTransitionName: "about-image" }}
        />
      </div>
      <h1 className="text-xl font-bold text-medium-grey mt-5 mb-5">
        About this App
      </h1>
      <div className="flex flex-col items-center gap-4">
        <p>
          This web app was created to be a convenient tool for agents working
          out of the Century 21 Coastal Alliance Tierra Verde office. It was
          originally built to enable easy viewing of the floor time schedule,
          but other small tools are also being added over time.
        </p>
        <p>
          With regards to development, I built this web app myself from scratch.
          It was written completely in JavaScript, using the NextJS app router
          framework and ReactJS architecture on the front end to modularize the
          components. The calendar component is made by “styled calendar” and
          uses Google Calendar as a backend to display the floor time schedule.
          The vendor list uses Google Sheets as a backend database and utilizes
          a JavaScript api to read the spreadsheet in real time and display its
          contents. It’s always up to date and refreshes when you refresh the
          page.
        </p>
      </div>
    </div>
  );
}
