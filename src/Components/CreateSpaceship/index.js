import React, { useState } from "react";
import {
  Grid,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
} from "@mui/material";

const defaultValues = {
  typeSpaceship: "",
  loadCapacity: "",
  orbitSpeed: "",
  engineNumber: "",
};

const CreateSpaceship = () => {
  const [newSpaceship, setNewSpaceship] = useState(defaultValues);
  const [loading, setLoading] = useState(false);

  const createSpaceship = async () => {
    try {
      console.log("nave", newSpaceship);
      setLoading(true);
      const responseSpaceships = await fetch(
        "https://retosofkau.herokuapp.com/api/spaceship"
      );
      console.log("responseSpaceships", responseSpaceships);
      setNewSpaceship(defaultValues);
      setLoading(false);
    } catch (error) {}
  };

  const handleSpaceship = (event, prop) => {
    const { value } = event.target;
    setNewSpaceship({ ...newSpaceship, [prop]: value });
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
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Tipo de nave
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-weight"
            value={newSpaceship.typeSpaceship}
            onChange={(e) => handleSpaceship(e, "typeSpaceship")}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            label="   Tipo de nave"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Capacidad de carga
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-weight"
            value={newSpaceship.loadCapacity}
            onChange={(e) => handleSpaceship(e, "loadCapacity")}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            label="Capacidad de carga"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Velocidad de orbita
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-weight"
            value={newSpaceship.orbitSpeed}
            onChange={(e) => handleSpaceship(e, "orbitSpeed")}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            label="Velocidad de orbita"
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Numero de motores
          </InputLabel>
          <OutlinedInput
            required
            id="outlined-adornment-weight"
            value={newSpaceship.engineNumber}
            onChange={(e) => handleSpaceship(e, "engineNumber")}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            label="Numero de motores"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" onClick={createSpaceship}>
          Guardar
        </Button>
      </Grid>
    </Grid>
  );
};

export default CreateSpaceship;
