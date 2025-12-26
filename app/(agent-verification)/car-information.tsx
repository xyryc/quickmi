import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { Entypo } from "@expo/vector-icons";
import { Image } from "expo-image";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CarInformation = () => {
  const [selectedCarRegistrationPic, setSelectedCarRegistrationPic] = useState<
    string | null
  >(null);
  const [selectedCarNumberPlate, setSelectedCarNumberPlate] = useState<
    string | null
  >(null);

  // Request camera permission
  const requestCameraPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Camera permission is required to take photos."
      );
      return false;
    }
    return true;
  };

  // Request media library permission
  const requestMediaLibraryPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Media library permission is required to select photos."
      );
      return false;
    }
    return true;
  };

  // Pick image from gallery for Registration Picture
  const pickRegistrationPicFromGallery = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedCarRegistrationPic(result.assets[0].uri);
    }
  };

  // Pick image from gallery for Number Plate
  const pickNumberPlateFromGallery = async () => {
    const hasPermission = await requestMediaLibraryPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedCarNumberPlate(result.assets[0].uri);
    }
  };

  // Take photo from camera for Registration Picture
  const takeRegistrationPhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedCarRegistrationPic(result.assets[0].uri);
    }
  };

  // Take photo from camera for Number Plate
  const takeNumberPlatePhoto = async () => {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) return;

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled && result.assets[0]) {
      setSelectedCarNumberPlate(result.assets[0].uri);
    }
  };

  // Show options to pick Registration Picture
  const handleRegistrationPicUpload = () => {
    Alert.alert(
      "Upload Registration Picture",
      "Choose an option",
      [
        {
          text: "Take Photo",
          onPress: takeRegistrationPhoto,
        },
        {
          text: "Choose from Gallery",
          onPress: pickRegistrationPicFromGallery,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  // Show options to pick Number Plate Picture
  const handleNumberPlateUpload = () => {
    Alert.alert(
      "Upload Number Plate Picture",
      "Choose an option",
      [
        {
          text: "Take Photo",
          onPress: takeNumberPlatePhoto,
        },
        {
          text: "Choose from Gallery",
          onPress: pickNumberPlateFromGallery,
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  // Remove selected Registration Picture
  const removeRegistrationPic = () => {
    setSelectedCarRegistrationPic(null);
  };

  // Remove selected Number Plate
  const removeNumberPlate = () => {
    setSelectedCarNumberPlate(null);
  };

  // Handle submit with validation
  const handleSubmit = () => {
    if (!selectedCarRegistrationPic) {
      Alert.alert("Error", "Please upload car registration picture");
      return;
    }
    if (!selectedCarNumberPlate) {
      Alert.alert("Error", "Please upload car number plate picture");
      return;
    }
    // Here you can handle the image upload to your backend
    router.push("/(agent-verification)");
  };

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.4]}
        style={{ flex: 1 }}
      >
        <ScreenHeader title="Car Information" />

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
            <Text className="mt-3.5 font-sf-pro-medium">Car Name</Text>
            <TextInput
              className="mt-2 p-4 border border-[#E3E6F0] rounded-xl bg-white"
              placeholder="Enter car name"
            />

            <Text className="mt-5 font-sf-pro-medium">Car Model</Text>
            <TextInput
              className="mt-2 p-4 border border-[#E3E6F0] rounded-xl bg-white"
              placeholder="Enter car model"
            />

            <Text className="mt-5 font-sf-pro-medium">Number plate No</Text>
            <TextInput
              className="mt-2 p-4 border border-[#E3E6F0] rounded-xl bg-white"
              placeholder="Enter number plate no"
            />

            {/* Upload car registration picture */}
            <Text className="mt-8 text-base font-sf-pro-medium text-center">
              Upload your car registration picture
            </Text>
            <TouchableOpacity
              onPress={handleRegistrationPicUpload}
              activeOpacity={0.7}
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#000000",
              }}
              className="mt-5 h-36 rounded-xl bg-white overflow-hidden"
            >
              {selectedCarRegistrationPic ? (
                // Show selected image
                <View className="flex-1 relative">
                  <Image
                    source={{ uri: selectedCarRegistrationPic }}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                  {/* Remove button */}
                  <TouchableOpacity
                    onPress={removeRegistrationPic}
                    className="absolute top-2 right-2 bg-red-500 rounded-full p-2"
                    style={{ elevation: 5, shadowColor: "#000" }}
                  >
                    <Entypo name="cross" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              ) : (
                // Show upload placeholder
                <View className="flex-1 justify-center items-center">
                  <Entypo name="camera" size={40} color="black" />
                  <Text className="mt-3 text-[#1D242D] text-xl font-sf-pro-regular">
                    Upload
                  </Text>
                </View>
              )}
            </TouchableOpacity>

            {/* Upload car number plate picture */}
            <Text className="mt-8 text-base font-sf-pro-medium text-center">
              Upload your Car number plate picture
            </Text>
            <TouchableOpacity
              onPress={handleNumberPlateUpload}
              activeOpacity={0.7}
              style={{
                borderStyle: "dashed",
                borderWidth: 1,
                borderColor: "#000000",
              }}
              className="mt-5 h-36 rounded-xl bg-white overflow-hidden"
            >
              {selectedCarNumberPlate ? (
                // Show selected image
                <View className="flex-1 relative">
                  <Image
                    source={{ uri: selectedCarNumberPlate }}
                    style={{ width: "100%", height: "100%" }}
                    contentFit="cover"
                  />
                  {/* Remove button */}
                  <TouchableOpacity
                    onPress={removeNumberPlate}
                    className="absolute top-2 right-2 bg-red-500 rounded-full p-2"
                    style={{ elevation: 5, shadowColor: "#000" }}
                  >
                    <Entypo name="cross" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              ) : (
                // Show upload placeholder
                <View className="flex-1 justify-center items-center">
                  <Entypo name="camera" size={40} color="black" />
                  <Text className="mt-3 text-[#1D242D] text-xl font-sf-pro-regular">
                    Upload
                  </Text>
                </View>
              )}
            </TouchableOpacity>
          </ScrollView>

          {/* bottom button */}
          <View className="px-5 mb-14">
            <ButtonPrimary onPress={handleSubmit} title="Submit" />
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default CarInformation;
