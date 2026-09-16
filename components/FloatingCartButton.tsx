import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type FloatingCartButtonProps = {
  quantity?: number;
};

export default function FloatingCartButton({
  quantity = 3,
}: FloatingCartButtonProps) {
  return (
    <TouchableOpacity style={styles.cartButton}>
      <Text style={{ fontSize: 12, fontWeight: "bold" }}>Giỏ hàng</Text>

      <View style={styles.badge}>
        <Text style={styles.badgeText}>{quantity}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cartButton: {
    position: "absolute",
    bottom: 24,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },

  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },

  badgeText: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "bold",
  },
});
