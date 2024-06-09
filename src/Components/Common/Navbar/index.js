import React, { useEffect, useState } from "react";
import "./style.scss";
import { NavbarItems } from "../../../Constants";
import MyLogo from "../../../Assets/VivekJoon.png"

const Navbar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let section = document.querySelectorAll("section");
      section.forEach((sec, index) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
          setSelected(id);
        }
      });
    };
    setSelected("home");
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
    setSelected(id);
  };

  return (
    <nav className="navbar-wrapper h-[100vh]">
      <div className="logo_wrapper"><img src={MyLogo} /></div>
      {NavbarItems?.map((item, index) => {
        return (
          <span
            key={`${item?.id}-${index}`}
            className={`nav-items !flex items-center ${
              selected === item?.id ? "selected" : ""
            }`}
            onClick={() => goToSection(item?.id)}
          >
            <span className="">{item?.icon}</span>
            <span className="text ml-[8px] font-medium">{item?.name}</span>
          </span>
        );
      })}
    </nav>
  );
};

export default Navbar;
