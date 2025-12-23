import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ParcelCancelled = () => {
  const { id } = useLocalSearchParams();
  console.log("from parcel completed", id);

  return (
    <View>
      <Text>ParcelCancelled</Text>
    </View>
  );
};

export default ParcelCancelled;
