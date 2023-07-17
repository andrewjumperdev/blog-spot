import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const logo = "./logo-blog.png";

function App() {
  return (
    <>
      <Header logo={logo} width={120} />
      <Home />
      <Footer logo={logo} width={120} />
    </>
  );
}

export default App;
