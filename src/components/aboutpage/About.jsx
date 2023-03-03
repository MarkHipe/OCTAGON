import React, { useRef, useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { AiFillEye } from "react-icons/ai";
import { GiBullseye } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import { TfiArrowLeft, TfiArrowRight } from "react-icons/tfi";
import Hero2 from "../../assets/hero-section/17 edited.jpg";
import IMG1 from "../../assets/IMC164.jpg";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import IMC from "../../assets/IMC.png";
import { IoDiamond } from "react-icons/io5";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import { MdMiscellaneousServices } from "react-icons/md";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Thumbs,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
SwiperCore.use([Navigation, Pagination, Controller, Thumbs, Autoplay]);
import worker from "../../assets/worker.svg";
import { useEffect } from "react";

const year = [
  {
    year: 2018,
    details: [
      " Industry Movers Corp. (IMC) officially and legally started back in 17th April 2018— But it was originally established as a sub-department and support of Premium Megastructures, Inc. (PMI) and MAC Builders back in 2011/2012 to cater all their Private and Government projects. Pile driving operations in construction of different ports such as SASA Port, Siargao Port, and Oyster Bay Palawan were the first few projects catered by IMC.",
    ],
  },
  {
    year: 2019,
    details: [
      "Throughout the years of IMC serving as a sub-department being fully managed by PMI; Chairman, Francis Lloyd T. Chua, and all other incorporators perceived IMC’s potential to operate on its own and its competitiveness to be self-sufficient in the Shipping Industry.",
    ],
  },
  {
    year: 2020,
    details: [
      " Came in the last quarter of 2020, IMC started to stand alone from PMI and MAC Builders which slowly transitioned through hiring employees solely under the operations of IMC, acquiring additional vessels under its ownership that started from Tugboat IMC-02, and so on. Having specified person to handle IMC clients/projects elevated its control on processes which pave its way to independency.",
    ],
  },
  {
    year: 2021,
    details: [
      "At the end of the year 2021, IMC is now fully transitioning to comply with international standards through its on-going accreditation of ISO Certification.",
      "IMC now manages a total of 449 sea-based and 68 shore-based employees that cater all projects efficiently.",
    ],
  },
  {
    year: 2022,
    details: [
      " IMC have three (3) new construction vessels expected to be delivered internationally-made from China. In preparation, on-going optimization and strengthening of each department are continually conduct",
    ],
  },
];
const About = () => {
  const [active, setactive] = useState(0);
  const swiperRef = useRef();
  const swiperRef1 = useRef();
  var speed = 10;
  const [inviewInfo, setinviewInfo] = useState(false);
  const [inviewInfo2, setinviewInfo2] = useState(false);

  const [inview, setinview] = useState(false);
  const top = useRef(null);
  const navigate = useNavigate();
  const [show, setshow] = useState("services");
  useEffect(() => {
    if (top && top.current) {
      const executeScroll = (top) =>
        top.current.scrollIntoView({ behavior: "smooth" });
      executeScroll(top);
      // useMountEffect(executeScroll); // Scroll on mount
    }
  }, []);
  /* Call this function with a string containing the ID name to
   * the element containing the number you want to do a count animation on.*/

  return (
    <Con ref={top}>
      <div className="iso">
        <img
          src="https://1000logos.net/wp-content/uploads/2020/09/ISO-Logo.jpg"
          alt=""
        />
        <div className="detail">
          <h6>CERTIFIED COMPANY</h6>
          <h6>ISO 9001-2015</h6>
        </div>
      </div>
      <div className="wrap">
        <img src={Hero2} alt="" />
        <div className="overlay"></div>
        <div className="nav">
          <Link className="link" to="/">
            Home
          </Link>
          <BsArrowRight className="icon" />
          <Link className="link" to="/about">
            About Us
          </Link>
        </div>
        <h1>About Us</h1>
      </div>
      <InView onChange={setinviewInfo}> 
      <div className={inviewInfo ? "details inview" : "details"}>
        <div className="left">
          <h1>OCEAN SHIPPING IN THE PHILIPPINES</h1>
          <span>
            <p>
              As one of the world's largest archipelagic nations with a total of
              7, 641 islands, the Philippines has the capability of optimizing
              shipment by sea. placed between international trade routes and
              numerous traits, its strategic location could greatly shorten
              travel periods and brings possibilities in penetrating global
              trade
            </p>
          </span>
          <p>
            By developing the country as a Maritime logistics hub, its vast
            growth potential could encourage an influx of investors thereby
            increasing the counbtry's Gross national Product. Moreover, it is a
            cost-efficient mode of delivery with an effective capacity of
            delivering bulk quantities of goods. ocean shipping, as a means of
            transporting goods through bodies of water by the usage of large
            vessel can transport massive quantities of materials in our shipment
          </p>
          <img src={IMC} alt="" />
        </div>
        <div className="right"  style={{ animationDelay: ".25s" }}>
          <div className="card">
            <img src={IMG1} alt="" />
            <div className="detail">
              <h3>
                this company is a dark horse that continuously brings innovation
                to the market and challenges old and new players alike. Truly a
                gem.
              </h3>
              <h4>Partners</h4>
            </div>
          </div>
        </div>
      </div>
      </InView>
      <InView onChange={setinviewInfo2}> 
      <div className={inviewInfo2 ? "details2 inview" : "details2"}>
    
        <div className="overlay"></div>
        <img src={Hero2} alt="" />
        <div className="wrapper"  >
          <div className="left">
            <img src="" alt="" />
            <h1>WHAT WE DO</h1>
            <p>
              To Provide fast deliveries without delay and other premium
              services.
            </p>
          </div>
          <div className="right">
            <img src="" alt="" />
            <h1>HOW WE ACT </h1>
            <p>
              We are: determined, service oriented, efficient, globally
              competetive, accountable, and reliable
            </p>
            <p>We embody our core values and are repreentative of the brand</p>
          </div>
        </div>
        <div className="wrapper2" style={{ animationDelay: ".25s" }}>
          <h1>WHY WE EXIST</h1>
          <p>
            To advance and develop the shipping industry and answer the call for
            increasing demand in the market
          </p>
        </div>
      </div>
      </InView>
      <div className="next">
        <div className="left">
          <div className="wrapper">
            <h1>INDUSTRY MOVERS CORP. (IMC)</h1>
            <div className="boxWrap">
              {" "}
              <div className={show==="services"?"box active":"box"} onClick={()=>{setshow("services")}}>
                <MdMiscellaneousServices className="icon"  />
                Our Services
              </div>
              <div className={show==="mission"?"box active":"box"} onClick={()=>{setshow("mission")}}>
                <GiBullseye className="icon"  />
                Our Mission
              </div>
              <div className={show==="vision"?"box active":"box"} onClick={()=>{setshow("vision")}}>
                {" "}
                <AiFillEye className="icon" />
                Our Vision
              </div>{" "}
              <div className={show==="core"?"box active":"box"}  onClick={()=>{setshow("core")}}>
                <IoDiamond className="icon" />
                Core Values
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={Hero2} alt="" />
          <div className="triangle"></div>
          {show === "services" && (
            <div className="card">
              <div className="header">
                <h3>INDUSTRY MOVERS CORP. (IMC)</h3>
              </div>
              <div className="details">
                <p>
                  Industry Movers Corp. (IMC) came to existence with the aim of
                  reaping the possiblities of advancing ocean shipping as an
                  industry.
                  <br />
                  With an initial fleet of 45 vessels. IMC is determined to
                  provide fast deliveries without delay and the the other
                  premium servies with efficiency, accountability and
                  reliability.
                </p>
                <h4>
                  OUR SERVICES <BsArrowRight />
                </h4>
              </div>
            </div>
          )}
          {show === "vision" && (
            <div className="card">
              <div className="header">
                <h3>OUR VISION</h3>
              </div>
              <div className="details">
                <p>
                  To be the worldwide leading maritime and logistics company,
                  setting a premium standard; sustainable, innovative, and
                  industrial shipping solutions
                </p>
              </div>
            </div>
          )}
          {show === "mission" && (
            <div className="card">
              <div className="header">
                <h3>OUR MISSION</h3>
              </div>
              <div className="details">
                <p>
                  We are a maritime and logitics company that promotes premium
                  services to our valued customer and deals fairlywith our
                  stakeholders in order to build a relationship that is mutually
                  beneficial
                </p>
              </div>
            </div>
          )}
          {show === "core" && (
            <div className="card">
              <div className="header">
                <h3>OUR MISSION</h3>
              </div>

              <div className="details">
                <p>
                  <span>1</span>Safety
                </p>

                <p>
                  <span>2</span>High Level of Accountability
                </p>

                <p>
                  <span>3</span>Innovative Solutions
                </p>

                <p>
                  <span>4</span>Passion
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="milestone">
        <div className="line"></div>
        <button className="left" onClick={() => swiperRef.current?.slidePrev()}>
          <TfiArrowLeft className="icon" />
        </button>

        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={5}
          //   loop={true}
          //   pagination={{ clickable: true }}
          centeredSlides={true}
          // navigation
          autoplay={{ duration: 2.5 }}
          style={{ height: "auto", width: "auto" }}
          className="swiper"
          onSlideChange={(swiper) => {
            console.log("Slide index changed to: ", swiper.activeIndex);
            setactive(swiper.activeIndex);
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {year.map((yr, i) => {
            return (
              <SwiperSlide className="perSlide" key={i}>
                <h1 className={i === active ? "active" : ""}>{yr.year}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="right"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <TfiArrowRight className="icon" />
        </button>
      </div>
      <div className="yearDetails">
        <button
          className="left"
          onClick={() => swiperRef1.current?.slidePrev()}
        >
          <TfiArrowLeft className="icon" />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          //   loop={true}
          //   pagination={{ clickable: true }}
          centeredSlides={true}
          // navigation
          autoplay={{ duration: 1 }}
          style={{ height: "auto", width: "auto" }}
          className="swipers"
          onBeforeInit={(swiper) => {
            swiperRef1.current = swiper;
          }}
        >
          {year[active].details.map((yr, i) => {
            return (
              <SwiperSlide className="perSlides" key={i}>
                <h1>{yr}</h1>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          className="right"
          onClick={() => swiperRef1.current?.slideNext()}
        >
          <TfiArrowRight className="icon" />
        </button>
      </div>
      <div className="achievement">
        <InView
          onChange={() => {
            setinview(true);
          }}
        >
          <div className="wrapper">
            <div className="left">
              <div className="wrapDetails">
                <h1>WHAT WE ACHIEVED</h1>
                <h6>Support Filipino Workers</h6>
                {inview ? (
                  <span className={inview === true ? "active" : ""}>
                    <img src={worker} alt="" />
                    <h1 id="nbr">
                      <CountUp
                        start={0}
                        end={448}
                        duration={4}
                        separator=" "
                        decimals={0}
                        decimal="."
                      />
                    </h1>
                    <p>Exemplary Skills in Seafaring</p>
                  </span>
                ) : null}
                <p>
                  Supporting Filipino workers and to uplift their morale in the
                  art of seafaring are only two of the main objectives of IMC.
                  once IMC's target of becoming a global transport entity has
                  been met. Filipinos will also be known worldwide and will be
                  branded as virtuoso mariners
                </p>
              </div>
            </div>
            <div className="right">
              {inview ? (
                <div className="wrapDetails">
                  <div className="progressWrapper">
                    <div className="label">SHOREBASED</div>
                    <div className="progress">
                      <div
                        className="data"
                        style={{
                          height: "13%",
                          animation:
                            " slide-top-13 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
                        }}
                      >
                        <span>13%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progressWrapper">
                    <div className="label">SEABASED</div>
                    <div className="progress">
                      <div
                        className="data"
                        style={{
                          height: "78%",
                          animation:
                            " slide-top-78 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
                        }}
                      >
                        <span>78%</span>
                      </div>
                    </div>
                  </div>
                  <div className="progressWrapper">
                    <div className="label">VACANT</div>
                    <div className="progress">
                      <div
                        className="data"
                        style={{
                          height: "9%",
                          animation:
                            " slide-top-9 4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
                        }}
                      >
                        <span>9%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </InView>
      </div>
      <div className="banner">
        <h4>" LOGISTICS FOR THE REAL WORLD "</h4>
        <span
          onClick={() => {
            navigate("/contactus");
          }}
        >
          MAKE AN APPOINTMENT <BsArrowRight className="icon" />
        </span>
      </div>
    </Con>
  );
};
const Con = styled.div`
  & .iso {
    height: 30px;
    display: flex;
    margin-left: 3rem;
    padding-bottom: 10px;
    & .icon {
      margin-right: 1rem;
    }
    & h6 {
      margin: 0;
      margin-left: 1rem;
      color: #6b6b6b !important;
    }
  }
  & .wrap {
    /* background-color: #1A1446 ; */
    height: 200px;
    width: 100vw;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & .overlay {
      position: absolute;
      height: 200px;
      width: 100vw;
      background-color: #1a1446c8;
    }
    & img {
      width: 100vw;
      object-fit: cover;
      position: absolute;
    }
    & h1 {
      color: #fff;
      text-align: center;
      text-transform: capitalize;
      font-size: 25px;
      padding-bottom: 3rem;
      position: relative;
    }
    & .nav {
      display: flex;
      width: 80%;
      margin: auto;
      padding: 1rem;
      position: relative;

      & .link {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
      }
      & .icon {
        color: #fff;
        margin: 0 10px;
      }
    }
  }
  & .details {
    display: flex;
    justify-content: center;
    /* align-items: center; */
    margin: auto;
    /* width: 850px; */
    flex-wrap: wrap;
    padding: 3rem 0;
    &.inview {
      & .left,
      .right {
        animation: slide-up 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        @keyframes slide-up {
          0% {
            transform: translateY(300px);
            opacity: 0;
          }
          70% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
    & .left {
      width: 400px;
      margin: 1rem;
      & img {
        width: 100px;
      }

      & h1 {
        font-size: 1.1rem;
      }
      & span {
        & p {
          font-size: 13px;
          font-weight: 600;
          line-height: 20px;
          color: #686868;
        }
      }
      & p {
        font-size: 13px;

        line-height: 20px;
        color: #686868;
      }
    }
    & .right {
      width: 400px;
      display: flex;
      & img {
        width: 400px;
      }
      & .detail {
        background-color: #cfb53b;
        padding: 1rem;
        margin-top: -0.5rem;
        & h3 {
          font-size: 14px;
          color: #fff;
          font-style: italic;
        }
        & h4 {
          font-size: 14px;
          color: #fff;
          /* font-style: italic; */
        }
      }
    }
  }
  & .details2 {
    padding: 3rem 0;
    background-image: url(Hero2);
    background-color: #cfb53b;
    color: #ffff;
    margin-bottom: 3rem;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    &.inview {
      & .wrapper,
      .wrapper2 {
        animation: slide-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        @keyframes slide-up {
          0% {
            transform: translateY(300px);
            opacity: 0;
          }
          70% {
            transform: translateY(-10px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      }
    }
    & .overlay {
      position: absolute;
      height: 100%;
      width: 100vw;
      background-color: #cfb43bed;
      z-index: 2;
    }
    & img {
      width: 100vw;
      object-fit: cover;
      position: absolute;
    }
    & .wrapper {
      width: 70%;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      z-index: 3;
      /* align-items: center; */
      & .left {
        width: 400px;
        text-align: center;
        margin: 10px;
        & img {
          width: 100%;
          object-fit: cover;
        }
      }
      & .right {
        width: 400px;
        text-align: center;
        margin: 10px;
        & img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
    & .wrapper2 {
      width: 70%;
      margin: auto;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      z-index: 3;
      & img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  & .next {
    background-color: #2a2828;
    display: flex;
    flex-wrap: wrap;
    //max-height: 400px;
    @media (max-width: 915px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & .left {
      display: flex;
      flex-direction: column;
      /* justify-content: flex-end; */
      width: 50%;
      right: 0;
      & .wrapper {
        position: relative;
        width: 500px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-self: flex-end;
        z-index: 5;
        padding: 2rem;
        @media (max-width: 915px) {
          align-self: center;
        }
        & h1 {
          font-size: 1.2rem;
        }
        & .boxWrap {
          display: flex;
          justify-content: center;
          & .box {
            background-color: #fff;
            height: 100px;
            width: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 10px;
            font-size: 13px;
            font-weight: 600;
            cursor: pointer;
            color: #505050;

            &.active{
              background-color: #c78b22;
              color: #f0f0f0;
              & .icon{
                color: #ffff;
              }
            }
            & .icon {
              font-size: 30px;
              color: #a7a7a7;
              margin-bottom: 10px;
            }
          }
        }
      }
    }
    & .right {
      width: 50%;
      position: relative;
      overflow: hidden;
      @media (max-width: 915px) {
        width: 100vw;
        height: 300px;
        margin-bottom: 2rem;
      }
      & img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        position: relative;
        z-index: 2;
        @media (max-width: 915px) {
          width: 100vw;
          height: 300px;
          margin-bottom: 2rem;
        }
      }
      & .triangle {
        position: absolute;
        height: 550px;
        width: 200px;
        background-color: #2a2828;
        top: -4rem;
        z-index: 3;
        transform: rotate(10deg);
        left: -7rem;
        @media (max-width: 915px) {
          display: none;
        }
      }
      & .card {
        position: absolute;
        top: 2rem;
        background-color: #636363;
        width: 210px;
        left: 5rem;
        min-height: 250px;
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 1rem;
        /* position: relative; */
        z-index: 5;
        @media (max-width: 915px) {
          // position: relative;
          display: flex;
          flex-direction: column;
          align-self: center;
          top: 0rem;
          background-color: #494949ac;

          left: 0;
          margin: auto;
        }
        & .header {
          & h3 {
            font-size: 13px;
            @media (max-width: 915px) {
              color: #fdfdfd;
            }
          }
          border-bottom: 1px solid #e6e6e6;
        }
        & .details {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          padding-bottom: 0;
          & p {
            font-size: 11px;
            line-height: 18px;
            font-weight: 600;
            color: #e6e6e6;
            @media (max-width: 915px) {
              color: #e0e0e0;
            }

            & span {
              color: #c78b22;
              font-weight: 600;
              font-size: 1rem;
              margin-right: 10px;
            }
          }

          & h4 {
            font-size: 13px;
            text-align: left;
            @media (max-width: 915px) {
              color: #f3f3f3;
            }
          }
        }
      }
    }
  }
  & .milestone {
    padding: 3rem 0;
    // display: inline-flex;
    width: 100vw;
    max-width: 2400px;

    position: relative;
    & .line {
      height: 1px;
      width: 80vw;
      max-width: 2400px;

      background-color: #686868;
      margin: auto;
      position: relative;
      top: 13px;
    }
    & .left {
      position: absolute;
      left: 6%;
      background-color: transparent;
      border: none;
      font-size: 1rem;
    }
    & .right {
      position: absolute;
      right: 6%;
      top: 3rem;
      background-color: transparent;
      border: none;
      font-size: 1rem;
    }
    & .swiper {
      background-color: transparent;
      width: 80vw !important;
      max-width: 2000px;

      & .perSlide {
        display: flex;
        justify-content: center;
        align-items: center;
        & h1 {
          font-weight: 100;
          font-size: 16px;
          margin: auto;          
          background-color:#121212;

          padding: 0 20px;
          &.active {
            font-weight: 600;
            font-size: 2rem;
            margin-top: -5px;
          }
        }
      }
    }
  }
  & .yearDetails {
    position: relative;
    width: 100vw;
    margin: auto;
    max-width: 2400px;
    padding: 3rem 0;
    overflow: hidden;
    & .left {
      position: absolute;
      left: 6%;
      border: none;
      font-size: 1rem;
      top: 6rem;
      background-color: #c5ab00;
      border-radius: 100%;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      z-index: 10;
    }
    & .right {
      position: absolute;
      right: 6%;
      top: 6rem;
      border: none;
      font-size: 1rem;
      background-color: #c5ab00;
      border-radius: 100%;
      box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
      height: 30px;
      width: 30px;
      display: flex;
      align-items: center;
      z-index: 10;
    }
    & .swipers {
      /* width: 80vw; */
      width: 100%;
      overflow: visible;

      & .perSlides {
        /* width: 70vw; */
        h1 {
          background-color: #383735;
          width: 60vw;
          max-width: 2000px;

          margin: auto;
          font-size: 13px;
          padding: 3rem;
          color: #d4d4d4;
          position: relative;
          &:before {
            content: " ";
            position: absolute;
            width: 0;
            height: 0;
            left: 30vw;
            right: auto;
            top: -35px;
            bottom: auto;
            border: 20px solid;
            z-index: 10;
            border-color: #383735 #383735 transparent transparent;
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  & .achievement {
    background-color: #1a1446;
    padding: 3rem 0;
    & .wrapper {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      & .left {
        width: 400px;
        & h1 {
          color: #dfdfdf;
          font-size: 1.5rem;
        }
        & h6 {
          color: #c78b22;
          font-size: 13px;
          font-weight: 100;
        }
        & span {
          /* display: inline-flex; */
          display: flex;
          justify-content: center;
          align-items: center;
          /* opacity: 0;
          &.active{
            display: flex;
            opacity: 1;
          } */
          & .icons {
            font-size: 2rem;
            /* background-color: #c78b22; */
          }
          & h1 {
            font-size: 2rem;
            margin-right: 1rem;
          }
          & p {
            background-color: #c78b22;
            padding: 5px;
            font-size: 10px;
            color: #dfdfdf;
          }
        }
        & p {
          font-size: 13px;
          line-height: 18px;
          color: #adbbb9;
        }
      }
      & .right {
        width: 400px;
        & .wrapDetails {
          margin: 1rem;
          & .progressWrapper {
            display: inline-flex;
            margin: 1rem;
            & .label {
              writing-mode: vertical-rl;
              text-orientation: upright;
              font-weight: 600;
              color: #dfdfdf;
              line-height: 20px;
              display: flex;
              align-self: flex-end;
              margin-right: 0.5rem;
            }
            & .progress {
              width: 55px;
              height: 230px;
              background-color: transparent;
              border: 1px solid #eeeeee89;
              display: flex;
              justify-content: flex-end;
              & .data {
                width: 100%;
                /* height: 13%; */
                background-color: #c78a22c8;
                display: flex;
                align-self: flex-end;
                @keyframes slide-top-13 {
                  0% {
                    height: 0%;
                    & span {
                      opacity: 0;
                    }
                  }
                  100% {
                    height: 13%;
                  }
                }
                @keyframes slide-top-78 {
                  0% {
                    height: 0%;
                  }
                  100% {
                    height: 78%;
                  }
                }
                @keyframes slide-top-9 {
                  0% {
                    height: 0%;
                  }
                  100% {
                    height: 9%;
                  }
                }
                & span {
                  position: relative;
                  top: -1.5rem;
                  margin: 0 auto;
                  color: #c78b22;
                }
              }
            }
          }
        }
      }
    }
  }
  & .banner {
    background-color: #c78b22;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    flex-wrap: wrap;
    & h4 {
      font-weight: 100;
      margin: 0;
    }
    & span {
      border-bottom: 1px solid #fff;
      font-size: 13px;
      cursor: pointer;
    }
    & .icon {
              animation: side-slide 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)
                infinite both;
              @keyframes side-slide {
                0% {
                  transform: translate(0px);
                }
                50% {
                  transform: translate(10px);
                }
                100% {
                  transform: translate(0px);
                }
              }
            }
  }
`;
export default About;
