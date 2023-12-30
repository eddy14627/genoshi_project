// Input.tsx
import React from 'react';

interface InputProps {
  label: string;
  value: string;
}

const Input: React.FC<InputProps> = ({ label, value }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-500">{label}</label>
      <input
        type="text"
        value={value}
        className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
        readOnly
      />
    </div>
  );
};

export default Input;
