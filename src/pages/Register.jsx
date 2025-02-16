import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import * as Yup from "yup";
import register from "../assets/register.png";
import RegisterForm from "../components/RegisterForm";

const Register = () => {
  const signupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
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
      .min(8, "Password must be at least 8 characters")
      .max(15, "Too Long!")
      .required("Required")
      .matches(/[a-z]/, "Password must contain lowercase letters")
      .matches(/[A-Z]/, "Password must contain uppercase letters")
      .matches(/[0-9]/, "Password must contain numbers")
      .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, "Password must contain special characters")
     
  });

  const handleSubmit = (values) => {
    console.log(values); 
  };

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <AuthHeader />

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
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
            validationSchema={signupSchema} 
            onSubmit={(values)=>console.log(values)}
          >
            component={(props)=>(<RegisterForm {...props}/>)}
         
          </Formik>

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>
      <Box sx={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <AuthImage image={register}  /> 
      </Box>
       
      </Grid>
    </Container>
  );
};

export default Register;