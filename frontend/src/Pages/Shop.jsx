import React from "react";
import Header from "../components/layout/Headers/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero/Hero";
import Papular from '../components/Papular/Papular';
import Exclusive from "../components/Exclucive/Exclusive";
import NewCollection from "../components/NewCollection/NewCollection";

const Shop = () => {
  return (
    <>
      <Header />
      <Hero />
      <Papular/>


      <Exclusive/>
      <NewCollection/>
      <Footer />
    </>
  );
};

export default Shop;
