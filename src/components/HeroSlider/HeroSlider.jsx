import React from "react";
import IMDBLOGO from "../../assets/IMDBlogo.png";
import "./HeroSlider.css";
import poster from "../../assets/movieposter.png";
import poster1 from "../../assets/poster1.jpg.webp";
import poster2 from "../../assets/poster2.jpeg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HeroSlider = () => {
  const posters = [poster, poster1, poster2];
  const slider = [
    {
        image: poster, 
        title: "Movie Title 1",
        tags: ["Action", "Action 2", "Action 3"],
        description: "lorenjdbnhjbdjbd suhuysgvhsvhsvh"
    },{
        image: poster1, 
        title: "Movie Title 2",
        tags: ["Action", "Action 2"],
        description: "lorenjdbnhjbdjbd suhuysgvhsvhsvh"

    } , {
        image: poster2, 
        title: "Movie Title 3",
        tags: ["Action"],
        description: "lorenjdbnhjbdjbd suhuysgvhsvhsvh"
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-container">
      <div className="navbar">
        <div className="image-div">
          <img src={IMDBLOGO} />
        </div>
        <div className="navbar-links">
          <a>movies</a>
          <a>movies</a>
          <a>movies</a>
          <a>movies</a>
        </div>
        <div className="navbar-buttons">
          <span>Search Icon</span>
          <span>Watch list</span>
          <span>Profile Icon</span>
        </div>
      </div>
      <Carousel>
        {
            slider.map((bg, index)=> {
                return (
                    <div className="hero-bg" style={{backgroundImage: `url(${bg.image})`}}>
                        <div className="hero-content">
                            <h1>{bg.title}</h1>
                            <div className="hero-tags">
                                {
                                    bg.tags.map((tag,index)=> {
                                        return(
                                            <span>{tag}</span>
                                        )
                                    })
                                }
                            </div>
                            <p>{bg.description}</p>
                        </div>
                    </div>
                )
            })
        }
     
        
      </Carousel>
    </div>
  );
};

export default HeroSlider;
