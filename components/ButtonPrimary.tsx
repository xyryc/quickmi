import React from "react";
import { Text, TouchableOpacity } from "react-native";

const ButtonPrimary = ({ className, title, icon, iconPosition }) => {
  return (
    <TouchableOpacity
      className={`${iconPosition === "left" ? "flex-row-reverse" : "flex-row"}
        ${className} flex-row items-center justify-center gap-2 bg-custom-blue-500 py-3 rounded-2xl`}
    >
      <Text className="font-sf-pro-semibold text-white">{title}</Text>

      {icon}
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
