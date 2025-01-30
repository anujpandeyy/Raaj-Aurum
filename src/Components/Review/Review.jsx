import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Review.css";
import Img from '../../assets/women.jpg';

const Review = () => {
  return (
    <div className="review-container">
      <div className="features">
        <div className="feature">
          <div className="feature-icon">📦</div>
          <h3 className="feature-title">Safe Return Process</h3>
          <p className="feature-description">
            Secure and hassle-free return process
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3 className="feature-title">Fast Delivery</h3>
          <p className="feature-description">
            Receive your order faster than ever before!
          </p>
        </div>
        <div className="feature">
          <div className="feature-icon">🎁</div>
          <h3 className="feature-title">Quality Products</h3>
          <p className="feature-description">
            Presented in an elegant jewellery, perfect for gift.
          </p>
        </div>
      </div>

      <div className="customer-section">
        <h2>From our Customers</h2>
        <p>
          Explore firsthand accounts of satisfaction, inspiration, and the
          impact of our offerings straight from the voices of those we serve.
        </p>
      </div>

    
      <div className="review-content">
        <div className="review-image">
          <img src={Img} alt="Customer Review" />
        </div>
        <div className="review-card">
          <p className="review-text">
            "Outstanding customer support! They went above and beyond to help
            me resolve my issue. I felt valued as a customer, and their
            commitment to ensuring my satisfaction left a lasting impression."
          </p>
          <h4 className="review-author">Sasha Orlov</h4>
          <p className="review-subtitle">Happy Customer</p>
          <div className="review-nav">
            <button className="nav-btn">
              <ChevronLeft size={20} />
            </button>
            <button className="nav-btn">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
