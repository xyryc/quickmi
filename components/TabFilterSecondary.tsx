import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const TabFilterSecondary = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View className="flex-row items-center justify-center gap-2 w-full">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id)}
            className={`w-[48%] flex-row items-center justify-center gap-2 py-2 px-3.5 rounded-2xl 
                              ${isActive ? "bg-[#0F73F7]" : "bg-[#9FC7FC40]"}`}
          >
            {isActive ? (
              <Ionicons name={tab.icon as any} size={20} color="white" />
            ) : (
              ""
            )}

            <Text
              className={`font-sf-pro-medium ${
                isActive ? "text-white" : "text-[#4D4D4D]"
              }`}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabFilterSecondary;
