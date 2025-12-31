import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { Octicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

interface TripOfferProps {
  tripId: string;
  fromLocation: string;
  toLocation: string;
  distance: string;
  suggestedPrice: string;
  pickupTime: string;
  onAccept: () => void;
  onDecline: () => void;
  onTimeout: () => void;
}

const TripOfferCard: React.FC<TripOfferProps> = ({
  tripId,
  fromLocation,
  toLocation,
  distance,
  suggestedPrice,
  pickupTime,
  onAccept,
  onDecline,
  onTimeout,
}) => {
  const [timeRemaining, setTimeRemaining] = useState(20);

  useEffect(() => {
    if (timeRemaining <= 0) {
      onTimeout();
      return;
    }

    const timer = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, onTimeout]);

  const getTimerColor = () => {
    if (timeRemaining > 10) return "#10B981"; // green
    if (timeRemaining > 5) return "#F59E0B"; // orange
    return "#EF4444"; // red
  };

  return (
    <View className="flex-1">
      {/* Timer */}
      <View className="items-center mb-4">
        <View
          className="w-20 h-20 rounded-full items-center justify-center border-4"
          style={{ borderColor: getTimerColor() }}
        >
          <Text
            className="text-3xl font-sf-pro-semibold"
            style={{ color: getTimerColor() }}
          >
            {timeRemaining}
          </Text>
        </View>
        <Text className="text-sm font-sf-pro-regular text-gray-500 mt-2">
          seconds to respond
        </Text>
      </View>

      {/* Trip Info Header */}
      <Text className="text-xl font-sf-pro-semibold text-center mb-4">
        New Trip Request
      </Text>

      {/* Trip ID and Time */}
      <View className="flex-row items-center justify-center gap-2 mb-4">
        <Text className="font-sf-pro-semibold text-sm">#{tripId}</Text>
        <Octicons name="dot-fill" size={6} color="#BABFC5" />
        <Text className="text-gray-400 text-sm font-sf-pro-regular">
          {pickupTime}
        </Text>
      </View>

      {/* Route Details */}
      <View className="border border-[#E3E6F0] rounded-xl p-4 mb-4">
        {/* From Location */}
        <View className="flex-row gap-3 mb-3">
          <View className="items-center">
            <View className="w-3 h-3 rounded-full bg-blue-500" />
            <View className="w-0.5 h-8 bg-gray-300 my-1" />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-sf-pro-medium text-gray-500 mb-1">
              Pickup From
            </Text>
            <Text className="text-sm font-sf-pro-regular">{fromLocation}</Text>
          </View>
        </View>

        {/* To Location */}
        <View className="flex-row gap-3">
          <View className="items-center">
            <Octicons name="location" size={16} color="#EF4444" />
          </View>
          <View className="flex-1">
            <Text className="text-xs font-sf-pro-medium text-gray-500 mb-1">
              Drop Off At
            </Text>
            <Text className="text-sm font-sf-pro-regular">{toLocation}</Text>
          </View>
        </View>
      </View>

      {/* Price and Distance */}
      <View className="border border-[#E3E6F0] rounded-xl p-4 mb-6">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-sf-pro-regular text-sm text-gray-400">
            Distance
          </Text>
          <Text className="text-lg font-sf-pro-medium">{distance}</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="font-sf-pro-regular text-sm text-gray-400">
            Suggested Fare
          </Text>
          <Text className="text-lg font-sf-pro-semibold text-blue-600">
            {suggestedPrice}
          </Text>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="gap-3">
        <ButtonPrimary title="Accept Trip" onPress={onAccept} />
        <ButtonSecondary title="Decline" onPress={onDecline} />
      </View>
    </View>
  );
};

export default TripOfferCard;
