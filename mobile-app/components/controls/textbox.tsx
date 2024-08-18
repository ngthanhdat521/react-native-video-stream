import React from "react";
import TextInput from "@components/controls/text-input";

const Textbox = () => {
  return (
    <TextInput
      autoComplete="current-password"
      className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
    />
  );
};

export default Textbox;
