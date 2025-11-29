import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = function () {
    navigate("/products");
  };

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to={"products"}>List of Products</Link>
      </p>
      <p>
        <button onClick={handleNavigate} >Navigate</button>
      </p>
    </>
  );
}