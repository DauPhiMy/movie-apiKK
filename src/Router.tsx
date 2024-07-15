import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage";
import InfoMoviePage from "./pages/InfoMoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import SearchMoviePage from "./pages/SearchMoviePage";
import GenrePage from "./pages/GenresPage";
import MovieListPage from "./pages/MovieListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/info/:movieId",
        element: <InfoMoviePage />,
      },
      {
        path: "/watching/:movieId",
        element: <WatchMoviePage />,
      },
      {
        path: "/list/:slug",
        element: <MovieListPage />,
      },
      {
        path: "/genre/:genre",
        element: <GenrePage />,
      },
      {
        path: "/search",
        element: <SearchMoviePage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
export default router;
