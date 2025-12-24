import { ImageBackground } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

const WalletCard = () => {
  return (
    <View className="items-center justify-center">
      <ImageBackground
        source={require("@/assets/images/wallet-card.png")}
        contentFit="contain"
        style={{ width: "100%", height: 180 }}
        className="items-center justify-center "
      >
        <Text className="text-lg font-bold text-black">Welcome</Text>

        <Text className="text-xs text-gray-700">Expo + NativeWind</Text>
      </ImageBackground>
    </View>
  );
};

export default WalletCard;
