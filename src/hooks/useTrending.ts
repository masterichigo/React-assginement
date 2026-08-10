import { useQuery } from "react-query";
import { useState } from "react";
import { getTrending } from '../api/tmdb-api'
import { PopularActors } from '../types/interfaces';

interface UseTrendingReturn {
  trending: string;
  setTrending: React.Dispatch<React.SetStateAction<string>>;
}

const useTrending = (range: string): UseTrendingReturn => {
   const [trending, setTrending] = useState<string>("None");
   useQuery<PopularActors[], Error>(["trending", range], () => getTrending(range), {
      onSuccess: (data) => {
         setTrending(data);
      },
   });
   return { trending, setTrending };
};

export default useTrending
