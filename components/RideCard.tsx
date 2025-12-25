import { Image } from "expo-image";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const RideCard = ({ className, rideType, onPress }) => {
  const getVehicleImage = () => {
    switch (rideType) {
      case "bike":
        return require("@/assets/images/bike.svg");
      case "car":
        return require("@/assets/images/car.svg");
      case "van":
        return require("@/assets/images/van.svg");
      default:
        return require("@/assets/images/bike.svg");
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border border-gray-200 rounded-xl px-2 py-3 flex-row items-center gap-4 ${className}`}
    >
      <Image
        source={getVehicleImage()}
        style={{
          width: 50,
          height: 50,
        }}
        contentFit="contain"
      />

      <View className="flex-1">
        <View className="flex-row justify-between mb-1">
          <Text className="text-sm font-sf-pro-medium">Bike</Text>
          <Text className="text-sm font-sf-pro-medium">$100</Text>
        </View>

        <View className="flex-row justify-between mb-1">
          <Text className="text-xs font-sf-pro-regular">10 min away</Text>
          <Text className="text-[9px] font-sf-pro-medium text-green-700">
            Offer your fare
          </Text>
        </View>

        <Text className="text-xs font-sf-pro-regular" numberOfLines={2}>
          Affordable delivery for your daily commute
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RideCard;
