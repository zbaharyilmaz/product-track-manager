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
