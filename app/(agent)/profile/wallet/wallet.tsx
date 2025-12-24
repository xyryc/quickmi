import ScreenHeader from "@/components/ScreenHeader";
import WalletCard from "@/components/WalletCard";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Wallet = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Wallet" />

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
            {/* wallet card */}
            <WalletCard />

            {/* Payment method */}
            <Text className="font-sf-pro-medium mt-4 text-base text-black">
              Payment method
            </Text>

            {/* Add debit/credit card */}
            <TouchableOpacity
              onPress={() =>
                router.push("/(agent)/profile/wallet/card-details")
              }
              className=" flex-row items-center justify-between border border-[#E3E6F0] rounded-xl p-4 mt-3"
            >
              <View className="flex-row items-center">
                <Feather name="plus" size={24} color="black" />
                <Text className="font-sf-pro-medium text-base text-black ml-2">
                  Add debit/credit card
                </Text>
              </View>
              <View>
                <Feather name="chevron-right" size={24} color="black" />
              </View>
            </TouchableOpacity>

            {/* Transections */}
            <Text className="font-sf-pro-medium mt-5 text-base text-[#414141]">
              Transections
            </Text>

            {/* Transections history Withdraw */}

            <TouchableOpacity className="border border-[#E3E6F0] flex-row items-center justify-between mt-2 p-4 rounded-xl">
              <View className="flex-row items-center">
                <Feather
                  name="arrow-up-right"
                  size={24}
                  color="red"
                  className="bg-white border border-[#0F73F724] rounded-full p-2"
                />
                <View>
                  <Text className="font-sf-pro-medium text-sm text-[#222222] ml-3">
                    Withdraw
                  </Text>

                  <Text className="font-sf-pro-regular text-xs text-[#6B6B6B] ml-3 mt-2">
                    Today at 09:20 am
                  </Text>
                </View>
              </View>
              <View>
                <Text className="font-sf-pro-medium text-base text-[#0F73F7]">
                  $570.00
                </Text>
              </View>
            </TouchableOpacity>

            {/* Transections history Add in Wallet */}

            <TouchableOpacity className="border border-[#E3E6F0] flex-row items-center justify-between mt-2 p-4 rounded-xl">
              <View className="flex-row items-center">
                <Feather
                  name="arrow-down-right"
                  size={24}
                  color="green"
                  className="bg-white border border-[#0F73F724] rounded-full p-2"
                />
                <View>
                  <Text className="font-sf-pro-medium text-sm text-[#222222] ml-3">
                    Add in Wallet
                  </Text>

                  <Text className="font-sf-pro-regular text-xs text-[#6B6B6B] ml-3 mt-2">
                    Today at 09:20 am
                  </Text>
                </View>
              </View>
              <View>
                <Text className="font-sf-pro-medium text-base text-[#0F73F7]">
                  $570.00
                </Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Wallet;
