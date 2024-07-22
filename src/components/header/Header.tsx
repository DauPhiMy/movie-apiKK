import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Search from "./Search";
import { AnimatePresence, motion } from "framer-motion";
import { genres } from "@/utils/genresApi";

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const [isGenres, setIsGenres] = useState(false);
  const navMovies = [
    { name: "Phim Lẻ", path: "/list/phim-le" },
    { name: "Phim Bộ", path: "/list/phim-bo" },
    { name: "Hoạt Hình", path: "/list/hoat-hinh" },
    {
      name: "Tv Show",
      path: "list/tv-shows",
    },
  ];
  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? "hidden" : "auto";
  }, [isOpenMenu]);
  const handleCloseMenu = () => {
    setIsOpenMenu(false);
  };
  return (
    <header className="relative z-10 flex h-14 w-full items-center justify-between px-2">
      <Link to={"/"} className="shrink-0">
        <img src={logo} alt="logo" className="w-[220px]" />
      </Link>
      <ul className="ml-5 hidden h-14 shrink-0 gap-x-3 leading-[3.5rem] lg:flex">
        {navMovies.map((nav) => {
          return (
            <Link
              to={nav.path}
              key={nav.path}
              className="cursor-pointer capitalize"
            >
              {nav.name}
            </Link>
          );
        })}
        <li className="group relative">
          <div>Thể loại</div>
          <ul className="absolute left-0 top-full hidden  w-[300px] flex-wrap gap-y-3 bg-blue-100 py-1 before:absolute before:bottom-full before:h-5 before:w-full group-hover:flex">
            {genres.map((genre) => {
              return (
                <li
                  key={genre._id}
                  className="h-5 w-1/2 pl-2 leading-5 hover:text-[#ffbe0b]"
                >
                  <Link to={`/genre/${genre.slug}`}>{genre.name}</Link>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>

      <div className="hidden md:flex md:min-w-[400px]">
        <Search />
      </div>

      <div className="hidden shrink-0 space-x-4 lg:flex">
        <div>
          <ToggleTheme />
        </div>
        {/* <div className="shrink-1">
          <Link to={"/"}>
            <p>Đăng nhập</p>
          </Link>
        </div> */}
      </div>

      {/* Mobile */}
      <div className="mr-3 flex items-center justify-between gap-x-8 lg:hidden">
        <IoReorderThreeSharp
          className="size-5"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        />
      </div>
      <AnimatePresence>
        {isOpenMenu && (
          <div className="fixed inset-0 bg-black bg-opacity-30">
            <motion.div
              className="absolute right-0 top-0 z-[999]  h-screen w-[80%] overflow-y-visible bg-slate-100 px-3 pt-3"
              initial={{ opacity: 0, right: -100 }}
              animate={{ opacity: 1, right: 0 }}
              exit={{ opacity: 0, right: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <ToggleTheme />
                  <IoMdClose
                    className="size-5"
                    onClick={() => setIsOpenMenu(!isOpenMenu)}
                  />
                </div>
                <div className="md:hidden">
                  <Search handleCloseMenu={handleCloseMenu} />
                </div>
                <div className="flex flex-col gap-3">
                  <Link to={"/"}>Trang chủ</Link>
                  {navMovies.map((nav) => {
                    return (
                      <Link
                        to={nav.path}
                        key={nav.path}
                        className="cursor-pointer capitalize"
                        onClick={() => setIsOpenMenu(false)}
                      >
                        {nav.name}
                      </Link>
                    );
                  })}
                  <div
                    onClick={() => setIsGenres(!isGenres)}
                    className="hover:text-yellow-200"
                  >
                    Thể loại
                  </div>
                  <AnimatePresence>
                    {isGenres && (
                      <motion.ul
                        className="flex w-full flex-wrap gap-y-3 py-1"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 10 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "backInOut" }}
                      >
                        {genres.map((genre) => {
                          return (
                            <li key={genre._id} className="h-5 w-1/2 leading-5">
                              <Link
                                to={`/genre/${genre.slug}`}
                                onClick={() => setIsOpenMenu(false)}
                              >
                                {genre.name}
                              </Link>
                            </li>
                          );
                        })}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
