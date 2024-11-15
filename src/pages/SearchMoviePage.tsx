import MovieList from "@/components/movies/MovieList";
import { useSearchParamsCustom } from "@/hook/useSearchParamsCustom";
import { MovieType } from "@/types/movie";
import { searchMovie } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";

export default function SearchMoviePage() {
  const [movies, setMovies] = useState<MovieType[]>([]);
 const {keyword} = useSearchParamsCustom()
 console.log(keyword)
  useEffect(() => {
    searchMovie(keyword, 20).then((res) => {
      setMovies(res.items);
      console.log(res.items);
    });
  }, [keyword]);
  console.log(movies);
  return (
    <div>
      <div className="font-medium text-amber-600 text-xl mb-2">Kết quả tìm kiếm : {keyword}</div>
      <MovieList movies={movies} />
    </div>
  );
}
