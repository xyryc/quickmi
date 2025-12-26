import BottomSheet from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function BottomSheetTest() {
  const bottomSheetRef = useRef(null);

  // Dynamic snap points - content এর উপর ভিত্তি করে
  const snapPoints = useMemo(() => [300, 500], []);

  const handleOpenPress = useCallback(() => {
    bottomSheetRef.current?.expand(); // বা snapToIndex(1)
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  return (
    <GestureHandlerRootView className="flex-1">
      <View
        className="flex-1 bg-gray-50 
      "
      >
        {/* Main Content */}
        <View className="flex-1 justify-center items-center px-5">
          <TouchableOpacity
            className="bg-blue-500 px-10 py-4 rounded-xl shadow-lg active:bg-blue-600"
            onPress={handleOpenPress}
          >
            <Text className="text-white text-lg font-semibold">Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={-1}
          snapPoints={snapPoints}
          enablePanDownToClose={true}
          backgroundStyle={{ backgroundColor: "#ffffff" }}
          handleIndicatorStyle={{
            backgroundColor: "#d1d5db",
            width: 40,
            height: 4,
          }}
        >
          {/* <BottomSheetScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          > */}
          <View className="p-6">
            <Text className="text-2xl font-bold text-gray-800 mb-4">
              Success! 🎉
            </Text>

            <Text className="text-base text-gray-600 mb-6">
              Your form has been submitted successfully. Here are the details:
            </Text>

            {/* More content to fill the sheet */}
            <View className="bg-blue-50 p-4 rounded-lg mb-4">
              <Text className="text-blue-800 font-semibold mb-2">
                Submission Details
              </Text>
              <View className="space-y-2">
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Date:</Text>
                  <Text className="text-gray-800 font-medium">
                    March 15, 2024
                  </Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Time:</Text>
                  <Text className="text-gray-800 font-medium">10:30 AM</Text>
                </View>
                <View className="flex-row justify-between">
                  <Text className="text-gray-600">Reference ID:</Text>
                  <Text className="text-gray-800 font-medium">REF-789012</Text>
                </View>
              </View>
            </View>

            {/* Additional content */}
            <Text className="text-lg font-semibold text-gray-800 mb-3">
              Next Steps
            </Text>

            <View className="space-y-3 mb-6">
              <View className="flex-row items-start">
                <View className="w-6 h-6 bg-green-100 rounded-full justify-center items-center mr-3 mt-1">
                  <Text className="text-green-600 text-sm">1</Text>
                </View>
                <Text className="flex-1 text-gray-600">
                  Your application will be reviewed within 24-48 hours
                </Text>
              </View>

              <View className="flex-row items-start">
                <View className="w-6 h-6 bg-green-100 rounded-full justify-center items-center mr-3 mt-1">
                  <Text className="text-green-600 text-sm">2</Text>
                </View>
                <Text className="flex-1 text-gray-600">
                  You'll receive an email confirmation shortly
                </Text>
              </View>

              <View className="flex-row items-start">
                <View className="w-6 h-6 bg-green-100 rounded-full justify-center items-center mr-3 mt-1">
                  <Text className="text-green-600 text-sm">3</Text>
                </View>
                <Text className="flex-1 text-gray-600">
                  Check your dashboard for updates on the status
                </Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-3 mt-4">
              <TouchableOpacity
                className="flex-1 bg-gray-100 py-4 rounded-lg items-center active:bg-gray-200"
                onPress={handleClosePress}
              >
                <Text className="text-base font-semibold text-gray-800">
                  Close
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-1 bg-blue-500 py-4 rounded-lg items-center active:bg-blue-600"
                onPress={handleClosePress}
              >
                <Text className="text-base font-semibold text-white">
                  View Details
                </Text>
              </TouchableOpacity>
            </View>

            {/* Extra spacing */}
            <View className="h-10" />
          </View>
          {/* </BottomSheetScrollView> */}
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
}
