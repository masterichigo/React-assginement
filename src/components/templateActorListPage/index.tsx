import React from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";
import { Actor } from "../../types/interfaces";

const styles = {
  root: { 
    backgroundColor: "#bfbfbf",
  }
};

interface ActorListPageTemplateProps {
  results: Actor[];
  title: string;
}

const ActorListPageTemplate: React.FC<ActorListPageTemplateProps> = ({ results, title })=> {
  return (
    <Grid container sx={styles.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
       <ActorList results={results}></ActorList>
      </Grid>
    </Grid>
  );
}
export default ActorListPageTemplate;
