import React from "react";

function Button({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded font-medium transition-all duration-300 
        ${
          disabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-blue-200 text-white hover:bg-blue-600"
        }
        ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
