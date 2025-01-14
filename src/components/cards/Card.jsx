import React, { useState } from "react";
import watch from "../../assets/images/watch.jpg";

const Card = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(-1);
  };

  const renderCard = (index) => (
    <div
      key={index}
      className="card flex flex-col m-5 border rounded-md cursor-pointer w-[300px]"
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="top">
        <img src={watch} alt="Product" />
      </div>
      <div className="bottom p-5">
        <div className="category text-gray-500">
          <p>Category</p>
        </div>
        <div className="title font-semibold">
          <p>Product title</p>
        </div>
        <div className="price text-red-600 mb-5">
          <p>Rs:500</p>
        </div>
        {hoverIndex === index && ( // Conditionally render buttons on hover
          <div className="btn flex justify-between items-center">
            <div className="read_more">
              <button className="bg-red-600 p-2 text-white rounded-md cursor-pointer mr-3">
                Read More
              </button>
            </div>
            <div className="cart">
              <button className="bg-red-600 p-2 text-white rounded-md cursor-pointer">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-4 w-[100vw]">
      {Array(6) // Render 6 cards dynamically
        .fill(0)
        .map((_, index) => renderCard(index))}
    </div>
  );
};

export default Card;
