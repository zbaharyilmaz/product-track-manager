import { Button, CircularProgress, Divider } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Form } from "formik";
import { useSelector } from "react-redux";
import { object, string } from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import useAuthCall from "../hook/useAuthCall";

const LoginForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
  handleSubmit,
}) => {
  const { loading } = useSelector((state) => state.auth);
  const { login } = useAuthCall();
  return (
    <Form onSubmit={handleSubmit}>
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
          label="Username"
          name="username"
          id="username"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.username && errors.username}
          error={touched.username && Boolean(errors.username)}
        />
        <TextField
          label="Password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />
        {!loading ? (
          <>
            <Button
              variant="text"
              sx={{
                width: "15%",
                color: "secondary.main",
                border: "1px solid",
                margin: 2,
                textAlign: "center",
                mx: "auto",
              }}
              type="submit"
            >
              Login
            </Button>
            <Divider sx={{ my: 2 }}>
              <span style={{ color: "#666", fontSize: "14px" }}>OR</span>
            </Divider>
            <Button
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={() => {
                // Simulate Google OAuth flow
                const proceedWithGoogle = window.confirm(
                  "Google ile giriş yapmak istiyor musunuz?\n\n" +
                    "Bu işlem Google hesabınızla bağlantı kurulmasını gerektirir.\n" +
                    "Devam etmek için 'Tamam'a tıklayın."
                );

                if (proceedWithGoogle) {
                  // Show loading state
                  const loadingAlert = window.alert(
                    "Google ile bağlantı kuruluyor...\nLütfen bekleyin."
                  );

                  // Simulate OAuth delay
                  setTimeout(() => {
                    const mockGoogleCredentials = {
                      username: `google_user_${Date.now()}`,
                      email: `user${Date.now()}@gmail.com`,
                      password: "google_oauth_token",
                    };

                    console.log(
                      "Google OAuth completed:",
                      mockGoogleCredentials
                    );
                    login(mockGoogleCredentials);
                  }, 500); // 0.5 second delay for faster experience
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
              Sign in with Google
            </Button>
          </>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress sx={{ color: "customColors.color3" }} />
          </Button>
        )}
      </Box>
    </Form>
  );
};

export default LoginForm;
