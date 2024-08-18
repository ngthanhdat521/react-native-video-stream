import React, { ReactNode } from "react";
import { Pressable, GestureResponderEvent, View, Text } from "react-native";

interface IProps extends ReactNavigation.RootParamList {
  children?: ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  css?: string;
}

export const Button = (props: IProps) => {
  const { children, onPress } = props;

  return (
    <Pressable onPress={onPress}>
      <View className="flex w-full justify-center rounded-md bg-primary px-3 py-2 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Text className="text-center text-white text-base font-bold">
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;
