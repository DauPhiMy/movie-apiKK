import { getGenres } from "@/utils/getMovieApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GenrePage() {
  const { genre } = useParams();
  console.log(genre);
  useEffect(() => {
    getGenres(genre).then((res) => console.log(res));
  },[genre]);
  return <div>GenrePage</div>;
}
