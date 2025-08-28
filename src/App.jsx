import TopMovies from "./components/Hero/TopMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./components/DetailsPage/DeatilsPage";
import Header from "./components/hero/Header";

function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <HeroSlider /> */}
              <TopMovies />
            </>
          }
        />
        <Route path="/details/:id" element={<DetailsPage/>} />
      </Routes>

      {/* <TopMovies />
    <TopMovies /> */}
      {/* <Hero /> */}
      {/* <HeroSlider /> */}
    </>
  );
}

export default App;
