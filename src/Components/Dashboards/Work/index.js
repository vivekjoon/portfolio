import React from "react";
import "./style.scss";
import { Works } from "../../../Constants";
import MeIcon from "../../../Assets/me-nobg.png";

const Work = () => {
  return (
    <section className="work-wrapper min-h-[100vh]" id="work">
      <h1 className="main_heading text-[52px]">Projects</h1>
      <div className="wroks">
        {Works.map((work, index) => (
          <div key={index} className="work-item">
            <p className="number">{index+1}</p>
            <h1 className="heading">{work.name}</h1>
            <p className="description">{work.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
