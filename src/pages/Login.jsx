import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/hero.png";
import { Link } from "react-router-dom";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import useAuthCall from "../hook/useAuthCall";
import LoginForm from "../components/LoginForm";
import * as Yup from "yup";
const Login = () => {
  const { login } = useAuthCall();

  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Kullanıcı adı 5 karakterden az olamaz")
      .max(50, "Kullanıcı adı 50 karakterden fazla olamaz")
      .required("Kullanıcı adı zorunludur"),
    password: Yup.string().required("password zorunludur"),
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
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.main",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography variant="h4" align="center" mb={4} color="secondary.main">
            SIGN IN
          </Typography>

          <Formik
            initialValues={{ username: "", password: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values, actions) => {
              login(values);
              console.log(values, "loginiçinde");
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <LoginForm {...props} />}
          />

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/register">Don't have an account? Sign Up</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Login;
