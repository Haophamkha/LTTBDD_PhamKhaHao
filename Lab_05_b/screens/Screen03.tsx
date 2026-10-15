import { useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Screen03">;

export default function Screen03({ route }: Props) {
  const { bike } = route.params;
  const [liked, setLiked] = useState(false);

  return (
    <SafeAreaView style={s.container}>
      <ScrollView contentContainerStyle={{ padding: 8 }}>
        <View style={s.imageBox}>
          <Image source={bike.image} style={s.image} resizeMode="contain" />
        </View>

        <Text style={s.name}>{bike.name}</Text>
        <View style={s.priceRow}>
          <Text style={s.discount}>
            15% OFF | {Math.round(bike.price * 0.85)}$
          </Text>
          <Text style={s.oldPrice}>{bike.price}$</Text>
        </View>

        <Text style={s.descTitle}>Description</Text>
        <Text style={s.desc}>
          It is a very important form of writing as we write almost everything
          in paragraphs, be it an answer, essay, story, emails, etc.
        </Text>
      </ScrollView>

      <View style={s.footer}>
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={{ padding: 8 }}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={28}
            color={liked ? "#E94141" : "#333"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={s.button}>
          <Text style={s.buttonText}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  imageBox: {
    backgroundColor: "#FBE9E9",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "90%", height: "90%" },
  name: { fontSize: 26, marginTop: 12, marginHorizontal: 8 },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    marginHorizontal: 8,
    marginVertical: 6,
  },
  discount: { fontSize: 16, color: "#555" },
  oldPrice: { fontSize: 16, textDecorationLine: "line-through" },
  descTitle: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 16,
    marginHorizontal: 8,
  },
  desc: { color: "#666", fontSize: 15, lineHeight: 22, margin: 8 },
  footer: { flexDirection: "row", alignItems: "center", padding: 12, gap: 12 },
  button: {
    flex: 1,
    backgroundColor: "#E94141",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
