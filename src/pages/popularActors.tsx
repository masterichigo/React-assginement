import React, { useState } from "react";
import CustomToggleButton from "../components/toggleButton";
import PageTemplate from '../components/templateActorListPage';
import { getPopularActors, getTrending } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { ActorResults } from "../types/interfaces";
import Spinner from "../components/spinner";

type trendingOptions = "day" | "week" | "None";

const PopularActorsPage: React.FC = () => {
  const [trending, setTrending] = useState<trendingOptions>("None");
  const [page, setPage] = React.useState(1);

  const { data, error, isLoading, isError, isFetching, isPreviousData } = useQuery<ActorResults, Error>(
    ["actors", trending, page],
    () => trending !== "None" ? getTrending(trending, page) : getPopularActors(page),
    {
      keepPreviousData: true,
    }
  );

  const actors = data ? data : [];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <CustomToggleButton
        value={trending}
        onChange={(_event, newValue) => {
          setTrending(newValue);
          setPage(1);
        }}
      />
      <br />
      <br />
      <PageTemplate
        title="Popular Actors"
        results={actors}
      
      />
      <span>Current Page: {page}</span>
      <button
        onClick={() => setPage(old => Math.max(old - 1, 1))}
        disabled={page === 1}
      >
        Previous Page
      </button>{' '}
      <button
        onClick={() => {
          if (!isPreviousData && data?.hasMore) {
            setPage(old => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.hasMore}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}{' '}
    </>
  );
};
export default PopularActorsPage;
