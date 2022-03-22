function ProductTable(props) {
  const rows = [];
  let lastCategory = null;

  // --> For each product...
  props.products.forEach((product) => {
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
        <td>Name</td>
        <td>price</td>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
