import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import { UpcomingMovies } from "../types/interfaces";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton/ToggleButton";

const UpcomingMoviesPage: React.FC = () => {
  const { data, error, isLoading, isError } = useQuery<UpcomingMovies, Error>("upcoming", getUpcomingMovies);
  const movies = data ? data : [];
  console.log(movies);
 /*useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  */
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  
  return ( 
  
    <PageTemplate
      title='Upcoming Movies'
      movies={movies}
      action={(movie: BaseMovieProps) => {
        return <AddToPlaylistIcon {...movie} />;
      
      }}
    />
  );
};
export default UpcomingMoviesPage;
