import React from "react";
import PageTemplate from '../components/templateActorListPage';
import { getPopularActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { Actor } from "../types/interfaces";
import Spinner from "../components/spinner";

const PopularActorsPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<Actor[], Error>("popular", getPopularActors);
  const actors = data ? data : [];

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  
  return (  
    <PageTemplate
      title="Popular Actors"
      results={actors}
    />
  );
};
export default PopularActorsPage;
