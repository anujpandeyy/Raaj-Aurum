import React from 'react';
import './Category.css';
import Hero1 from '../../assets/ring-hero.jpg';
import Hero2 from '../../assets/ring-hero-2.jpg';
import Hero3 from '../../assets/ring-hero-3.jpg';
import Hero4 from '../../assets/ring-hero-4.jpg';

function Category({categories}){
    console.log(categories);
    return(
       <div className="category-main">
        <div className="title"> 
            <p>Category</p>
        </div>
        <div className="category">
            {categories.map((category, index)=>(
                 <div key= {index} className="ring">
                 <img src={category.img} alt= {category.text} />
                 <div className="rings-txt">
                 <p>{category.text}</p>
                 </div>
                 </div>
            ))}
        </div>
        <div className="photo">
            <div className="photo-img">
                <img src={Hero1} alt="img-1" />
                <img src={Hero2} alt="img-2" />
                <img src={Hero3} alt="img-3" />
                <img src={Hero4} alt="img-4" />
            </div>
        </div>
       </div>
    )
};


export default Category;