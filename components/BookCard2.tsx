import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Badge from "./Badge";

type Book = {
  id: string;
  title: string;
  author: string;
  price: string;
  image: any;
};

type BookCard2Props = {
  image: any;
  title: string;
  price: string;
  book: Book;
  onPress: () => void;
};

export default function BookCard2({
  image,
  title,
  price,
  book,
  onPress,
}: BookCard2Props) {
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={onPress}
      activeOpacity={0.8}
    >
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
    </TouchableOpacity>
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
    color: "#EF4444",
  },
});
