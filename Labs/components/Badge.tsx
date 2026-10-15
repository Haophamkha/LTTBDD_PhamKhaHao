import React from "react";
import { StyleSheet, Text, View } from "react-native";

type BadgeProps = {
  text: string;
};

export default function Badge({ text }: BadgeProps) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: "absolute",
    top: 6,
    left: 6,
    backgroundColor: "#EF4444",
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  text: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
});

