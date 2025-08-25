import React from "react";
import "./HeroSlider.css";
import Slider from "react-slick";
import bg1 from "../../assets/movieposter.png";
import bg2 from "../../assets/poster1.jpg.webp";
import bg3 from "../../assets/poster2.jpeg";
import imdbLogo from "../../assets/IMDBlogo.png";

const backgrounds = [bg1, bg2, bg3];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };
  const slides = [
    {
      image: bg1,
      title: "Dune: Part Two",
      tags: ["Action", "Adventure", "Drama"],
      description:
        "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
      subtitle: "In theaters",
    },
    {
      image: bg2,
      title: "The Batman",
      tags: ["Action", "Crime", "Thriller"],
      description:
        "Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.",
      subtitle: "Now streaming",
    },
    {
      image: bg3,
      title: "Oppenheimer",
      tags: ["Biography", "Drama", "History"],
      description:
        "The story of J. Robert Oppenheimer and the development of the atomic bomb during World War II.",
      subtitle: "In select theaters",
    },
  ];
  
  return (
    <div className="hero-container">
       <div className="navbar">
          <div className="navbar-left">
            {" "}
            <img src={imdbLogo} alt="IMDb" className="logo" />{" "}
          </div>
          <div className="navbar-center">
            {" "}
            <a href="#">Movies</a> <a href="#">TV shows</a>{" "}
            <a href="#">Celebs</a> <a href="#">News & events</a>{" "}
          </div>
          <div className="navbar-right">
            {" "}
            <span className="icon">🔍</span> <a href="#">Watchlist</a>{" "}
            <span className="icon">👤</span>{" "}
          </div>
        </div>
      <Slider {...settings} className="hero-slider">
      {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="herobg"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
               <div className="hero-overlay">
       
        <div className="hero-content">
          <h1 className="hero-title">{slide.title}</h1>
          <div className="hero-tags">
            {slide.tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>
          <p className="hero-description">{slide.description}</p>
          <p className="hero-subtitle">{slide.subtitle}</p>
        </div>
      </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
