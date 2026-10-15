import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Text, View } from "react-native";

type User = { id: number; name: string; email: string };

const URL = "https://693231efe5a9e342d26e2cf8.mockapi.io/user";

export default function Bai4() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then(setUsers)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ActivityIndicator size="large" style={{ flex: 1 }} />;

  return (
    <View style={{ padding: 12 }}>
      <FlatList
        horizontal
        data={users}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={{
              width: 180,
              marginRight: 12,
              padding: 12,
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 8,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}
