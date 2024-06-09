import React from "react";
import "./style.scss";
import HerLogin from "./login";

const HerComponent = () => {
  return (
    <div className="her-wrapper min-h-[100vh] text-[#ffffff] flex w-full justify-center items-center">
      <div className="">
        <HerLogin />
      </div>
    </div>
  );
};

export default HerComponent;
