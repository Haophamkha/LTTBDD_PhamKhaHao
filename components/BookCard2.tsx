import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function BookCard2({ image, title, price }) {
  return (
    <View style={styles.cardItem}>
      <Image source={image} style={styles.coverImage} resizeMode="cover" />

      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardItem: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    overflow: "hidden",
  },
  coverImage: {
    width: "100%",
    height: 130, 
    borderRadius: 6,
    backgroundColor: "#E5E7EB",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  title: {
    flex: 1,
    fontSize: 13,
    fontWeight: "600",
    color: "#333333",
    marginRight: 4,
  },
  price: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2563EB",
  },
});
