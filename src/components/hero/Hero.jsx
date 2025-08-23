import './Hero.css'
import imdbLogo from '../../assets/IMDBlogo.png'
import SliderSlide from '../Card/Slider'

const Hero = () => {
  return (
    <div className="herobg">
      {/* Navbar */}
      <div className="navbar">
        <div className="navbar-left">
          <img src={imdbLogo} alt="IMDb" className="logo" />
        </div>
        <div className="navbar-center">
          <a href="#">Movies</a>
          <a href="#">TV shows</a>
          <a href="#">Celebs</a>
          <a href="#">News & events</a>
        </div>

        <div className="navbar-right">
          <span className="icon">🔍</span>
          <a href="#">Watchlist</a>
          <span className="icon">👤</span>
        </div>
      </div>

      {/* Hero content */}
      <div className="hero-content">
        <h1 className="hero-title">Dune: Part Two</h1>

        <div className="hero-tags">
          <span>Action</span>
          <span>Adventure</span>
          <span>Drama</span>
        </div>

        <p className="hero-description">
          Paul Atreides unites with Chani and the Fremen while seeking revenge 
          against the conspirators who destroyed his family.
        </p>

        <p className="hero-subtitle">In theaters</p>
      </div>
      
    </div>
  )
}

export default Hero
