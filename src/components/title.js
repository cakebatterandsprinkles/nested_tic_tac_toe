import React from "react";

const Text = ({ style, text }) => {
  return (
    <div className="flex justify-center">
      <p className={style}>{text}</p>
    </div>
  );
};

export default Text;
