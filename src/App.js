import React from "react";
import "./styles.css";
import Gameboard from "./components/gameboard";
import Title from "./components/text";
import InformationBoard from "./components/informationBoard";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="flex flex-col w-full justify-center content-center">
        <Title
          customStyle="title text-black text-4xl mt-6"
          text="Nested Tic Tac Toe"
        />
        <Gameboard />
        <InformationBoard />
      </div>
    </div>
  );
}

export default App;
