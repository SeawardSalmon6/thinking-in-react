import ProductCategoryRow from "../ProductCategoryRow";
import ProductRow from "../ProductRow";

function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  // --> For each product...
  props.products.forEach((product) => {
    if (product.name.indexOf(props.filterText) === -1) {
      return;
    }
    if (props.inStockOnly && !product.stocked) {
      return;
    }
    if (product.category !== lastCategory) {
      // --> If product has a new category
      rows.push(
        // --> Push a row as a product heading
        <ProductCategoryRow
          key={product.category}
          category={product.category}
        />
      );
    }

    // --> Push every product into rows
    rows.push(<ProductRow key={product.name} product={product} />);
    lastCategory = product.category; // --> Updates last product category
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
