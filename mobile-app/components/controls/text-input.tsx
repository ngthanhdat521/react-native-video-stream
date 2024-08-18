import React from "react";
import { TextInputProps, TextInput as RNTextInput } from "react-native";
import tw from "twrnc";

interface IProps extends TextInputProps {
  className?: string;
}

export const TextInput = (props: IProps) => {
  const { className = "", ...rest } = props;

  return <RNTextInput {...rest} style={{ ...tw`${className}` }} />;
};

export default TextInput;
