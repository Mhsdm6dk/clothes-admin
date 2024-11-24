import React from "react";
import { Select } from "@windmill/react-ui";

const SelectOption = ({ register, name, label, options}) => {
  return (
    <>
      <Select
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        {options.map((option)=><option value={option.value} label={option.label} >{option.label}</option>)}
      </Select>
    </>
  );
};

export default SelectOption;
