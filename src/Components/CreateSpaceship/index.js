import React, { useState } from "react";
import {
  Grid,
  Button,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

import { defaultValues, valuesInput } from "./constants";

const CreateSpaceship = () => {
  const [newSpaceship, setNewSpaceship] = useState(defaultValues);
  const [loading, setLoading] = useState(false);

  const createSpaceship = async () => {
    try {
      if (!newSpaceship.name) return;
      setLoading(true);
      await fetch("https://retosofkau.herokuapp.com/api/spaceship", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(newSpaceship),
      });
      setNewSpaceship(defaultValues);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const handleSpaceship = (event, prop) => {
    const { value } = event.target;
    setNewSpaceship({ ...newSpaceship, [prop]: value });
  };

  if (loading) return <>Creando nave...</>;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        {valuesInput.map((input, index) => (
          <FormControl
            sx={{ m: 1, width: "25ch" }}
            variant="outlined"
            key={index}
          >
            <InputLabel htmlFor="outlined-adornment-password">
              {input.label}
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-weight"
              value={newSpaceship[input.value]}
              onChange={(e) => handleSpaceship(e, input.value)}
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              label={input.label}
            />
          </FormControl>
        ))}
        <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
            <FormControlLabel
              onChange={() =>
                setNewSpaceship({
                  ...newSpaceship,
                  active: !newSpaceship.active,
                })
              }
              value={newSpaceship.active}
              control={<Checkbox />}
              label="la nave esta activa ?"
            />
          </FormGroup>
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
