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

function TourItem({
  tour,
  compact = false,
  onPress,
  onToggleFavorite,
}: TourItemProps) {
  const lowSeats = tour.seats <= 3;

  return (
    <TouchableOpacity
      style={[s.card, compact && s.cardCompact]}
      onPress={() => onPress(tour)}
    >
      <Image
        source={{ uri: tour.image }}
        style={compact ? s.imageCompact : s.image}
      />

      <View style={[s.info, compact && s.infoCompact]}>
        <Text style={s.name} numberOfLines={compact ? 1 : 2}>
          {tour.name}
        </Text>

        {!compact && <Text style={s.city}>{tour.city}</Text>}
        {!compact && (
          <Text>
            📅 {formatDate(tour.departure)} · {tour.days} ngày
          </Text>
        )}

        <Text style={s.price}>{formatPrice(tour.price)}</Text>

        {!compact && (
          <Text style={{ color: lowSeats ? "red" : "#333" }}>
            {getSeatLabel(tour.seats)}
          </Text>
        )}
      </View>

      <TouchableOpacity
        testID="fav-btn"
        onPress={() => onToggleFavorite(tour.id, !tour.isFavorite)}
        style={[s.heartBtn, compact && s.heartBtnCompact]}
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
  cardCompact: {
    flexDirection: "column",
    width: 160,
    padding: 0,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
  },
  image: { width: 90, height: 90, borderRadius: 8 },
  imageCompact: { width: "100%", aspectRatio: 4 / 3 },
  info: { flex: 1, marginLeft: 10 },
  infoCompact: { flex: 0, marginLeft: 0, padding: 8 },
  name: { fontWeight: "bold", fontSize: 15 },
  city: { color: "#666" },
  price: { fontWeight: "bold", color: "#1ba9ff" },
  heartBtn: { paddingLeft: 8 },
  heartBtnCompact: {
    position: "absolute",
    top: 6,
    right: 6,
    paddingLeft: 0,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.85)",
    justifyContent: "center",
    alignItems: "center",
  },
  heart: { fontSize: 26, color: "#333" },
});
