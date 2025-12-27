import ButtonPrimary from "@/components/ButtonPrimary";
import ScreenHeader from "@/components/ScreenHeader";
import { EvilIcons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback, useMemo, useRef } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const SupportRequests = () => {
  const confirmModalRef = useRef<BottomSheetModal>(null);
  const successModalRef = useRef<BottomSheetModal>(null);

  //  Snap points
  const successSnapPoints = useMemo(() => ["55%"], []);

  //  Confirm deposit handler
  const handleWithdraw = useCallback(() => {
    console.log("Opening confirm deposit modal...");
    confirmModalRef.current?.present();
  }, []);

  //  Confirm (Yes) button handler
  const handleConfirmYes = useCallback(() => {
    console.log("User confirmed, showing success modal");

    confirmModalRef.current?.dismiss();

    setTimeout(() => {
      successModalRef.current?.present();
    }, 300);
  }, []);

  //  Confirm (No) button handler
  const handleConfirmNo = useCallback(() => {
    console.log("User declined");
    confirmModalRef.current?.dismiss();
  }, []);

  //  Success modal close handler
  const handleSuccessClose = useCallback(() => {
    successModalRef.current?.dismiss();
    setTimeout(() => {}, 300);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
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
                  If you face any kind of problem with {"\n"} our service feel
                  free to contact us.
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

                <ButtonPrimary
                  title="Send to admin"
                  className="mt-4"
                  onPress={handleConfirmYes}
                />
              </ScrollView>
            </KeyboardAvoidingView>
          </LinearGradient>

          {/* send confirm */}
          <BottomSheetModal
            ref={successModalRef}
            index={0}
            snapPoints={successSnapPoints}
            enablePanDownToClose={true}
            enableHandlePanningGesture={false}
            enableContentPanningGesture={false}
            backdropComponent={({ style }) => (
              <View
                style={[style, { backgroundColor: "rgba(0, 0, 0, 0.5)" }]}
              />
            )}
          >
            <BottomSheetScrollView
              contentContainerStyle={{ paddingBottom: 40 }}
              showsVerticalScrollIndicator={false}
            >
              <View className="px-6 py-4 relative">
                {/* close button  */}

                <TouchableOpacity
                  onPress={handleSuccessClose}
                  className="absolute bg-[#CFE3FD] p-1 rounded-md right-6 top-0"
                >
                  <EvilIcons name="close" size={24} color="#0F73F7" />
                </TouchableOpacity>

                {/* thik icon */}
                <View className="items-center mb-6 mt-5">
                  <View className="bg-green-100  rounded-full w-20 h-20 items-center justify-center ">
                    <Image
                      source={require("@/assets/images/thik.svg")}
                      style={{ height: 120, width: 120 }}
                      contentFit="contain"
                    />
                  </View>
                </View>
                <Text className="text-lg font-sf-pro-semibold mt-3 text-center text-[#031731]">
                  Withdraw Req. Successful
                </Text>

                <Text className="text-center mt-4 text-[#031731] font-sf-pro-regular text-sm px-12">
                  Your Withdraw request has been sent successfully. You will get
                  the money within 24 hours.
                </Text>

                {/* button */}

                <ButtonPrimary
                  title={"Go To My Wallet"}
                  className={" mt-5 mb-20"}
                  onPress={handleConfirmNo}
                />
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </SafeAreaView>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default SupportRequests;
