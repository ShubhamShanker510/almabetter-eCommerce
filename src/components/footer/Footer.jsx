import React from "react";
import call from "../../assets/images/call.png";
import insta from "../../assets/images/instagram.png";
import fb from "../../assets/images/facebook.png";
import x from "../../assets/images/x.png";

const Footer = () => {
  return (
    <div className="footer flex flex-col border p-2">
      <div className="up grid grid-cols-4">
        <div className="col-1">
          <div className="logo">
            <p className="text-3xl font-bold">
              Click<span className="text-red-600">N</span>Cart
            </p>
          </div>
          <div className="txt">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            enim, maxime voluptatibus provident nisi praesentium?
          </div>
          <div className="contact flex mt-5">
            <div className="call mr-3">
              <img src={call} alt="" />
            </div>
            <div className="details">
              <p>Got Question? Call us 24/7</p>
              <p className="text-2xl font-bold text-blue-500">+01-234-567</p>
            </div>
          </div>
        </div>
        <div className="col2">
          <p className="font-bold text-red-600 text-lg">Useful Links</p>
          <ul className="links">
            <li>About</li>
            <li>Our Sevices</li>
            <li>How to shop on</li>
            <li>FAQ</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div className="col-3">
          <p className="font-bold text-red-600 text-lg">Customer Service</p>
          <ul className="links">
            <li>Payment Methods</li>
            <li>Money-back guarantee!</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="col-4">
          <p className="font-bold text-red-600 text-lg">My Account</p>
          <ul className="links">
            <li>Sign in</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
      <div className="down flex justify-around mt-10 items-center">
        <div className="left text-gray-500">
          <p>Copyright Rights Reserved</p>
        </div>
        <div className="right flex">
          <div className="insta">
            <img src={insta} alt="" />
          </div>
          <div className="fb">
            <img src={fb} alt="" />
          </div>
          <div className="x">
            <img src={x} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
