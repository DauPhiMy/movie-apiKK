import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import InfoMoviePage from "./pages/InfoMoviePage";
import WatchMoviePage from "./pages/WatchMoviePage";
import ListMoviePage from "./pages/MovieListPage";
import SearchMoviePage from "./pages/SearchMoviePage";
import GenrePage from "./pages/GenrePage";

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
        path:"/info/:movieId",
        element:<InfoMoviePage />
      },
      {
        path:"/watching/:movieId",
        element:<WatchMoviePage />
      },
      {
        path: "/list/:movieList",
        element: <ListMoviePage />
      },
      {
        path: "/genre/:genre",
        element: <GenrePage />
      },
      {
        path: "/search",
        element: <SearchMoviePage />
      },
    ],
  },
  {
    path:'*',
    element: <ErrorPage />
  }
]);
export default router;
