import { useState } from "react";
import { Container, Typography, Button, ButtonGroup } from "@mui/material";
import { plus, minus } from "./count";

function TDDCounter() {
  const [number, setNumber] = useState<number>(0);

  const increase = () => {
    setNumber(plus(number));
  };

  const decrease = () => {
    setNumber(minus(number));
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center" }}>
      <Typography variant="h1" gutterBottom>
        Counter
      </Typography>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
        fullWidth
      >
        <Button onClick={increase}>puls</Button>
        <Button onClick={decrease}>minus</Button>
      </ButtonGroup>
      <Typography variant="h2" mt={2}>
        {number}
      </Typography>
    </Container>
  );
}

export default TDDCounter;
