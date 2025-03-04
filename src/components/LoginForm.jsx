import { Button, CircularProgress } from "@mui/material";
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { useSelector } from "react-redux"
import { object, string } from "yup"; 



const LoginForm = ({ values, handleChange, errors, touched, handleBlur,handleSubmit }) => {
  const { loading } = useSelector(state => state.auth)
  return (
    <Form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width:"75%", margin:"auto"}}>
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
          <Button variant="text" sx={{width:"15%",color:"secondary.main",border:"1px solid",margin:2, textAlign:"center",mx:"auto"}} type="submit">
          Login
          </Button>
        ) : (
          <Button variant="contained" disabled={loading}> 
            <CircularProgress sx={{ color: "customColors.color3" }}/>
          </Button>
        )}
      </Box>
    </Form>
  );
}

export default LoginForm
