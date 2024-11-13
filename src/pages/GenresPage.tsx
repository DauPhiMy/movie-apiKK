import MovieList from "@/components/movies/MovieList";
import Pagination from "@/components/pagination/Pagination";
import { useSearchParamsCustom } from "@/hook/useSearchParamsCustom";
import { MovieData } from "@/types/data-type";
import { getGenres } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function GenresPage() {
  const { genre } = useParams();
  const [movies, setMovies] = useState<MovieData>();
  const { page = 1 } = useSearchParamsCustom();
  useEffect(() => {
    if (genre) {
      getGenres(genre,page).then((res) => setMovies(res));
    }
  }, [genre,page]);
  const totalPage = movies?.data?.params.pagination.totalPages || 1;
  const currentPage = movies?.data?.params.pagination.currentPage || 1;
  console.log(movies);
  return (
    <div>
      <div className="pt-3">
        <div className="pb-2 text-xl font-bold text-yellow-300">
          {movies?.data.titlePage}
        </div>
        <div className="flex items-center gap-x-2 pb-2">
          <div className="flex items-center gap-1">
            <FaHome className="text-yellow-300" />
            <div className="text-yellow-300">{movies?.data?.breadCrumb[0].name}</div>
          </div>
          <div className="text-yellow-300">/</div>
          <div className="text-yellow-300">{movies?.data?.breadCrumb[1].name}</div>
        </div>
        <MovieList movies={movies?.data.items} />
        <div className="flex justify-center py-4">
          <Pagination totalPage={totalPage} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
}
