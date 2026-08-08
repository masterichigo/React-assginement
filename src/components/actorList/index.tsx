import React from "react";
import Actor from "../actorCard/";
import Grid from "@mui/material/Grid";
import { Actor as ActorType } from "../../types/interfaces";

interface ActorListProps {
  results: ActorType[];
}

const ActorList: React.FC<ActorListProps> = ({ results }) => {
  const actorCards = results.map((a) => (
    <Grid key={a.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={a.id} {...a} />

    </Grid>
  ));
  return actorCards;
}

  export default ActorList;
