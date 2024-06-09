import axios from "./axiosInstance";

export const linkImg = "https://img.phimapi.com/";

export const getMovieList = async (
  movieList: string | undefined,
  limit = 20,
) => {
  const { data } = await axios.get(
    `/v1/api/danh-sach/${movieList}?limit=${limit}`,
  );
  return data;
};

export const getFeatureFilm = async () => {
  const { data } = await axios.get(`/v1/api/danh-sach/phim-le`);
  return data;
};
export const getSeriesMovie = async () => {
  const { data } = await axios.get(`/v1/api/danh-sach/phim-bo`);
  return data;
};
export const getAnime = async () => {
  const { data } = await axios.get(`/v1/api/danh-sach/hoat-hinh`);
  return data;
};
export const getTvShow = async () => {
  const { data } = await axios.get(`/v1/api/danh-sach/tv-shows`);
  return data;
};
export const getNewlyUpdatedMovie = async () => {
  const { data } = await axios.get(`/danh-sach/phim-moi-cap-nhat?page=1`);
  return data;
};
export const getMovieInfo = async (name: string | undefined) => {
  const { data } = await axios.get(`/phim/${name}`);
  return data;
};
export const getGenres = async (genre: string | undefined) => {
  const { data } = await axios.get(`v1/api/the-loai/${genre}`);
  return data.data.items;
};
export const searchMovie = async (name: string | undefined, limit = 10) => {
  const { data } = await axios.get(
    `/v1/api/tim-kiem?keyword=${name}&limit=${limit}`,
  );
  return data;
};
