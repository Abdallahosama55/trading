import React from "react";
import "./PricingCard.css";
import { useSelector } from "react-redux";
const PricingCard = ({ title, price, storage, users, sendUp }) => {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  return (
    <div className="PricingCard  shadow">
      <header>
        <p className="card-title ">{title}</p>
        <h2 className="card-price ">{price}</h2>
      </header>
      {/* features here */}
      <div className="card-features">
        <div className="card-storage">{storage}</div>
        <div className="card-users-allowed">{users} {isEnglish?"users in total":""}</div>
        <div className="card-send-up"> {isEnglish?"Send up to":""} {sendUp}</div>
      </div>
      <button className="card-btn">{isEnglish?"Book Now":"احجز الأن"}</button>
    </div>
  );
};

export default PricingCard;