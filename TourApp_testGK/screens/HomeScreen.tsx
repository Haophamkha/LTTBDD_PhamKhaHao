import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TourItem, { Tour } from "../components/TourItem";
import { formatDate, formatPrice, groupByCity } from "../utils/tour";

const API_URL = "https://693231efe5a9e342d26e2cf8.mockapi.io/tours";

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setTours)
      .finally(() => setLoading(false));
  }, []);

  const sections = useMemo(() => groupByCity(tours), [tours]);
  const favorites = useMemo(() => tours.filter((t) => t.isFavorite), [tours]);

  const handlePress = useCallback((tour: Tour) => {
    Alert.alert(
      tour.name,
      `Khởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days} ngày\nGiá: ${formatPrice(tour.price)}`,
    );
  }, []);

  // Tạm thời đổi tim trong state, Câu 5 sẽ thêm PUT
  const handleToggleFavorite = useCallback((id: string, next: boolean) => {
    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: next } : t)),
    );
  }, []);

  const favoriteHeader = (
    <View style={s.favBox}>
      <Text style={s.favTitle}>Tour yêu thích ({favorites.length})</Text>
      {favorites.length === 0 ? (
        <Text style={s.favEmpty}>Chưa có tour yêu thích</Text>
      ) : (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={favorites}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          contentContainerStyle={{ paddingHorizontal: 12 }}
          renderItem={({ item }) => (
            <TourItem
              compact
              tour={item}
              onPress={handlePress}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
      )}
    </View>
  );

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

      {loading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <SectionList
          sections={sections}
          keyExtractor={(item) => item.id}
          stickySectionHeadersEnabled
          ListHeaderComponent={favoriteHeader}
          renderSectionHeader={({ section }) => (
            <Text style={s.sectionHeader}>
              {section.title} · {section.data.length} tour
            </Text>
          )}
          renderItem={({ item }) => (
            <TourItem
              tour={item}
              onPress={handlePress}
              onToggleFavorite={handleToggleFavorite}
            />
          )}
        />
      )}
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
  sectionHeader: {
    backgroundColor: "#e6f4fe",
    padding: 8,
    fontWeight: "bold",
    fontSize: 16,
  },
  favBox: { paddingVertical: 12 },
  favTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 12,
    marginBottom: 8,
  },
  favEmpty: { marginHorizontal: 12, color: "#666" },
});
