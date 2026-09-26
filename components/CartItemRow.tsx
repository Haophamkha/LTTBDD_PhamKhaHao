// components/CartItemRow.tsx
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

interface CartItemProps {
  image: ImageSourcePropType;
  title: string;
  quantity: number;
  price: string;
}

export default function CartItemRow({
  image,
  title,
  quantity,
  price,
}: CartItemProps) {
  return (
    <View style={styles.cardContainer}>
      {/* Ảnh cố định */}
      <Image source={image} style={styles.bookImage} resizeMode="cover" />

      {/* Tên sách flex: 1 */}
      <View style={styles.infoContainer}>
        <Text style={styles.bookTitle} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.quantityText}>SL: {quantity}</Text>
      </View>

      {/* Giá cố định chiều rộng */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  bookImage: {
    width: 60,
    height: 80,
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 12,
    justifyContent: "center",
  },
  bookTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  quantityText: {
    fontSize: 12,
    color: "#6B7280",
  },
  priceContainer: {
    width: 90,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#2563EB",
  },
});
