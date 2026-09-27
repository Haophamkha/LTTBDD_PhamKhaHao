import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { RootStackParamList } from "../navigation/types";

type Props = NativeStackScreenProps<RootStackParamList, "Checkout">;

export default function CheckoutScreen({ route, navigation }: Props) {
  const { totalAmount } = route.params;

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

        <Text style={styles.headerTitle}>Thanh toán</Text>

        <View style={{ width: 30 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Tổng tiền</Text>

        <Text style={styles.totalPrice}>{formattedTotal}</Text>

        <Text style={styles.note}>
          Màn hình thanh toán sẽ được hoàn thiện ở Tuần 9.
        </Text>
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
    paddingHorizontal: 16,
    backgroundColor: "#FFFFFF",
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

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  label: {
    fontSize: 16,
    color: "#6B7280",
    marginBottom: 8,
  },

  totalPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
  },

  note: {
    marginTop: 20,
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
  },
});
