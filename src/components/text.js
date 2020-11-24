import React from "react";

const Text = ({ customStyle, text }) => {
  return (
    <div className="flex justify-center">
      <p className={customStyle}>{text}</p>
    </div>
  );
};

export default Text;
