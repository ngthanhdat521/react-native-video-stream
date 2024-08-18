import React from "react";
import TextInput from "@components/controls/text-input";

const Passwordbox = () => {
  const [show, setShow] = React.useState(false);
  // return (
  //   <Input
  //     w={{
  //       base: "100%",
  //       md: "25%",
  //     }}
  //     type={show ? "text" : "password"}
  //     InputLeftElement={
  //       <Icon
  //         as={<Entypo name="lock" />}
  //         size={5}
  //         ml="2"
  //         color="muted.400"
  //       />
  //     }
  //     InputRightElement={
  //       <Pressable onPress={() => setShow(!show)}>
  //         <Icon
  //           as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
  //           size={5}
  //           mr="2"
  //           color="muted.400"
  //         />
  //       </Pressable>
  //     }
  //     placeholder="Password"
  //   />
  // );

  return (
    <TextInput
      autoComplete="current-password"
      className="block w-full rounded-md border border-gray-300 py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
    />
  );
};

export default Passwordbox;
