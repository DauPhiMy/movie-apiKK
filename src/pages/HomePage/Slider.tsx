import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieType } from "@/types/movie";
import { getNewlyUpdatedMovie } from "@/utils/getMovieApi";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";

export default function Slider() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  useEffect(() => {
    getNewlyUpdatedMovie().then((res) => setMovie(res.items));
  }, []);
  console.log(movie);
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {Array?.from(movie)?.map((item) => (
            <CarouselItem key={item.thumb_url}>
              <div className=" relative aspect-[2/1] w-full md:aspect-[3/1]">
                <img src={item.thumb_url} className="h-full w-full" />
                <div className="absolute bottom-6 left-6">
                  <h1 className="mb-2 text-xl md:text-2xl font-bold text-white">
                    {item.name}
                  </h1>
                  <div className="flex items-center space-x-2">
                    <Link
                      to={`info/${item.slug}`}
                      className="z-10 flex items-center gap-x-2 rounded-md bg-red-600 px-4 py-2 text-white "
                    >
                      <FaPlay />
                      <div>Xem ngay</div>
                    </Link>
                    <div className="z-10 rounded-md bg-blue-400 px-4 py-2 text-white ">
                      {item.year}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent >
        <CarouselPrevious className="left-5 dark:bg-gray-400" />
        <CarouselNext  className="right-5 dark:bg-gray-400" />
      </Carousel>
    </div>
  );
}
