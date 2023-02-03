import "./App.css";
import Ui from "./UI/ui";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./page/Root";
import Menpage from "./page/Menpage";
import Womenpage from "./page/Womenpage";
import Kidspage from "./page/Kidspage";
import Cart from "./page/Cart";
import Authentication from "./page/Authentication";
import NewArrival from "./page/NewArrival";
import Search from "./page/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Ui />,
      },
      { path: "/men", element: <Menpage /> },
      { path: "/women", element: <Womenpage /> },
      { path: "/kids", element: <Kidspage /> },
      { path: "/cart", element: <Cart /> },
      { path: "/authentication", element: <Authentication /> },
      { path: "/new-arrival", element: <NewArrival /> },
      { path: `{/search/${search}}`, element: <Search /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
