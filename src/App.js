import React from "react";
import Gameboard from "./components/gameboard";

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <div className="flex justify-center w-full">
        <Gameboard />
        {/* <InformationBoard /> */}
      </div>
    </div>
  );
}

export default App;
