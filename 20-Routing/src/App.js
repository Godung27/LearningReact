import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./pages/Home.js";
import Products from "./pages/Products.js";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
