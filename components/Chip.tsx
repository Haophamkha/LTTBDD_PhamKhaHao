import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const Chip = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.chip} onPress={onPress}>
      <Text style={styles.chipText}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4F46E5",
    backgroundColor: "#FFFFFF",
  },
  chipText: {
    color: "#4F46E5",
    fontSize: 14,
    fontWeight: "500",
  },
});
