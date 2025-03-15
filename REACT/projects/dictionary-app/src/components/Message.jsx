import React from "react";
import { Link } from "react-router";

const messages = {
  pageNotFound: {
    title: "We lost this page",
    text: "We searched high and low but couldn't find what you're looking for. Let's find a better place for you to go.",
  },
  definitionNotFound: {
    title: "No Definitions Found",
    text: "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.",
  },
};

const Message = ({ type }) => {
  const messageToShow = messages[type];
  return (
    <div className="pt-10 lg:pt-24 h-full w-full flex flex-col gap-4 text-center">
      <img
        className="w-[4rem] h-[4rem] mx-auto"
        src="/images/not_found.png"
        alt="Not Found"
      />
      <h3 className="text-xl font-bold">{messageToShow.title}</h3>
      <p className="text-appGray1 w-full md:max-w-[30rem] lg:max-w-[35rem] mx-auto">
        {messageToShow.text}
      </p>
      <Link className="text-appRed dark:text-appPurple" to="/">
        Go Back
      </Link>
    </div>
  );
};

export default Message;
