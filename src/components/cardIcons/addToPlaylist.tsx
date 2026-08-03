import React, { MouseEvent, useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import {BaseMovieProps} from "../../types/interfaces"
import IconButton from "@mui/material/IconButton";

import { MoviesContext } from "../../contexts/moviesContext";

const AddToPlaylistIcon:React.FC<BaseMovieProps> = (movie) => {

  const context = useContext(MoviesContext);
  
  const onUserSelect = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      context.addMustWatch(movie);
      console.log( context.mustWatch);
    };
  return (
      <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
     </IconButton>
  );
};

export default  AddToPlaylistIcon;
