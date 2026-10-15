import { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import { BIKES } from "../data/bikes";

type Props = NativeStackScreenProps<RootStackParamList, "Screen02">;

const CATEGORIES = ["All", "Roadbike", "Mountain"];

export default function Screen02({ navigation }: Props) {
  const [category, setCategory] = useState("All");
  const [liked, setLiked] = useState<string[]>([]);

  const data =
    category === "All" ? BIKES : BIKES.filter((b) => b.type === category);

  const toggleLike = (id: string) =>
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );

  return (
    <SafeAreaView style={s.container}>
      <Text style={s.title}>The world’s Best Bike</Text>

      <View style={s.chips}>
        {CATEGORIES.map((c) => (
          <TouchableOpacity
            key={c}
            style={[s.chip, category === c && s.chipActive]}
            onPress={() => setCategory(c)}
          >
            <Text style={{ color: "#E94141" }}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={s.card}
            onPress={() => navigation.navigate("Screen03", { bike: item })}
          >
            <TouchableOpacity
              style={s.heart}
              onPress={() => toggleLike(item.id)}
            >
              <Ionicons
                name={liked.includes(item.id) ? "heart" : "heart-outline"}
                size={20}
                color={liked.includes(item.id) ? "#E94141" : "#333"}
              />
            </TouchableOpacity>
            <Image source={item.image} style={s.image} resizeMode="contain" />
            <Text style={s.name}>{item.name}</Text>
            <Text style={s.price}>
              <Text style={{ color: "#F0A04B" }}>$ </Text>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#E94141",
    marginVertical: 16,
  },
  chips: { flexDirection: "row", gap: 10, marginBottom: 12 },
  chip: {
    borderWidth: 1,
    borderColor: "#F0B8B8",
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 18,
  },
  chipActive: { borderColor: "#E94141", backgroundColor: "#FDEDED" },
  card: {
    flex: 1,
    margin: 6,
    backgroundColor: "#FEF3E8",
    borderRadius: 8,
    padding: 8,
    alignItems: "center",
  },
  heart: { alignSelf: "flex-start" },
  image: { width: "100%", height: 110 },
  name: { fontSize: 15, marginTop: 6 },
  price: { fontSize: 15, marginBottom: 4 },
});
