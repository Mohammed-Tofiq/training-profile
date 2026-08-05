import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Slider from "./Slider";
import Toogle from "./toggle"
import Card from "./Card"
import Practice from "./Practice";

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
        <Slider />
        <Card />
          <Practice />
        
        {/* <Toogle /> */}
        <Footer />
      </div>
    </>
  );
};

export default Home;
