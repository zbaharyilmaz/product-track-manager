import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store from "./app/store";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#034159",
      },
      secondary: {
        main: "#02735e",
        second: "#ece9d7",
      },
      customColors: {
        color1: "#593954",  
        color2: "#013440",  
        color3: "#026873",  
        color4: "#038C8C", 
        color5: "#038C7F", 
      },
    },
    typography: {
      fontFamily: '"Neucha", serif',
    },
  });
  
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppRouter />
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
