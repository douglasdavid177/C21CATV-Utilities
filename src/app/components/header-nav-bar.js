import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";

export default function HeaderBar() {
  return (
    <div
      className="fixed top-0 w-full ml-auto mr-auto h-16 flex items-center justify-between //bg-red-500 text-4xl"
      style={{
        background: "rgb(28 28 28/0.6)",
        backdropFilter: "blur(0.5rem)",
      }}
    >
      <div className="pl-1.5">
        <AiOutlineMenu />
      </div>
      <div>
        <Image
          src="/c21ca-logo.svg"
          width={"196"}
          height={56}
          alt="C21 Coastal Alliance Logo "
          className="flex justify-end pr-1.5"
          style={{ objectFit: "contain", display: "block", height: "56px" }}
        />
      </div>
    </div>
  );
}
