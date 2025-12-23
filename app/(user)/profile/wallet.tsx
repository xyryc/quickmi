import ScreenHeader from "@/components/ScreenHeader";
import { ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const wallet = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Wallet" />

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
            <View className="items-center justify-center">
              <ImageBackground
                source={require("@/assets/images/onboarding-1.svg")}
                contentFit="cover"
                className="h-52 w-52 items-center justify-center"
              >
                <Text className="text-lg font-bold text-black">Welcome</Text>

                <Text className="text-xs text-gray-700">Expo + NativeWind</Text>
              </ImageBackground>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default wallet;
