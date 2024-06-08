import { searchMovie } from "@/utils/getMovieApi";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"

export default function SearchMoviePage() {
  // const [movie,setMovie] = useState()
  const location = useLocation();
  console.log(location.state.keyword)
  useEffect(() => {
    searchMovie(location.state.keyword,100).then(res => console.log(res))
  },[location.state.keyword])
  const a = useParams()
  console.log(a)
  return (
    <div>SearchMoviePage</div>
  )
}