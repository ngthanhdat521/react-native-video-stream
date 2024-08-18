import { styled } from "nativewind";
import React, { ReactNode } from "react";
import { Pressable, GestureResponderEvent, View } from "react-native";

interface IProps extends ReactNavigation.RootParamList {
  onPress?: (event: GestureResponderEvent) => void;
  children?: ReactNode;
}

export const IconButton = (props: IProps) => {
  const { onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View
        className={
          "p-[10px] text-gray-900 bg-white border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        }
        {...props}
        style={{
          shadowColor: "#d1d5db",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
        }}
      />
    </Pressable>
  );
};

export default IconButton;
