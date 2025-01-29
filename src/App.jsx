import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Ring from '../src/assets/ring.jpg';
import Band from '../src/assets/ring.jpg';
import Earring from '../src/assets/ring.jpg';
import Necklace from '../src/assets/ring.jpg';



function App(){
  const categories = [
    {img: Ring,text: "Rings"},
    {img: Band,text: "Bands"},
    {img: Earring,text: "Earrings"},
    {img: Necklace,text: "Necklaces"}
  ];
  return (
    <>
       <NavBar></NavBar>
       <Hero></Hero>
       <Category categories = {categories}></Category>
    </>
  );
}



export default App;