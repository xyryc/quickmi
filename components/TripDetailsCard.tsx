import ButtonPrimary from "@/components/ButtonPrimary";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
  const router = useRouter();

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
      <View className="border border-[#005FDC24] p-4 rounded-xl my-4">
        {/* header */}
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-sf-pro-medium text-[#031731]">
            Pick-up From
          </Text>

          <View className="flex-row items-center gap-3">
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/(user)/chat/chat",
                  params: { returnTo: "/(user)/select-vehicle" },
                })
              }
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
