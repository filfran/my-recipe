import { useState } from "react";

import Header from "Layouts/Header";
import SearchBar from "Layouts/SearchBar";

import { createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";

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
      main: "#545254",
    },
  },
});

function App() {
  const { main } = styles;
  const url = process.env.REACT_APP_RECIPES_URL;
  const apiKey = process.env.REACT_APP_API_KEY;

  const [searchValue, setSearchValue] = useState("");

  const changeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.get(
        `${url}?apiKey=${apiKey}&query=${searchValue}`
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div className={main}>
        <SearchBar
          searchHandler={searchHandler}
          changeHandler={changeHandler}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
