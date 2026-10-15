import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";

import type { CompositeNavigationProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import type {
  RootStackParamList,
  BottomTabParamList,
} from "../navigation/types";

import { CategoryChips } from "../components/CategoryChips";
import BookCard2 from "../components/BookCard2";
import FloatingCartButton from "../components/FloatingCartButton";

import { books } from "../data/books";
import { useCart } from "../store/useCart";

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList, "Home">,
  NativeStackNavigationProp<RootStackParamList>
>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavigationProp>();

  const { totalQuantity } = useCart();

  const bookCategories = [
    "Văn học",
    "Kinh tế",
    "Thiếu nhi",
    "Truyện tranh",
    "Ngoại ngữ",
    "Lịch sử",
    "Khoa học công nghệ",
    "Kỹ năng sống",
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Text style={styles.logo}>BookStore</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={22} color="#2563EB" />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate("Cart")}
          >
            <Feather name="shopping-cart" size={22} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          <View style={styles.wrapperCard}>
            <Text style={styles.sectionTitle}>Danh mục</Text>

            <CategoryChips categories={bookCategories} />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Sách nổi bật</Text>

            <View style={styles.bookGrid}>
              {books.map((book) => (
                <BookCard2
                  key={book.id}
                  book={book}
                  image={book.image}
                  title={book.title}
                  price={book.price}
                  onPress={() =>
                    navigation.navigate("BookDetail", {
                      bookId: book.id,
                    })
                  }
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <FloatingCartButton quantity={totalQuantity} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  header: {
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue",
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconButton: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "white",
  },

  contentContainer: {
    flex: 1,
  },

  scrollList: {
    padding: 16,
    paddingBottom: 130,
    gap: 16,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },

  wrapperCard: {
    borderWidth: 1,
    borderColor: "#6886a9",
    borderStyle: "dashed",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
  },

  sectionContainer: {
    marginTop: 8,
  },

  bookGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "flex-start",
  },
});
