import ButtonSecondary from "@/components/ButtonSecondary";
import { Ionicons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import * as Location from "expo-location";
import { router } from "expo-router";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Alert, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AgentHome = () => {
  const insets = useSafeAreaInsets();
  const mapRef = useRef<MapView>(null);

  // user location
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);

  // Add heading state for rotation
  const [heading, setHeading] = useState<number>(0);

  // Get user location and watch for updates
  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null = null;
    let headingSubscription: Location.LocationSubscription | null = null;

    (async () => {
      try {
        // Request permission
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          setLocationError("Permission to access location was denied");
          Alert.alert(
            "Location Permission",
            "Please enable location permissions to see your current location on the map."
          );
          return;
        }

        // Get initial position
        const location = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High,
        });

        const currentLocation = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        };

        setUserLocation(currentLocation);

        // Set initial heading if available
        if (
          location.coords.heading !== null &&
          location.coords.heading !== undefined
        ) {
          setHeading(location.coords.heading);
        }

        // Animate map to user location
        if (mapRef.current) {
          mapRef.current.animateToRegion(
            {
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
              latitudeDelta: 0.001,
              longitudeDelta: 0.001,
            },
            1000
          );
        }

        // Watch location for continuous updates
        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000, // Update every second
            distanceInterval: 1, // Update every meter
          },
          (location) => {
            const newLocation = {
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            };
            setUserLocation(newLocation);

            // Update heading from location if available
            if (
              location.coords.heading !== null &&
              location.coords.heading !== undefined
            ) {
              setHeading(location.coords.heading);
            }
          }
        );

        // Watch heading separately for more accurate rotation
        headingSubscription = await Location.watchHeadingAsync(
          (headingData) => {
            // headingData.trueHeading gives the heading relative to true north
            // headingData.magHeading gives the heading relative to magnetic north
            setHeading(headingData.trueHeading);
          }
        );
      } catch (error) {
        console.error("Error getting location:", error);
        setLocationError("Failed to get current location");
        Alert.alert(
          "Location Error",
          "Unable to retrieve your current location. Please try again."
        );
      }
    })();

    // Cleanup subscriptions on unmount
    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
      if (headingSubscription) {
        headingSubscription.remove();
      }
    };
  }, []);

  // Create a ref for the bottom sheet
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Define snap points: 20% and 80% of screen
  const snapPoints = useMemo(() => ["40%", "60%"], []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View className="flex-1">
          <MapView
            ref={mapRef}
            provider={PROVIDER_GOOGLE}
            style={{ flex: 1 }}
            initialRegion={{
              latitude: userLocation?.latitude || 23.8103,
              longitude: userLocation?.longitude || 90.4125,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            showsUserLocation={false}
            showsMyLocationButton={true}
            followsUserLocation={true}
          >
            {/* Pickup Marker */}
            {userLocation && (
              <Marker
                coordinate={userLocation}
                anchor={{ x: 0.5, y: 0.5 }}
                flat={true}
                className="elevation-2xl"
              >
                <View
                  style={{
                    transform: [{ rotate: `${heading}deg` }],
                  }}
                >
                  <Image
                    source={require("@/assets/images/map-car.svg")}
                    style={{
                      width: 25,
                      height: 45,
                    }}
                    contentFit="scale-down"
                  />
                </View>
              </Marker>
            )}
          </MapView>

          {/* drawer Button */}
          <TouchableOpacity
            onPress={() => router.push("/(agent)/profile/profile")}
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
            <Ionicons name="reorder-three-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* bottom sheet */}
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={snapPoints}
          enablePanDownToClose={false}
          backgroundStyle={{ backgroundColor: "white" }}
          handleIndicatorStyle={{ backgroundColor: "#D1D5DB" }}
        >
          <BottomSheetView
            className="flex-1 px-5"
            style={{
              paddingBottom: insets.bottom + 20,
            }}
          >
            <ButtonSecondary title="Go Online" />
          </BottomSheetView>
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  );
};

export default AgentHome;
