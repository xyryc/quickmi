import ButtonPrimary from "@/components/ButtonPrimary";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step1 = () => {
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
            source={require("@/assets/images/onboarding-1.svg")}
            style={{
              height: 335,
              width: "100%",
              marginBottom: 50,
            }}
            contentFit="fill"
          />

          <Text className="text-2xl font-sf-pro-medium text-custom-blue-900 mb-3 text-center">
            Choose Your Destination
          </Text>
          <Text className="font-sf-pro-regular text-custom-gray-dark text-center">
            Simply enter your pickup and drop-off locations on the map to find
            the best routes instantly.
          </Text>

          {/* progress chips */}
          <View className="flex-row justify-center gap-2.5 mb-5 mt-12">
            <View className="w-4 h-2 bg-custom-blue-500 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
            <View className="w-2 h-2 bg-gray-300 rounded-full" />
          </View>

          <ButtonPrimary
            className="mb-5"
            title="Get Started"
            icon={
              <Ionicons
                className="-rotate-45"
                name="arrow-forward-circle-outline"
                size={16}
                color="white"
              />
            }
          />

          <TouchableOpacity className="flex-row items-center justify-center py-3">
            <Text className="font-sf-pro-medium">Skip</Text>
            <MaterialIcons
              name="keyboard-double-arrow-right"
              size={16}
              color="black"
            />
          </TouchableOpacity>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Step1;
