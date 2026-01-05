import { Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { Text, View } from "react-native";
import ButtonPrimary from "./ButtonPrimary";

const DropoffCard = () => {
  const [takePhoto, setTakePhoto] = useState(false);

  return (
    <View className="border border-[#005FDC24] p-4 rounded-xl mt-4">
      {/* header */}
      <View className="flex-row items-center justify-between">
        <Text className="text-xl font-sf-pro-medium text-[#031731]">
          Drop off
        </Text>
        {/* <View className="flex-row items-center gap-3">
                      <MaterialCommunityIcons
                        name="message-processing-outline"
                        size={24}
                        color="black"
                        className="p-2.5 bg-[#0F73F724] border border-[#0F73F7E5] rounded-full"
                      />
                      <Ionicons
                        name="call-outline"
                        size={24}
                        color="black"
                        className="p-2.5 bg-[#0F73F724] border border-[#0F73F7E5] rounded-full"
                      />
                    </View> */}
      </View>

      {/* Receiver address */}
      <Text className="mt-1 text-[#3F8FF9] font-sf-pro-regular text-xs">
        Receiver address
      </Text>

      {/* address */}
      <Text className="mt-2 text-[#031731] font-sf-pro-regular text-sm">
        2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302, Cambodia
      </Text>

      {/* Image */}
      {takePhoto && (
        <View className="flex-row items-center justify-between border border-[#E3E6F0] rounded p-2 mt-3.5">
          <Image
            source={{
              uri: "https://randomuser.me/api/portraits/men/10.jpg",
            }}
            contentFit="cover"
            style={{
              width: 60,
              height: 50,
              borderRadius: 4,
              borderColor: "#0F73F7",
              borderWidth: 1,
            }}
          />

          <Octicons name="chevron-right" size={20} color="black" />
        </View>
      )}

      {/* Take photo */}
      <ButtonPrimary
        title={takePhoto ? "Retake" : "Take photo"}
        className={"mt-3.5"}
        onPress={() => setTakePhoto(!takePhoto)}
      />
    </View>
  );
};

export default DropoffCard;
