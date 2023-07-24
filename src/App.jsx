import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";

const logo = "./logo-blog.png";

function App() {
  return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header logo={logo} width={90} />
              <Home />
              <Footer logo={logo} width={80} />
            </>
          }
        />
        <Route
          path="/blog-post/:id"
          element={
            <>
              <Header logo={logo} width={90} />
              <BlogPost />
              <Footer logo={logo} width={80} />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header logo={logo} width={90} />
              <About />
              <Footer logo={logo} width={80} />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header logo={logo} width={90} />
              <Contact />
              <Footer logo={logo} width={80} />
            </>
          }
        />
      </Routes>
  );
}

export default App;
