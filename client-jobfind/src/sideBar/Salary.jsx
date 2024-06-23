import InputField from "../Components/InputField";
import Button from "./Button";

const Salary = ({ handelChange, handelClick }) => {
  return (
    <div>
      <h4 className=" text-lg font-medium mb-2 ">Salary</h4>
      <div className=" mb-4">
        <Button onClickHandler={handelClick} value="" title="Hourly" />
        <Button onClickHandler={handelClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handelClick} value="Yearly" title="Yearly" />
      </div>
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
          value={30}
          title="< 30000k"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value={50}
          title="< 50000k"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value={80}
          title="< 80000k"
          name="test"
        />
        <InputField
          handelChange={handelChange}
          value={100}
          title="< 100000k"
          name="test"
        />
      </div>
    </div>
  );
};

export default Salary;
