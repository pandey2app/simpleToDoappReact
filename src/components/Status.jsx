import React from "react";
import mybg from "../images/bg.jpg";

export default function Status() {
  return (
    <div
      style={{
        backgroundImage: `url(${mybg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
      className="border-2 w-11/12 rounded-xl m-auto h-20 mb-5 flex justify-evenly gap-1"
    >
      <div
        id="total-tasks"
        className="bg-white w-6/12 opacity-30 backdrop-blur"
      ></div>
      <div id="completed-tasks" 
      className="bg-white w-6/12 opacity-30 backdrop-blur"></div>
    </div>
  );
}
