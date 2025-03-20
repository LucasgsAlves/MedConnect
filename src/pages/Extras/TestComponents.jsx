import React from "react";
import NavBar from "../../components/Layout/NavBar";

function TestComponents() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
      <NavBar/>
      <div className="flex-grow">
      </div>
    </div>
  );
}

export default TestComponents;