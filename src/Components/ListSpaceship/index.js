import React from "react";
import { Grid } from "@mui/material";

const ListSpaceship = (props) => {
  const { spaceships } = props;

  if (spaceships && spaceships.length === 0)
    return <>No hay naves con esta caracteristica</>;

  return spaceships.map((sp, index) => (
    <Grid item key={index} style={{ borderBottom: "1px solid red" }}>
      {sp ? sp.name : ""}
    </Grid>
  ));
};

export default ListSpaceship;
