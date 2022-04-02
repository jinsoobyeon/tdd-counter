import { Container, Typography, Button, ButtonGroup } from "@mui/material";

function TDDCounter() {
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
        <Button>puls</Button>
        <Button>minus</Button>
      </ButtonGroup>
      <Typography variant="h2" mt={2}>
        0
      </Typography>
    </Container>
  );
}

export default TDDCounter;
