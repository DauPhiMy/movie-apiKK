import { GrFormNext } from "react-icons/gr";

export default function NextArrow({ onClick }: { onClick: any }) {
  return (
    <div
      onClick={onClick}
      className="absolute right-2 md:right-10 top-1/2 z-20  -translate-y-1/2 cursor-pointer rounded-full bg-blue-300 bg-opacity-60 p-2 duration-200 hover:bg-opacity-80"
    >
      <GrFormNext className="size-6" />
    </div>
  );
}
