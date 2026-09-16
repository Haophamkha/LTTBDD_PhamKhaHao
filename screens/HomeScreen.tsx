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

import image1 from "../assets/book1.jpg";
import image2 from "../assets/book2.jpg";
import image3 from "../assets/book3.jpg";
import image4 from "../assets/book4.jpg";

import { CategoryChips } from "../components/CategoryChips";
import BookCard2 from "../components/BookCard2";
import FloatingCartButton from "../components/FloatingCartButton";

import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type NavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const books = [
    {
      id: "1",
      title: "Lập trình React Native căn bản",
      author: "Nguyễn Văn A",
      price: "120.000 đ",
      image: image1,
      description:
        "Lập trình React Native căn bản là cuốn sách dành cho những người mới bắt đầu tìm hiểu về phát triển ứng dụng di động bằng React Native.\n\nCuốn sách cung cấp những kiến thức nền tảng về React Native, cách xây dựng giao diện, sử dụng component, xử lý sự kiện và quản lý dữ liệu trong ứng dụng.\n\nCác nội dung được trình bày theo từng bước từ cơ bản đến nâng cao, giúp người đọc dễ dàng thực hành và áp dụng vào các dự án thực tế.",
    },

    {
      id: "2",
      title: "JavaScript nâng cao từ A đến Z",
      author: "Trần Văn B",
      price: "150.000 đ",
      image: image2,
      description:
        "JavaScript nâng cao từ A đến Z cung cấp những kiến thức chuyên sâu về ngôn ngữ JavaScript dành cho người đã có nền tảng lập trình.\n\nNội dung tập trung vào các khái niệm quan trọng như function, object, array, callback, promise, async/await và cách tổ chức mã nguồn hiệu quả.\n\nCuốn sách phù hợp cho những người muốn nâng cao kỹ năng JavaScript và chuẩn bị tốt hơn cho việc xây dựng các ứng dụng web và mobile hiện đại.",
    },

    {
      id: "3",
      title: "Tư duy nhanh và chậm",
      author: "Daniel Kahneman",
      price: "180.000 đ",
      image: image3,
      description:
        "Tư duy nhanh và chậm giới thiệu những nghiên cứu quan trọng về cách con người suy nghĩ và đưa ra quyết định.\n\nCuốn sách trình bày hai hệ thống tư duy: một hệ thống hoạt động nhanh chóng, trực giác và một hệ thống hoạt động chậm hơn, có tính phân tích.\n\nThông qua nhiều ví dụ thực tế, người đọc có thể hiểu rõ hơn về cách tư duy, những sai lệch trong nhận thức và cách chúng ảnh hưởng đến quyết định hàng ngày.",
    },

    {
      id: "4",
      title: "Clean Code - Mã sạch cho lập trình viên",
      author: "Robert C. Martin",
      price: "220.000 đ",
      image: image4,
      description:
        "Clean Code - Mã sạch cho lập trình viên là tài liệu tham khảo dành cho những người muốn nâng cao chất lượng mã nguồn.\n\nCuốn sách trình bày các nguyên tắc và phương pháp giúp viết code dễ đọc, dễ hiểu, dễ bảo trì và dễ mở rộng.\n\nThông qua các ví dụ cụ thể, người đọc có thể nhận biết những đoạn code chưa tốt và từng bước cải thiện cấu trúc chương trình để tạo ra phần mềm có chất lượng cao hơn.",
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
            <Feather
              name="search"
              size={22}
              color="#2563EB"
            />
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
          <View style={styles.wrapperCard}>
            <Text style={styles.sectionTitle}>
              Danh mục
            </Text>

            <CategoryChips
              categories={bookCategories}
            />
          </View>

          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Sách nổi bật
            </Text>

            <View style={styles.bookGrid}>
              {books.map((book) => (
                <BookCard2
                  key={book.id}
                  image={book.image}
                  title={book.title}
                  price={book.price}
                  onPress={() =>
                    navigation.navigate(
                      "BookDetail",
                      { book }
                    )
                  }
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
