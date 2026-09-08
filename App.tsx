import { StyleSheet, Text, View, TouchableOpacity,ScrollView } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import image1 from "./assets/book1.jpg";
import image2 from "./assets/book2.jpg";
import image3 from "./assets/book3.jpg";
import image4 from "./assets/book4.jpg";
import BookCard from "./BookCard";

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
  return (
    <View>
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Text style={styles.logo}>BookStore</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="search" size={22} color="#2563EB" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton}>
            <Feather name="shopping-cart" size={22} color="#2563EB" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <ScrollView contentContainerStyle={styles.scrollList}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              image={book.image}
              title={book.title}
              author={book.author}
              price={book.price}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 56,
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: "100%",
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
});
