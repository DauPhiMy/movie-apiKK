import { MovieType } from "@/types/movie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/movies/MovieList";
import { MovieData } from "@/types/data-type";
import { GrNext } from "react-icons/gr";

interface ListMovieType {
  title: string;
  slug: string;
  getMovie: () => Promise<MovieData>;
}
export default function HomeMovieList({
  title,
  slug,
  getMovie,
}: ListMovieType) {
  const [movie, setMovie] = useState<MovieType[]>([]);
  useEffect(() => {
    getMovie().then((res) => {
      setMovie(res.data.items);
    });
  }, [getMovie]);
  return (
    <div className="py-4">
      <div className="flex items-center justify-between pb-2">
        <div className="rounded-md bg-gradient-to-r from-yellow-200 to-blue-200 px-3 py-1 font-bold uppercase">
          {title}
        </div>
        <Link
          to={slug}
          className="flex items-center gap-1 hover:text-[#ffbe0b]"
        >
          <p className="font-medium">Xem tất cả</p>
          <GrNext />
        </Link>
      </div>
      <MovieList movie={movie} />
    </div>
  );
}
