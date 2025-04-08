import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa"; // Import the search icon
import logoo from "../assets/images/Logo.jpg";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <div className="container-fluid p-0">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-dark">
        <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none px-3">
          <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
            <img
              src={logoo}
              alt="Logo"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
            />
          </Link>
          <span className="text-white fs-4 px-3">FLASH PULSE</span>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 mx-md-5">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/news/${category}`} className="nav-link px-2 text-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <form className="d-flex" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search news..."
            className="form-control me-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">
            <FaSearch /> {/* Using the search icon */}
          </button>
        </form>
      </header>
    </div>
  );
};

export default Navbar;

