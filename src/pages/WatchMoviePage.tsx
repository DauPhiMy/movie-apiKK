import { EpisodesType } from "@/types/movie";
import { getMovieInfo } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function WatchMoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<EpisodesType[]>([]);
  const [episodes, setEpisodes] = useState<number>(0);
  useEffect(() => {
    getMovieInfo(movieId).then((res) => {
      console.log(res.episodes);
      setMovie(res.episodes);
    });
  }, [movieId]);
  const handleClickEp = (index: number) => {
    setEpisodes(index);
  };
  const srcMovie = movie[0]?.server_data[episodes].link_embed;
  console.log(srcMovie);
  return (
    <div>
      <div className="w-[80%]]">
        {srcMovie && (
          <iframe
            src={srcMovie}
            className="aspect-video w-full"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="bg-slate-600 p-2">
        <div>Danh sach tap</div>
        <div className="grid max-h-32 grid-cols-4 gap-1 overflow-auto sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-12">
          {movie[0]?.server_data.map((item, index) => {
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
