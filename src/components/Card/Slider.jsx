import Slider from "react-slick";
import Hero from "../Hero/Hero";



const SliderSlide = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
    return (
        <Slider {...settings}>
      <div>
       <Hero />
      </div>
      <div>
      <Hero />
      </div>
      <div>
      <Hero />
      </div>
      <div>
      <Hero />
      </div>
      <div>
      <Hero />
      </div>
      <div>
      <Hero />
      </div>
    </Slider>
    // </div>
    )
}


export default SliderSlide;