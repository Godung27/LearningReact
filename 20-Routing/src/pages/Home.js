import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <p>My Home Page</p>
      <p>
        Go to <Link to={"/products"}>List of Products</Link>
      </p>
    </>
  );
}