import MovieList from "@/components/movie-list/MovieList";
import SliderHome from "../components/slider/SliderHome";
import { getAnime, getFeatureFilm, getSeriesMovie, getTvShow } from "@/utils/getMovieApi";

export default function HomePage() {
  return (
    <div>
      <SliderHome />
      <MovieList title="Phim Lẻ" slug="list/phim-le" getMovie={getFeatureFilm}   />
      <MovieList title="Phim bộ" slug="list/phim-bo" getMovie={getSeriesMovie}   />
      <MovieList title="Anime" slug="list/anime" getMovie={getAnime}   />
      <MovieList title="Tv Show" slug="list/tv-show" getMovie={getTvShow}   />
    </div>
  );
}