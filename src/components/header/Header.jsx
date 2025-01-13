import React, { useState } from "react";
import search from "../../assets/images/search_icon.png";
import wishlist from "../../assets/images/wishlist_icon.png";
import cart from "../../assets/images/cart_icon.png";

const Header = () => {
  const [cartCount] = useState(1);
  const [wishlistCount] = useState(1);

  return (
    <div className="header flex flex-col pt-[20px] pb-[5px]">
      {/* Top Section */}
      <div className="up flex justify-around w-100 items-center">
        <div className="search flex w-[507px]">
          <input
            type="text"
            placeholder="Search product..."
            className="border w-[440px] p-5 rounded-sm h-[52px]"
          />
          <img
            src={search}
            alt="Search"
            className=" cursor-pointer bg-[#fcb941] p-3 w-[64px] h-[52px]"

          />
        </div>
        <div className="add-item flex">
          <div className="wishlist cursor-pointer relative mx-2">
            <img src={wishlist} alt="Wishlist Icon" width={40} />
            <span className="bg-red-600 text-white text-xs flex items-center justify-center w-4 h-4 rounded-full absolute top-1 right-1">
              {wishlistCount}
            </span>
          </div>
          <div className="cart cursor-pointer relative">
            <img src={cart} alt="Cart Icon" width={40} />
            <span className="bg-red-600 text-white text-xs flex items-center justify-center w-4 h-4 rounded-full absolute top-1 right-1">
              {cartCount}
            </span>
          </div>
        </div>

        <div className="registerBtn">
          <button className="border p-[5px] rounded-md bg-[#fcb941] cursor-pointer">Create Your Account</button>
        </div>
      </div>

      {/* Dropdown Section */}
      <div className="down mt-7 border">
        <div className="nav flex justify-around items-center h-[71px]">
          {/* Logo Section */}
          <div className="logo_Name cursor-pointer w-[30vw] flex justify-center">
            <p className="text-3xl font-bold">
              Click<span className="text-red-600">N</span>Cart
            </p>
          </div>

          {/* Dropdowns */}
          <div className="dropdown-container flex gap-4 w-[70vw] justify-evenly bg-[#333] h-[71px]">
            {/* Men's Dropdown */}
            <select className="border p-2 rounded-md text-white outline-none border-none bg-[#333]">
              <option>Men's Clothing</option>
              <option value="tshirts">T-Shirts</option>
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="trousers">Trousers</option>
              <option value="shorts">Shorts</option>
              <option value="jackets">Jackets</option>
              <option value="sweaters">Sweaters</option>
              <option value="suits">Suits & Blazers</option>
              <option value="activewear">Activewear</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Women's Dropdown */}
            <select className="border p-2 rounded-md text-white outline-none border-none bg-[#333]">
              <option>Women's Clothing</option>
              <option value="dresses">Dresses</option>
              <option value="tops">Tops</option>
              <option value="jeans">Jeans</option>
              <option value="skirts">Skirts</option>
              <option value="ethnicwear">Ethnic Wear</option>
              <option value="jackets">Jackets & Coats</option>
              <option value="activewear">Activewear</option>
              <option value="lingerie">Lingerie</option>
              <option value="accessories">Accessories</option>
            </select>

            {/* Kids' Dropdown */}
            <select className="border p-2 rounded-md text-white outline-none border-none bg-[#333]">
              <option>Kids' Clothing</option>
              <option value="tshirts">T-Shirts</option>
              <option value="shirts">Shirts</option>
              <option value="jeans">Jeans</option>
              <option value="shorts">Shorts</option>
              <option value="dresses">Dresses</option>
              <option value="sleepwear">Sleepwear</option>
              <option value="activewear">Activewear</option>
              <option value="jackets">Jackets & Coats</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
