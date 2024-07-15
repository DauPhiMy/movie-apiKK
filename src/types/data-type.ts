import { EpisodesType, MovieType } from "./movie";

export interface MovieData {
  data: {
    items: MovieType[];
    params: {
      pagination: {
        totalItems: number;
        totalItemsPerPage: number;
        currentPage: number;
        totalPages: number;
      };
    };
    titlePage: string;
    breadCrumb: [
      {
        name: string;
        slug: string;
      },
      {
        name: string;
      },
    ];
  };
}

export interface MovieDetailData {
  movie: MovieType;
  episodes: EpisodesType[];
}
