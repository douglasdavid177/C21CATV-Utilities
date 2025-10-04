import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function HeaderBar() {
  return (
    <div
      className="fixed top-0 w-full ml-auto mr-auto h-16 pt-4 flex items-center justify-between //bg-red-500 text-4xl"
      style={{
        background: "rgb(18 18 18/0.75)",
        backdropFilter: "blur(0.7rem)",
      }}
    >
      <div className="pl-4 flex gap-8 items-center">
        <AiOutlineMenu />
        <h2 className="text-[#727273]">Floor Time Schedule</h2>
      </div>
      <div className="pr-4">
        <Image
          src="/c21ca-logo.svg"
          width={"196"}
          height={56}
          alt="C21 Coastal Alliance Logo "
          style={{ objectFit: "contain", display: "block", height: "56px" }}
        />
      </div>
    </div>
  );
}
