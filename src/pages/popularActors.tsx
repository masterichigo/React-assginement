import React, { useState } from "react";
import CustomToggleButton from "../components/toggleButton";
import PageTemplate from '../components/templateActorListPage';
import { getPopularActors, getTrending } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { Actor } from "../types/interfaces";
import Spinner from "../components/spinner";


const PopularActorsPage: React.FC = () => {
  const [trending, setTrending] = useState("None");

  const { data, error, isLoading, isError } = useQuery<Actor[], Error>(
    ["actors", trending],
    () => trending !== "None" ? getTrending(trending) : getPopularActors()
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
      <CustomToggleButton value={trending} onChange={(event, newValue) => setTrending(newValue)} />
      <br />
      <br />
      <PageTemplate
        title="Popular Actors"
        results={actors}
      />
    </>
  );
};
export default PopularActorsPage;
