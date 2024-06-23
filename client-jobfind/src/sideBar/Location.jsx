import React from "react";
import InputField from "../Components/InputField";

const Location = ({ handelChange }) => {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Location</h4>
      <div>
        <label className=" sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handelChange}
          />
          <span className="checkmark"></span> All
        </label>
        <InputField
          handelChange={handelChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
};

export default Location;
