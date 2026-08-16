import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";

interface TemplateActorPageProps {
  actor: ActorDetailsProps;
  children: React.ReactElement;
}

const TemplateActorPage: React.FC<TemplateActorPageProps> = ({ actor, children }) => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      <Grid item xs={12}>
        <Typography variant="h4" textAlign="center">{actor.name}</Typography>
      </Grid>
      {actor.profile_path && (
        <Grid item xs={12} sm={4}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
            alt={actor.name}
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Grid>
      )}
      <Grid item xs={12} sm={8}>
        {children}
      </Grid>
    </Grid>
  );
};

export default TemplateActorPage;
