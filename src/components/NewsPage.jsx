import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const NewsPage = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading news...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5">{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      {articles.length === 0 ? (
        <p>No news available.</p>
      ) : (
        <div className="row">
          {articles.map((article, index) => (
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
                      borderRadius: "0.375rem", // Optional: to give rounded corners to images
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
                  {/* Open the article in a new tab */}
                  <a
                    href={article.url} // Use the URL from the article to link to the full article
                    className="btn btn-primary w-100"
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer" // Security feature to avoid exploitation
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

export default NewsPage;
