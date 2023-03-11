import Header from "Layouts/Header";
import SearchBar from "Layouts/SearchBar";

import { createTheme, ThemeProvider } from "@mui/material";

import styles from "./App.module.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffe6ff",
    },
    secondary: {
      main: "#2196f3",
    },
    textColor: {
      main: "#545254 ",
    },
  },
});

function App() {
  const { flex } = styles;

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className={flex}>
        <SearchBar />
      </div>
    </ThemeProvider>
  );
}

export default App;