import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import {
  AntDesign,
  Entypo,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
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
          {/* account */}
          <View className="  rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] flex-row justify-between ">
            <Text className="font-sf-pro-medium text-3xl text-[#031731]">
              Account
            </Text>
            <AntDesign
              name="close"
              size={22}
              color="black"
              className="bg-white p-2 rounded-full"
            />
          </View>

          {/* Personal info */}
          <View className="mt-4 bg-white rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            {/* profile image */}
            <View className="flex-row gap-3 items-center px-3 py-2 bg-white shadow-2xl android:elevation-4">
              <Image
                source={{
                  uri: "https://randomuser.me/api/portraits/men/10.jpg",
                }}
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 100,
                }}
                contentFit="cover"
              />

              {/* details */}
              <View className="">
                <Text className="font-sf-pro-medium text-sm text-[#031731]">
                  John Doe
                </Text>
                <View className="flex-row items-center gap-2">
                  <AntDesign name="star" size={14} color="#FFD700" />
                  <Text className="font-sf-pro-medium text-xs text-[#1F1D1D]">
                    3.35
                  </Text>
                  <Text>|</Text>
                  <Text className="font-sf-pro-regular text-xs text-[#4D4D4D]">
                    150 Delivery
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() => router.push("/(agent)/profile/personal-info")}
                >
                  <Text className="font-sf-pro-regular text-xs text-[#0F73F7]">
                    Go to profile
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* profile name */}
            {/*  <Text className="font-sf-pro-medium text-base text-custom-blue-900 mb-1"> */}

            {/* secondary inbox button */}
            <View className="flex-row gap-2 mt-4 ">
              <ButtonSecondary
                onPress={() => router.push("/(agent)/profile/inbox")}
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
                onPress={() => router.push("/(user)/profile/wallet")}
                iconPosition="left"
                className="flex-1 !border !border-[#E3E6F0]"
                title="Wallet"
                icon={<Entypo name="wallet" size={20} color="#0F73F7" />}
              />
            </View>
          </View>

          {/* Setting */}

          <View className="mt-3.5 bg-white rounded-xl p-3.5 border-spacing-0.5 border-[#E3E6F0] shadow-md">
            <TouchableOpacity
              onPress={() => router.push("/(agent)/profile/permission")}
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

            <TouchableOpacity
              onPress={() => router.push("/(user)/profile/settings/settings")}
              className="flex-row items-center gap-2 py-3"
            >
              <AntDesign name="car" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                My Ride
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(agent)/profile/wallet/wallet")}
              className="flex-row items-center gap-2 py-3"
            >
              <Ionicons name="wallet-outline" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Wallet
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(user)/profile/settings/settings")}
              className="flex-row items-center gap-2 py-3"
            >
              <Ionicons
                name="notifications-outline"
                size={20}
                color="#4D4D4D"
              />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Notifications
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(user)/profile/settings/settings")}
              className="flex-row items-center gap-2 py-3"
            >
              <MaterialIcons name="support-agent" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Support Requests
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/(user)/profile/settings/settings")}
              className="flex-row items-center gap-2 py-3"
            >
              <Ionicons name="settings-outline" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Settings
              </Text>
            </TouchableOpacity>

            <View className="border-b border-[#A2A2A2] my-6" />

            <TouchableOpacity className="flex-row items-center gap-2 py-3">
              <SimpleLineIcons name="logout" size={20} color="#4D4D4D" />
              <Text className="font-sf-pro-medium text-sm text-[#4D4D4D]">
                Log Out
              </Text>
            </TouchableOpacity>
          </View>

          {/* logout */}
        </ScrollView>

        <ButtonPrimary
          title=" Switch to User mode"
          className="mx-5"
          icon={<Feather name="user" size={18} color="white" />}
          iconPosition="left"
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Profile;
