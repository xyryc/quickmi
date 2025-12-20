import ScreenHeader from "@/components/ScreenHeader";
import SearchBar from "@/components/Searchbar";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1" edges={["top", "left", "right"]}>
      <StatusBar backgroundColor="#D3E6FF" barStyle="dark-content" />

      <LinearGradient
        colors={["#D3E6FF", "#FFFFFF"]}
        locations={[0, 0.3]}
        style={{ flex: 1 }}
      >
        {/* header */}
        <ScreenHeader title="Parcel History" />

        {/* searchbar */}
        <SearchBar
          placeholder="Search name, location or phone"
          value={searchQuery}
          onChangeText={setSearchQuery}
          containerClassName="mx-5 mt-5"
        />

        {/* tabs */}
      </LinearGradient>
    </SafeAreaView>
  );
};

export default History;
