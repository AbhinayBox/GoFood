import React from "react";
import Navbar from "../componentss/Navbar";
import Footer from "../componentss/Footer";
import Card from "../componentss/Card";
import Carousel from "../componentss/Carousel";

export default function Home() {
  return (
    <>
      <div>
        <div><Navbar /></div>
        <div><Carousel/></div>

        <div className="m-3"><Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
        </div>
          
       
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
