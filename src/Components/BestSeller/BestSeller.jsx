import React, { useState } from 'react';
import './BestSeller.css';
import Ring from '../../assets/Ring.jpg';

function BestSeller({ slides }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative",
    };

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].img})`
    };

    const leftArrorStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrorStyle = {
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="bestseller-main" style={sliderStyles}>
            <div style={leftArrorStyle} onClick={goToPrevious}>{"<"}</div>
            <div style={rightArrorStyle} onClick={goToNext}>{">"}</div>
            <div className="imageslider" style={slideStyles}></div>
            <div className="text">
                <p>Best Sellers</p>
                <a href="#">All Products</a>
            </div>
            <div className="photo">
                <div className="img">
                    <img src={Ring} alt="Product Image" />
                    <div className="img-name">
                        <p>Ring</p>
                    </div>
                    <div className="img-price">
                        <p>$500</p>
                    </div>
                </div>
                <div className="img">
                    <img src={Ring} alt="Another Product" />
                    <div className="img-name">
                        <p>Necklace</p>
                    </div>
                    <div className="img-price">
                        <p>$700</p>
                    </div>
                </div>
                <div className="img">
                    <img src={Ring} alt="Product Image" />
                    <div className="img-name">
                        <p>Ring</p>
                    </div>
                    <div className="img-price">
                        <p>$500</p>
                    </div>
                </div>
                <div className="img">
                    <img src={Ring} alt="Another Product" />
                    <div className="img-name">
                        <p>Necklace</p>
                    </div>
                    <div className="img-price">
                        <p>$700</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestSeller;
