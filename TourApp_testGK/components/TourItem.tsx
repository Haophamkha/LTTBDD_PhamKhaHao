import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { formatDate, formatPrice, getSeatLabel } from "../utils/tour";

export type Tour = {
  id: string;
  name: string;
  city: string;
  days: number;
  price: number;
  seats: number;
  departure: string;
  image: string;
  isFavorite: boolean;
};

export type TourItemProps = {
  tour: Tour;
  compact?: boolean;
  onPress: (tour: Tour) => void;
  onToggleFavorite: (id: string, next: boolean) => void;
};

function TourItem({ tour, onPress, onToggleFavorite }: TourItemProps) {
  const lowSeats = tour.seats <= 3;

  return (
    <TouchableOpacity style={s.card} onPress={() => onPress(tour)}>
      <Image source={{ uri: tour.image }} style={s.image} />

      <View style={s.info}>
        <Text style={s.name} numberOfLines={2}>
          {tour.name}
        </Text>
        <Text style={s.city}>{tour.city}</Text>
        <Text>
          📅 {formatDate(tour.departure)} · {tour.days} ngày
        </Text>
        <Text style={s.price}>{formatPrice(tour.price)}</Text>
        <Text style={{ color: lowSeats ? "red" : "#333" }}>
          {getSeatLabel(tour.seats)}
        </Text>
      </View>

      <TouchableOpacity
        testID="fav-btn"
        onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
        style={s.heartBtn}
      >
        <Text style={[s.heart, tour.isFavorite && { color: "#E94141" }]}>
          {tour.isFavorite ? "♥" : "♡"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default React.memo(TourItem);

const s = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  image: { width: 90, height: 90, borderRadius: 8 },
  info: { flex: 1, marginLeft: 10 },
  name: { fontWeight: "bold", fontSize: 15 },
  city: { color: "#666" },
  price: { fontWeight: "bold", color: "#1ba9ff" },
  heartBtn: { paddingLeft: 8 },
  heart: { fontSize: 26, color: "#333" },
});
