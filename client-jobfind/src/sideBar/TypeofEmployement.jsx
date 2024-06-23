import React from "react";
import InputField from "../Components/InputField";

const TypeofEmployement = ({ handelChange }) => {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2 ">Type of employment</h4>
      <label className=" sidebar-label-container">
        <input
          type="radio"
          name="test"
          id="test"
          value=""
          onChange={handelChange}
        />
        <span className="checkmark"></span> Any
      </label>
      <InputField
        handelChange={handelChange}
        value="Full-time"
        title="Full-time"
        name="test"
      />
      <InputField
        handelChange={handelChange}
        value="Temporary"
        title="Temporary"
        name="test"
      />

      <InputField
        handelChange={handelChange}
        value="Part-time"
        title="Part-time"
        name="test"
      />
    </div>
  );
};

export default TypeofEmployement;
