import { useState } from "react";
import PricingCard from "./components/PricingCard";
import "./PricingApp.css";
import { useSelector } from "react-redux";

function PricePlan() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  const isEnglish = useSelector((state) => state.language.isEnglish);
  console.log(selectMonthly);
  return (
    <div className="PricingApp">
    <div className="app-container">
      {/* Header */}
      <header>
        <h2 className="header-topic fw-bolder text-gold">
          {isEnglish ? "Unlock Your Investment Potential with VVIP Signals" : "فتح إمكانات استثمارك مع إشارات VVIP"}
        </h2>
        <div className="header-row">
          <p>{isEnglish ? "Dollar" : "دولار"}</p>
          <label className="price-switch">
            <input
              className="price-checkbox"
              onChange={() => {
                setSelectMonthly((prev) => !prev);
              }}
              type="checkbox"
            />
            <div className="switch-slider"></div>
          </label>
          <p>{isEnglish ? "AED" : "د.إ"}</p>
        </div>
      </header>
      {/* Cards here */}
      <div className="pricing-cards gap-3">
        <PricingCard
          title={isEnglish ? "Cryptocurrency Signals Monthly" : "الباقة الشهرية"}
          price={selectMonthly ? "80 $" : "293.83 AED"}
          storage={isEnglish ? "Entry, Take Profit, Stop Loss" : "الدخول، الربح، وقف الخسارة"}
          users={isEnglish ?"87% Success Rate":"نسبة نجاح 87%"}
          sendUp={isEnglish ?"Risk Reward Ratio":"معدل مخاطرة منخفض"}
        />
        <PricingCard
          title={isEnglish ? "Cryptocurrency Signals Quarterly" : "إ ربع سنوية"}
          price={selectMonthly ? "200 $" : "734.5 AED"}
          storage={isEnglish ? "Entry, Take Profit, Stop Loss" : "الدخول، الربح، وقف الخسارة"}
          users={isEnglish ?"87% Success Rate":"نسبة نجاح 87%"}
          sendUp={isEnglish ?"Risk Reward Ratio":"معدل مخاطرة منخفض"}
        />
        <PricingCard
          title={isEnglish ? "Cryptocurrency Signals BI-annually" : "إشارات العملات المشفرة نصف سنوية"}
          price={selectMonthly ? "330 $" : "1211 AED"}
          storage={isEnglish ? "Entry, Take Profit, Stop Loss" : "الدخول، الربح، وقف الخسارة"}
          users={isEnglish ?"87% Success Rate":"نسبة نجاح 87%"}
          sendUp={isEnglish ?"Risk Reward Ratio":"معدل مخاطرة منخفض"}
        />
        <PricingCard
          title={isEnglish ? "Cryptocurrency Signals Yearly" : "إشارات العملات المشفرة سنوية"}
          price={selectMonthly ? "500 $" : "1836 AED"}
          storage={isEnglish ? "Entry, Take Profit, Stop Loss" : "الدخول، الربح، وقف الخسارة"}
          users={isEnglish ?"87% Success Rate":"نسبة نجاح 87%"}
          sendUp={isEnglish ?"Risk Reward Ratio":"معدل مخاطرة منخفض"}
        />
      </div>
    </div>
  </div>
  
  );
}

export default PricePlan;