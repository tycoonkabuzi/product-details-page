import { useNavigate, useParams } from "react-router";

const Details = ({ products }) => {
  const parameter = useParams();
  const clickedElement = products.find((product) => (product.id = parameter));
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={goBack}>Go back</button>
      <h1>{clickedElement.name}</h1>
      <p>{clickedElement.details}</p>
    </>
  );
};
export default Details;
