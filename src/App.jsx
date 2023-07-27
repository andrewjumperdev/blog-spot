import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound404 from "./pages/404";



function App() {

  return (
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/blog-post/:id" element={<Layout><BlogPost /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="*" element={<Layout><PageNotFound404 /></Layout>} />
      </Routes>
  );
}

export default App;
