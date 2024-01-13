import React, { useState } from "react";
import starIcon from "../assets/icon-star.svg";

const FrontCard = ({ setRating, rating, setMode }) => {
  const items = [1, 2, 3, 4, 5];

  const changeRating = (e) => {
    const v = e.target.innerText;
    setRating(v);
  };
  const submitRating = () => {
    if (!rating) {
      alert("Please select one of the rating");
      //   return;
    } else {
      setMode("back");
    }
  };
  return (
    <div className="card">
      <StarIcon />
      <Header />
      <RatingsList items={items} rating={rating} changeRating={changeRating} />
      <button onClick={submitRating} className="submit">
        Submit
      </button>
    </div>
  );
};

export default FrontCard;

const StarIcon = () => {
  return (
    <div className="icon">
      <img src={starIcon} alt="" />
    </div>
  );
};

const Header = () => {
  return (
    <div className="">
      <h1 style={{ marginBottom: ".75rem" }}>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </div>
  );
};

const RatingsList = ({ items, rating, changeRating }) => {
  return (
    <div className="ratings">
      {items.map((item) => (
        <Rating
          isActive={String(item) === rating}
          key={item}
          text={item}
          onClick={changeRating}
        />
      ))}
    </div>
  );
};

const Rating = ({ text, isActive, onClick }) => {
  return (
    <button className={`rating ${isActive ? "active" : ""}`} onClick={onClick}>
      {text}
    </button>
  );
};
