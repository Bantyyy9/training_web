import React from "react";

const Footer = () => {
  return (
    <div className="max-w-2xl mx-auto p-5 lg:p-0 w-full bg-green-500 mt-10">
      <p className="text-center text-green-200">
        MyApiLearningSite &copy; {new Date().getFullYear()}. All right
        reservered.
      </p>
    </div>
  );
};

export default Footer;
