import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SupportRequests = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Support Requests" />

        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        >
          {/* scrollable content */}
          <ScrollView
            className="flex-1 mx-5"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 120 }}
          >
            {/* profile image */}
            <View className="items-center mt-8">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/94.jpg",
                  // uri: "https://ui-avatars.com/api/?name=ALEX&size=512",
                }}
                contentFit="cover"
                style={{ width: 120, height: 120, borderRadius: 100 }}
              />
            </View>

            {/* bio */}
            <Text className="font-sf-pro-regular text-lg text-center text-[#1E1E1E] mt-5">
              If you face any kind of problem with {"\n"} our service feel free
              to contact us.
            </Text>

            {/* text aria view */}
            <TextInput
              className="border border-[#B8B8B8] mt-4 rounded-2xl h-48 bg-[#ffff]"
              placeholder="Write your complain here"
              numberOfLines={7}
              multiline={true}
              textAlignVertical="top"
              style={{ padding: 15 }}
            />

            <ButtonPrimary title="Send to admin" className="mt-4" />
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default SupportRequests;
