import ButtonPrimary from "@/components/ButtonPrimary";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface OfferPriceProps {
  suggestedPrice: string;
  onNext: (offeredPrice: string) => void;
  onBack: () => void;
  bottomInset: number;
}

const OfferPrice: React.FC<OfferPriceProps> = ({
  suggestedPrice,
  onNext,
  onBack,
  bottomInset,
}) => {
  const [offeredPrice, setOfferedPrice] = useState(suggestedPrice);

  const handleQuickSelect = (adjustment: string) => {
    const basePrice = parseInt(suggestedPrice.replace("$", ""));
    let newPrice = basePrice;

    if (adjustment === "-$10") newPrice = basePrice - 10;
    else if (adjustment === "-$5") newPrice = basePrice - 5;
    else if (adjustment === "Suggested") newPrice = basePrice;
    else if (adjustment === "+$5") newPrice = basePrice + 5;
    else if (adjustment === "+$10") newPrice = basePrice + 10;

    setOfferedPrice(`$${newPrice}`);
  };

  return (
    <View className="flex-1">
      <View className="flex-row items-center justify-between mb-4">
        <TouchableOpacity onPress={onBack} className="p-2">
          <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-xl font-sf-pro-medium">Offer Your Price</Text>
        <View style={{ width: 40 }} />
      </View>

      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Suggested Price */}
        <View className="bg-blue-50 rounded-xl p-4 mb-4">
          <Text className="text-sm font-sf-pro-regular text-gray-600 mb-1">
            Suggested Price
          </Text>
          <Text className="text-2xl font-sf-pro-medium text-blue-600">
            {suggestedPrice}
          </Text>
        </View>

        {/* Offer Price Input */}
        <View className="mb-4">
          <Text className="text-sm font-sf-pro-medium mb-2 text-gray-700">
            Your Offer
          </Text>
          <View
            className="flex-row items-center border border-gray-300 rounded-xl     
  px-4 py-3"
          >
            <Text className="text-xl font-sf-pro-medium text-gray-600 mr-2">
              $
            </Text>
            <TextInput
              className="flex-1 font-sf-pro-regular text-base"
              placeholder="Enter your offer"
              value={offeredPrice.replace("$", "")}
              onChangeText={(text) => setOfferedPrice(`$${text}`)}
              keyboardType="numeric"
            />
          </View>
        </View>

        {/* Quick Price Options */}
        <View className="mb-4">
          <Text className="text-sm font-sf-pro-medium mb-2 text-gray-700">
            Quick Select
          </Text>
          <View className="flex-row gap-2">
            {["-$10", "-$5", "Suggested", "+$5", "+$10"].map((option) => (
              <TouchableOpacity
                key={option}
                className="flex-1 border border-gray-300 rounded-lg py-2               
  items-center"
                onPress={() => handleQuickSelect(option)}
              >
                <Text className="text-xs font-sf-pro-medium">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Info Box */}
        <View className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <Text className="text-sm font-sf-pro-regular text-gray-700">
            💡 Tip: Offering a competitive price increases your chances of
            finding a driver quickly!
          </Text>
        </View>
      </BottomSheetScrollView>

      {/* Action Button */}
      <View
        className="border-t border-gray-200 pt-4"
        style={{
          marginBottom: bottomInset + 20,
        }}
      >
        <ButtonPrimary
          title="Submit Offer"
          onPress={() => onNext(offeredPrice)}
        />
      </View>
    </View>
  );
};

export default OfferPrice;
