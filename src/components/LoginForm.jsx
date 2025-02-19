import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"; //! bu şekilde de direk olarak metodları alıp yine validasyon şemamızı oluşturabiliriz. 



const LoginForm = ({ values, handleChange, errors, touched, handleBlur,handleSubmit }) => {
  const { loading } = useSelector(state => state.auth);// storeda yaptığımız fetchStart işlemini kullanmış olduk.
  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="username"
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
          label="password"
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
          <Button variant="contained" type="submit">
           Sign In
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}>
            <CircularProgress />
          </Button>
        )}

        {/* <Button
          variant="contained"
          type="submit"
          disabled={loading}
          startIcon={loading && <CircularProgress />}>
          Submit
        </Button> */}
      </Box>
    </Form>
  );
}

export default LoginForm
