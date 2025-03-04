import { ThemeProvider } from "@mui/material/styles";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import store, {persistor} from "./app/store";
import { ToastContainer } from "react-toastify";
import ErrorBoundary from "./components/ErrorBoundary";
import { PersistGate } from "redux-persist/integration/react";
import { CssBaseline } from "@mui/material";
import { theme } from "./styles/theme";

function App() {

  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
      <CssBaseline />
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
