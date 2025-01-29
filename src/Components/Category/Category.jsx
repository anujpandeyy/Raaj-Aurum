import React from 'react';
import './Category.css';

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
        <div className="photo-carousel"></div>
       </div>
    )
};


export default Category;