import { MovieType } from "@/types/movie";
import { linkImg } from "@/utils/getMovieApi";
import { Link } from "react-router-dom";

export default function MovieCard({item}:{item:MovieType}) {
  return (
    <Link
      to={`info/${item.slug}`}
      className="group relative w-full overflow-hidden rounded-md"
    >
      <div className="overflow-hidden">
        <div className="aspect-[5/6]">
          <img
            src={`${linkImg}${item.poster_url}`}
            alt={item.name}
            className="size-full object-cover duration-200 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
      <div className="z-30 line-clamp-1 bg-slate-300 py-1">
        <p className="px-1 text-center font-bold text-black">{item.name}</p>
      </div>
    </Link>
  );
}
