import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import gsap from "gsap";
import { IoCall, IoCallSharp } from "react-icons/io5";
import IMC from "../assets/IMC.png";
import { AiFillLinkedin, AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { FaBars, FaFacebookF } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { IoIosCall } from "react-icons/io";

const NavCon = ({ active, inView, mobilepop, currActive, setmobile }) => {
  const [nav, setnav] = useState("home");
  const navigate = useNavigate();
  return (
    <Con className={inView === false ? "float" : ""}>
      <div className={mobilepop === "close" ? "content pop" : "content"}>
        <span>
          <img
            className="logo"
            onClick={() => {
              navigate("");
            }}
            src={IMC}
            alt=""
          />
        </span>
        <div className="contact">
          {/* <span
            onClick={() => {
              navigate("/quote"), setmobile("open");
            }}
          >
            GET A QUOTE <BiMailSend className="icon" />
          </span> */}
          <h1 style={{fontSize:"1.5rem",color:"#dadada", marginRight:"1rem", textShadow:"0px 2px 2px rgba(0,0,0,0.5)"}}>
          <IoIosCall style={{position:"relative", top:"5px", fontSize:"1.7rem"}}/>
            {"  "}+ 123456 78
          </h1>
          <div className="soc" style={{color:"#fff"}}>
            <a style={{color:"#fff", textShadow:"0px 2px 2px rgba(0,0,0,0.5)",position:"relative", top:"3px"}} href="https://www.facebook.com/industrymoverscorporation">
              <FaFacebookF className="icon" />
            </a>
            <a style={{color:"#fff",position:"relative", top:"3px"}}href="https://www.linkedin.com/company/industry-movers-corp/">
              <AiFillLinkedin className="icon" />
            </a>
            <a style={{color:"#fff",position:"relative", top:"3px"}}href="https://www.youtube.com/channel/UCA2PjQ3sjFF-9fdG__F68ZA">
              <AiFillYoutube className="icon" />
            </a>
          </div>
        </div>
        <div className="nav">
          <nav
            className={currActive === "home" ? "navs active" : "navs"}
            onClick={() => {
              active("home");
              setnav("home");
              navigate("");
              setmobile("open");
            }}
          >
            Home
          </nav>
          <nav
            className={currActive === "about" ? "navs active" : "navs"}
            onClick={() => {
              active("about");
              setnav("about");
              navigate("/about");
              setmobile("open");
            }}
          >
            About Us
          </nav>
          {/* <nav
            className={currActive === "News & Updates" ? "navs active" : "navs"}
            onClick={() => {
              active("News & Updates");
              setnav("News & Updates");
              navigate("/news");
              setmobile("open");
            }}
          >
            news & Updates
          </nav> */}
          <nav
            className={currActive === "ourfleet" ? "navs active" : "navs"}
            onClick={() => {
              active("ourfleet");
              setnav("ourfleet");
              navigate("/ourfleet");
              setmobile("open");
            }}
          >
            Our Projects
          </nav>
          <nav
            className={currActive === "careers" ? "navs active" : "navs"}
            onClick={() => {
              active("careers");
              setnav("careers");
              navigate("/careers");
              setmobile("open");
            }}
          >
            Careers
          </nav>
          <nav
            className={currActive === "contactus" ? "navs active" : "navs"}
            onClick={() => {
              active("contactus");
              setnav("contactus");
              navigate("/contactus");
              setmobile("open");
            }}
          >
            Contact Us
          </nav>
          {/* <span>
            <IoCall className="icon" /> +63(02) 7003-5009
          </span> */}
        </div>
      </div>
    </Con>
  );
};
const Con = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 30;
  display: none;
  background-color: #1f1f1f;
  & .contact {
    display: flex;

    & span {
      font-size: 10px;
      font-weight: 600;
      border-left: 1px solid;
      border-right: 1px solid;
      padding: 0 10px;
      cursor: pointer;
      & .icon {
        font-size: 1.5rem;
        margin-left: 5px;
      }
    }
    & .soc {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #484848;
      & a {
        color: #1f1f1f;
      }
      @media (max-width: 768px) {
        display: none;
      }
      & .icon {
        margin: 0 5px;
        cursor: pointer;
        @media (max-width: 768px) {
          margin: 0 2px;
        }
      }
    }
  }
  & nav {
    cursor: pointer;
  }
  &.float {
    position: fixed;
    display: flex;
    top: -1.5rem;
    left: 0;
    right: 0;
    background-color: #26262694;
    // padding-top: 1rem;
    z-index: 20;
    box-shadow: 2px 0px 4px 1px rgba(0, 0, 0, 0.15);
    height: 75px;
    overflow: hidden;
    // height 50px;
    -webkit-animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    @media (max-width: 768px) {
      height: auto;
      position: fixed;
      & .content {
        height: 80px;
        &.pop {
          & .contact {
            display: flex;
            margin-top: 1rem;
          }
          -webkit-animation: slide-in-top 0.5s
            cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin: 0;
          & .nav {
            display: flex;
            flex-direction: column;
            justify-content: left;
            left: 0;
            & .navs {
              margin: 1rem;
              width: 80vw;
              padding-bottom: 10px;
            }
            & span {
              margin: auto;
              /* margin-left: -6rem; */
              margin-top: 3rem;
            }
          }
        }
      }
    }
    @media (max-width: 768px) {
    }
    & .logo {
      height: 40px;
      /* width: 80px; */
      /* border-radius: 100%; */
      margin-left: 2rem;
      margin-bottom: 1rem;
      opacity: 1;
      /* height: auto; */
      @media (max-width: 992px) {
        margin-left: 0;
      }
    }
    & h1 {
      color: #d3a0a0;
      font-weight: 500;
      font-size: 1rem;
    }
    @-webkit-keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
    @keyframes slide-in-top {
      0% {
        -webkit-transform: translateY(-1000px);
        transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  & .content {
    position: relative;
    width: 80%;
    margin: auto;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    /// opacity: 0;
    height: 80px;
    /// opacity: 0;
    @media (max-width: 1368px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      justify-content: flex-start;
      width: 100%;
      & .logo {
        margin: 0 2rem;
      }
    }
  }
  & .logo {
    height: 80px;
    width: 80px;

    margin-left: 2rem;
  }
  & h1 {
    font-size: 1.1rem;
    color: #f5f5f5;
    font-weight: 400;
  }
  & span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    @media (max-width: 768px) {
      display: none;
    }
    & span {
      margin-left: 1rem;
      margin-right: -1rem;
      font-size: 1.5rem;
      position: relative;
      right: -3rem;
      white-space: nowrap;
      color: #555555;
      @media (max-width: 992px) {
        display: none;
      }
    }
    & .navs {
      display: flex;
      margin: auto 10px;
      color: #e1e1e1;
      font-size: 0.8rem;
      text-decoration: none;
      text-transform: uppercase;
      border-bottom: 3px solid transparent;
      white-space: nowrap;
      @media (max-width: 998px) {
        font-size: 10px;
        margin: auto 5px;
      }
      &.active {
        color: #c78b22;
        font-weight: bold;
        border-bottom: 3px solid #c78b22;
      }
      &:hover {
        color: #cca96d;
        border-bottom: 3px solid #e2cba2;

        //font-weight: bold;
        // border-bottom: 3px solid #24753b;
      }
    }
    // margin-right: 2.5rem;
  }
`;
export default NavCon;
