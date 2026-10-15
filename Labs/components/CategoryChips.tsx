import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip } from "./Chip";

export const CategoryChips = ({ categories }) => {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <Chip
          key={index}
          label={item}
          onPress={() => console.log(`Đã chọn: ${item}`)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
});
