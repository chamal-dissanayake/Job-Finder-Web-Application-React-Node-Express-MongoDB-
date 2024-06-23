import React from "react";
import InputField from "../Components/InputField";

const WorkExperience = ({ handelChange }) => {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2 ">Work Exprience</h4>
      <label className=" sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handelChange}
        />
        <span className="checkmark"></span> Any experience
      </label>
      <InputField
        handelChange={handelChange}
        value="Work remotely"
        title="Work remotely"
        name="test"
      />
      <InputField
        handelChange={handelChange}
        value="Internship"
        title="Internship"
        name="test"
      />
    </div>
  );
};

export default WorkExperience;
