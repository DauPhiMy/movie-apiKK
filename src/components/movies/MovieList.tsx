import { MovieType } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieListType {
  movie?: MovieType[]
}

export default function MovieList({movie}:MovieListType) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movie?.map((item) => {
        return <MovieCard key={item.thumb_url} item={item} />;
      })}
    </div>
  );
}
