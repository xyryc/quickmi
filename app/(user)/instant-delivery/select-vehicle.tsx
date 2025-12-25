import ButtonPrimary from "@/components/ButtonPrimary";
import RideCard from "@/components/RideCard";
import { FontAwesome6, Ionicons, MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { useMemo, useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SelectVehicle = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);

  // Sample data - replace with actual data from params
  const pickupLocation = {
    latitude: 23.7808,
    longitude: 90.4211,
    address: "Block B, Banasree, Dhaka.",
  };

  const dropoffLocation = {
    latitude: 23.7461,
    longitude: 90.3742,
    address: "Green Road, Dhanmondi, Dhaka.",
  };

  // Create a ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define snap points: 20% and 80% of screen
  const snapPoints = useMemo(() => ["70%"], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View className="flex-1">
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={{
              latitude:
                (pickupLocation.latitude + dropoffLocation.latitude) / 2,
              longitude:
                (pickupLocation.longitude + dropoffLocation.longitude) / 2,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
          >
            {/* Pickup Marker */}
            <Marker coordinate={pickupLocation}>
              <View className="items-center">
                <View className="bg-black rounded-full p-2">
                  <FontAwesome6 name="person" size={16} color="white" />
                </View>
                <View className="w-0.5 h-4 bg-black" />
              </View>
            </Marker>

            {/* Dropoff Marker */}
            <Marker coordinate={dropoffLocation}>
              <View className="items-center">
                <View className="bg-blue-500 rounded-full p-2">
                  <Ionicons name="location-sharp" size={20} color="white" />
                </View>
                <View className="w-1 h-1 bg-blue-500 rounded-full" />
              </View>
            </Marker>

            {/* Route Line */}
            <Polyline
              coordinates={[pickupLocation, dropoffLocation]}
              strokeColor="#0F73F7"
              strokeWidth={3}
              lineDashPattern={[1]}
            />
          </MapView>

          {/* Back Button */}
          <TouchableOpacity
            onPress={() => router.back()}
            className="absolute top-4 left-4 bg-white rounded-full w-11 h-11 items-center justify-center shadow-lg border border-[#0F73F7E5]"
            style={{
              marginTop: insets.top,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Bottom Sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          enableHandlePanningGesture={false}
          enableContentPanningGesture={false}
        >
          {/* Scrollable content section */}

          <View className="px-5 flex-1">
            <Text className="text-xl font-sf-pro-medium text-center mb-4">
              Rider Details
            </Text>

            {/* Scrollable Ride List */}
            <BottomSheetScrollView
              contentContainerStyle={{ paddingBottom: 100 }}
              style={{ flexGrow: 0, flexShrink: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <RideCard className="mb-4" rideType="bike" />

              <RideCard className="mb-4" rideType="car" />

              <RideCard className="mb-4" rideType="van" />
              <RideCard className="mb-4" rideType="van" />

              <RideCard className="mb-4" rideType="van" />
            </BottomSheetScrollView>

            <View className="border-t border-gray-200 " />

            {/* choose car, promo section */}
            <View
              style={{
                marginBottom: insets.bottom + 20,
              }}
            >
              <TouchableOpacity className="flex-row justify-between items-center px-2 py-3 mb-2.5">
                <Text className="font-sf-pro-regular text-base">Add Promo</Text>

                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>

              <ButtonPrimary title="Choose Car" />
            </View>
          </View>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default SelectVehicle;
