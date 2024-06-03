import React from 'react';

const Select = ({
  onSelect,
  selectOptions,
}: {
  onSelect: (status: string) => void;
  selectOptions: string[];
}) => {
  return (
    <select
      id='status'
      onChange={(e) => onSelect(e.target.value)}
      className='p-2 w-fit border text-sm rounded-md border-dashed border-slate-300 bg-[#e9ecef] text-slate-500'
    >
      {selectOptions.map((ele) => (
        <option key={ele} value={ele}>
          {ele}
        </option>
      ))}
    </select>
  );
};

export default Select;
