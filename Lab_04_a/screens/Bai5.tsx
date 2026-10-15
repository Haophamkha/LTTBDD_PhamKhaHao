import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

type User = { id: string; name: string; email: string; avatar: string };

const URL = "https://693231efe5a9e342d26e2cf8.mockapi.io/user";

export default function Bai5() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <ScrollView contentContainerStyle={{ padding: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Gallery App</Text>
      <Text style={{ marginVertical: 8 }}>Nổi bật</Text>

      <FlatList
        horizontal
        data={users.slice(0, 6)}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <Image
            source={{ uri: item.avatar }}
            style={{ width: 120, height: 120, marginRight: 8, borderRadius: 8 }}
          />
        )}
      />

      <View style={{ marginVertical: 12 }}>
        <Button
          title={grid ? "Chuyển sang ListView" : "Chuyển sang GridView"}
          onPress={() => setGrid(!grid)}
        />
      </View>

      <FlatList
        key={grid ? "grid" : "list"}
        data={users}
        numColumns={grid ? 2 : 1}
        scrollEnabled={false}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        renderItem={({ item }) => (
          <View style={{ flex: 1, margin: 4 }}>
            <Image
              source={{ uri: item.avatar }}
              style={{
                width: "100%",
                height: grid ? 150 : 220,
                borderRadius: 8,
              }}
            />
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text style={{ color: "#666" }}>{item.email}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
}
