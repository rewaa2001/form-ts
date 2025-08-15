import React from "react";

interface Props {
  label: string;
  value: string;
  type?: string;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({ label, value, type = "text", error, onChange }) => {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`w-full border ${error ? "border-red-500" : "border-gray-300"} rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-200`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
