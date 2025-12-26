import ButtonPrimary from "@/components/ButtonPrimary";
import ButtonSecondary from "@/components/ButtonSecondary";
import { MaterialIcons } from "@expo/vector-icons";
import { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";

interface DriverOffer {
  driverId: string;
  driverName: string;
  driverPhoto: string;
  rating: number;
  vehicleType: string;
  vehicleNumber: string;
  price: string;
  estimatedTime: string;
}

interface AcceptDeclineOfferProps {
  driverOffer: DriverOffer;
  onAccept: () => void;
  onDecline: () => void;
  bottomInset: number;
}

const AcceptDeclineOffer: React.FC<AcceptDeclineOfferProps> = ({
  driverOffer,
  onAccept,
  onDecline,
  bottomInset,
}) => {
  return (
    <>
      <Text className="text-xl font-sf-pro-medium text-center mb-4">
        Driver Found!
      </Text>

      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Driver Info Card */}
        <View className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          {/* Driver Profile */}
          <View className="flex-row items-center mb-4">
            <Image
              source={driverOffer.driverPhoto}
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
              contentFit="cover"
            />
            <View className="flex-1 ml-3">
              <Text className="text-lg font-sf-pro-medium">
                {driverOffer.driverName}
              </Text>
              <View className="flex-row items-center mt-1">
                <MaterialIcons name="star" size={16} color="#FFA500" />
                <Text className="text-sm font-sf-pro-regular text-gray-600 ml-1">
                  {driverOffer.rating} Rating
                </Text>
              </View>
            </View>
          </View>

          {/* Vehicle Info */}
          <View className="border-t border-gray-200 pt-3">
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm font-sf-pro-regular text-gray-600">
                Vehicle Type
              </Text>
              <Text className="text-sm font-sf-pro-medium">
                {driverOffer.vehicleType}
              </Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm font-sf-pro-regular text-gray-600">
                Vehicle Number
              </Text>
              <Text className="text-sm font-sf-pro-medium">
                {driverOffer.vehicleNumber}
              </Text>
            </View>
            <View className="flex-row justify-between mb-2">
              <Text className="text-sm font-sf-pro-regular text-gray-600">
                Estimated Arrival
              </Text>
              <Text className="text-sm font-sf-pro-medium">
                {driverOffer.estimatedTime}
              </Text>
            </View>
          </View>
        </View>

        {/* Price Info */}
        <View className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
          <Text className="text-sm font-sf-pro-regular text-gray-600 mb-1">
            Agreed Price
          </Text>
          <Text className="text-3xl font-sf-pro-medium text-green-600">
            {driverOffer.price}
          </Text>
        </View>

        {/* Info Message */}
        <View className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <Text className="text-sm font-sf-pro-regular text-gray-700">
            ⏰ This offer will expire in 30 seconds. Please accept or decline
            quickly!
          </Text>
        </View>
      </BottomSheetScrollView>

      {/* Action Buttons */}
      <View
        className="border-t border-gray-200 pt-4"
        style={{
          marginBottom: bottomInset + 20,
        }}
      >
        <ButtonPrimary title="Accept Offer" onPress={onAccept} />
        <ButtonSecondary title="Decline" onPress={onDecline} className="mt-3" />
      </View>
    </>
  );
};

export default AcceptDeclineOffer;
