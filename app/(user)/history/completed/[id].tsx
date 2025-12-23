import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const ParcelCompleted = () => {
  const { id } = useLocalSearchParams();
  console.log("from parcel completed", id);

  return (
    <View>
      <Text>ParcelCompleted</Text>
    </View>
  );
};

export default ParcelCompleted;
