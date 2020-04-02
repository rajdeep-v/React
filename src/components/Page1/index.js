import React from "react";
import logo from "../../logo.svg";

function Page1() {
  return(
    <div className="bg-gray-800 h-screen flex items-center justify-center flex-col text-white">
        <img src={logo} className="App-logo w-3/4" alt="logo" />
        <h1>Page 1</h1>
    </div>    
      ) 
}
export default Page1;
