import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <Text style={s.title}>Tour Việt</Text>
        <Text style={s.student}>22674001 - Phạm Khả Hào</Text>
        <TextInput
          style={s.input}
          placeholder="Tìm tour theo tên..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: { padding: 16, backgroundColor: "#1ba9ff" },
  title: { fontSize: 24, fontWeight: "bold", color: "#fff" },
  student: { color: "#fff", marginVertical: 4 },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 8,
  },
});
