import MovieCard from "@/components/movie-card/MovieCard";
import { MovieType } from "@/types/movie";
import { getMovieList } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieListPage() {
  const { movieList } = useParams();
  const [movie, setMovie] = useState<MovieType[]>([]);
  console.log(movieList);
  useEffect(() => {
    const getMovie = async () => {
      const res = await getMovieList(movieList);
      setMovie(res.data.items);
      console.log(res);
    };
    getMovie();
  }, [movieList]);
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {movie?.map((item) => {
        return <MovieCard key={item.thumb_url} item={item} />;
      })}
    </div>
  );
}
