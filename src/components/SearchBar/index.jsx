function SearchBar() {
  return (
    <form>
      <input type="text" name="SearchBar" id="SearchBar" />
      <label htmlFor="OnlyProductsInStock">
        <p>
          <input
            type="checkbox"
            name="OnlyProductsInStock"
            id="OnlyProductsInStock"
          />
          Only show products in stock
        </p>
      </label>
    </form>
  );
}

export default SearchBar;
