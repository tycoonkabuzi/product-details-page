import { Link } from "react-router";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <ul className="list" key={product.id}>
          <Link to={`/details/${product.id}`}>
            <li>{product.name}</li>
          </Link>
        </ul>
      ))}
    </div>
  );
};
export default Products;
