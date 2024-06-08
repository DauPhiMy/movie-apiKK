import { useState } from "react";
import logo from "@/assets/logo.png";
import { IoReorderThreeSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";
import Search from "./Search";
import { motion } from "framer-motion";

export default function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [hideSearch, setHideSearch] = useState(false);
  const listMovie = [
    { name: "Phim Lẻ", path: "/list/phim-le" },
    { name: "Phim Bộ", path: "/list/phim-bo" },
    { name: "Hoạt Hình", path: "/list/hoat-hinh" },
    { name: "Tv Show", path: "list/tv-shows" },
  ];
  return (
    <header className="relative z-[999] flex h-14 w-full items-center justify-between bg-header px-2 text-header-foreground ">
      <Link to={"/"} className="shrink-0">
        <img src={logo} alt="logo" className="w-[220px]" />
      </Link>

      <ul className="ml-5 hidden shrink-0 gap-x-3 lg:flex">
        {listMovie.map(({ name, path }) => {
          return (
            <Link to={path} key={path} className="cursor-pointer capitalize">
              {name}
            </Link>
          );
        })}
      </ul>

      <div className="hidden sm:flex sm:min-w-[400px]">
        <Search />
      </div>

      <div className="hidden shrink-0 space-x-4 lg:flex">
        <div>
          <ToggleTheme />
        </div>
        <div className="shrink-1">
          <Link to={"/"}>
            <p>Đăng nhập</p>
          </Link>
        </div>
      </div>
      <div className="mr-3 flex items-center justify-between gap-x-8 lg:hidden">
        <CiSearch
          className="size-5 sm:hidden "
          onClick={() => setHideSearch(!hideSearch)}
        />
        <IoReorderThreeSharp
          className="size-5"
          onClick={() => setToggle(true)}
        />
      </div>
      {hideSearch && (
        <motion.div
          className="absolute top-full w-full px-2"
          initial={{ opacity: 0, y:-5}}
          animate={{ opacity: 1, y:1 }}
          transition={{ duration: 0.5,}}
        >
          <Search />
        </motion.div>
      )}
      {toggle && (
        <div className="fixed inset-0 z-[999] overflow-y-visible bg-slate-100 bg-opacity-80 px-2 pt-2">
          <div
            onClick={() => setToggle(false)}
            className="flex flex-row-reverse"
          >
            <IoMdClose className="size-5" />
          </div>
        </div>
      )}
    </header>
  );
}
