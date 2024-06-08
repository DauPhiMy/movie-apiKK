import { MovieType } from "@/types/movie";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../movie-card/MovieCard";

interface ListMovieType {
  title: string;
  slug: string;
  getMovie: () => Promise<any>;
}
export default function MovieList({ title, slug, getMovie }: ListMovieType) {
  const [movie, setMovie] = useState<MovieType[]>([]);
  useEffect(() => {
    getMovie().then((res) => {
      setMovie(res.data.items);
      console.log(res);
    });
  }, [getMovie]);
  return (
    <div className="my-4">
      <div className="flex items-center justify-between pb-1">
        <div className="font-bold uppercase">{title}</div>
        <Link to={slug}>Xem tat ca </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movie?.map((item) => {
          return (
            <MovieCard key={item.thumb_url} item={item} />
          );
        })}
      </div>
    </div>
  );
}
