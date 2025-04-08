import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const { query } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = "9c31d7bbb7b94a6fb182be5bdc8012b5";

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
        );
        setResults(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching search results:", error);
        setLoading(false);
      }
    };
    fetchResults();
  }, [query]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading search results...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">Search Results for "{query}"</h2>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div className="row">
          {results.map((article, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
              <div className="card d-flex flex-column" style={{ height: "100%" }}>
                {article.urlToImage && (
                  <img
                    src={article.urlToImage}
                    className="card-img-top"
                    alt={article.title}
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "0.375rem",
                    }}
                  />
                )}
                <div className="card-body d-flex flex-column" style={{ flex: "1" }}>
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text" style={{ flex: "1" }}>
                    {article.description && article.description.length > 100
                      ? article.description.substring(0, 100) + "..."
                      : article.description}
                  </p>
                  <a
                    href={article.url}
                    className="btn btn-primary w-100"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
