import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, {persistor} from "./app/store";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";

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
        color4: "#e5e5cc", 
        color5: "#dd1705", 
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
          <PersistGate persistor={persistor}>
            <AppRouter />
          </PersistGate>
        </Provider>
        <ToastContainer />
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
