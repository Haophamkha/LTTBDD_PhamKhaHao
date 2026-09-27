import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

import CartItemRow from "../components/CartItemRow";
import { useCart } from "../store/useCart";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function CartScreen() {
  const navigation = useNavigation<NavigationProp>();

  const { cartItems, totalAmount, update, remove } = useCart();

  const formattedTotal = totalAmount.toLocaleString("vi-VN") + " đ";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Feather name="arrow-left" size={22} color="#333" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Giỏ hàng của bạn</Text>

        <View style={{ width: 22 }} />
      </View>

      <View style={styles.contentContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollList}
        >
          {cartItems.map((item) => (
            <CartItemRow
              key={item.bookId}
              bookId={item.bookId}
              image={item.image}
              title={item.title}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => update(item.bookId, item.quantity + 1)}
              onDecrease={() => update(item.bookId, item.quantity - 1)}
              onRemove={() => remove(item.bookId)}
            />
          ))}
        </ScrollView>
      </View>

      <View style={styles.checkoutContainer}>
        <View style={styles.totalInfo}>
          <Text style={styles.totalLabel}>Tổng tiền:</Text>

          <Text style={styles.totalPrice}>{formattedTotal}</Text>
        </View>

        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() =>
            navigation.navigate("Checkout", {
              totalAmount,
            })
          }
        >
          <Text style={styles.checkoutButtonText}>Thanh toán</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },

  backButton: {
    padding: 4,
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },

  contentContainer: {
    flex: 1,
  },

  scrollList: {
    padding: 16,
  },

  checkoutContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },

  totalInfo: {
    justifyContent: "center",
  },

  totalLabel: {
    fontSize: 12,
    color: "#6B7280",
  },

  totalPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2563EB",
  },

  checkoutButton: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },

  checkoutButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});
