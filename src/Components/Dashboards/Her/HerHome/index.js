import React, { useEffect } from "react";
import "./style.scss";
import Typewriter from "typewriter-effect";
import KhyatiImg from "../../../../Assets/khyati_without_bg.png";
import { ReactComponent as Arrow } from "../../../../Assets/right_arrow.svg";
import { HerImgs, OurImgs, myImgs } from "../../../../Constants";
import { useDispatch, useSelector } from "react-redux";
import { setId, setPassword } from "../../../../redux/reducers/loginReducer";
import { useNavigate } from "react-router";

const HerHome = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.auth.id);
  const password = useSelector((state) => state.auth.password);
  const navigate = useNavigate();

  useEffect(() => {
    if (!id || !password) {
      navigate("/her");
    }
  }, []);

  const goToSection = () => {
    const element = document.getElementsByClassName("you")[0];
    console.log("element", element);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const logoutHandler = () => {
    dispatch(setId(null));
    dispatch(setPassword(null));
    navigate("/login");
  };
  return (
    <>
      <div className=" herHome bg-[black] min-h-[120vh]">
        <button
          className="bg-white px-[30px] py-[10px] rounded-[50px] top-[20px] right-[20px] z-10 fixed hover:bg-[#0563bb] hover:text-white duration-300"
          onClick={logoutHandler}
        >
          Logout
        </button>
        <div className="secondary">
          <span className="text-[#ffffff]">
            Hello{" "}
            <Typewriter
              options={{
                strings: [
                  '<span style="color: #0563bb;">Tutul Putul</span>.',
                  '<span style="color: #0563bb;">Khyati Nayal</span>.',
                  `<span style="color: #0563bb;">Ma'am to your personal page</span>.`,
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
          <div className="down_arrow" onClick={goToSection}>
            <Arrow />
          </div>
        </div>
        <div>
          <img className="her_img" src={KhyatiImg} alt="This is Her" />
        </div>
      </div>
      <div className="you">
        <div className="plus"></div>
        <h1>You</h1>
        <div class="container">
          {HerImgs?.map((item, index) => {
            return (
              <figure>
                <img src={item?.src} alt={`her ${index}`} loading="lazy" />
              </figure>
            );
          })}
        </div>
      </div>
      <div className="me">
        <div className="equals"></div>

        <h1>Me</h1>
        <div class="container">
          {myImgs?.map((item, index) => {
            return (
              <figure>
                <img src={item?.src} alt={`my ${index}`} loading="lazy" />
              </figure>
            );
          })}
        </div>
      </div>
      <div className="us">
        <h1>Us</h1>
        <div class="container">
          {OurImgs?.map((item, index) => {
            return (
              <figure>
                <img src={item?.src} alt={`us ${index}`} loading="lazy" />
              </figure>
            );
          })}
        </div>
      </div>
      {/* <div className="question min-h-[50vh] bg-black p-[120px] flex items-center flex-col">
        <h1 className="text-[32px] text-white">Please click on the below button</h1>
        <button className="bg-white px-[30px] py-[10px] rounded-[50px] hover:bg-[#0563bb] hover:text-white duration-300 mt-[40px]">
          Answer a Question
        </button>
      </div> */}
      <div className="min-h-[50vh] bg-black p-[120px] flex items-center flex-col">
        <h1 className="text-[48px] text-white">Work in progress</h1>
      </div>
    </>
  );
};

export default HerHome;
