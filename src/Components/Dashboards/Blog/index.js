import React from "react";
import "./style.scss";
import { BlogsData } from "../../../Constants";

const Blogs = () => {
  return (
    <section className="h-[100vh] relative blog-wrapper" id="blog">
      <header className="text-[52px] font-bold heading">
        <h1 className="m-auto text-white text-center">Blogs</h1>
      </header>
      <div className="cards-wrapper">
        {BlogsData &&
          BlogsData.map((blog) => {
            return (
              <div className="card">
                <div>
                  <img src={blog.image} className="max-w-[100%] h-[150px]" />
                  <h1 className="heading">{blog.title}</h1>
                </div>
                <a href={blog.link} target="_blank">
                  <button className="bg-[#0563bb] text-white px-[30px] py-[10px] rounded-[50px] top-[20px] right-[190px] z-10">
                    Read More
                  </button>
                </a>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Blogs;
