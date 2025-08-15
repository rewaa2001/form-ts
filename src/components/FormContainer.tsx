import React from "react";
import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
  title: string;
}

const FormContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-bold mb-2 text-gray-800 text-center">
          {title}
        </h1>
        <hr className="mb-6 border-gray-400" />
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
