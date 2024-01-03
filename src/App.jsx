import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PageNotFound404 from "./pages/404";
import Traveling from "./pages/Traveling";
import DevPage from "./pages/Dev";



function App() {

  return (
      <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/blog-post/:id" element={<Layout><BlogPost /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/contact" element={<Layout><Contact /></Layout>} />
      <Route path="/travel" element={<Layout><Traveling /></Layout>} />
      <Route path="/dev" element={<Layout><DevPage /></Layout>} />
      <Route path="*" element={<Layout><PageNotFound404 /></Layout>} />
      </Routes>
  );
}

export default App;
