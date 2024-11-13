import { Link } from "react-router-dom";
import MovieList from "../../components/movies/MovieList";
import { GrNext } from "react-icons/gr";
import { MovieType } from "@/types/movie";

interface HomeMovieListProp {
  title: string
  slug: string
  movies: MovieType[] | undefined
}
export default function HomeMovieList(props: HomeMovieListProp) {
  
  return (
    <div className="py-4">
      <div className="flex items-center justify-between pb-2">
        <div className="rounded-md bg-gradient-to-r from-yellow-200 to-blue-200 px-3 py-1 font-bold uppercase">
          {props?.title}
        </div>
        <Link
          to={props?.slug}
          className="flex items-center gap-1 hover:text-[#ffbe0b]"
        >
          <p className="font-medium">Xem tất cả</p>
          <GrNext />
        </Link>
      </div>
      <MovieList movies={props?.movies} />
    </div>
  );
}
