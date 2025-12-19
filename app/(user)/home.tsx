import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      className="border flex-1"
      edges={["top", "left", "right", "bottom"]}
    >
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.3]}
        style={{ flex: 1 }}
      >
        {/* home header */}
        <View className="flex-row justify-between items-center py-3 px-5">
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
          <View className="w-9 h-9 items-center justify-center">
            <SimpleLineIcons
              className="p-1.5 border border-[#0A66C224] rounded-full bg-white"
              name="bell"
              size={18}
              color="black"
            />

            <Text className="absolute -top-1 -right-1.5 w-[16px] h-[16px] items-center text-center text-white bg-custom-custom-red rounded-full font-sf-pro-medium text-[9px]">
              06
            </Text>
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default Home;
