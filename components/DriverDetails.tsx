import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

interface DriverDetailsProps {
  driverDetails: {
    driverName: string;
    driverPhoto: string;
    rating: number;
    phoneNumber: string;
    vehicleType: string;
    vehicleNumber: string;
    vehicleColor: string;
    estimatedArrival: string;
  };
  onBack: () => void;
  onShare: () => void;
}

const DriverDetails: React.FC<DriverDetailsProps> = ({
  driverDetails,
  onBack,
  onShare,
}) => {
  const handleCall = () => {
    Linking.openURL(`tel:${driverDetails.phoneNumber}`);
  };

  return (
    <View className="flex-1">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={onBack} className="p-2">
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-pro-medium">Driver Details</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Driver Photo and Name */}
        <View className="items-center mb-6">
          <Image
            source={{ uri: driverDetails.driverPhoto }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
            contentFit="cover"
          />
          <Text className="text-2xl font-sf-pro-semibold mt-3">
            {driverDetails.driverName}
          </Text>
          <View className="flex-row items-center gap-1 mt-1">
            <Ionicons name="star" size={16} color="#FFB800" />
            <Text className="text-base font-sf-pro-regular">
              {driverDetails.rating}
            </Text>
          </View>
        </View>

        {/* Driver Information */}
        <View className="gap-4">
          {/* Phone Number */}
          <View
            className="flex-row items-center justify-between p-4 bg-gray-50        
  rounded-lg"
          >
            <View className="flex-row items-center gap-3">
              <Ionicons name="call-outline" size={20} color="#0F73F7" />
              <View>
                <Text className="text-xs font-sf-pro-regular text-gray-500">
                  Phone Number
                </Text>
                <Text className="text-base font-sf-pro-medium">
                  {driverDetails.phoneNumber}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={handleCall}
              className="bg-[#0F73F7] p-2 rounded-full"
            >
              <Ionicons name="call" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Vehicle Type */}
          <View className="flex-row items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Ionicons name="car-outline" size={20} color="#0F73F7" />
            <View>
              <Text className="text-xs font-sf-pro-regular text-gray-500">
                Vehicle Type
              </Text>
              <Text className="text-base font-sf-pro-medium">
                {driverDetails.vehicleType}
              </Text>
            </View>
          </View>

          {/* Vehicle Number */}
          <View className="flex-row items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <MaterialIcons
              name="confirmation-number"
              size={20}
              color="#0F73F7"
            />
            <View>
              <Text className="text-xs font-sf-pro-regular text-gray-500">
                Vehicle Number
              </Text>
              <Text className="text-base font-sf-pro-medium">
                {driverDetails.vehicleNumber}
              </Text>
            </View>
          </View>

          {/* Vehicle Color */}
          <View className="flex-row items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Ionicons name="color-palette-outline" size={20} color="#0F73F7" />
            <View>
              <Text className="text-xs font-sf-pro-regular text-gray-500">
                Vehicle Color
              </Text>
              <Text className="text-base font-sf-pro-medium">
                {driverDetails.vehicleColor}
              </Text>
            </View>
          </View>

          {/* Estimated Arrival */}
          <View className="flex-row items-center gap-3 p-4 bg-gray-50 rounded-lg">
            <Ionicons name="time-outline" size={20} color="#0F73F7" />
            <View>
              <Text className="text-xs font-sf-pro-regular text-gray-500">
                Estimated Arrival
              </Text>
              <Text className="text-base font-sf-pro-medium">
                {driverDetails.estimatedArrival}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-2 mt-4">
        <ButtonSecondary title="Back" onPress={onBack} className="w-[48%]" />
        <ButtonPrimary
          title="Share Details"
          onPress={onShare}
          className="w-[48%]"
        />
      </View>
    </View>
  );
};

export default DriverDetails;
