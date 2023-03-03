import "./App.css";
import Ui from "./UI/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Menpage from "./page/Menpage";
import Womenpage from "./page/Womenpage";
import Kidspage from "./page/Kidspage";
import CartPage from "./page/CartPage";
import Authentication from "./page/Authentication";
import NewArrival from "./page/NewArrival";
import Search from "./components/Search";
import Error from "./page/Error";
import EachItem from "./page/EachItem";
import Checkout from "./page/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, path: "", element: <Ui /> },
      { path: "/men", element: <Menpage /> },
      { path: "/women", element: <Womenpage /> },
      { path: "/kids", element: <Kidspage /> },
      { path: "/cart", element: <CartPage /> },
      { path: "/cart/checkout", element: <Checkout /> },
      { path: "/authentication", element: <Authentication /> },
      { path: "/new-arrival", element: <NewArrival /> },
      { path: "/search", element: <Search /> },
      { path: "/search/:product", element: <EachItem /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
