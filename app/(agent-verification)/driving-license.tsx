import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { Entypo } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const DrivingLicense = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Driving License" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          {/* scrollable content */}
          <ScrollView
            className="flex-1 mx-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          >
            <Text className="mt-3.5  font-sf-pro-medium">
              Driving License No
            </Text>
            <TextInput
              className="mt-2 p-4 border border-[#E3E6F0] rounded-xl bg-white"
              placeholder="3264 35465 341654 "
            />

            {/* Upload car registration picture */}
            <Text className="mt-8 text-base font-sf-pro-medium text-center">
              Upload Your Driving License picture (Front)
            </Text>
            <View
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#000000",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="mt-5 p-4 h-36 border border-[#000000] rounded-xl bg-white"
            >
              <Entypo name="camera" size={40} color="black" />
              <Text className="mt-3 text-[#1D242D] text-xl font-sf-pro-regular">
                Upload
              </Text>
            </View>

            {/* Upload car registration picture */}
            <Text className="mt-8 text-base font-sf-pro-medium text-center">
              Upload Your Driving License picture (Back)
            </Text>
            <View
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#000000",
                justifyContent: "center",
                alignItems: "center",
              }}
              className="mt-5 p-4 h-36 border border-[#000000] rounded-xl bg-white"
            >
              <Entypo name="camera" size={40} color="black" />
              <Text className="mt-3 text-[#1D242D] text-xl font-sf-pro-regular">
                Upload
              </Text>
            </View>
          </ScrollView>

          {/* bottom button */}
          <View className="px-5 pb-32">
            <ButtonPrimary
              onPress={() => router.push("/(agent-verification)")}
              title="Submit"
            />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default DrivingLicense;
