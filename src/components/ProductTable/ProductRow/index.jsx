import classes from "./index.module.css";

function ProductRow(props) {
  const product = props.product;

  return (
    <tr>
      <td>
        <span className={!product.stocked ? classes.OutOfStock : null}>
          {product.name}
        </span>
      </td>
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
