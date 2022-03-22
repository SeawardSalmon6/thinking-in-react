import { useState } from "react";

import SearchBar from "../SearchBar";
import ProductTable from "../ProductTable";

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
    <div>
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
