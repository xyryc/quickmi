import { SimpleLineIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const PriceCalculator = ({ price, setPrice, suggestedPrice }) => {
  const handlePrice = (status: string) => {
    if (status === "plus") {
      setPrice(price + 1);
    } else if (status === "minus") {
      setPrice(price - 1);
    }
  };

  return (
    <View className="flex-row items-center px-3 py-2 border border-[#E3E6F0] rounded-lg mb-6">
      <TouchableOpacity onPress={() => handlePrice("minus")}>
        <SimpleLineIcons name="minus" size={30} color="black" />
      </TouchableOpacity>

      <View className="items-center flex-1">
        <Text className="font-sf-pro-regular text-base">{price}</Text>
        <Text className="font-sf-pro-regular text-[10px]">
          Recommended fare: ${suggestedPrice}
        </Text>
      </View>

      <TouchableOpacity onPress={() => handlePrice("plus")}>
        <SimpleLineIcons name="plus" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default PriceCalculator;
