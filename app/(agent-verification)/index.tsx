import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { AntDesign, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
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

const UploadDocument = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="" />

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
            {/* title */}
            <Text className="text-2xl font-sf-pro-regular text-[#031731] text-center mt-5">
              Upload your documents
            </Text>

            {/* title */}
            <Text className="text-sm font-sf-pro-regular text-[#4D4D4D] text-center mt-5">
              Please upload the required documents to complete your application
              process
            </Text>

            {/* click the upload button */}

            {/* National ID Card */}
            <TouchableOpacity
              onPress={() => router.push("/(agent-verification)/nid")}
              className="flex-row items-center justify-between mt-8 p-2"
            >
              <View className="flex-row items-center gap-3">
                <FontAwesome6
                  name="vcard"
                  size={24}
                  color="#0F73F7"
                  className="bg-[#CFE3FD] p-3 rounded-full "
                />
                <Text className="text-base text-[#031731] font-sf-pro-medium">
                  National ID Card
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            {/* Driver’s License */}
            <TouchableOpacity
              onPress={() =>
                router.push("/(agent-verification)/driving-license")
              }
              className="flex-row items-center justify-between mt-8 p-2"
            >
              <View className="flex-row items-center gap-3">
                <FontAwesome6
                  name="vcard"
                  size={24}
                  color="#0F73F7"
                  className="bg-[#CFE3FD] p-3 rounded-full "
                />
                <Text className="text-base text-[#031731] font-sf-pro-medium">
                  Driver’s License
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            {/* Car Information */}
            <TouchableOpacity
              onPress={() =>
                router.push("/(agent-verification)/car-information")
              }
              className="flex-row items-center justify-between mt-8 p-2"
            >
              <View className="flex-row items-center gap-3">
                <AntDesign
                  name="car"
                  size={24}
                  color="#0F73F7"
                  className="bg-[#CFE3FD] p-3 rounded-full "
                />
                <Text className="text-base text-[#031731] font-sf-pro-medium">
                  Car Information
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>

            {/* Your Picture */}
            <TouchableOpacity
              onPress={() =>
                router.push("/(agent-verification)/upload-picture")
              }
              className="flex-row items-center justify-between mt-8 p-2"
            >
              <View className="flex-row items-center gap-3">
                <FontAwesome6
                  name="user"
                  size={24}
                  color="#0F73F7"
                  className="bg-[#CFE3FD] p-3 rounded-full "
                />
                <Text className="text-base text-[#031731] font-sf-pro-medium">
                  Your Picture
                </Text>
              </View>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </ScrollView>
          <ButtonPrimary
            title={"Submit"}
            className={"mb-10 mx-5"}
            onPress={() => router.push("/(user)/home")}
          />
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default UploadDocument;
