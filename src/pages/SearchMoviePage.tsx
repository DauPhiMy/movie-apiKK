import MovieCard from "@/components/movies/MovieCard";
import { MovieType } from "@/types/movie";
import { searchMovie } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function SearchMoviePage() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  // const location = useLocation();
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  const { keyword } = searchParamsObject;
  console.log(searchParamsObject, searchParams);
  // console.log(location.state.keyword);
  useEffect(() => {
    searchMovie(keyword, 20).then((res) => {
      setMovie(res.items);
      console.log(res.items);
    });
  }, [keyword]);
  console.log(movie);
  return (
    <div>
      <div>Kết quả tìm kiếm : {keyword}</div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {movie?.map((item, index) => {
          return <MovieCard key={`${item.thumb_url}${index}`} item={item} />;
        })}
      </div>
    </div>
  );
}
