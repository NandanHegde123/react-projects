import { useSearchParams } from "react-router-dom";

export function useUrlPosition() {
  const [searchParams, setSearchparams] = useSearchParams();
  const lat = Number(searchParams.get("lat"));
  const lng = Number(searchParams.get("lng"));
  return [lat, lng];
}
