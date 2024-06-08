export interface MovieType {
  name: string;
  thumb_url: string;
  year: number;
  slug: string;
  poster_url: string;
  origin_name: string;
  category: {
    id: string;
    name: string;
    slug: string;
  }[];
  status: string;
  quality: string;
  trailer_url: string;
}

export interface EpisodesType {
  server_data: {
    filename: string;
    link_embed: string;
    link_m3u8: string;
    name: string;
    slug: string;
  }[];
  server_name: string;
}
