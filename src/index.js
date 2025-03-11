import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from '@auth0/auth0-react';
import { AppProvider } from "./context/productcontext";
import { CartProvider } from "./context/cart_context";
import { FilterContextProvider } from "./context/filter_context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Auth0Provider
    domain="dev-jj7lca30prsry0kd.us.auth0.com"
    clientId="D2GMyqcJUwWh1DowdRAyXTgBovw36ybp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <AppProvider><FilterContextProvider><CartProvider><App /></CartProvider></FilterContextProvider></AppProvider> 
</Auth0Provider>)


reportWebVitals();
