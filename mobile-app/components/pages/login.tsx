import * as React from "react";
import Page from "@components/layouts/Page";
import Button from "@/components/buttons/Button";
import { Text, TextInput, View } from "react-native";
import { Link } from "expo-router";
import { styled, withExpoSnack } from "nativewind";
import Foundation from "@expo/vector-icons/Foundation";
import Entypo from "@expo/vector-icons/Entypo";
import FacebookIcon from "../icons/FacebookIcon";
import GoogleIcon from "../icons/GoogleIcon";
import Wave from "../icons/Wave";
import InstagramIcon from "../icons/InstagramIcon";
import IconButton from "../buttons/IconButton";

const StyledView = styled(View);
const StyledText = styled(View);
const Flexbox = (props: any) => <StyledText className="flex flex-1" {...props} />;

const LoginPage = () => {
  return (
    <Page>
      <View className="relative">
        <View className="w-full h-[150px] bg-primary" />
        <View className="w-full absolute top-[140px] left-0">
          <Wave />
        </View>
      </View>
      <View className="w-full py-24">
        <View className="w-full box-content">
          <View className="flex flex-col justify-center px-6 space-y-6">
            <View className="">
              <Text className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </Text>
            </View>
            <View className="mt-10 px-5">
              <View className="space-y-6">
                <View>
                  <View className="">
                    <View className="relative">
                      <TextInput
                        className="w-full rounded-md border-[1px] border-gray-300 border-solid py-[10px] text-gray-900 pl-10"
                        placeholder="Email"
                      />
                      <View className="absolute left-3 top-[9px] text-gray-400 text-xl">
                        <Foundation name="mail" size={20} color="#9ca3af" />
                      </View>
                    </View>
                  </View>
                </View>
                <View className="mb-5">
                  <View className="relative">
                    <TextInput
                      className="w-full rounded-md border-[1px] border-gray-300 border-solid py-[10px] pl-10 text-gray-300"
                      placeholder="Password"
                    />
                    <View className="absolute left-3 top-[9px] text-gray-400 text-xl">
                      <Entypo name="lock" size={20} color="#9ca3af" />
                    </View>
                  </View>
                </View>
                <Button>SIGN IN</Button>
              </View>
              <View className="flex flex-row items-center justify-center mt-10">
                <Text className="text-center text-sm text-gray-500">
                  Not a member?
                </Text>
                <Link
                  href="123"
                  className="font-semibold leading-6 text-primary-600 ml-2"
                >
                  Start a 14 day free trial
                </Link>
              </View>
              <StyledView className="flex flex-row gap-x-8 mt-10">
                <Flexbox>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                </Flexbox>
                <Flexbox>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                </Flexbox>
                <Flexbox>
                  <IconButton>
                    <GoogleIcon />
                  </IconButton>
                </Flexbox>
              </StyledView>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );
};

export default withExpoSnack(LoginPage);
