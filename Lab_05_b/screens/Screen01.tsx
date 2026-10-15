import { Image, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Screen01">;

export default function Screen01({ navigation }: Props) {
  return (
    <SafeAreaView style={s.container}>
      <Text style={s.tagline}>
        A premium online store for{"\n"}sporter and their stylish choice
      </Text>

      <View style={s.imageBox}>
        <Image
          source={require("../assets/anh1.png")}
          style={s.image}
          resizeMode="contain"
        />
      </View>

      <Text style={s.title}>POWER BIKE{"\n"}SHOP</Text>

      <TouchableOpacity
        style={s.button}
        onPress={() => navigation.navigate("Screen02")}
      >
        <Text style={s.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F4",
    padding: 16,
    justifyContent: "space-between",
  },
  tagline: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
    marginTop: 40,
  },
  imageBox: {
    backgroundColor: "#F5DFDF",
    borderRadius: 40,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "90%", height: "90%" },
  title: { textAlign: "center", fontSize: 22, fontWeight: "bold" },
  button: {
    backgroundColor: "#E94141",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 12,
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
