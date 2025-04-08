
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import NewsPage from "./components/NewsPage";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:category" element={<NewsPage />} />
        <Route path="/search/:query" element={<SearchResults />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
