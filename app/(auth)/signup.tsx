import ButtonPrimary from "@/components/ButtonPrimary";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");

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
          {/* header text */}
          <Text className="text-2xl font-sf-pro-medium text-custom-blue-900 mb-3 text-center">
            Welcome Back!
          </Text>
          <Text className="font-sf-pro-regular text-custom-gray-dark text-center">
            By continuing, you agree to calls, including by autodialer,
            WhatsApp, or texts from Quickmi and its affiliates.
          </Text>

          {/* inputs */}
          <View className="mt-7">
            <Text className="text-custom-blue-900 font-sf-pro-medium mb-3">
              Enter Your Full Name
            </Text>

            <TextInput
              placeholder="Enter your name"
              className="mb-4 border border-custom-soft-gray rounded-lg p-4 font-sf-pro-regular text-base"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />

            <Text className="text-custom-blue-900 font-sf-pro-medium mb-3">
              Enter Your Phone Number
            </Text>

            <TextInput
              placeholder="Enter your name"
              className="mb-4 border border-custom-soft-gray rounded-lg p-4 font-sf-pro-regular text-base"
              value={name}
              onChangeText={setName}
              autoCapitalize="words"
            />
          </View>

          <ButtonPrimary
            onPress={() => router.push("/(onboarding)/step3")}
            title="Continue"
          />

          <View className="my-4 flex-row items-center gap-2">
            <View className="w-[46%] h-[1px] bg-gray-200" />
            <Text className="font-sf-pro-regular text-sm text-custom-dark-gray">
              Or
            </Text>
            <View className="w-[46%] h-[1px] bg-gray-200" />
          </View>

          {/* social logins */}
          <View>
            <TouchableOpacity className="flex-row justify-center items-center gap-2 py-4 rounded-2xl border border-gray-300 mb-2">
              <Image
                source={require("@/assets/images/google.svg")}
                style={{
                  width: 20,
                  height: 20,
                }}
                contentFit="contain"
              />
              <Text className="font-sf-pro-regular text-sm text-custom-blue-900">
                Continue with Google
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-row justify-center items-center gap-2 py-4 rounded-2xl border border-gray-300">
              <Image
                source={require("@/assets/images/apple.svg")}
                style={{
                  width: 20,
                  height: 20,
                }}
                contentFit="contain"
              />
              <Text className="font-sf-pro-regular text-sm text-custom-blue-900">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SignUp;
