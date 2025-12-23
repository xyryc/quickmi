import React from "react";
import { Text, View } from "react-native";

type StatusType = "cancelled" | "ongoing" | "completed";

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusClasses = () => {
    switch (status) {
      case "completed":
        return "bg-[#D8FFD236] border-[0.5px] border-[#079600]";
      case "ongoing":
        return "bg-yellow-100";
      case "cancelled":
        return "bg-[#FFE1E1] border-[0.5px] border-[#F34F4F]";
      default:
        return "bg-[#D8FFD236] border-[0.5px] border-[#079600]";
    }
  };

  const getTextColor = () => {
    switch (status) {
      case "completed":
        return "text-[#079600]";
      case "ongoing":
        return "text-yellow-500";
      case "cancelled":
        return "text-[#F34F4F]";
      default:
        return "text-[#F34F4F]";
    }
  };

  const getStatusText = () => {
    switch (status) {
      case "completed":
        return "Delivered";
      case "ongoing":
        return "Ongoing";
      case "cancelled":
        return "Cancelled";
      default:
        return status;
    }
  };

  return (
    <View className={`px-3 py-1.5 rounded-md ${getStatusClasses()}`}>
      <Text className={`text-xs font-semibold capitalize ${getTextColor()}`}>
        {getStatusText()}
      </Text>
    </View>
  );
};

export default StatusBadge;
