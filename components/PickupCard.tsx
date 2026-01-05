import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";

const PickupCard = () => {
  const router = useRouter();

  return (
    <View className="border border-[#005FDC24] p-4 rounded-xl my-4">
      {/* route */}
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-sf-pro-medium text-[#031731]">
          Pick-up From
        </Text>

        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() => router.push("/(agent)/chat/chat")}
            className="w-11 h-11 rounded-full items-center justify-center bg-[#CFE3FD42] border border-[#0F73F724]"
          >
            <Ionicons
              name="chatbox-ellipses-outline"
              size={20}
              color="#4D4D4D"
            />
          </TouchableOpacity>

          <TouchableOpacity className="w-11 h-11 rounded-full items-center justify-center bg-[#CFE3FD42] border border-[#0F73F724]">
            <Ionicons name="call-outline" size={20} color="#4D4D4D" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Sender address */}
      <Text className="mt-3 text-[#3F8FF9] font-sf-pro-regular text-xs">
        Sender address
      </Text>

      {/* address */}
      <Text className="mt-2 text-[#031731] font-sf-pro-regular text-sm">
        Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road, Phnom
        Penh
      </Text>

      <ButtonPrimary title="Take Photo" className="mt-3.5" />
    </View>
  );
};

export default PickupCard;
