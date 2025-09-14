import React from "react";
import { Box, Button, TextField, Divider } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import useAuthCall from "../hook/useAuthCall";
const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  const { register } = useAuthCall();
  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "75%",
          margin: "auto",
        }}
      >
        <TextField
          name="username"
          label="Username"
          variant="outlined"
          fullWidth
          value={values.username}
          onChange={handleChange}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
          onBlur={handleBlur}
          margin="normal"
        />
        <TextField
          name="firstName"
          label="First Name"
          variant="outlined"
          fullWidth
          value={values.firstName}
          onChange={handleChange}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
          onBlur={handleBlur}
          margin="normal"
        />
        <TextField
          name="lastName"
          label="Last Name"
          variant="outlined"
          fullWidth
          value={values.lastName}
          onChange={handleChange}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
          onBlur={handleBlur}
          margin="normal"
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          fullWidth
          value={values.email}
          onChange={handleChange}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
          onBlur={handleBlur}
          margin="normal"
          type="email"
        />
        <TextField
          name="password"
          label="Password"
          variant="outlined"
          fullWidth
          value={values.password}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          onBlur={handleBlur}
          margin="normal"
          type="password"
        />
        <Button
          variant="text"
          sx={{
            textAlign: "center",
            margin: 2,
            width: "15%",
            display: "block",
            mx: "auto",
            border: "1px solid",
            color: "secondary.main",
          }}
          type="submit"
        >
          SUBMIT
        </Button>
        <Divider sx={{ my: 2 }}>
          <span style={{ color: "#666", fontSize: "14px" }}>OR</span>
        </Divider>
        <Button
          variant="outlined"
          startIcon={<GoogleIcon />}
          onClick={() => {
            // Simulate Google OAuth flow for registration
            const proceedWithGoogle = window.confirm(
              "Google ile kayıt olmak istiyor musunuz?\n\n" +
                "Bu işlem Google hesabınızla bağlantı kurulmasını ve yeni bir hesap oluşturulmasını gerektirir.\n" +
                "Devam etmek için 'Tamam'a tıklayın."
            );

            if (proceedWithGoogle) {
              // Show loading state
              const loadingAlert = window.alert(
                "Google ile bağlantı kuruluyor...\nYeni hesap oluşturuluyor...\nLütfen bekleyin."
              );

              // Simulate OAuth delay
              setTimeout(() => {
                const mockGoogleUser = {
                  username: `google_user_${Date.now()}`,
                  email: `user${Date.now()}@gmail.com`,
                  password: "google_oauth_token",
                };

                console.log(
                  "Google OAuth registration completed:",
                  mockGoogleUser
                );
                register(mockGoogleUser);
              }, 800); // 0.8 second delay for faster experience
            }
          }}
          sx={{
            width: "80%",
            mx: "auto",
            color: "#4285F4",
            borderColor: "#4285F4",
            "&:hover": {
              borderColor: "#3367D6",
              backgroundColor: "#f8f9fa",
            },
          }}
        >
          Sign up with Google
        </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
