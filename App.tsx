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

import image1 from "./assets/book1.jpg";
import image2 from "./assets/book2.jpg";
import image3 from "./assets/book3.jpg";
import image4 from "./assets/book4.jpg";

import { CategoryChips } from "./components/CategoryChips";
import BookCard2 from "./components/BookCard2";
import FloatingCartButton from "./components/FloatingCartButton";

export default function App() {
  const books = [
    {
      id: "1",
      title: "Lập trình React Native căn bản",
      author: "Nguyễn Văn A",
      price: "120.000 đ",
      image: image1,
    },
    {
      id: "2",
      title: "JavaScript nâng cao từ A đến Z",
      author: "Trần Văn B",
      price: "150.000 đ",
      image: image2,
    },
    {
      id: "3",
      title: "Tư duy nhanh và chậm",
      author: "Daniel Kahneman",
      price: "180.000 đ",
      image: image3,
    },
    {
      id: "4",
      title: "Clean Code - Mã sạch cho lập trình viên",
      author: "Robert C. Martin",
      price: "220.000 đ",
      image: image4,
    },
  ];

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
      {/* Header cố định */}
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Text style={styles.logo}>BookStore</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={22} color="#2563EB" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Feather
              name="shopping-cart"
              size={22}
              color="#2563EB"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {/* Category Chips */}
          <View style={styles.wrapperCard}>
            <Text style={styles.sectionTitle}>Danh mục</Text>

            <CategoryChips categories={bookCategories} />
          </View>

          {/* Book Grid */}
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Sách nổi bật</Text>

            <View style={styles.bookGrid}>
              {books.map((book) => (
                <BookCard2
                  key={book.id}
                  image={book.image}
                  title={book.title}
                  price={book.price}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      </View>

      <FloatingCartButton quantity={4} />
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
    paddingBottom: 100,
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
