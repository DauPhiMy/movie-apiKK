import { MovieType } from "@/types/movie";
import { linkImg } from "@/utils/getMovieApi";
import { Link } from "react-router-dom";

export default function MovieCard({ item }: { item: MovieType }) {
  return (
    <Link
      to={`/info/${item.slug}`}
      className="group relative w-full overflow-hidden rounded-md"
    >
      <div className="overflow-hidden">
        <div className="relative h-[140px] sm:h-[160px] md:h-[180px] lg:h-[240px]">
          <img
            src={`${linkImg}${item.poster_url}`}
            alt={item.name}
            className="size-full object-cover duration-200 ease-in-out group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <div className="absolute left-2 top-2">
          <div className="rounded-md px-1 py-1 bg-gradient-to-r from-yellow-200 to-blue-200 text-xs font-medium md:px-2 md:py-1 md:text-sm">
            {item.episode_current}
          </div>
        </div>
      </div>
      <div className="z-30 line-clamp-1 bg-gradient-to-r from-yellow-200 to-blue-200 py-1">
        <p className="px-1 text-center text-sm font-bold text-black">
          {item.name}
        </p>
      </div>
    </Link>
  );
}
