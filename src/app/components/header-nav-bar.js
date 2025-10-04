import { AiOutlineMenu } from "react-icons/ai";

export default function HeaderBar() {
  return (
    <div className="fixed top-0 w-full ml-auto mr-auto h-12 flex items-center //bg-red-500 text-4xl">
      <div className="pl-1.5">
        <AiOutlineMenu />
      </div>
    </div>
  );
}
