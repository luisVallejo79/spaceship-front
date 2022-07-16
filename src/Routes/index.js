import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

import Spaceship from "../Components/Spaceship";
import CreateSpaceship from "../Components/CreateSpaceship";
import SearchSpaceship from "../Components/SearchSpaceship";

const useStyle = makeStyles(() => ({
  link: {
    margin: 5,
    color: "white",
    backgroundColor: "black",
    textDecoration: "none",
    fontWeight: "bold",
    border: "1px solid black",
    padding: 5,
    borderRadius: 5,
  },
}));

const RoutesApp = () => {
  const classes = useStyle();
  return (
    <BrowserRouter>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Link className={classes.link} to="/">
            Listar Naves
          </Link>
          <Link className={classes.link} to="/create-spaceship">
            Crear Nave
          </Link>
          <Link className={classes.link} to="/search-spaceship">
            Buscar Naves
          </Link>
        </Grid>
        <Grid item>
          <Routes>
            <Route index element={<Spaceship />} />
            <Route path="/create-spaceship" element={<CreateSpaceship />} />
            <Route path="/search-spaceship" element={<SearchSpaceship />} />
          </Routes>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
};

export default RoutesApp;
