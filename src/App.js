import "./App.css";
import Ui from "./UI/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Kidspage from "./page/GenderPages/Kidspage";
import Menpage from "./page/GenderPages/Menpage";
import Womenpage from "./page/GenderPages/Womenpage";
import CartPage from "./page/CartPages/CartPage";
import Authentication from "./page/Authentication";
import NewArrival from "./page/NewArrival";
import Search from "./components/Search";
import Error from "./page/Error";
import EachItem from "./page/EachItem";
import Checkout from "./page/CartPages/Checkout";
import Payment from "./page/CartPages/Payment";
import Review from "./page/CartPages/Review";

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
      { path: "/cart/payment", element: <Payment /> },
      { path: "cart/review", element: <Review /> },
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
