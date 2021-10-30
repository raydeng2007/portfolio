import React from "react";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Helmet from "../component/common/Helmet";
import TextLoop from "react-text-loop";
import Header from "../component/header/Header";
import FooterTwo from "../component/footer/Footer";
import TabTwo from "../elements/tab/TabTwo";
import ContactThree from "../elements/contact/ContactThree";
import Particles from "react-particles-js";
import profile from "../assets/images/about/profile.jpeg";
import myPDF from "../assets/resume.pdf";
import DisplayCards from "../component/cards/DisplayCards";
import WorkCards from "../component/cards/WorkCards";

const SlideList = [
  {
    textPosition: "text-left",
    category: "Hey there! I'm Raymond",
    description: "",
    buttonText: "",
    buttonLink: "",
  },
];

const PortfolioLanding = () => {
  let title = "About Me",
    description =
      `
      Hey! I'm Ray. When I'm not petting goats, I'm a software engineer. 
      My work experiences include being a fullstack developer, data 
      scientist and machine learning engineer. 
      I enjoy exploring different areas outside of software as well, 
      I always loved playing & watching basketball, travelling, talking about movies and tv shows, 
      `;
  return (
    <div className="active-dark">
      <Helmet pageTitle="Raymond's Site" />
      <Header homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Slider Area   */}
      <div id="home" className="fix">
        <div className="slider-wrapper">
          {/* Start Single Slide */}
          {SlideList.map((value, index) => (
            <div
              className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25"
              key={index}
            >
              <Particles
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: "0",
                  left: "0",
                }}
                params={{
                  particles: {
                    number: {
                      value: 600,
                      density: {
                        enable: false,
                      },
                    },
                    size: {
                      value: 5,
                      random: true,
                      anim: {
                        speed: 5,
                        size_min: 1,
                      },
                    },
                    line_linked: {
                      enable: false,
                    },
                    move: {
                      random: true,
                      speed: 2,

                    },
                  },
                  interactivity: {
                    detect_on: "canvas",
                    modes: {
                      bubble: {
                        distance: 250,
                        duration: 2,
                        size: 0,
                        opacity: 0,
                      },
                      repulse: {
                        distance: 150,
                        duration: 4,
                      },
                    },
                  },
                }}
              />
              <div
                className="container"
                style={{
                  pointerEvents: "none",
                }}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      <h4>
                        {value.category ? <span>{value.category}</span> : ""}
                      </h4>
                      <h1 className="title">
                        I like<br />
                        <TextLoop interval={1800}>
                          <span> Software</span>
                          <span> Machine Learning</span>
                          <span> Blogging</span>
                          <span> Basketball</span>
                        </TextLoop>{" "}
                      </h1>
                      <button
                        style={{
                          color: "white",
                          border: "2px solid white",
                          marginTop: "12px",
                          marginBottom: "50px",
                          pointerEvents: "all",
                        }}
                        class="rn-btn btn-solid"
                      >
                        <a
                          style={{
                            color: "white",
                          }}
                          href={myPDF}
                          download="resume.pdf"
                        >
                          Download CV
                        </a>
                      </button>
                      {value.description ? (
                        <p className="description">{value.description}</p>
                      ) : (
                        ""
                      )}
                      {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-primary-color"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Slide */}
        </div>
      </div>
      {/* End Slider Area   */}
      {/* Start About Area */}
      <div id="about" className="fix">
        <div className="about-area ptb--120  bg_color--1">
          <div className="about-wrapper">
            <div className="container about-container">
              <div className="row row--35 align-items-center">
                <div className="col-lg-12">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <div className="row row--35 align-items-center"><h2 className="title">{title}</h2>
                        <h5> <br /> &nbsp; pictured on the right ;) </h5></div>
                      <div>
                        <div className="row row--35 align-items-center">
                          <div className="col-md-3">
                            <div className="thumbnail">
                              <img
                                className="w-100"
                                src={profile}
                                alt="About Images"
                              />
                            </div>
                          </div>
                          <div className="col-md-9">
                            <p className="description">{description}</p>
                          </div>
                        </div>

                        <div className="row mt--30">
                          <TabTwo tabStyle="tab-style--1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End About Area */}

      {/* Start Service Area  */}
      <div id="service" className="fix">
        <div className="service-area creative-service-wrapper ptb--120 bg_color--5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Work Experience</h2>
                </div>
              </div>
            </div>
            <div className="row creative-service">
              <div className="col-lg-12">
                <WorkCards />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="portfolio" className="fix">
        <div className="portfolio-area ptb--120 bg_color--1">
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">Projects</h2>
                  </div>
                </div>
              </div>
              <div className="row projects">
                <DisplayCards
                  item="3"
                  column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      {/* Start Contact Area */}
      <div id="contact" className="fix">
        <div className="rn-contact-area ptb--120 bg_color--5">
          <ContactThree
            contactTitle="Get in touch"
          />
        </div>
      </div>
      {/* End Contact Area */}

      <FooterTwo />
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default PortfolioLanding;
