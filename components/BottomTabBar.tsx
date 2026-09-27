import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function BottomTabBar({ state, navigation }: BottomTabBarProps) {
  const tabs = [
    {
      name: "Home",
      label: "Trang chủ",
      icon: "home",
    },
    {
      name: "Category",
      label: "Danh mục",
      icon: "grid",
    },
    {
      name: "Cart",
      label: "Giỏ hàng",
      icon: "shopping-cart",
    },
    {
      name: "Profile",
      label: "Tài khoản",
      icon: "user",
    },
  ];

  return (
    <View style={styles.tabContainer}>
      {tabs.map((tab, index) => {
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: tab.name,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(tab.name as never);
          }
        };

        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tabItem}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Feather
              name={tab.icon as any}
              size={22}
              color={isFocused ? "#2563EB" : "#6B7280"}
            />

            <Text
              style={[
                styles.tabLabel,
                {
                  color: isFocused ? "#2563EB" : "#6B7280",
                },
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  tabItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  tabLabel: {
    fontSize: 11,
    marginTop: 4,
    fontWeight: "500",
  },
});
