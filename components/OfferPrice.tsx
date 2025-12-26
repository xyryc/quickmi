import ButtonPrimary from "@/components/ButtonPrimary";
import { Ionicons, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ButtonSecondary from "./ButtonSecondary";
import RideCard from "./RideCard";

interface OfferPriceProps {
  suggestedPrice: string;
  onNext: (offeredPrice: string) => void;
  onBack: () => void;
  handleCancelRide;
}

const OfferPrice: React.FC<OfferPriceProps> = ({
  selectedVehicleData,
  suggestedPrice,
  onNext,
  onBack,
  handleCancelRide,
}) => {
  const [offeredPrice, setOfferedPrice] = useState(suggestedPrice);
  const insets = useSafeAreaInsets();

  // console.log("from offer price", selectedVehicleData);

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

  const handlePrice = (status) => {};

  return (
    <View className="flex-1">
      <View>
        <View className="flex-row items-center justify-between mb-4">
          <TouchableOpacity onPress={onBack} className="p-2">
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-xl font-sf-pro-medium">Offer Your Price</Text>
          <View style={{ width: 40 }} />
        </View>

        {/* selected vehicle data */}
        <RideCard vehicle={selectedVehicleData} />

        {/* price calculator */}
        <View className="flex-row items-center px-3 py-2 border border-[#E3E6F0] mt-2 rounded-lg mb-6">
          <TouchableOpacity onPress={() => handlePrice("minus")}>
            <SimpleLineIcons name="minus" size={24} color="black" />
          </TouchableOpacity>

          <View className="items-center flex-1">
            <Text className="font-sf-pro-regular text-base">$150</Text>
            <Text className="font-sf-pro-regular text-[10px]">
              Recommended fare: $150
            </Text>
          </View>

          <TouchableOpacity onPress={() => handlePrice("minus")}>
            <SimpleLineIcons name="plus" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* who will pay */}
        <View className="flex-row items-center justify-between mb-2.5">
          <Text className="text-base font-sf-pro-medium">Who will pay?</Text>

          <View className="flex-row items-center gap-2 bg-[#9FC7FC40] p-1 rounded-xl">
            <ButtonPrimary
              title="Sender"
              icon={
                <Ionicons name="checkmark-circle" size={16} color="white" />
              }
              iconPosition="left"
              className="px-3 !py-2"
            />
            <ButtonPrimary
              title="Receiver"
              // icon={<Ionicons name="checkmark-circle" size={16} color="white" />}
              iconPosition="left"
              className="px-3 !py-2 bg-[#e7f1fe]"
              textClassName="!text-black"
            />
          </View>
        </View>

        <View className="border-t border-gray-200 " />

        {/* Quick Price Options */}
        <TouchableOpacity className="flex-row justify-between items-center px-2 py-3">
          <Text className="font-sf-pro-regular text-base">Cash</Text>

          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Action Button */}
      <View
        className="flex-row items-center gap-2"
        // style={{
        //   marginBottom: insets.bottom,
        // }}
      >
        <ButtonSecondary
          title="Cancel"
          onPress={handleCancelRide}
          className="w-[48%]"
        />

        <ButtonPrimary
          title="Confirm"
          onPress={() => onNext(offeredPrice)}
          className="w-[48%]"
        />
      </View>
    </View>
  );
};

export default OfferPrice;
