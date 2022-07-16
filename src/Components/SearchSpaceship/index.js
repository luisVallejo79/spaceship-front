import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

import ListSpaceship from "../ListSpaceship";

const SearchSpaceship = () => {
  const [inputSearchSpaceship, setSearchSpaceship] = useState("");
  const [spaceships, setSpacesShips] = useState([]);
  const [loading, setLoading] = useState(false);

  const getSpaceship = () => {
    console.log("inputSearchSpaceship", inputSearchSpaceship);
    setLoading(true);
    setSpacesShips([]);
    setLoading(false);
  };

  if (loading) return <>Cargando...</>;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <TextField
          id="outlined-required"
          label="Filtro nave"
          defaultValue=""
          onChange={(e) => setSearchSpaceship(e.target.value)}
        />
        <Button
          variant="contained"
          style={{ margin: 10 }}
          onClick={getSpaceship}
        >
          Buscar
        </Button>
      </Grid>
      <Grid item>
        <ListSpaceship spaceships={spaceships} />
      </Grid>
    </Grid>
  );
};

export default SearchSpaceship;
