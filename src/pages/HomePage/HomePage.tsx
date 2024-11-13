import HomeMovieList from "@/pages/HomePage/HomeMovieList";
import Slider from "./Slider";
import { useEffect, useState } from "react";
import axios from "@/utils/axiosInstance";
import { MovieType } from "@/types/movie";
import { AxiosResponse } from "axios";

interface ApiResult {
  status: "success" | "error";
  data?: MovieType[];
  error?: string;
}
export default function HomePage() {
  const [movies, setMovies] = useState<ApiResult[]>([]);
  useEffect(() => {
    Promise.allSettled<AxiosResponse>([
      axios.get(`/v1/api/danh-sach/phim-le?limit=12`),
      axios.get(`/v1/api/danh-sach/phim-bo?limit=12`),
      axios.get(`/v1/api/danh-sach/hoat-hinh?limit=12`),
      axios.get(`/v1/api/danh-sach/tv-show?limit=12`),
    ])
    .then((res) => {
      const formattedMovies: ApiResult[] = res.map((item) => {
        if (item.status === "fulfilled") {
          return { status: "success", data: item.value.data.data.items };
        } else {
          return { status: "error", error: item.reason.message };
        }
      });
      setMovies(formattedMovies)
    });
    
  }, []);

  console.log(movies);
  return (
    <div>
      <Slider />
      {movies[0]?.status === "success" && (
        <HomeMovieList
          title="Phim Lẻ"
          slug="list/phim-le"
          movies={movies[0]?.data}
        />
      )}
      {movies[1]?.status === "success" && (
        <HomeMovieList
          title="Phim bộ"
          slug="list/phim-bo"
          movies={movies[1].data}
        />
      )}
      {movies[2]?.status === "success" && (
        <HomeMovieList
          title="Anime"
          slug="list/anime"
          movies={movies[2].data}
        />
      )}
      {movies[3]?.status === "success" && (
        <HomeMovieList
          title="Tv Show"
          slug="list/tv-show"
          movies={movies[3].data}
        />
      )}
    </div>
  );
}
