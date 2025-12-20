import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.3]}
        style={{ flex: 1 }}
      >
        {/* home header */}
        <View className="flex-row justify-between items-center py-3 px-5 bg-white rounded-b-[30px]">
          <View className="flex-row items-center gap-2">
            <Image
              source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
              style={{
                width: 45,
                height: 45,
                borderRadius: 999,
              }}
              contentFit="cover"
            />

            <View>
              <View className="flex-row items-center gap-1">
                <Text className="text-custom-blue-800">My Location</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={16}
                  color="black"
                />
              </View>

              <View className="flex-row items-center gap-1 mt-0.5">
                <SimpleLineIcons name="location-pin" size={14} color="black" />
                <Text className="font-sf-pro-medium text-sm text-custom-blue-900">
                  Los Angeles
                </Text>
              </View>
            </View>
          </View>

          {/* notification */}
          <TouchableOpacity className="w-9 h-9 items-center justify-center">
            <SimpleLineIcons
              className="p-1.5 border border-[#0A66C224] rounded-full bg-white"
              name="bell"
              size={18}
              color="black"
            />

            <Text className="absolute -top-1 -right-1.5 w-[16px] h-[16px] items-center text-center text-white bg-custom-custom-red rounded-full font-sf-pro-medium text-[9px]">
              06
            </Text>
          </TouchableOpacity>
        </View>

        {/* main content */}
        <ScrollView
          className="px-5 pt-5"
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        >
          {/* instant delivery */}
          <TouchableOpacity className="py-3 px-4 bg-white flex-row items-center justify-between gap-3 rounded-xl mb-3 elevation-md">
            <View className="flex-row items-center gap-3">
              <View className="p-3 border border-[#0F73F724] rounded-full">
                <Image
                  source={require("@/assets/images/instant_delivery.svg")}
                  style={{
                    width: 36,
                    height: 36,
                  }}
                  contentFit="contain"
                />
              </View>

              <View>
                <Text className="font-sf-pro-medium text-base text-custom-blue-900 mb-1">
                  Instant Delivery
                </Text>
                <Text className="font-sf-pro-medium text-xs text-gray-400">
                  Immediate Pickup, Fast Delivery
                </Text>
              </View>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          {/* schedule delivery */}
          <TouchableOpacity className="py-3 px-4 bg-white flex-row items-center justify-between gap-3 rounded-xl elevation-md">
            <View className="flex-row items-center gap-3">
              <View className="p-3 border border-[#0F73F724] rounded-full">
                <Image
                  source={require("@/assets/images/instant_delivery.svg")}
                  style={{
                    width: 36,
                    height: 36,
                  }}
                  contentFit="contain"
                />
              </View>

              <View>
                <Text className="font-sf-pro-medium text-base text-custom-blue-900 mb-1">
                  Instant Delivery
                </Text>
                <Text className="font-sf-pro-medium text-xs text-gray-400">
                  Immediate Pickup, Fast Delivery
                </Text>
              </View>
            </View>

            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </TouchableOpacity>

          {/* history */}
          <View className="flex-row justify-between p-2.5 my-4">
            <Text className="font-sf-pro-medium text-base">History</Text>

            <Text className="font-sf-pro-medium text-base text-blue-600">
              View All
            </Text>
          </View>

          {/* history cards container */}
          <View>
            <TouchableOpacity className="mb-4 border border-[#E3E6F0] p-4 rounded-xl elevation-sm bg-white">
              {/* 1st row */}
              <View className="flex-row justify-between items-center">
                {/* date */}
                <View className="flex-row items-center gap-2">
                  <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  <Text className="font-sf-pro-regular text-base">
                    14 may 2025, 04:40
                  </Text>
                </View>

                {/* currency */}
                <Text className="font-sf-pro-medium text-base">$150</Text>
              </View>

              {/* 2nd row */}
              <View className="flex-row justify-between items-center mt-3.5">
                <View>
                  <View className="flex-row items-center gap-2 ml-0.5">
                    <FontAwesome6 name="person" size={14} color="black" />
                    <Text className="font-sf-pro-regular text-xs">
                      Block B, Banasree, Dhaka.
                    </Text>
                  </View>

                  <Text className="my-1"> |</Text>

                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={14} color="#0F73F7" />

                    <Text className="font-sf-pro-regular text-xs">
                      Green Road, Dhanmondi, Dhaka.
                    </Text>
                  </View>
                </View>

                <Image
                  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    borderWidth: 2,
                    borderColor: "#0F73F7",
                  }}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 border border-[#E3E6F0] p-4 rounded-xl elevation-sm bg-white">
              {/* 1st row */}
              <View className="flex-row justify-between items-center">
                {/* date */}
                <View className="flex-row items-center gap-2">
                  <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  <Text className="font-sf-pro-regular text-base">
                    14 may 2025, 04:40
                  </Text>
                </View>

                {/* currency */}
                <Text className="font-sf-pro-medium text-base">$150</Text>
              </View>

              {/* 2nd row */}
              <View className="flex-row justify-between items-center mt-3.5">
                <View>
                  <View className="flex-row items-center gap-2 ml-0.5">
                    <FontAwesome6 name="person" size={14} color="black" />
                    <Text className="font-sf-pro-regular text-xs">
                      Block B, Banasree, Dhaka.
                    </Text>
                  </View>

                  <Text className="my-1"> |</Text>

                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={14} color="#0F73F7" />

                    <Text className="font-sf-pro-regular text-xs">
                      Green Road, Dhanmondi, Dhaka.
                    </Text>
                  </View>
                </View>

                <Image
                  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    borderWidth: 2,
                    borderColor: "#0F73F7",
                  }}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 border border-[#E3E6F0] p-4 rounded-xl elevation-sm bg-white">
              {/* 1st row */}
              <View className="flex-row justify-between items-center">
                {/* date */}
                <View className="flex-row items-center gap-2">
                  <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  <Text className="font-sf-pro-regular text-base">
                    14 may 2025, 04:40
                  </Text>
                </View>

                {/* currency */}
                <Text className="font-sf-pro-medium text-base">$150</Text>
              </View>

              {/* 2nd row */}
              <View className="flex-row justify-between items-center mt-3.5">
                <View>
                  <View className="flex-row items-center gap-2 ml-0.5">
                    <FontAwesome6 name="person" size={14} color="black" />
                    <Text className="font-sf-pro-regular text-xs">
                      Block B, Banasree, Dhaka.
                    </Text>
                  </View>

                  <Text className="my-1"> |</Text>

                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={14} color="#0F73F7" />

                    <Text className="font-sf-pro-regular text-xs">
                      Green Road, Dhanmondi, Dhaka.
                    </Text>
                  </View>
                </View>

                <Image
                  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    borderWidth: 2,
                    borderColor: "#0F73F7",
                  }}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 border border-[#E3E6F0] p-4 rounded-xl elevation-sm bg-white">
              {/* 1st row */}
              <View className="flex-row justify-between items-center">
                {/* date */}
                <View className="flex-row items-center gap-2">
                  <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  <Text className="font-sf-pro-regular text-base">
                    14 may 2025, 04:40
                  </Text>
                </View>

                {/* currency */}
                <Text className="font-sf-pro-medium text-base">$150</Text>
              </View>

              {/* 2nd row */}
              <View className="flex-row justify-between items-center mt-3.5">
                <View>
                  <View className="flex-row items-center gap-2 ml-0.5">
                    <FontAwesome6 name="person" size={14} color="black" />
                    <Text className="font-sf-pro-regular text-xs">
                      Block B, Banasree, Dhaka.
                    </Text>
                  </View>

                  <Text className="my-1"> |</Text>

                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={14} color="#0F73F7" />

                    <Text className="font-sf-pro-regular text-xs">
                      Green Road, Dhanmondi, Dhaka.
                    </Text>
                  </View>
                </View>

                <Image
                  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    borderWidth: 2,
                    borderColor: "#0F73F7",
                  }}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity className="mb-4 border border-[#E3E6F0] p-4 rounded-xl elevation-sm bg-white">
              {/* 1st row */}
              <View className="flex-row justify-between items-center">
                {/* date */}
                <View className="flex-row items-center gap-2">
                  <View className="w-2 h-2 bg-blue-500 rounded-full" />
                  <Text className="font-sf-pro-regular text-base">
                    14 may 2025, 04:40
                  </Text>
                </View>

                {/* currency */}
                <Text className="font-sf-pro-medium text-base">$150</Text>
              </View>

              {/* 2nd row */}
              <View className="flex-row justify-between items-center mt-3.5">
                <View>
                  <View className="flex-row items-center gap-2 ml-0.5">
                    <FontAwesome6 name="person" size={14} color="black" />
                    <Text className="font-sf-pro-regular text-xs">
                      Block B, Banasree, Dhaka.
                    </Text>
                  </View>

                  <Text className="my-1"> |</Text>

                  <View className="flex-row items-center gap-1">
                    <Ionicons name="location-sharp" size={14} color="#0F73F7" />

                    <Text className="font-sf-pro-regular text-xs">
                      Green Road, Dhanmondi, Dhaka.
                    </Text>
                  </View>
                </View>

                <Image
                  source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXpdpAD2WforjNOXjrovpTAGSJKeFFn3AhKCYndxUUGoepbo36bvFeDhYYiv2EXdlauQtHqMjsrKvn103gY57FgYUN1xNrSnTW1h9bt_TqPQ&s=10"
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 999,
                    borderWidth: 2,
                    borderColor: "#0F73F7",
                  }}
                  contentFit="cover"
                />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
