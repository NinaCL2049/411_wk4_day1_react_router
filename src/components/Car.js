import React from "react";
import cars from "../cars.json";
import { useParams } from "react-router-dom";
import { Container, Paper, Chip } from "@mui/material";
import Stack from "@mui/material/Stack";

const Car = (props) => {
  const { id } = useParams();

  const car = cars.find((car) => car.id === Number(id));

  if (!car) {
    return <div>Car not found</div>;
  }
  return (
    <div class="MuiPaper-root">
      <Container maxWidth="sm">
        <Paper>
          <h2>{car.Name.toUpperCase()}</h2>
          <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap' }}>
            <Chip label={`id: ${car["id"]}`} />
            <Chip label={`Name: ${car["Name"]}`} />
            <Chip label={`Miles_per_Gallon: ${car["Miles_per_Gallon"]}`} />
            <Chip label={`Cylinders: ${car["Cylinders"]}`} />
            <Chip label={`Displacement: ${car["Displacement"]}`} />
            <Chip label={`Horsepower: ${car["Horsepower"]}`} />
            <Chip label={`Weight_in_lbs: ${car["Weight_in_lbs"]}`} />
            <Chip label={`Acceleration: ${car["Acceleration"]}`} />
            <Chip label={`Year: ${car["Year"]}`} />
            <Chip label={`Origin: ${car["Origin"]}`} />
          </Stack>
        </Paper>
      </Container>
    </div>
  );
};

export default Car;
