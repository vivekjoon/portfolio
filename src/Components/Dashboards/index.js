import React, { useEffect } from "react";
import "./style.scss";
import Navbar from "../Common/Navbar";
import Home from "./Home";
import Skills from "./Skills";
import ResumePDF from "../../Assets/Vivek_Joon_Resume.pdf";
import Work from "./Work";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import HerComponent from "./Her";
import HerHome from "./Her/HerHome";
import Blogs from "./Blog";
import ContactMe from "./ContactMe";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    document.addEventListener("mousemove", (event) => {
      const cursor_x = Math.round(event.pageX / 1);
      const cursor_y = Math.round(event.pageY / 1);

      cursor.style.transform = `translate(${cursor_x}px, ${cursor_y}px)`;
    });
  });
  const returnDownloadButton = () => (
    <>
      <button className="bg-[#0563bb] text-white px-[30px] py-[10px] rounded-[50px] top-[20px] right-[210px] z-10 fixed login-btn" onClick={() => navigate("/login")}>
        Login
      </button>
      <a
        href={ResumePDF}
        download="Vivek_Joon_Resume"
        className=" download_cv_btn bg-white px-[30px] py-[10px] rounded-[50px] top-[20px] right-[20px] z-10 fixed hover:bg-[#0563bb] hover:text-white duration-300"
      >
        Download CV
      </a>
    </>
  );
  return (
    <div className="dashboard-wrapper">
      <div id="cursor"></div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <div className="dashboards">
                <Home />
                <Skills />
                <Work />
                <Blogs />
                <ContactMe />
              </div>
              {returnDownloadButton()}
            </>
          }
        />

        <Route path="/login" element={<HerComponent />} />
        <Route path="/her/home" element={<HerHome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
