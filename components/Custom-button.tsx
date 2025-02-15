import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  variant = "primary",
  disabled,
}) => {
  const baseStyles =
    "px-4 py-4 w-full text-white border-2 border-lightBorder-300 hover:bg-brandColor-100/80 rounded-md transition-all duration-300 font-semibold";
  const variants = {
    primary: " bg-brandColor-100 ",
    secondary: "bg-transparent ",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
