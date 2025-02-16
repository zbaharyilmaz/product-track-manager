import { TextField, Button } from "@mui/material";

const RegisterForm = (
    {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }
) => {

  return (
         <form onSubmit={handleSubmit}> {/* Fixed: Add onSubmit to form */}
                <TextField
                  name="username"
                  value={values.username}
                  label="Username"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  onBlur={handleBlur}
                  margin="dense"
                />
                <TextField
                  name="firstName"
                  value={values.firstName}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  error={touched.firstName && Boolean(errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                  onBlur={handleBlur}
                  margin="dense"
                />
                <TextField
                  name="lastName"
                  value={values.lastName}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  error={touched.lastName && Boolean(errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                  onBlur={handleBlur}
                  margin="dense"
                />
                <TextField
                  name="email"
                  value={values.email}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  onBlur={handleBlur}
                  margin="dense"
                  type="email"
                />
                <TextField
                  name="password"
                  value={values.password}
                  label="Password"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  margin="dense"
                  type="password"
                />
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  color="primary"
                  margin="dense"
                  disabled={isSubmitting}
                >
                  SEND
                </Button>
              </form>
  );
};

export default RegisterForm;