import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const BookCard = ({ image, title, author, price }) => {
  return (
    <View style={styles.bookCard}>
      <Image source={{ uri: image }} style={styles.coverImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bookCard: {
    flexDirection: "row",
    alignItems: "flex-start", 
    backgroundColor: "#fff",
    padding: 12,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  coverImage: {
    width: 80,
    height: 110,
    borderRadius: 6,
    backgroundColor: "#eee", 
    resizeMode: "cover",
  },
  infoContainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    height: 110, 
    justifyContent: "space-between",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  author: {
    fontSize: 14,
    color: "#666",
  },
  price: {
    fontSize: 15,
    fontWeight: "600",
    color: "#2e7d32", 
  },
});

export default BookCard;
