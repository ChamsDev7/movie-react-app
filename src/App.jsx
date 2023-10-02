import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import Home from "./pages/Home";
import { store } from "./store";
import { theme } from "../config";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
