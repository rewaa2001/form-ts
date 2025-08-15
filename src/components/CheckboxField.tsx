import React from "react";

interface Props {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<Props> = ({ label, checked, onChange }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
      />
      <label className="ml-3 text-sm text-gray-700">{label}</label>
    </div>
  );
};

export default CheckboxField;
