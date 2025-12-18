import ButtonPrimary from "@/components/ButtonPrimary";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step2 = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="border flex-1" edges={["left", "right", "bottom"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.3]}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerClassName="mx-5 flex-1"
          contentContainerStyle={{ justifyContent: "center" }}
        >
          <Image
            source={require("@/assets/images/onboarding-2.svg")}
            style={{
              height: 223,
              width: "100%",
              marginBottom: 20,
            }}
            contentFit="contain"
          />

          <Text className="text-2xl font-sf-pro-medium text-custom-blue-900 mb-3 text-center">
            Select Your Driver
          </Text>
          <Text className="font-sf-pro-regular text-custom-gray-dark text-center">
            Browse through trusted drivers, check their ratings and reviews, and
            select the one who suits you best.
          </Text>

          <View className="absolute bottom-10 inset-x-0">
            {/* progress chips */}
            <View className="flex-row justify-center gap-2.5 mb-5">
              <View className="w-2 h-2 bg-gray-300 rounded-full" />
              <View className="w-4 h-2 bg-custom-blue-500 rounded-full" />
              <View className="w-2 h-2 bg-gray-300 rounded-full" />
            </View>

            <ButtonPrimary
              onPress={() => router.push("/(onboarding)/step3")}
              title="Continue"
            />

            <TouchableOpacity
              onPress={() => router.push("/(auth)/signup")}
              className="flex-row items-center justify-center py-3"
            >
              <Text className="font-sf-pro-medium">Skip</Text>
              <MaterialIcons
                name="keyboard-double-arrow-right"
                size={16}
                color="black"
              />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Step2;
