import { useSearchParams } from "react-router-dom";

export const useSearch = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  return searchParamsObject
};
