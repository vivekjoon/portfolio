import React, { useState } from "react";
import "./style.scss";
import { Works } from "../../../Constants";

// const Work = () => {
//   return (
//     <section className="work-wrapper min-h-[100vh]" id="work">
//       <h1 className="main_heading text-[52px]">Projects</h1>
//       <div className="wroks">
//         {Works.map((work, index) => (
//           <div key={index} className="work-item">
//             <p className="number">{index+1}</p>
//             <h1 className="heading">{work.name}</h1>
//             <p className="description">{work.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Work;

const Work = () => {
  const [selectedCompany, setSelectedCompany] = useState(Works[0]);

  return (
    <section className="work-wrapper min-h-[100vh]" id="work">
      <h1 className="main_heading text-[52px]">Projects</h1>
      <div className="works">
        <div className="company_wrapper w-[30%]">
          {Works.map((company) => {
            return (
              <div
                className={`card flex ${
                  company.companyName === selectedCompany.companyName
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedCompany(company)}
              >
                <div className="w-[20%] ml-[20px]">
                  {company.image ? <img src={company.image} /> : company.logo}
                
                </div>
                <div>
                  <h1 className="company_name">
                    {company.companyName}
                  </h1>
                  <p className="duration">
                    {company.from} - {company.to}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="project_wrapper flex flex-wrap gap-[40px]">
          {selectedCompany.projects &&
            selectedCompany.projects.map((project) => {
              return (
                <div className="card">
                  <h1 className="company_name">{project.projectName}</h1>
                  <p className="duration">
                    {project.from} - {project.to}
                  </p>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Work;
