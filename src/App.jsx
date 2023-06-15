import { useState, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Header from "./header/Header";
import Home from "./home/Home";
import Footer from "./Footer/Footer";
import About from "./About/About";
import ServiceItem from "./Services/ServiceItem";
import Services from "./Services/Services";
import Blog from "./Blog/Blog";
import BlogItem from "./Blog/BlogItem";
import Contact from "./Contact/Contact";
const Page = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Page />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services/:service" element={<ServiceItem />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-posts/:name" element={<BlogItem />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
