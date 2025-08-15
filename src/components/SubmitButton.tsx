import React from "react";

interface Props {
  isValid: boolean;
  successMessage?: string;
}

const SubmitButton: React.FC<Props> = ({ isValid, successMessage }) => {
  return (
    <>
      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-2 px-4 rounded font-semibold text-white transition ${
          isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
      {successMessage && <p className="text-green-600 text-center mt-4">{successMessage}</p>}
    </>
  );
};

export default SubmitButton;
