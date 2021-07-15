import React, { useEffect, useState } from "react";
import { AboutIIITR, Thoughts } from "../Content/Home.js";
import { ReactComponent as Logo } from "../images/logo.svg";
import ReusableCard from "../components/ReusableBlock";
import BackImg from "../images/banner/cover.webp";
import WhyRecruitUs from "./WhyRecruitUs";
import Display from "../components/Display";
import { Companies } from "../Content/Companies";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

AOS.init({
  easing: "ease-in-out", // default easing for AOS animations
  duration: 500,
  delay: 20,
});

const HomePage = React.forwardRef((props, ref) => {
  const [screenSize, setScreenSize] = useState(window.screen.width);

  window.addEventListener("resize", () => {
    setScreenSize(window.screen.width);
  });

  useEffect(() => {
    ref.current.setNavState(" ", "1");
  }, [ref]);

  return (
    <div
      className="homepage"
      id="home"
      onClick={() => {
        ref.current.setMenu(false);
      }}
    >
      <div className="top">
        <img src={BackImg} alt="website logo" className="backImage" />

        <div className="topComponents">
          <div className="HomepageCenter" data-aos="zoom-in">
            <Logo className="logo" />

            <div
              className="HomepageLogoText"
              data-aos={screenSize > 960 ? "fade-right" : "fade-down"}
            >
              {screenSize > 960 ? (
                <h1>
                  Training and <br />
                  Placement Cell
                </h1>
              ) : (
                <h1>Training and Placement Cell</h1>
              )}
              <h6>Indian Institute of Information Technology, Raichur</h6>
            </div>
          </div>

          {screenSize > 960 ? (
            <div
              className="scrollNoti"
              onClick={() => {
                document
                  .getElementById("scrollTO")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <i
                className="fas fa-2x fa-angle-double-down"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
          ) : null}
        </div>
      </div>
      <div className="recruitUs" id="scrollTO">
        <div id="aboutUs" className="aboutUs" data-aos="fade-up">
          <h1>About Us</h1>
          <p>{AboutIIITR}</p>
        </div>

        {Thoughts.map((item, id) => {
          return (
            <ReusableCard
              key={id}
              isLeftAlign={screenSize <= 960 ? true : item.isLeftAlign}
              haveLogo={item.haveLogo}
              heading={item.heading}
              writer={item.writer}
              content={item.content}
              imgSrc={item.imgSrc}
              altText={item.altText}
            />
          );
        })}

        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <div id="recruit" style={{ height: "2vh" }}></div>

          <h1 className="recruitHead" data-aos="fade-up">
            Why Recruit Us
          </h1>

          <WhyRecruitUs />
        </div>
      </div>

      <div className="companies">
        <Display collection={Companies} />
      </div>
    </div>
  );
});

export default HomePage;
