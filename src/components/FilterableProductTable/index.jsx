import { useState } from "react";

import SearchBar from "../SearchBar";
import ProductTable from "../ProductTable";
import classes from "./index.module.css";

function FilterableProductTable(props) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  function updateFilterTextHandler(filteredText) {
    setFilterText(filteredText);
  }

  function updateInStockOnlyHandler(inStockOnlyChecked) {
    setInStockOnly(inStockOnlyChecked);
  }

  return (
    <div className={classes.FilteredTable__container}>
      <SearchBar
        updateFilterText={updateFilterTextHandler}
        updateInStockOnly={updateInStockOnlyHandler}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={props.products}
      />
    </div>
  );
}

export default FilterableProductTable;
