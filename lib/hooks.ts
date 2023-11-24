import useSWR from "swr";
import fetcher from "./fetcher";

export const useResults = (params?: string) => {
  const { data, error, isLoading } = useSWR(
    params ? `voting/results${params}` : "voting/results",
    fetcher
  );

  return {
    data,
    isLoading,
    isError: error,
  };
};

export const useCounty = () => {
  const { data, error, isLoading } = useSWR("county", fetcher);

  return {
    county: data,
    countyLoading: isLoading,
    isError: error,
  };
};

export const useConstituency = (params?: string) => {
  const { data, error, isLoading } = useSWR(params ? `constituency${params}` : 'constituency', fetcher);

  return {
    constituency: data,
    constituencyLoading: isLoading,
    isError: error,
  };
};

export const useWard = (params?: string) => {
  const { data, error, isLoading } = useSWR(params ? `ward${params}` : 'ward', fetcher);

  return {
    ward: data,
    wardLoading: isLoading,
    isError: error,
  };
};
