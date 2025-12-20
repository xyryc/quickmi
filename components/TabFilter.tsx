import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

const TabFilter = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ScrollView
      horizontal
      className="pl-5 my-3"
      showsHorizontalScrollIndicator={false}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <TouchableOpacity
            key={tab.id}
            onPress={() => setActiveTab(tab.id)}
            className={`mr-3.5 flex-row items-center justify-center gap-2 py-2 px-3.5 rounded-2xl 
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
    </ScrollView>
  );
};

export default TabFilter;
