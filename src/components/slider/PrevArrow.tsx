import { GrFormPrevious } from "react-icons/gr";

export default function PrevArrow({onClick}:{onClick:any}) {
  return (
    <div onClick={onClick} className="absolute left-2 md:left-10  top-1/2 z-20  -translate-y-1/2 rounded-full bg-blue-300 bg-opacity-60 p-2 cursor-pointer hover:bg-opacity-80 duration-200">
      <GrFormPrevious className="size-6" />
    </div>
  );
}
