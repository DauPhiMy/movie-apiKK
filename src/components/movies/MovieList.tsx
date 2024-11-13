import { MovieType } from "@/types/movie";
import MovieCard from "./MovieCard";

interface MovieListType {
  movies: MovieType[]| undefined;
}

export default function MovieList({ movies }: MovieListType) {
  console.log(movies)
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {movies?.map((item) => {
        return <MovieCard key={item.thumb_url} item={item} />;
      })}
    </div>
  );
}
