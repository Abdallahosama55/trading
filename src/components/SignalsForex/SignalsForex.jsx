import React from "react";
import "./Signals.css";
import { FaStar } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import PricePlan from "../PricePlan/PricePlan";
import { IoAnalyticsSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-router-dom";
import { Bounce, Fade, Zoom } from "react-reveal";
import { useSelector } from "react-redux";
import forex from "../../assets/forexsignal.svg";
import f1 from "../../assets/f1.svg"
import f2 from "../../assets/f2.svg"
import f3 from "../../assets/f3.svg"
import f4 from "../../assets/f4.svg"
import f5 from "../../assets/f05.svg"
import f6 from "../../assets/f6.svg"

function SignalsForex() {
  const isEnglish = useSelector((state) => state.language.isEnglish);
  const items = [
    {
      image: f1,
      text: isEnglish ? "Accurate Entry & Exit Points: Get timely signals with recommended buy/sell points, stop losses, and take profit levels." : "  نقاط دخول وخروج دقيقة: احصل على إشارات في الوقت المناسب مع نقاط شراء/بيع موصى بها، بالإضافة إلى مستويات وقف الخسارة وجني الأرباح  ",
      icon: FaPerson,
    },
    {
      image:f2,
      text: isEnglish ? "Expert Analysis: Our signals are backed by professional market analysis, leveraging technical indicators, chart patterns, and market news." : " تحليل خبير: إشاراتنا مدعومة بتحليل احترافي للسوق، معتمدين على المؤشرات الفنية، وأنماط الرسوم البيانية، وأخبار السوق",
      icon: IoAnalyticsSharp,
    },
    {
      image:f3,
      text: isEnglish
        ? "Diverse Trading Strategies: Benefit from a blend of scalping, day trading, and swing trading strategies to suit different trading styles."
        : " استراتيجيات تداول متنوعة: استفد من مزيج من استراتيجيات السكالبينج والتداول اليومي وتداول السوينغ لتناسب مختلف أساليب التداول.   ",
      icon: FaGift,
    },
    {
      image: f4,
      text: isEnglish ? "Risk Management: We emphasize capital preservation, with every trade recommendation featuring clear risk management guidelines." : " إدارة المخاطر: نحن نركز على الحفاظ على رأس المال، حيث تتضمن كل توصية تداول لدينا إرشادات واضحة لإدارة المخاطر.",
      icon: MdCastForEducation,
    },
    {
      image: f6,
      text: isEnglish ? "Real-Time Notifications: Receive alerts instantly via our channel, ensuring you never miss an opportunity, even in fast-moving markets." : "إشعارات في الوقت الفعلي: احصل على التنبيهات فوراً عبر قناتنا، مما يضمن عدم تفويتك لأي فرصة، حتى في الأسواق السريعة الحركة. ",
      icon: MdCastForEducation,
    },
    {
      image: f5,
      text: isEnglish ? "Education & Support: In addition to signals, we offer trading tips, educational resources, and community support to help you grow as a trader." : " التعليم والدعم: بالإضافة إلى الإشارات، نقدم نصائح تداول، وموارد تعليمية، ودعم من المجتمع لمساعدتك على التطور كمتداول.",
      icon: MdCastForEducation,
    },
  ];

  return (
    <div className=" bg-light bg-black " dir={isEnglish ? "ltr" : "rtl"}>
      <div className=" bg-light w-100 d-flex justify-content-center ">
        <div className=" row  py-5 ps-5 pe-5  justify-content-center  w-100">
          <div className=" col-md-6 container p-3 d-flex  flex-lg-col align-items-center">
    <div>

    <Fade left>
              <h1 className=" text-muted fw-bold ">
                {isEnglish ? "Forex Signals Channel" : "قناة إشارات الفوركس"}
              </h1>
            </Fade>
            <Fade left>
              <p>
                {isEnglish
                  ? " Our Forex Signals Channel provides precise, real-time trading signals to help you make informed trading decisions in the global currency markets. Whether you’re a beginner or an experienced trader, our signals are designed to enhance your profitability."
                  : "  قناتنا لإشارات الفوركس تقدم إشارات تداول دقيقة في الوقت الفعلي لمساعدتك في اتخاذ قرارات تداول مستنيرة في أسواق العملات العالمية. سواء كنت مبتدئًا أو متداولًا ذو خبرة، فإن إشاراتنا مصممة لتعزيز ربحيتك."}
              </p>{" "}
            </Fade>
            <Link
              className=" text-decoration-none"
              to="https://t.me/+UrF-HuCnv685ZGZk"
            >
              <Fade left>
                <button
                  className="button-63 rounded-5 fw-semibold"
                  role="button"
                >
                  {isEnglish ? "Join Telegram" : "انضم إلى تيليجرام"}
                </button>
              </Fade>
            </Link>
    </div>
          </div>
          <div className=" col-md-6    d-flex  justify-content-center align-items-center">
            <div className="w-100 m-5  d-flex  justify-content-center align-items-center head-img bg-dark rounded-4">
              <Zoom>
                <img src={forex} className="mb-5 w-100 p-5 " />
              </Zoom>
            </div>
          </div>
        </div>
      </div>

      <section className="p-3 bg-light">
        <div className=" m-md-5 justify-content-center align-items-center">
          <div className=" ">
            <h2 className="pb-0 text-dark opacity-75 text-center d-flex align-items-center py-4 justify-content-center">
              <FaStar style={{ color: "hsl(38, 99%, 49%)" }} />
              {isEnglish
                ? "Free Aha Market Channel"
                : "قناة Aha Market المجانية"}
            </h2>
            <div className="justify-content-center py-5 pb-5 w-100 row">
              {items.map((item, index) => (
                <div className="col-md-4 h-100" >
                  <div
                    key={index}
                    className="p-2 pb-5 rounded-4 shadow bg-dark m-1 h-100 "
                    style={ {minHeight:"300px"}}
                  >
                    <Bounce>
                      <div className="row justify-content-center align-items-center">
                        <div className="col-12 d-flex justify-content-center">
                          <img
                            src={item.image}
                            className="rounded   w-100"
                            style={{width:"160px" ,height:"160px"}}
                          />
                        </div>
                        <div className="col-12 text-center">
                          <span className="text-light text-center gap-2 d-flex justify-content-center">
                          
                            {item.text}
                          </span>
                        </div>
                      </div>
                    </Bounce>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light ">
        <Zoom>
          <PricePlan />
        </Zoom>
      </section>
    </div>
  );
}

export default SignalsForex;
