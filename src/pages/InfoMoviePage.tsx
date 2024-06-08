import { MovieType } from "@/types/movie";
import { getMovieInfo } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
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
  return (
    <div>
      <div>
        <div className="mt-2 w-full bg-neutral-950 text-white">
          <div className="bg-neutral-700 py-1 text-center text-lg font-bold">
            {movie?.name}
          </div>
          <div className="grid grid-cols-8 md:grid-cols-12">
            <div className="col-span-3 flex items-center justify-center md:col-span-4">
              <div className="w-2/3 sm:w-1/2">
                <img
                  src={movie?.poster_url}
                  alt={movie?.name}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-5 mx-4 my-4 divide-y-[1px] md:col-span-8 ">
              <div className="flex items-center py-2 md:py-4">
                <div className="hidden flex-[0.3] md:block">Tên khác</div>
                <div className="flex-1 text-center md:flex-[0.7]">
                  {movie?.origin_name}
                </div>
              </div>

              <div className="flex items-center py-2 md:py-4">
                <div className="hidden flex-[0.3] md:block">Chất lượng</div>
                <div className="flex-1 text-center md:flex-[0.7]">
                  {movie?.quality}
                </div>
              </div>

              <div className="flex items-center py-2 md:py-4">
                <div className="hidden flex-[0.3] md:block">Thể loại</div>
                <div className="flex flex-1 flex-wrap items-center justify-center gap-x-2 md:flex-[0.7]">
                  {movie?.category.map((item, index) => {
                    return <div key={`${item.id}${index}`}>{item.name}</div>;
                  })}
                </div>
              </div>

              <div className="flex items-center py-2 md:py-4">
                <div className="hidden flex-[0.3] md:block">Trạng thái</div>
                <div className="flex-1 text-center md:flex-[0.7]">
                  {movie?.status === "complete"
                    ? "Hoàn thành"
                    : "Đang tiến hành"}
                </div>
              </div>

              <div className="flex items-center py-2 md:py-4">
                <div className="hidden flex-[0.3] md:block">Phát hành</div>
                <div className="flex-1 text-center md:flex-[0.7]">
                  {movie?.year}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 bg-blue-200 py-1">
          <Link
            to={`/watching/${movie?.slug}`}
            className="cursor-pointer rounded-md bg-red-600 px-1 py-2 text-sm font-bold text-white"
          >
            Xem phim
          </Link>
        </div>
        {/* <div>
        <iframe
          src="https://player.phimapi.com/player/?url=https://s3.phim1280.tv/20240402/UCIJGFa9/index.m3u8"
          className="aspect-video"
        />
      </div> */}
      </div>
    </div>
  );
}
