import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import { createRoutesFromElements, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import Products from "./pages/Products.js";
import Root from "./pages/Root.js";
import ErrorPage from "./pages/ErrorPage.js";

// Old Version
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />} />
//     <Route path="/products" element={<Products />} />
//   </Route>
// );
// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
