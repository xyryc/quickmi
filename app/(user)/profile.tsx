import ButtonSecondary from "@/components/ButtonSecondary";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.3]}
        style={{ flex: 1 }}
      >
        {/* header */}
        {/* <ScreenHeader title="Parcel History" /> */}

        {/* history cards */}
        <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
          {/* Personal info */}
          <View className="mt-8 bg-white rounded-xl p-3.5">
            {/* profile image */}
            <View className="flex items-center relative">
              <Image
                source={{ uri: "https://picsum.photos/512" }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                }}
                contentFit="contain"
              />

              {/* camera icon */}
              <Ionicons
                className="absolute left-56 bottom-2 bg-[#0F73F7] p-1 border border-white rounded-full"
                name="camera-outline"
                size={16}
                color="white"
              />
            </View>

            {/* profile name */}
            {/*  <Text className="font-sf-pro-medium text-base text-custom-blue-900 mb-1"> */}
            <Text className="text-center mt-3.5 font-sf-pro-medium text-xl text-black">
              Darlene Robertson
            </Text>

            {/* secondary inbox button */}
            <View className="flex-row gap-2 mt-4 ">
              <ButtonSecondary
                iconPosition="left"
                className="flex-1 !border !border-[#E3E6F0]"
                title="Inbox"
                icon={
                  <MaterialCommunityIcons
                    name="message-processing"
                    size={20}
                    color="#0F73F7"
                  />
                }
              />

              {/* secondary Wallet button */}
              <ButtonSecondary
                iconPosition="left"
                className="flex-1 !border !border-[#E3E6F0]"
                title="Wallet"
                icon={<Entypo name="wallet" size={20} color="#0F73F7" />}
              />
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Profile;
