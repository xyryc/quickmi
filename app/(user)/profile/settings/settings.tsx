import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { Feather, MaterialIcons } from "@expo/vector-icons";
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

const Settings = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.2]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Settings" />

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
            <View className="mt-8">
              {/* change password */}
              <TouchableOpacity className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3">
                <Text>Change Password</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>

              {/* About Us */}
              <TouchableOpacity
                onPress={() => router.push("/(user)/profile/settings/about")}
                className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3"
              >
                <Text>About Us</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>

              {/* Help */}
              <TouchableOpacity className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3">
                <Text>Help</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>

              {/* Support Requests */}
              <TouchableOpacity className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3">
                <Text>Support Requests</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>

              {/* Privacy Policy */}
              <TouchableOpacity
                onPress={() =>
                  router.push("/(user)/profile/settings/privacy-policy")
                }
                className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3"
              >
                <Text>Privacy Policy</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>

              {/* Terms of service */}
              <TouchableOpacity
                onPress={() =>
                  router.push("/(user)/profile/settings/terms-condition")
                }
                className="flex-row justify-between border-b border-[#E3E6F0] items-center py-3 mt-3"
              >
                <Text>Terms of service</Text>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </ScrollView>

          {/* bottom button */}
          <View className="px-5 pb-32">
            <ButtonPrimary
              title="Delete Account"
              iconPosition="left"
              icon={<Feather name="trash" size={18} color="white" />}
            />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Settings;
