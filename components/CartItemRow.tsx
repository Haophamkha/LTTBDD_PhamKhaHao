import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface CartItemProps {
  bookId: string;
  image: ImageSourcePropType;
  title: string;
  quantity: number;
  price: string;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItemRow({
  image,
  title,
  quantity,
  price,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.bookImage} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <Text style={styles.bookTitle} numberOfLines={2}>
          {title}
        </Text>

        <Text style={styles.priceText}>{price}</Text>

        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={onDecrease}
            activeOpacity={0.7}
          >
            <Feather name="minus" size={16} color="#333" />
          </TouchableOpacity>

          <Text style={styles.quantityText}>{quantity}</Text>

          <TouchableOpacity
            style={styles.quantityButton}
            onPress={onIncrease}
            activeOpacity={0.7}
          >
            <Feather name="plus" size={16} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.removeButton}
        onPress={onRemove}
        activeOpacity={0.7}
      >
        <Feather name="trash-2" size={19} color="#EF4444" />
      </TouchableOpacity>
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

  priceText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2563EB",
    marginBottom: 8,
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  quantityText: {
    minWidth: 32,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },

  removeButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
