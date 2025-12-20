import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import { Text, View } from "react-native";

const ScreenHeader = ({ title }) => {
  return (
    <View className="py-3 px-5 flex-row items-center">
      <View className="w-11 h-11 bg-white items-center justify-center rounded-full border-[0.5px] border-[#0F73F7E5]">
        <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
      </View>

      <View className="flex-1 items-center">
        <Text className="text-xl font-sf-pro-medium">{title}</Text>
      </View>
    </View>
  );
};

export default ScreenHeader;
