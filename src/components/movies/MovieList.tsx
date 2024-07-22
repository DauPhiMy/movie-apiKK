import { MovieType } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieListType {
  movie?: MovieType[];
}

export default function MovieList({ movie }: MovieListType) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {movie?.map((item) => {
        return <MovieCard key={item.thumb_url} item={item} />;
      })}
    </div>
  );
}
