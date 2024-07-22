import { MovieDetailData, MovieData } from "@/types/data-type";
import axios from "./axiosInstance";
import { MovieType } from "@/types/movie";

export const linkImg = "https://img.phimapi.com/";

export const getMovieList = async (
  movieList: string,
  page: number | string,
  limit = 20,
) => {
  const { data } = await axios.get<MovieData>(
    `/v1/api/danh-sach/${movieList}?limit=${limit}&page=${page}`,
  );
  return data;
};

export const getFeatureFilm = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/phim-le?limit=12`);
  return data;
};
export const getSeriesMovie = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/phim-bo?limit=12`);
  return data;
};
export const getAnime = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/hoat-hinh?limit=12`);
  return data;
};
export const getTvShow = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/tv-shows?limit=12`);
  return data;
};
export const getNewlyUpdatedMovie = async () => {
  const { data } = await axios.get<{items:MovieType[]}>(
    `/danh-sach/phim-moi-cap-nhat?page=1`,
  );
  return data;
};
export const getMovieInfo = async (name: string | undefined) => {
  const { data } = await axios.get<MovieDetailData>(`/phim/${name}`);
  return data;
};
export const getGenres = async (genre: string,page:string |number) => {
  const { data } = await axios.get<MovieData>(
    `v1/api/the-loai/${genre}?page=${page}&limit=20`,
  );
  return data;
};
export const searchMovie = async (name: string | undefined, limit = 20) => {
  const { data } = await axios.get<MovieData>(
    `/v1/api/tim-kiem?keyword=${name}&limit=${limit}`,
  );
  return data.data;
};
