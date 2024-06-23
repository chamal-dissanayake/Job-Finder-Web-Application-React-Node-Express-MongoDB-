import JobPostingData from "./JobPostingData";
import Location from "./Location";
import Salary from "./Salary";
import TypeofEmployement from "./TypeofEmployement";
import WorkExperience from "./WorkExperience";
const SideBar = ({ handelChange, handelClick }) => {
  return (
    <div className=" space-y-5">
      <h3 className=" text-lg font-bold mb-2">Filters</h3>
      <Location handelChange={handelChange} />
      <Salary handelChange={handelChange} handelClick={handelClick} />
      <JobPostingData handelChange={handelChange} />
      <WorkExperience handelChange={handelChange} />
      <TypeofEmployement handelChange={handelChange} />
    </div>
  );
};

export default SideBar;
