import React from "react";
import { TextProps, Text as RNText } from "react-native";
import tw from "twrnc";

interface IProps extends TextProps {
  className?: string;
}

const Text = (props: IProps) => {
  const { children, className = "", ...rest } = props;

  return (
    <RNText {...rest} style={tw`${className}`}>
      {children}
    </RNText>
  );
};

export default Text;
