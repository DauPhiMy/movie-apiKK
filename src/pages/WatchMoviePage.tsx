import { EpisodesType, MovieType } from "@/types/movie";
import { getMovieInfo } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function WatchMoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  const [movieEp, setMovieEp] = useState<EpisodesType[]>([]);
  const [episodes, setEpisodes] = useState<number>(0);
  useEffect(() => {
    getMovieInfo(movieId).then((res) => {
      setMovie(res.movie);
      setMovieEp(res.episodes);
    });
  }, [movieId]);
  const handleClickEp = (index: number) => {
    setEpisodes(index);
  };
  const srcMovieEp = movieEp[0]?.server_data[episodes].link_embed;
  console.log(movie);
  return (
    <div>
      <div className="rounded-md bg-blue-200/50 px-2">
        <div className="border-b-[1px] border-b-slate-600 py-2 text-base font-medium md:text-xl">
          <Link to={`/info/${movie?.slug}`}> {movie?.name}</Link>
        </div>
        <div className="py-2 font-medium">
          <span>Đang xem {movieEp[0]?.server_data[episodes].name}</span>
        </div>
      </div>
      <div>
        {srcMovieEp && (
          <iframe
            src={srcMovieEp}
            className="aspect-video w-full"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="my-3 rounded-md bg-blue-200/50 px-2 py-3">
        <div className="pb-2 font-medium">Danh sách tập</div>
        <div className="grid max-h-32 grid-cols-4 gap-1 overflow-auto sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12">
          {movieEp[0]?.server_data.map((item, index) => {
            return (
              <button
                onClick={() => handleClickEp(index)}
                key={item.link_embed}
                className={`bg-black px-1 py-2 text-sm text-white hover:cursor-pointer ${index === episodes ? "bg-blue-400" : ""}`}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
