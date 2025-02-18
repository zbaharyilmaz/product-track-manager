import user from "../assets/user.png";
import { Avatar, Box, Button, Container, TextField, Typography } from "@mui/material";
import useAuthCall from "../hook/useAuthCall";
import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const { login } = useAuthCall();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password);  
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar
          alt="avatar_img"
          src={user}
          sx={{
            width: 100,
            height: 100,
            border: "primary.main 0.3rem solid",
          }}
        />
        <Typography
          component="h1"
          variant="h5"
          sx={{ marginTop: 2 }}
        >
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)} 
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "primary.main",
              padding: "0.5rem",
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            Sign In
          </Button>
        </Box>
      </Box>

      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="primary.main" href="https://github.com/zbaharyilmaz">
          zbaharyilmaz
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Login;
