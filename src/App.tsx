import { useEffect } from "react";
import { getFeatureFilm } from "./utils/getMovieApi";

function App() {
  useEffect(() => {
    const fetchApi = async () => {
      const res = await getFeatureFilm();
      console.log(res.data.items);
    };
    fetchApi();
  });
  return (
    <>
      <div className="bg-black p-10"></div>
    </>
  );
}

export default App;
