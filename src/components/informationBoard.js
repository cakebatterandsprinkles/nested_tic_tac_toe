import React from "react";
import Text from "./text";
import "../styles.css";

const InformationBoard = () => {
  return (
    <div className="flex flex-col w-64 mt-6 self-center">
      <Text customStyle="title text-black text-2xl mt-2" text="Game Report" />
      <div className="mb-4 border border-gray-800 border-dotted h-1"></div>
      <div className="flex justify-start">
        <Text customStyle="info-header mr-2" text="Total X's on board: " />
        <Text customStyle="info-text" text="0" />
      </div>
      <div className="flex justify-start">
        <Text customStyle="info-header mr-2" text="Total O's on board: " />
        <Text customStyle="info-text" text="0" />
      </div>
      <div className="flex justify-start">
        <Text customStyle="info-header mr-2" text="Total mini games won: " />
        <Text customStyle="info-text" text="0" />
      </div>
    </div>
  );
};

export default InformationBoard;
