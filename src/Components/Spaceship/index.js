import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ListSpaceship from "../ListSpaceship";

const Spaceship = () => {
  const [spaceships, setSpacesShips] = useState([]);
  const [loading, setLoading] = useState(true);

  const getSpaceShips = async () => {
    try {
      setLoading(true);
      const responseSpaceships = await fetch(
        "https://retosofkau.herokuapp.com/api/spaceship"
      );
      const data = await responseSpaceships.json();
      setSpacesShips(data.spaceships);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSpaceShips();
  }, []);

  if (loading) return <>Cagando...</>;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        <h3>Todas naves</h3>
      </Grid>
      <ListSpaceship spaceships={spaceships} />
    </Grid>
  );
};

export default Spaceship;
