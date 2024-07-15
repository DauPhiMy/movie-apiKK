import { MovieType } from "@/types/movie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieList from "../../components/movies/MovieList";
import { MovieData } from "@/types/data-type";

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
  console.log(movie);
  return (
    <div className="py-4">
      <div className="flex items-center justify-between pb-2">
        <div className="after:border-title relative bg-blue-300 px-3 py-1 font-bold uppercase after:absolute after:left-full after:top-0 after:content-['']">
          {title}
        </div>
        <Link to={slug} className="hover:text-blue-200">
          Xem tất cả
        </Link>
      </div>
      <MovieList movie={movie} />
    </div>
  );
}
