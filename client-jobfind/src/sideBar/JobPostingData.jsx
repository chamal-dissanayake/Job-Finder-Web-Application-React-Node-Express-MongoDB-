import React from "react";
import InputField from "../Components/InputField";

const JobPostingData = ({ handelChange }) => {
  const now = new Date();
  const twentryFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
  const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  //converting date to string
  const twentryFourHoursAgoDate = twentryFourHoursAgo
    .toISOString()
    .slice(0, 10);
  const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
  const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);

  return (
    <div>
      <h4 className=" text-lg font-medium mb-2">Date of Posting</h4>
      <div>
        <label className=" sidebar-label-container">
          <input
            type="radio"
            name="test"
            id="test"
            value=""
            onChange={handelChange}
          />
          <span className="checkmark"></span> All Time
        </label>
        <InputField
          handelChange={handelChange}
          value={twentryFourHoursAgoDate}
          title="Last 24 Hours"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value={sevenDaysAgoDate}
          title="Last 7 Days"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value={thirtyDaysAgoDate}
          title="Last Month"
          name="test"
        />
        {/* <InputField
          handelChange={handelChange}
          value="boston"
          title="Boston"
          name="test"
        /> */}
      </div>
    </div>
  );
};

export default JobPostingData;
