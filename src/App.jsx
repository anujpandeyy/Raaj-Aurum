import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Ring from '../src/assets/ring.jpg';
import Band from '../src/assets/ring.jpg';
import Earring from '../src/assets/ring.jpg';
import Necklace from '../src/assets/ring.jpg';
import BestSeller from './Components/BestSeller/BestSeller';
import Hero1 from '../src/assets/ring-hero.jpg';
import Hero2 from '../src/assets/ring-hero-2.jpg';
import Hero3 from '../src/assets/ring-hero-3.jpg';
import Hero4 from '../src/assets/ring-hero-4.jpg';
import Review from './Components/Review/Review';




function App(){
  const categories = [
    {img: Ring,text: "Rings"},
    {img: Band,text: "Bands"},
    {img: Earring,text: "Earrings"},
    {img: Necklace,text: "Necklaces"}
  ];

  const slides = [
    {img: Hero1,text: "Rings",price: "$500"},
    {img: Hero2,text: "Bands",price: "$700"},
    {img: Hero3,text: "Earrings",price: "$900"},
    {img: Hero4,text: "Necklaces",price: "$1200"}
  ];

  const containerStyles = {
    width: "105rem",
    height: "400px",
    margin: "0 auto"
  }


  return (
    <>
       <NavBar></NavBar>
       <Hero></Hero>
       <Category categories = {categories}></Category>
       <div style={containerStyles}>
       <BestSeller slides = {slides}></BestSeller>
       </div>
       <Review></Review>
    </>
  );
}



export default App;