import { useDebounce } from "@/hook/useDebounce";
import { linkImg, searchMovie } from "@/utils/getMovieApi";
import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { MovieType } from "@/types/movie";

export default function Search() {
  const [movie, setMovie] = useState<MovieType[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const searchQuery = useDebounce(searchValue);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      navigate(`/search?keyword=${searchValue}`, {
        state: {
          keyword: searchValue,
        },
      });
      setSearchValue('')
    }
  };
  useEffect(() => {
    if (!searchQuery.trim()) {
      return;
    }
    setIsLoading(true);
    searchMovie(encodeURIComponent(searchQuery)).then((res) => {
      setMovie(res.data.items);
      setIsLoading(false);
    });
  }, [searchQuery]);
  return (
    <form className="relative mx-4 -ml-2 w-full" onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Tìm kiếm phim"
        className="h-8 w-full grow rounded-lg pl-2 outline-none
                 ring-1 ring-blue-500 focus:ring-blue-950"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        ref={inputRef}
      />
      <button className="absolute right-1 top-[20%]">
        <CiSearch className="size-5 " />
      </button>

      {searchValue && !isLoading && (
        <button
          className="absolute right-10 top-[30%] hover:cursor-pointer"
          onClick={() => {
            setSearchValue("");
            if (inputRef.current !== null) {
              inputRef.current.focus();
            }
          }}
        >
          <IoIosCloseCircle className="size-4" />
        </button>
      )}
      {isLoading && (
        <button className="absolute right-10 top-[30%]">
          <FaSpinner className="size-3 animate-spin" />
        </button>
      )}
      {searchValue && (
        <div className="absolute left-0 top-10 w-full rounded-lg bg-slate-500">
          <Link to="/search/a" className="mt-1 pl-2">
            Đến trang tìm kiếm
          </Link>
          <div>
            {movie?.map((item) => {
              return (
                <Link
                  to={`/info/${item.slug}`}
                  key={item.poster_url}
                  className="flex border-b-[1px] border-black p-2 hover:cursor-pointer"
                  onClick={() => setSearchValue('')}
                >
                  <div className="size-[50px] overflow-hidden">
                    <img
                      src={`${linkImg}${item.poster_url}`}
                      alt={item.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="pl-4 font-bold">{item.name}</div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </form>
  );
}
