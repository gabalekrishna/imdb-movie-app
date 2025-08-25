import TopMovies from "./components/Hero/TopMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import { Route, Routes } from "react-router-dom";
import { DeatilsPage } from "./components/DetailsPage/DeatilsPage";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSlider />
              <TopMovies />
            </>
          }
        />
        <Route path="/details/:id" element={<DeatilsPage/>} />
      </Routes>

      {/* <TopMovies />
    <TopMovies /> */}
      {/* <Hero /> */}
      {/* <HeroSlider /> */}
    </>
  );
}

export default App;
