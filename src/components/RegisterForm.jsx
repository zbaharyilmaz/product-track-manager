import React from "react";
import { Box, Button, TextField } from "@mui/material";
const RegisterForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
           <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:"75%", margin:"auto"}}>
      <TextField
        name="username"
        label="Username"
        variant="outlined"
        fullWidth
        value={values.username}
        onChange={handleChange}
        error={touched.username && errors.username}
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
        error={touched.firstName && errors.firstName}
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
        error={touched.lastName && errors.lastName}
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
        error={touched.email && errors.email}
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
        error={touched.password && errors.password}
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
          border:"1px solid",
          color:"secondary.main"
        }}
        type="submit"
      >
        SUBMIT
      </Button>
      </Box>
    </form>
  );
};

export default RegisterForm;
