import React from "react";
import Slide1 from "../assets/images/Slide1.jpg";
import Slide2 from "../assets/images/Slide2.jpg";
import Slide3 from "../assets/images/Slide3.jpg";

const NewsCarousel = () => {
    const newsItems = [
        {
            image: Slide1,
            headline: "Breaking News: Market Hits Record High",
            description: "The stock market reached an all-time high today with tech stocks leading the rally.",
        },
        {
            image: Slide2,
            headline: "Sports Update: Local Team Wins Championship",
            description: "The local football team won the championship in an electrifying final match.",
        },
        {
            image: Slide3,
            headline: "Tech News: New Smartphone Released",
            description: "A leading tech company unveiled its latest smartphone with groundbreaking features.",
        },
    ];

    return (
        <div className="container">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                {/* Indicators */}
                <div className="carousel-indicators">
                    {newsItems.map((_, index) => (
                        <button
                            key={index}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Carousel Items */}
                <div className="carousel-inner">
                    {newsItems.map((item, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img
                                src={item.image}
                                className="d-block w-100"
                                alt={item.headline}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{item.headline}</h5>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default NewsCarousel;
