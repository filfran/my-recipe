import styles from "./SearchBar.module.scss";

const SearchBar = (props) => {
  const { search } = styles;
  const { searchHandler, changeHandler } = props;

  return (
    <div className={search}>
      <form onSubmit={searchHandler}>
        <input
          placeholder="Search for a recipe (e.g. Pizza) or an igredient (e.g. Banana)"
          onChange={changeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
