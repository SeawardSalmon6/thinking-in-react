function SearchBar() {
  return (
    <form>
      <input type="text" name="SearchBar" id="SearchBar" />
      <label htmlFor="OnlyProductsInStock">
        <input
          type="checkbox"
          name="OnlyProductsInStock"
          id="OnlyProductsInStock"
        />
        Only show products in stock
      </label>
    </form>
  );
}

export default SearchBar;
