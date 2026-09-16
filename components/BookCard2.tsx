import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Badge from "./Badge";

export default function BookCard2({ image, title, price }) {
  return (
    <View style={styles.cardItem}>
      <View style={styles.imageContainer}>
        <Image
          source={image}
          style={styles.coverImage}
          resizeMode="cover"
        />

        <Badge text="-20%" />
      </View>

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
    overflow: "hidden",
    marginBottom: 16,
  },
  imageContainer: {
    position: "relative",
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
    color: "red",
  },
});
