import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

interface Message {
  id: string;
  text: string;
  sender: "user" | "driver";
  timestamp: string;
  isButton?: boolean;
}

const ChatScreen = () => {
  const insets = useSafeAreaInsets();

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello, I'm FitBot! 👋 I'm your personal sport assistant. How can I help you?",
      sender: "driver",
      timestamp: "Wed 8:21 AM",
    },
    {
      id: "2",
      text: "Show me other options",
      sender: "driver",
      timestamp: "Wed 8:21 AM",
      isButton: true,
    },
    {
      id: "3",
      text: "Ok, how about these?",
      sender: "driver",
      timestamp: "Wed 8:22 AM",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [showQuickActions, setShowQuickActions] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputText,
        sender: "user",
        timestamp: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, newMessage]);
      setInputText("");

      // Simulate driver response
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          text: "Thank you for your message! I will respond shortly.",
          sender: "driver",
          timestamp: new Date().toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, response]);
      }, 1000);
    }
  };

  const handleQuickAction = (action: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text: `Shared ${action}`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
      <StatusBar barStyle="dark-content" />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        {/* Header */}
        <View className="bg-white px-4 py-3 flex-row items-center justify-between border-b border-gray-100">
          <View className="flex-row items-center flex-1">
            <TouchableOpacity className="mr-3">
              <Ionicons name="chevron-back" size={24} color="#000" />
            </TouchableOpacity>

            <View className="w-10 h-10 rounded-full bg-gray-200 mr-3">
              <Image
                source={{ uri: "https://i.pravatar.cc/100?img=12" }}
                className="w-10 h-10 rounded-full"
              />
            </View>

            <View className="flex-1">
              <Text className="text-base font-semibold text-gray-900">
                Wade Warren
              </Text>
              <Text className="text-xs text-gray-500" numberOfLines={1}>
                4 Novella Block,...
              </Text>
            </View>
          </View>

          <View className="flex-row gap-3">
            <TouchableOpacity>
              <Ionicons name="videocam-outline" size={24} color="#000" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Ionicons name="call-outline" size={24} color="#000" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Tracking Card */}
        <View className="bg-white mx-4 mt-4 rounded-2xl p-4 shadow-sm">
          <View className="flex-row items-center mb-3">
            <View className="w-10 h-10 bg-orange-100 rounded-lg items-center justify-center mr-3">
              <MaterialCommunityIcons
                name="package-variant"
                size={24}
                color="#F97316"
              />
            </View>
            <View className="flex-1 flex-row items-center justify-between">
              <Text className="text-gray-900 font-medium">
                Tracking ID: #5R9G87R
              </Text>
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="content-copy"
                  size={20}
                  color="#6B7280"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View className="flex-row justify-between mb-3">
            <View>
              <Text className="text-gray-500 text-xs mb-1">Distance</Text>
              <Text className="text-gray-900 font-semibold text-lg">
                5.39 KM
              </Text>
            </View>
            <View className="items-end">
              <View className="flex-row items-center gap-1 mb-1">
                <Text className="text-gray-500 text-xs">Charge</Text>
                <View className="w-4 h-4 bg-blue-500 rounded-full items-center justify-center">
                  <Text className="text-white text-xs font-bold">i</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-2">
                <Text className="text-red-500 text-sm line-through">$150</Text>
                <Text className="text-gray-900 font-bold text-lg">$140</Text>
              </View>
            </View>
          </View>

          <View className="flex-row items-center justify-between">
            <Text className="text-gray-900 font-medium">Who will pay?</Text>
            <TouchableOpacity className="bg-blue-500 rounded-full px-4 py-2 flex-row items-center gap-2">
              <MaterialIcons name="facebook" size={16} color="#fff" />
              <Text className="text-white font-medium text-sm">Sender</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages */}
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4 pt-4"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message, index) => {
            const showTimestamp =
              index === 0 ||
              messages[index - 1].timestamp !== message.timestamp;

            return (
              <View key={message.id}>
                {showTimestamp && (
                  <Text className="text-center text-gray-500 text-xs mb-3">
                    {message.timestamp}
                  </Text>
                )}

                {message.sender === "driver" ? (
                  <View className="flex-row mb-4">
                    <View className="w-8 h-8 rounded-full bg-gray-200 mr-2">
                      <Image
                        source={{ uri: "https://i.pravatar.cc/100?img=12" }}
                        className="w-8 h-8 rounded-full"
                      />
                    </View>
                    {message.isButton ? (
                      <TouchableOpacity className="bg-blue-500 rounded-3xl px-6 py-3 max-w-[80%]">
                        <Text className="text-white font-medium">
                          {message.text}
                        </Text>
                      </TouchableOpacity>
                    ) : (
                      <View className="bg-gray-100 rounded-3xl rounded-tl-none px-4 py-3 max-w-[80%]">
                        <Text className="text-gray-900">{message.text}</Text>
                      </View>
                    )}
                  </View>
                ) : (
                  <View className="flex-row justify-end mb-4">
                    <View className="bg-blue-500 rounded-3xl rounded-tr-none px-4 py-3 max-w-[80%]">
                      <Text className="text-white">{message.text}</Text>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>

        {/* Input Bar */}
        {/* Quick Actions - Shows when plus is pressed */}
        {showQuickActions && (
          <View className="bg-white px-4 py-3 flex-row gap-4 justify-center border-t border-gray-100">
            <TouchableOpacity
              onPress={() => {
                handleQuickAction("Photo");
                setShowQuickActions(false);
              }}
              className="items-center"
            >
              <View className="w-14 h-14 bg-blue-100 rounded-full items-center justify-center mb-1">
                <Ionicons name="images" size={24} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-600">Photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleQuickAction("Camera");
                setShowQuickActions(false);
              }}
              className="items-center"
            >
              <View className="w-14 h-14 bg-blue-100 rounded-full items-center justify-center mb-1">
                <Ionicons name="camera" size={24} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-600">Camera</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                handleQuickAction("Location");
                setShowQuickActions(false);
              }}
              className="items-center"
            >
              <View className="w-14 h-14 bg-blue-100 rounded-full items-center justify-center mb-1">
                <Ionicons name="location" size={24} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-600">Location</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Input Section */}
        <View
          className="bg-[#E3E6F0] px-4 py-3 flex-row items-center gap-3 border-t border-gray-100"
          style={{
            paddingBottom: insets.bottom + 10,
          }}
        >
          <TouchableOpacity
            onPress={() => setShowQuickActions(!showQuickActions)}
          >
            <Ionicons
              name={showQuickActions ? "close" : "add"}
              size={28}
              color="#000"
            />
          </TouchableOpacity>

          <View className="flex-1 bg-gray-100 rounded-full px-3">
            <TextInput
              value={inputText}
              onChangeText={setInputText}
              placeholder="Message"
              placeholderTextColor="#9CA3AF"
              className="font-sf-pro-regular text-base"
              multiline
              maxLength={500}
              onFocus={() => setShowQuickActions(false)}
            />
          </View>

          <TouchableOpacity>
            <Ionicons name="camera-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ChatScreen;
