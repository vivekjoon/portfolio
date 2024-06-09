import React from "react";
import Typewriter from "typewriter-effect";

import "./style.scss";
import { HomepageSocial } from "../../../Constants";
import MeIcon from "../../../Assets/me-nobg.png";

const Home = () => {
  return (
    <section className="home-wrapper" id="home">
      <div className="bg-img absolute">
        <img className="image" alt="this is me" src={MeIcon} />
      </div>

      <div className="home-text">
        <div className="primary">
          <h1>Vivek Joon</h1>
        </div>
        <div className="secondary">
          <span>
            I'm a{" "}
            <Typewriter
              options={{
                strings: [
                  '<span style="color: #0563bb;">Frontend Developer</span>.',
                  '<span style="color: #0563bb;">Photographer</span>.',
                  '<span style="color: #0563bb;">Traveller</span>.',
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>
        <div className="icons-wrapper flex items-center gap-[20px]">
          {HomepageSocial?.map((item, index) => {
            return (
              <a target="_blank" rel="noreferrer" href={item?.toLink} key={`home-${index}`} className={item?.svgClass + " home-svg"}>
                {item?.svg}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;

