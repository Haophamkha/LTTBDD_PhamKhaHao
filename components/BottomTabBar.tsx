import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface BottomTabBarProps {
  activeTab?: string;
  onTabPress?: (tabName: string) => void;
}

export default function BottomTabBar({
  activeTab = "Trang chủ",
  onTabPress,
}: BottomTabBarProps) {
  const tabs = [
    { name: "Trang chủ", icon: "home" },
    { name: "Danh mục", icon: "grid" },
    { name: "Giỏ hàng", icon: "shopping-cart" },
    { name: "Tài khoản", icon: "user" },
  ];

  return (
    <View style={styles.tabBarContainer}>
      {tabs.map((tab) => {
        const isActive = activeTab === tab.name;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            activeOpacity={0.7}
            onPress={() => onTabPress && onTabPress(tab.name)}
          >
            <Feather
              name={tab.icon as any}
              size={22}
              color={isActive ? "#2563EB" : "#9CA3AF"}
            />
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  tabItem: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#9CA3AF",
    marginTop: 4,
  },
  activeTabText: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});
