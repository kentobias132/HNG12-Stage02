import React from "react";

interface InputProps {
  label: string;
  type: "text" | "email";
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  return (
    <div className="w-full my-10">
      <label htmlFor={name} className="block text-gray-200 font-medium mb-1">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className=" w-full bg-transparent border-2 border-lightBorder-300 py-4 px-2 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-brandColor-100"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Input;
