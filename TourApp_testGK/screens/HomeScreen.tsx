import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  RefreshControl,
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
  const [refreshing, setRefreshing] = useState(false);

  const fetchTours = useCallback(async () => {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("GET failed");
    const data = await res.json();
    setTours(data);
  }, []);

  useEffect(() => {
    fetchTours()
      .catch(() => Alert.alert("Lỗi", "Không thể tải danh sách tour."))
      .finally(() => setLoading(false));
  }, [fetchTours]);

  // 6c: kéo xuống để làm mới, giữ nguyên từ khoá đang tìm
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    try {
      await fetchTours();
    } catch (e) {
      Alert.alert("Lỗi", "Không thể làm mới danh sách.");
    } finally {
      setRefreshing(false);
    }
  }, [fetchTours]);

  // 6a: lọc theo tên, không phân biệt hoa thường, bỏ khoảng trắng đầu/cuối
  const sections = useMemo(() => {
    const keyword = search.trim().toLowerCase();
    const filtered = tours.filter((t) =>
      t.name.toLowerCase().includes(keyword),
    );
    return groupByCity(filtered); // nhóm rỗng tự bị loại
  }, [tours, search]);

  // Mục yêu thích không bị ảnh hưởng bởi ô tìm kiếm
  const favorites = useMemo(() => tours.filter((t) => t.isFavorite), [tours]);

  const handlePress = useCallback((tour: Tour) => {
    Alert.alert(
      tour.name,
      `Khởi hành: ${formatDate(tour.departure)}\nSố ngày: ${tour.days} ngày\nGiá: ${formatPrice(tour.price)}`,
    );
  }, []);

  const setFavorite = (id: string, value: boolean) => {
    setTours((prev) =>
      prev.map((t) => (t.id === id ? { ...t, isFavorite: value } : t)),
    );
  };

  const handleToggleFavorite = useCallback(
    async (id: string, next: boolean) => {
      setFavorite(id, next);
      try {
        const res = await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isFavorite: next }),
        });
        if (!res.ok) throw new Error("PUT failed");
      } catch (e) {
        setFavorite(id, !next);
        Alert.alert("Lỗi", "Không thể cập nhật yêu thích. Vui lòng thử lại.");
      }
    },
    [],
  );

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
          ListEmptyComponent={
            <Text style={s.empty}>Không tìm thấy tour phù hợp</Text>
          }
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
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
  empty: { textAlign: "center", marginTop: 24, color: "#666", fontSize: 16 },
});
