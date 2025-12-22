import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 mb-28" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0.3, 1]}
        style={{ flex: 1 }}
      >
        {/* header */}
        {/* <ScreenHeader title="Parcel History" /> */}

        {/* history cards */}
        <ScrollView className="mx-5" showsVerticalScrollIndicator={false}>
          {/* Personal info */}
          <View className="mt-8 bg-white rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            {/* profile image */}
            <View className="flex items-center relative">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/10.jpg",
                }}
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 100,
                }}
                contentFit="cover"
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

            {/*  Switch to Agent mode */}
            <ButtonPrimary
              title=" Switch to Agent mode"
              className="mt-4"
              icon={<AntDesign name="car" size={20} color="white" />}
              iconPosition="left"
            />

            <Text className="mt-4 font-sf-pro-medium">Account Information</Text>
            <TouchableOpacity
              onPress={() => router.push("/profile/personal-info")}
              className="flex-row items-center gap-2 py-3"
            >
              <MaterialCommunityIcons
                name="account-edit-outline"
                size={20}
                color="#4D4D4D"
              />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Personal Information
              </Text>
            </TouchableOpacity>
          </View>

          {/* Saved place */}

          <View className="mt-3.5 bg-white rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            <Text className=" font-sf-pro-medium">Saved place</Text>

            {/* home location */}

            <TouchableOpacity
              onPress={() => router.push("/(user)/profile/home-location")}
              className="flex-row items-center gap-2 py-3"
            >
              <Feather name="home" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Enter home location
              </Text>
            </TouchableOpacity>

            {/* work location */}

            <TouchableOpacity
              onPress={() => router.push("/profile/work-location")}
              className="flex-row items-center gap-2 py-3"
            >
              <Feather name="briefcase" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Enter Work location
              </Text>
            </TouchableOpacity>

            {/* add-place location */}

            <TouchableOpacity
              onPress={() => router.push("/profile/add-place")}
              className="flex-row items-center gap-2 py-3"
            >
              <SimpleLineIcons name="location-pin" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Add a place
              </Text>
            </TouchableOpacity>
          </View>

          {/* Setting */}

          <View className="mt-3.5 bg-white rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            <Text className=" font-sf-pro-medium">Setting</Text>

            {/* home location */}

            <TouchableOpacity
              onPress={() => router.push("/profile/permission")}
              className="flex-row items-center gap-2 py-3"
            >
              <MaterialCommunityIcons
                name="shield-check-outline"
                size={20}
                color="#4D4D4D"
              />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Permission
              </Text>
            </TouchableOpacity>

            {/* work location */}

            <TouchableOpacity className="flex-row items-center gap-2 py-3">
              <Ionicons name="settings-outline" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Settings
              </Text>
            </TouchableOpacity>
          </View>

          {/* logout */}

          <View className="mt-3.5 mb-5 bg-[#ffffff] rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            <TouchableOpacity className="flex-row items-center gap-2 py-3">
              <SimpleLineIcons name="logout" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Profile;
