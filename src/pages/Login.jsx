import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { LoginOutlined } from "@ant-design/icons";
import * as Yup from "yup";
import AuthHeader from "../components/AuthHeader";
import LoginForm from "../components/LoginForm";
import useAuthCall from "../hook/useAuthCall";

const Login = () => {
  const { login } = useAuthCall();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Username cannot be less than 5 characters")
      .max(50, "Username cannot be more than 50 characters")
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12} sm={10} md={6}>
          <AuthHeader />
          <Typography variant="h5" align="center" m={3} color="primary.main">
            Track. Stock. Optimize. Sell. Grow.
          </Typography>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 50,
              height: 50,
            }}
          >
            <LoginOutlined style={{ fontSize: "30px" }} />
          </Avatar>
          <Typography variant="h4" align="center" m={3} color="secondary.main">
            Login
          </Typography>

          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              login(values);
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          />

          <Box
            sx={{ textAlign: "center", mt: 3, color: "customColors.color2" }}
          >
            <Link to="/register">New here? Create an account!</Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
