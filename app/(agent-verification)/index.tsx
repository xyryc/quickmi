import ButtonPrimary from "@/components/ButtonPrimary";
import { useRouter } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const UploadDocument = () => {
  const router = useRouter();

  const handleSubmit = () => {
    router.replace("/(agent)");
  };

  return (
    <View>
      <Text>UploadDocument</Text>

      <ButtonPrimary title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UploadDocument;
