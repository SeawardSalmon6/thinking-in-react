import FilterableProductTable from "./components/FilterableProductTable";

const productsData = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

/* ======== App Hierarchy Design
  --> FilterableProductTable
      --> SearchBar
      --> ProductTable
          -> ProductCategoryRow
          -> ProductRow
*/

function App() {
  return <FilterableProductTable products={productsData} />;
}

export default App;
