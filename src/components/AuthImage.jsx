import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
const AuthImage = ({ image }) => {
  return (
    <Grid item xs={10} sm={7} md={6}>
      <Container>
        <img src={image} alt="img" style={{ width: "100%" }} />
      </Container>
    </Grid>
  );
};

export default AuthImage;
