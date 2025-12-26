import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

interface DriverDetails {
  driverId: string;
  driverName: string;
  driverPhoto: string;
  rating: number;
  phoneNumber: string;
  vehicleType: string;
  vehicleNumber: string;
  vehicleColor: string;
  currentLocation: string;
  estimatedArrival: string;
  price: string;
}

interface ArrivingDetailsProps {
  driverDetails: DriverDetails;
  onCallDriver: () => void;
  onCancelRide: () => void;
  bottomInset: number;
}

const ArrivingDetails: React.FC<ArrivingDetailsProps> = ({
  driverDetails,
  onCallDriver,
  onCancelRide,
  bottomInset,
}) => {
  const handleCall = () => {
    Linking.openURL(`tel:${driverDetails.phoneNumber}`);
    onCallDriver();
  };

  return (
    <>
      <Text className="text-xl font-sf-pro-medium text-center mb-4">
        Driver is Arriving
      </Text>

      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Arrival Status */}
        <View className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <Text className="text-2xl font-sf-pro-medium text-green-600 text-center">
            {driverDetails.estimatedArrival}
          </Text>
          <Text
            className="text-sm font-sf-pro-regular text-gray-600 text-center       
  mt-1"
          >
            Estimated arrival time
          </Text>
        </View>

        {/* Driver Card */}
        <View className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          {/* Driver Profile */}
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center flex-1">
              <Image
                source={driverDetails.driverPhoto}
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                }}
                contentFit="cover"
              />
              <View className="flex-1 ml-3">
                <Text className="text-lg font-sf-pro-medium">
                  {driverDetails.driverName}
                </Text>
                <View className="flex-row items-center mt-1">
                  <MaterialIcons name="star" size={16} color="#FFA500" />
                  <Text className="text-sm font-sf-pro-regular text-gray-600 ml-1">
                    {driverDetails.rating}
                  </Text>
                </View>
              </View>
            </View>

            {/* Call Button */}
            <TouchableOpacity
              onPress={handleCall}
              className="bg-green-500 rounded-full w-12 h-12 items-center              
  justify-center"
            >
              <FontAwesome name="phone" size={20} color="white" />
            </TouchableOpacity>
          </View>

          {/* Vehicle Details */}
          <View className="border-t border-gray-200 pt-3">
            <View className="flex-row items-center mb-2">
              <MaterialIcons name="directions-car" size={20} color="#666" />
              <Text className="text-sm font-sf-pro-medium ml-2">
                {driverDetails.vehicleType} • {driverDetails.vehicleColor}
              </Text>
            </View>
            <View className="flex-row items-center mb-2">
              <MaterialIcons
                name="confirmation-number"
                size={20}
                color="#666"
              />
              <Text className="text-sm font-sf-pro-medium ml-2">
                {driverDetails.vehicleNumber}
              </Text>
            </View>
            <View className="flex-row items-center">
              <MaterialIcons name="location-on" size={20} color="#666" />
              <Text
                className="text-sm font-sf-pro-regular text-gray-600 ml-2          
  flex-1"
              >
                {driverDetails.currentLocation}
              </Text>
            </View>
          </View>
        </View>

        {/* Price Summary */}
        <View className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-sm font-sf-pro-regular text-gray-600">
              Total Fare
            </Text>
            <Text className="text-2xl font-sf-pro-medium text-blue-600">
              {driverDetails.price}
            </Text>
          </View>
        </View>

        {/* Action Options */}
        <View className="flex-row gap-3">
          <TouchableOpacity
            className="flex-1 border border-gray-300 rounded-xl py-3   
  items-center"
          >
            <MaterialIcons name="message" size={24} color="#0F73F7" />
            <Text className="text-xs font-sf-pro-medium mt-1">Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 border border-gray-300 rounded-xl py-3   
  items-center"
          >
            <MaterialIcons name="share" size={24} color="#0F73F7" />
            <Text className="text-xs font-sf-pro-medium mt-1">Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-1 border border-gray-300 rounded-xl py-3   
  items-center"
          >
            <MaterialIcons name="info" size={24} color="#0F73F7" />
            <Text className="text-xs font-sf-pro-medium mt-1">Help</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetScrollView>

      {/* Cancel Button */}
      <View
        className="border-t border-gray-200 pt-4"
        style={{
          marginBottom: bottomInset + 20,
        }}
      >
        <TouchableOpacity
          className="bg-red-500 rounded-xl py-4 items-center"
          onPress={onCancelRide}
        >
          <Text className="text-white font-sf-pro-medium text-base">
            Cancel Ride
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ArrivingDetails;
