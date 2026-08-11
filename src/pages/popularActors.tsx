import React, { useState } from "react";
import CustomToggleButton from "../components/toggleButton";
import PageTemplate from '../components/templateActorListPage';
import { getPopularActors, getTrending } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { ActorResults } from "../types/interfaces";
import Spinner from "../components/spinner";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { CenterFocusStrong } from "@mui/icons-material";

type trendingOptions = "day" | "week" | "None";

const PopularActorsPage: React.FC = () => {
  const [trending, setTrending] = useState<trendingOptions>("None");
  const [page, setPage] = React.useState(1);
  
  const { data, error, isLoading, isError, isFetching, isPreviousData } = useQuery<ActorResults, Error>(
    ["actors", trending, page], //Trending and page are dependencies for the query
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
    onChange={(_event, newValue) => { // in the labs, we defined the function with event paratmeter inside the equivalent of the customToggleButton component to preventdefault behaviour but because the toggle button already has a built in preventdefault behaviour , we directly pass the prop function to the onChange prop of the toggle button group component.
      setTrending(newValue as trendingOptions); // as trendingOptions to escape linting error
      setPage(1);
    }}
    />
    <br />
    <Typography variant="h5" textAlign="center">Current Page: {page}</Typography>
    <Button
    variant="contained"
    onClick={() => setPage(old => Math.max(old - 1, 1))}
    disabled={page === 1}
    >
    Previous Page
    </Button>{' '}
    <Button
    variant="contained"
    onClick={() => {
      if (!isPreviousData && data?.hasMore) {
        setPage(old => old + 1)
      }
    }}
    // Disable the Next Page button until we know a next page is available
    disabled={isPreviousData || !data?.hasMore}
    >
    Next Page
    </Button>
    {isFetching ? <span> Loading...</span> : null}{' '}
    <br />
    <PageTemplate
    title="Popular Actors"
    results={actors}
    
    />
    
    </>
  );
};
export default PopularActorsPage;
