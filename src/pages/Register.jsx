import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import image from "../assets/regi.avif";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import AuthHeader from "../components/AuthHeader";
import AuthImage from "../components/AuthImage";
import { Formik } from "formik";
import * as Yup from "yup";
import RegisterForm from "../components/RegisterForm";
import useAuthCall from "../hook/useAuthCall";

const Register = () => {
 
  // Burada useAuthCall da yazdığımız hook içindeki fonksiyonu çağırıyoruz
  const {register}=useAuthCall()

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
      .matches(/[@$?!%&*_-]+/, "Password should include special characters (@$?!%&*_-)"),
  });

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

          {/* /* -------------------------------------------------------------------------- */}
          {/* FORMİK YAPISI */}
          <Formik
            initialValues={{
              username: "",
              firstName: "",
              lastName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values)=>{
                console.log(values) 
                register(values)
            }}

            component={(props)=>( <RegisterForm  {...props}   />  )}
          />


        



        {/* /* -------------------------------------------------------------------------- */}

          <Box sx={{ textAlign: "center", mt: 2, color: "secondary.main" }}>
            <Link to="/">Already have an account? Sign in</Link>
          </Box>
        </Grid>

        <AuthImage image={image} />
      </Grid>
    </Container>
  );
};

export default Register;
