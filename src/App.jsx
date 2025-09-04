import TopMovies from "./components/Hero/TopMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroSlider from "./components/HeroSlider/HeroSlider";
import { Route, Routes } from "react-router-dom";
import { DetailsPage } from "./components/DetailsPage/DeatilsPage";
import Header from "./components/hero/Header";
import { createContext, useState } from "react";
import LoginPage from "./Login";


export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({name: "krishna", age: 26})

  const [tab, setTab] = useState(1)
  const tabChange = () => {
    setTab(2)
  }

 const data1 = "234"


  return (
    <>
   
    {/* <Header /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LoginPage />
            </>
          }
        />
         <Route path="/home" element={<div>
          <Header /><TopMovies type="movie"/>
         </div>} />

        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
