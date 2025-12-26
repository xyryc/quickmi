import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

interface WaitForDriverProps {
  onDriverAccepted: () => void;
  onCancel: () => void;
  bottomInset: number;
}

const WaitForDriver: React.FC<WaitForDriverProps> = ({
  onDriverAccepted,
  onCancel,
  bottomInset,
}) => {
  const [timeWaiting, setTimeWaiting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeWaiting((prev) => prev + 1);
    }, 1000);

    // Simulate driver accepting after 5 seconds (for demo)
    const timeout = setTimeout(() => {
      onDriverAccepted();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [onDriverAccepted]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <Text className="text-xl font-sf-pro-medium text-center mb-4">
        Finding Driver...
      </Text>

      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Loading Animation */}
        <View className="items-center justify-center py-8">
          <ActivityIndicator size="large" color="#0F73F7" />
          <Text className="text-base font-sf-pro-regular text-gray-600 mt-4">
            Searching for available drivers...
          </Text>
          <Text className="text-sm font-sf-pro-regular text-gray-500 mt-2">
            Time elapsed: {formatTime(timeWaiting)}
          </Text>
        </View>

        {/* Status Cards */}
        <View className="space-y-3">
          <View className="bg-blue-50 rounded-xl p-4 flex-row items-start mb-3">
            <MaterialIcons
              name="check-circle"
              size={24}
              color="#0F73F7"
              style={{ marginRight: 12 }}
            />
            <View className="flex-1">
              <Text className="text-sm font-sf-pro-medium mb-1">
                Ride Request Sent
              </Text>
              <Text className="text-xs font-sf-pro-regular text-gray-600">
                Your request has been sent to nearby drivers
              </Text>
            </View>
          </View>

          <View className="bg-gray-50 rounded-xl p-4 flex-row items-start">
            <ActivityIndicator
              size="small"
              color="#666"
              style={{ marginRight: 12, marginTop: 2 }}
            />
            <View className="flex-1">
              <Text className="text-sm font-sf-pro-medium mb-1">
                Waiting for Response
              </Text>
              <Text className="text-xs font-sf-pro-regular text-gray-600">
                Drivers are reviewing your offer
              </Text>
            </View>
          </View>
        </View>
      </BottomSheetScrollView>

      {/* Cancel Button */}
      <View
        className="border-t border-gray-200 pt-4"
        style={{
          marginBottom: bottomInset + 20,
        }}
      >
        <TouchableOpacity
          className="bg-red-500 rounded-xl py-4 items-center"
          onPress={onCancel}
        >
          <Text className="text-white font-sf-pro-medium text-base">
            Cancel Request
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default WaitForDriver;
