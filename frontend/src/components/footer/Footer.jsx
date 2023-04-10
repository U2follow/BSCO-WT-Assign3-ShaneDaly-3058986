import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <>
      <footer className="boxItems">
        <div className="container flex">
          <p>shane daly copy rights reserved</p>
          <div className="social">
            <a href="http://www.facebook.com" target="_blank">
              <BsFacebook className="icon" />
            </a>
            <a href="http://www.instagram.com" target="_blank">
              <RiInstagramFill className="icon" />
            </a>
            <a href="http://www.twitter.com" target="_blank">
              <AiFillTwitterCircle className="icon" />
            </a>
            <a href="http://www.linkedin.com" target="_blank">
              <AiFillLinkedin className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
