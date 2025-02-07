import Products from "./Products";

const Home = ({ products }) => {
  return (
    <>
      <h1> Our Products</h1>
      <Products products={products} />
    </>
  );
};
export default Home;
