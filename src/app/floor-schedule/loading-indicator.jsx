import { AiFillCalendar } from "react-icons/ai";

export default function LoadingIndicator() {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      <div className=" text-xl  mt-24">Loading...</div>
      <div className="text-7xl text-main-gold">
        <AiFillCalendar />
      </div>
    </div>
  );
}
