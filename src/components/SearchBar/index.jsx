import classes from "./index.module.css";

function SearchBar(props) {
  return (
    <form>
      <input
        type="text"
        name="SearchBar"
        id="SearchBar"
        placeholder="Search..."
        value={props.filterText}
        onChange={(e) => props.updateFilterText(e.target.value)}
      />
      <label className={classes.displayBlock} htmlFor="OnlyProductsInStock">
        <input
          type="checkbox"
          name="OnlyProductsInStock"
          id="OnlyProductsInStock"
          checked={props.inStockOnly}
          onChange={(e) => props.updateInStockOnly(e.target.checked)}
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
