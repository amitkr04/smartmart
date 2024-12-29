import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//pages
import Home from "./Pages/Home";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Profile from "./Pages/Profile.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import Checkout from "./Pages/Checkout.jsx";
//components
import Cart from "./Pages/Cart";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//context
import { UserContextProvider } from "./Context/UserContextProvider.jsx";
//redux
import { Provider } from "react-redux";
import store from "./Redux/Store/Store.js";
//secure
import PrivateRoute from "./Components/PrivateRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} exact>
      <Route index element={<Home />} />
      <Route path="cart" element={<Cart />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<PrivateRoute />}>
        <Route index element={<Profile />} />
      </Route>
      <Route path="product/:id" element={<ProductDetails />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </Provider>
  </StrictMode>
);
