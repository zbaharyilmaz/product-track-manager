import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import { UserAddOutlined } from "@ant-design/icons";
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "../components/RegisterForm";
import useAuthCall from "../hook/useAuthCall";

const Register = () => {
  const { register } = useAuthCall();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too short. Username should be more than 5 character")
      .max(50, "Too Long! Username shouldn't be more than 50 character")
      .required("Required"),
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be more than 8 character")
      .matches(/[a-z]/, "Password should include lowercase")
      .matches(/[A-Z]/, "Password should include lowercase")
      .matches(/\d+/, "Password should include numeric")
      .matches(
        /[@$?!%&*_-]+/,
        "Password should include special characters (@$?!%&*_-)"
      ),
  });

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      <AuthHeader />
      <Typography variant="h5" align="center" mb={1} color="primary.main">Track. Stock. Optimize. Sell. Grow.</Typography> 

      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          flexGrow: 1, 
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <UserAddOutlined style={{ fontSize: "30px" }} />
          </Avatar>
          <Typography variant="h4" align="center" m={3} color="secondary.main">
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              console.log(values);
              register(values);
            }}
            component={(props) => <RegisterForm {...props} />}
          />

          <Box sx={{ textAlign: "center", mt: 3, mb: 4 }}>
            <Link to="/">New here? Create an account!</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
