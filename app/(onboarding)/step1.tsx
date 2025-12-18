import { Image } from "expo-image";
import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Step1 = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerClassName="mx-5">
        <Image
          source={require("@/assets/images/onboarding-1.svg")}
          style={{
            height: 335,
            width: "100%",
          }}
          contentFit="fill"
        />

        <Text className="text-2xl font-sf-pro-medium">
          Choose Your Destination
        </Text>
        <Text className="font-sf-pro-regular ">
          Simply enter your pickup and drop-off locations on the map to find the
          best routes instantly.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Step1;
