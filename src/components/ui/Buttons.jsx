import React from "react";
import { motion } from "framer-motion";

const ButtonWrapper = ({
  label = "",
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  size = "medium",
  icon = null,
  loading = false,
  className = "",
  url = "",
}) => {
  // Base styles for the button
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-lg transition duration-300 focus:outline-none";

  // Variants for different button types (primary, secondary, etc.)
  const variantStyles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-300",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 active:bg-gray-400 disabled:bg-gray-100",
    danger:
      "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 disabled:bg-red-300",
    outline:
      "border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-blue-600 active:bg-gray-200 disabled:border-gray-300 disabled:text-gray-400 disabled:bg-transparent",
  };

  // Size variants (small, medium, large)
  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Spinner for loading state
  const loadingSpinner = (
    <svg
      className="animate-spin h-5 w-5 text-white"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        strokeWidth="4"
        className="text-transparent"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 12a8 8 0 018-8V4m0 16v-2a6 6 0 000-12 6 6 0 000 12v2"
      />
    </svg>
  );

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variantStyles[variant]} ${
        sizeStyles[size]
      } ${className} ${
        disabled || loading ? "cursor-not-allowed opacity-50" : ""
      }`}
      layoutId={url}
    >
      {loading ? loadingSpinner : icon && <span className="mr-2">{icon}</span>}
      <span>{label}</span>
    </motion.button>
  );
};

export default ButtonWrapper;
