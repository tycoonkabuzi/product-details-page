import { useNavigate, useParams } from "react-router";

const Details = ({ products }) => {
  const parameter = useParams();
  console.log(parameter.id);

  const clickedElement = products.find(
    (product) => product.id == parseInt(parameter.id)
  );

  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={goBack}>Go back</button>
      {clickedElement ? (
        <div>
          {" "}
          <h1>{clickedElement.name}</h1>
          <p>{clickedElement.details}</p>
        </div>
      ) : (
        <h1>Page not found 404</h1>
      )}
    </>
  );
};
export default Details;
