import { useSearchParams } from "react-router-dom";

export const useSearchParamsCustom = () => {
  const [searchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...searchParams]);
  return searchParamsObject
};
