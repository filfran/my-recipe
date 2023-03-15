import SearchIcon from "@mui/icons-material/Search";

import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { search, search__form, search__input, search__label, search__btn } =
    styles;
  const { searchHandler, changeHandler } = props;

  return (
    <div className={search}>
      <form onSubmit={searchHandler} className={search__form}>
        <input
          placeholder="Search for a recipe (e.g. Pizza) or an igredient.."
          onChange={changeHandler}
          className={search__input}
          id="search"
        />
        <label htmlFor="search" className={search__label}>
          Search for a recipe (e.g. Pizza) or an igredient..
        </label>
        <button type="submit" className={search__btn}>
          <span>
            <SearchIcon fontSize="large" />
            &nbsp; Search
          </span>
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
