import { MovieDetailData, MovieData } from "@/types/data-type";
import axios from "./axiosInstance";

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
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/phim-le`);
  return data;
};
export const getSeriesMovie = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/phim-bo`);
  return data;
};
export const getAnime = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/hoat-hinh`);
  return data;
};
export const getTvShow = async () => {
  const { data } = await axios.get<MovieData>(`/v1/api/danh-sach/tv-shows`);
  return data;
};
export const getNewlyUpdatedMovie = async () => {
  const { data } = await axios.get<MovieData>(
    `/danh-sach/phim-moi-cap-nhat?page=1`,
  );
  return data;
};
export const getMovieInfo = async (name: string | undefined) => {
  const { data } = await axios.get<MovieDetailData>(`/phim/${name}`);
  return data;
};
export const getGenres = async (genre: string) => {
  const { data } = await axios.get<MovieData>(
    `v1/api/the-loai/${genre}?limit=20`,
  );
  return data;
};
export const searchMovie = async (name: string | undefined, limit = 10) => {
  const { data } = await axios.get<MovieData>(
    `/v1/api/tim-kiem?keyword=${name}&limit=${limit}`,
  );
  return data.data;
};
