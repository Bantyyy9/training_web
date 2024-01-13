import React from "react";
import posImg from "../assets/illustration-thank-you.svg";

const BackCard = ({ rating, setMode }) => {
  return (
    <div
      className="card back"
      onClick={() => {
        setMode("front");
      }}
    >
      <img src={posImg} alt="" />
      <ReviewResult rating={rating} />
      <div>
        <h1 style={{ marginBottom: "10px" }}>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default BackCard;

const ReviewResult = ({ rating }) => {
  return <p className="result">You selected {rating} out of 5</p>;
};
