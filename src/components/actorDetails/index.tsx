import React from "react";
import Typography from "@mui/material/Typography";
import { ActorDetailsProps } from "../../types/interfaces";

const ActorDetails: React.FC<ActorDetailsProps> = ({ name, biography, birthday, place_of_birth, known_for_department, popularity }) => {
  return (
    <>
      <Typography variant="h5">{name}</Typography>
      <Typography>Department: {known_for_department}</Typography>
      <Typography>Born: {birthday ?? "Unknown"}</Typography>
      <Typography>Place of Birth: {place_of_birth ?? "Unknown"}</Typography>
      <Typography>Popularity: {popularity.toFixed(1)}</Typography>
      <Typography variant="h6" sx={{ mt: 2 }}>Biography</Typography>
      <Typography>{biography || "No biography available."}</Typography>
    </>
  );
};

export default ActorDetails;
