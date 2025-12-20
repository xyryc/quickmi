import HistoryCard from "@/components/HistoryCard";
import ScreenHeader from "@/components/ScreenHeader";
import SearchBar from "@/components/Searchbar";
import TabFilter from "@/components/TabFilter";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, StatusBar, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("completed");

  const tabs = [
    { id: "completed", label: "Completed", icon: "checkmark-circle" },
    { id: "ongoing", label: "Ongoing", icon: "bicycle" },
    { id: "cancelled", label: "Cancelled", icon: "ban-outline" },
  ];

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
        <View>
          <TabFilter
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>

        {/* history cards */}
        <ScrollView className="mx-5">
          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />

          <HistoryCard />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
};

export default History;
