import { MovieType } from "@/types/movie";
import { getMovieInfo } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { Link, useParams } from "react-router-dom";

export default function InfoMoviePage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  console.log(movie);
  useEffect(() => {
    getMovieInfo(movieId).then((res) => {
      console.log(res.movie);
      setMovie(res.movie);
    });
  }, [movieId]);

  const getSrcYoutube = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    const ID = match && match[2].length === 11 ? match[2] : null;
    return "https://www.youtube.com/embed/" + ID;
  };
  const linkTrailer = getSrcYoutube(movie?.trailer_url || "");
  return (
    <div className="mx-auto max-w-[980px]">
      <div className="relative h-[200px] md:h-[400px]">
        <img
          src={movie?.thumb_url}
          alt={movie?.name}
          className="size-full object-cover"
        />
        <div className="absolute left-5 top-[50%] md:top-[70%]">
          <div className="mb-3 text-sm md:text-2xl font-bold uppercase text-white" style={{textShadow: '0px 2px 1px black'}}>
            {movie?.name}
          </div>
          <Link to={`/watching/${movie?.slug}`}>
            <button className="flex items-center gap-1 rounded-md bg-[#ff006ee6] px-2 py-1 font-medium text-white">
              <CiPlay1 />
              Xem Phim
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-2 rounded-md bg-blue-100/60 p-4">
        <ul className="grid grid-cols-2 border-b-[1px] border-b-slate-600 py-3">
          <li>
            <span className="font-medium">Đang phát: </span>
            <span>{movie?.quality}</span>
            <span> {movie?.lang}</span>
          </li>
          <li>
            <span className="font-medium">Năm phát hành: </span>
            <span> {movie?.year}</span>
          </li>
          <li>
            <span className="font-medium">Số tập: </span>
            <span>{movie?.episode_total}</span>
          </li>
          <li>
            <span className="font-medium">Thể loại: </span>
            {movie?.category.map((item) => (
              <span key={item.id}>{item.name}, </span>
            ))}
          </li>
        </ul>
        <div className="py-3 border-b-[1px] border-b-slate-600">
          <div className="text-lg font-medium text-amber-600">
            Nội dung phim
          </div>
          <p>{movie?.content}</p>
        </div>
        <div className="pt-3">
          <div className="pb-2 text-lg font-medium text-amber-600 ">
            Trailer
          </div>
          <iframe className="aspect-video w-full" src={linkTrailer}></iframe>
        </div>
      </div>
    </div>
  );
}
