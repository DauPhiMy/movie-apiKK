import {
  getAnime,
  getFeatureFilm,
  getSeriesMovie,
  getTvShow,
} from "@/utils/getMovieApi";
import HomeMovieList from "@/pages/HomePage/HomeMovieList";
import Slider from "./Slider";

export default function HomePage() {
  return (
    <div>
      <Slider />
      <HomeMovieList
        title="Phim Lẻ"
        slug="list/phim-le"
        getMovie={getFeatureFilm}
      />
      <HomeMovieList
        title="Phim bộ"
        slug="list/phim-bo"
        getMovie={getSeriesMovie}
      />
      <HomeMovieList title="Anime" slug="list/anime" getMovie={getAnime} />
      <HomeMovieList title="Tv Show" slug="list/tv-show" getMovie={getTvShow} />
    </div>
  );
}
