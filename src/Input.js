import React from "react";

export default function Input({ type, placeholder, value, onChange }) {
  console.log("3333");
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
