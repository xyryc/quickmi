import ScreenHeader from "@/components/ScreenHeader";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UpdateName = () => {
  return (
    <SafeAreaView className="flex-1 mb-28" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        {/* header */}
        <ScreenHeader title="Update your your name" />

        <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
          <Text className="mt-5 font-sf-pro-regular text-sm">
            Please enter your name as it appears on your ID or {"\n"}passport.
          </Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UpdateName;
