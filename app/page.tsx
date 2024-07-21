import React from "react";
import MainContentHero from "../components/MainPage/MainContentHero";
import SecondContentHero from "../components/MainPage/SecondContentHero";
import ThirdContentHero from "../components/MainPage/ThirdContentHero";
import FourthContentHero from "../components/MainPage/FourthContentHero";
import FifthContentHero from "@/components/MainPage/FifthContentHero";
import Footer from "@/components/MainPage/Footer";
const Home = () => {
  return (
    <div>
      <MainContentHero />
      <SecondContentHero />
      <ThirdContentHero />
      <FourthContentHero />
      <FifthContentHero />
	  <Footer/>
    </div>
  );
};

export default Home;
