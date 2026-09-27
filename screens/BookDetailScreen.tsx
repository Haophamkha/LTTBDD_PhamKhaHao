import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

import { books } from "../data/books";

type Props = NativeStackScreenProps<RootStackParamList, "BookDetail">;

export default function BookDetailScreen({ route, navigation }: Props) {
  const { bookId } = route.params;

  const book = books.find((item) => item.id === bookId);

  if (!book) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Không tìm thấy sách</Text>

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backText}>Quay lại</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Feather name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={book.image}
            style={styles.coverImage}
            resizeMode="contain"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>

          <Text style={styles.author}>Tác giả: {book.author}</Text>

          <Text style={styles.price}>{book.price}</Text>

          <Text style={styles.descriptionTitle}>Mô tả</Text>

          <Text style={styles.description}>{book.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <View>
          <Text style={styles.bottomPrice}>{book.price}</Text>
        </View>

        <TouchableOpacity style={styles.addButton}>
          <Feather name="shopping-cart" size={20} color="#FFFFFF" />

          <Text style={styles.addButtonText}>Thêm vào giỏ</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  scrollContent: {
    padding: 16,
    paddingBottom: 120,
  },

  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  coverImage: {
    width: "100%",
    height: "100%",
  },

  imageContainer: {
    width: "100%",
    height: 320,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    overflow: "hidden",
  },

  infoContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
  },

  author: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 12,
  },

  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#EF4444",
    marginBottom: 20,
  },

  descriptionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 10,
  },

  description: {
    fontSize: 15,
    lineHeight: 24,
    color: "#555555",
  },

  bottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  bottomPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#EF4444",
  },

  addButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#2563EB",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 8,
  },

  addButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  notFoundContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F4F6",
  },

  notFoundText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },

  backText: {
    color: "#2563EB",
    fontWeight: "bold",
  },
});
