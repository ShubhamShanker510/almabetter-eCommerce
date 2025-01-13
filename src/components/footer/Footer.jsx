import React from 'react'
import call from '../../assets/images/call.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="up">
      <div className="col-1">
        <div className="logo">
        <p className="text-3xl font-bold">
              Click<span className="text-red-600">N</span>Cart
            </p>
        </div>
        <div className="txt">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae enim, maxime voluptatibus provident nisi praesentium?
      </div>
      <div className="contact">
        <div className="call">
            <img src={call} alt="" />
        </div>
        <div className="details">
            <p>Got Question? Call us 24/7</p>
        </div>
      </div>
      </div>
      <div className="col2">
        <p>Useful Links</p>
        <ul className="links">
            <li>About</li>
            <li>Our Sevices</li>
            <li>How to shop on</li>
            <li>FAQ</li>
            <li>Contact us</li>
        </ul>
      </div>
      <div className="col-3">
        <p>Customer Service</p>
        <ul className='links'>
            <li>Payment Methods</li>
            <li>Money-back guarantee!</li>
            <li>Returns</li>
            <li>Shipping</li>
            <li>Terms and conditions</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      <div className="col-4">
        <p>My Account</p>
        <ul className="links">
            <li>Sign in</li>
            <li>View Cart</li>
            <li>My Wishlist</li>
            <li>Track My Order</li>
            <li>Help</li>
        </ul>
      </div>
      </div>
      <div className="down">
        <div className="left">
            <p>Copyright Rights Reserved</p>
        </div>
        <div className="right">
            
        </div>
      </div>
    </div>
  )
}

export default Footer
