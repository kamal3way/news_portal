import React from "react";
import { Link } from "react-router-dom";

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology",
];

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3 my-4">
      <div className="container">
        {/* Quick Links Section */}
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {categories.map((category) => (
            <li key={category} className="nav-item">
              <Link to={`/news/${category}`} className="nav-link px-2 text-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer Bottom Text */}
        <p className="text-center text-white">©2025, Developed By Neha Majithiya @ 3Way Technologies</p>
      </div>
    </footer>
  );
};

export default Footer;
