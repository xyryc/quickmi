import { AntDesign, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

const AddressCard = () => {
  return (
    <View>
      {/* sender info */}
      <View>
        <View className="flex-row gap-2">
          {/* left */}
          <View>
            <Octicons
              className="mb-2"
              name="location"
              size={18}
              color="#0F73F7"
            />

            <AntDesign
              className="rotate-90"
              name="dash"
              size={16}
              color="#80aad9"
            />
            <AntDesign
              className="rotate-90"
              name="dash"
              size={16}
              color="#80aad9"
            />
            <AntDesign
              className="rotate-90"
              name="dash"
              size={16}
              color="#80aad9"
            />
          </View>

          {/* right */}
          <View className="flex-1">
            {/* 1st row */}

            <View className="flex items-start">
              <Text className="font-sf-pro-medium text-base">From</Text>
              <Text className="font-sf-pro-medium text-blue-500 text-sm">
                Sender Address
              </Text>
            </View>

            <Text className="text-sm font-sf-pro-regular mt-3">
              Kilometer 6, 278H, Street 201R, Kroalkor Village, Unnamed Road,
              Phnom Penh
            </Text>
          </View>
        </View>
      </View>

      {/* receiver info */}
      <View>
        <View className="flex-row gap-2">
          {/* left */}
          <View>
            <Octicons
              className="mb-2"
              name="location"
              size={18}
              color="#0F73F7"
            />
          </View>

          {/* right */}
          <View className="flex-1">
            {/* 1st row */}
            <View className="flex items-start">
              <Text className="font-sf-pro-medium text-base">To</Text>
              <Text className="font-sf-pro-medium text-blue-500 text-sm">
                Receiver Details
              </Text>
            </View>

            <Text className="text-sm font-sf-pro-regular mt-3">
              2nd Floor 01, 25 Mao Tse Toung Blvd (245), Phnom Penh 12302,
              Cambodia
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddressCard;
