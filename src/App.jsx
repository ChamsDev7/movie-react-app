import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import { createTheme } from "./theme";

function App() {
  const theme = createTheme({
    colorPreset: "indigo",
    contrast: "normal",
  });
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
