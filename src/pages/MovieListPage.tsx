import Pagination from "@/components/pagination/Pagination";
import { MovieData } from "@/types/data-type";
import { getMovieList } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { useSearch } from "@/hook/useSearch";
import MovieList from "@/components/movies/MovieList";
import { useParams } from "react-router-dom";

export default function MovieListPage() {
  const { slug } = useParams();
  const [movie, setMovie] = useState<MovieData>();
  const { page = 1 } = useSearch();
  useEffect(() => {
    if (slug) {
      getMovieList(slug, page).then((res) => {
        setMovie(res);
      });
    }
  }, [slug, page]);
  const totalPage = movie?.data?.params.pagination.totalPages || 1;
  const currentPage = movie?.data?.params.pagination.currentPage || 1;
  console.log(movie);
  return (
    <div className="pt-3">
      <div className="pb-2 text-xl font-bold text-yellow-300">
        {movie?.data?.titlePage}
      </div>
      <div className="flex items-center gap-x-2 pb-2">
        <div className="flex items-center gap-1">
          <FaHome className="text-yellow-300" />
          <div className="text-yellow-300">{movie?.data?.breadCrumb[0].name}</div>
        </div>
        <div className="text-yellow-300">/</div>
        <div className="text-yellow-300">{movie?.data?.breadCrumb[1].name}</div>
      </div>
      <MovieList movie={movie?.data?.items} />
      <div className="flex justify-center py-4">
        <Pagination totalPage={totalPage} currentPage={currentPage} />
      </div>
    </div>
  );
}
