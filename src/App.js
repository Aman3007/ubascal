//https://github.com/thapatechnical/thapareactecom

import React from "react";
import { BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Home from "./Home";
import Cart from "./Cart";
import About from "./About";
import Contact from "./Contact"
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import ErrorPage from "./ErrorPage";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  const theme = {

    colors: {

      heading: "rgb(24 24 29)",

      text: "rgba(29,29,29,0.8)",

      white: "#fff",

      black: "#212529",

      helper: "#8490ff",

      bg: "rgba(73, 73, 73, 0.4)",

      footer_bg: "rgba(113, 6, 163, 0.5)",

      btn: "rgb(98 84 243)",

      border: "rgba(42, 37, 95, 0.5)",

      hr: "#ffffff",

      gradient:

        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

      shadow:

        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",

      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",

    },

    media: {

      mobile: "768px",

      tab: "998px",

    },

  };
  return (<>
  <ThemeProvider theme={theme}>
    <Router>
    <GlobalStyle/>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Cart" element={<Cart/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/SingleProduct/:id" element={<SingleProduct/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </ThemeProvider>
  </>);
};

export default App;
