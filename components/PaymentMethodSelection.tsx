import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface PaymentMethodSelectionProps {
  onNext: (method: string) => void;
  onBack: () => void;
}

const PaymentMethodSelection: React.FC<PaymentMethodSelectionProps> = ({
  onNext,
  onBack,
}) => {
  const [selectedMethod, setSelectedMethod] = useState("cash");

  return (
    <View className="flex-1">
      <View className="flex-1">
        {/* Header */}
        <View className="flex-row items-center justify-between mb-6">
          <TouchableOpacity onPress={onBack} className="p-2">
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-lg font-sf-pro-medium">Payment Method</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* Payment Methods List */}
        <View className="gap-3">
          <TouchableOpacity className="p-4 border border-[#005FDC24] rounded-xl">
            <View className="flex-row items-center gap-2">
              <Ionicons name="cash-outline" size={16} color="#008364" />
              <Text className="font-sf-pro-regular text-base">Cash</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="p-4 border border-[#005FDC24] rounded-xl flex-row items-center justify-between">
            <View className="flex-row items-center gap-2">
              <AntDesign name="plus" size={16} color="black" />
              <Text className="font-sf-pro-regular text-base">
                Add debit/credit card
              </Text>
            </View>

            <Feather name="chevron-right" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Action Buttons */}
      <View className="flex-row items-center gap-2 mt-4">
        <ButtonSecondary title="Back" onPress={onBack} className="w-[48%]" />
        <ButtonPrimary
          title="Confirm"
          onPress={() => onNext(selectedMethod)}
          className="w-[48%]"
        />
      </View>
    </View>
  );
};

export default PaymentMethodSelection;
