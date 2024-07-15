import { useEffect, useState } from "react";
import { getNewlyUpdatedMovie } from "../../utils/getMovieApi";
import { MovieType } from "../../types/movie";
import { Link } from "react-router-dom";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { FaPlay } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function SliderHome() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  useEffect(() => {
    getNewlyUpdatedMovie().then((res) => setMovie(res.items));
  }, []);
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <PrevArrow onClick={onclick} />,
    nextArrow: <NextArrow onClick={onclick} />,
  };
  return (
    <Slider {...settings}>
      {movie?.map(({ name, thumb_url, year, slug }) => {
        return (
          <div key={thumb_url}>
            <div className=" relative aspect-[2/1] w-full md:aspect-[3/1]">
              <img src={thumb_url} className="h-full w-full" />
              <div className="absolute bottom-6 left-6">
                <h1 className="mb-2 text-4xl font-bold text-white">{name}</h1>
                <div className="flex items-center space-x-2">
                  <Link
                    to={`info/${slug}`}
                    className="z-10 rounded-md bg-red-600 px-4 py-2 text-white flex items-center gap-x-2 "
                  >
                    <FaPlay />
                    <div>Xem ngay</div>
                  </Link>
                  <div className="z-10 rounded-md bg-blue-400 px-4 py-2 text-white ">
                    {year}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
}
