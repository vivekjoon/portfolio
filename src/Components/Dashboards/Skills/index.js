import React from "react";
import "./style.scss";
import { skills } from "../../../Constants";

const Skills = () => {
  return (
    <section className="h-[100vh] relative skills-wrapper" id="skills">
      <header className="text-[52px] font-bold heading">
        <h1 className="m-auto text-white text-center bubble">Skills</h1>
      </header>

      {/* <div className="m-auto text-white"> */}
        {skills?.map((item, index) => {
          return (
            <div
              key={`bubble-${index}`}
              className={`absolute text-left-wrapper bubble ${item?.class} `}
              style={{ animationDuration: item?.duration }}
            >
              <img src={item?.logo} alt={item?.name} className="max-w-[80px]" />
              <div className="font-bold mt-[10px] text-[12px]">{item?.name}</div>
              {/* <span>{item?.rating}</span> */}
            </div>
          );
        })}
      {/* </div> */}
    </section>
  );
};

export default Skills;
