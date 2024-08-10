import React, { useId ,forwardRef} from "react";

function Select({ options, label, calssName = "", ...props }, ref) {
  const id = useId();
  return (
    <div className="w-full ">
      {label && <lable htmlFor={id} calssName=""></lable>}
      <select
        name=""
        id={id}
        ref={ref}
        {...props}
        calssName={` px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${calssName}`}
      >
        {options?.map((option)=>(
            <option key={option} value={option}>
                {option}
            </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
