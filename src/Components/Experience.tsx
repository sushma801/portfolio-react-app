import React, { Fragment } from "react";
import { StyledExperience } from "./Experience.style";
import { workExperienceSet } from "../interfaces/SkillsConstant";
import WorkContainer from "./WorkContainer";

const Experience = () => {
  return (
    <StyledExperience>
      <h1>Work Experience</h1>
      <div className="work-container">
        {workExperienceSet.map(({ companyName, workType }, index) => (
          <Fragment key={`${companyName}-${index}`}>
            <h2>Company Name: {companyName}</h2>
            {workType.map(
              ({ projectName, keyRole, techStack, describtion }, index) => (
                <WorkContainer
                  key={`${projectName}-${index}`}
                  projectName={projectName}
                  keyRole={keyRole}
                  techStack={techStack}
                  describtion={describtion}
                />
              )
            )}
          </Fragment>
        ))}
      </div>
    </StyledExperience>
  );
};

export default Experience;
