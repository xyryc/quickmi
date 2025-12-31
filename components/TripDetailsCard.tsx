import ButtonPrimary from "@/components/ButtonPrimary";
import { FontAwesome6, Octicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TripDetailsProps {
  tripId: string;
  estimatedTime: string;
  pickupLocation: string;
  dropoffLocation: string;
  distance: string;
  price: string;
  onStartTrip: () => void;
  onCancelTrip: () => void;
}

const TripDetailsCard: React.FC<TripDetailsProps> = ({
  tripId,
  estimatedTime,
  pickupLocation,
  dropoffLocation,
  distance,
  price,
  onStartTrip,
  onCancelTrip,
}) => {
  return (
    <View className="flex-1">
      {/* Header */}
      <View className="flex-row items-center justify-between mb-4">
        <View>
          <Text className="text-xl font-sf-pro-semibold">Trip Accepted!</Text>
          <Text className="text-sm font-sf-pro-regular text-gray-500 mt-1">
            #{tripId}
          </Text>
        </View>
        <FontAwesome6 name="circle-check" size={32} color="#10B981" />
      </View>

      {/* Time Estimate */}
      <View className="bg-blue-50 rounded-xl p-4 mb-4">
        <Text className="text-sm font-sf-pro-medium text-gray-600 mb-1">
          Estimated Arrival
        </Text>
        <Text className="text-2xl font-sf-pro-semibold text-blue-600">
          {estimatedTime}
        </Text>
      </View>

      {/* Route Details */}
      <View className="border border-[#E3E6F0] rounded-xl p-4 mb-4">
        {/* Pickup Location */}
        <View className="flex-row gap-3 mb-4">
          <View className="items-center">
            <View className="w-3 h-3 rounded-full bg-blue-500" />
            <View className="w-0.5 h-12 bg-gray-300 my-1" />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-sf-pro-semibold text-blue-600 mb-1">
              PICKUP FROM
            </Text>
            <Text className="text-sm font-sf-pro-regular">
              {pickupLocation}
            </Text>
          </View>
        </View>

        {/* Dropoff Location */}
        <View className="flex-row gap-3">
          <View className="items-center">
            <Octicons name="location" size={18} color="#EF4444" />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-sf-pro-semibold text-red-600 mb-1">
              DROP OFF AT
            </Text>
            <Text className="text-sm font-sf-pro-regular">
              {dropoffLocation}
            </Text>
          </View>
        </View>
      </View>

      {/* Trip Summary */}
      <View className="border border-[#E3E6F0] rounded-xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-sf-pro-regular text-sm text-gray-400">
            Distance
          </Text>
          <Text className="text-base font-sf-pro-medium">{distance}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="font-sf-pro-regular text-sm text-gray-400">
            Your Offered Price
          </Text>
          <Text className="text-lg font-sf-pro-semibold text-green-600">
            {price}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="gap-3">
        <ButtonPrimary title="Start Navigation" onPress={onStartTrip} />
        <TouchableOpacity
          onPress={onCancelTrip}
          className="py-3 items-center border border-red-500 rounded-xl"
        >
          <Text className="font-sf-pro-medium text-red-500">Cancel Trip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TripDetailsCard;
