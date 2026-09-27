import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { useAuth } from "../store/useAuth";

export default function ProfileScreen() {
  const { user, isLoggedIn, login, logout } = useAuth();

  if (!isLoggedIn) {
    return (
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Feather name="user" size={48} color="#2563EB" />
        </View>

        <Text style={styles.title}>Bạn chưa đăng nhập</Text>

        <Text style={styles.description}>
          Đăng nhập để quản lý tài khoản và đơn hàng.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={login}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Feather name="user" size={48} color="#2563EB" />
      </View>

      <Text style={styles.title}>{user?.name}</Text>

      <Text style={styles.email}>{user?.email}</Text>

      <View style={styles.infoCard}>
        <View style={styles.infoRow}>
          <Feather name="user" size={20} color="#6B7280" />

          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Họ tên</Text>

            <Text style={styles.infoValue}>{user?.name}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Feather name="mail" size={20} color="#6B7280" />

          <View style={styles.infoContent}>
            <Text style={styles.infoLabel}>Email</Text>

            <Text style={styles.infoValue}>{user?.email}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={logout}
        activeOpacity={0.8}
      >
        <Feather name="log-out" size={20} color="#EF4444" />

        <Text style={styles.logoutText}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    alignItems: "center",
    padding: 24,
    paddingTop: 60,
  },

  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: "#DBEAFE",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222222",
    marginBottom: 8,
    textAlign: "center",
  },

  description: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 21,
    marginBottom: 24,
  },

  email: {
    fontSize: 15,
    color: "#6B7280",
    marginBottom: 24,
  },

  button: {
    width: "100%",
    backgroundColor: "#2563EB",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },

  infoCard: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  infoContent: {
    flex: 1,
    marginLeft: 12,
  },

  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333333",
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 16,
  },

  logoutButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#FCA5A5",
    paddingVertical: 13,
    borderRadius: 8,
  },

  logoutText: {
    color: "#EF4444",
    fontSize: 15,
    fontWeight: "bold",
  },
});
