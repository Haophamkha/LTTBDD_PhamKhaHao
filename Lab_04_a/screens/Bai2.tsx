import { FlatList, Image, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 6 }, (_, i) => ({
  id: String(i),
  title: 'Cáp chuyển từ Cổng USB sang PS2...',
  img: `https://picsum.photos/id/${100 + i}/300`,
}));

export default function Bai2() {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.search}>Dây cáp usb</Text>
      </View>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 8 }}
        renderItem={({ item }) => (
          <View style={s.card}>
            <Image source={{ uri: item.img }} style={s.img} />
            <Text numberOfLines={2} style={{ fontSize: 12 }}>{item.title}</Text>
            <Text style={{ color: '#fc0' }}>
              ★★★★☆ <Text style={{ color: '#000', fontSize: 10 }}>(15)</Text>
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>69.900 đ</Text>
              <Text style={{ color: '#999' }}>  -39%</Text>
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  header: { backgroundColor: '#1ba9ff', padding: 10 },
  search: { backgroundColor: '#fff', padding: 8 },
  card: { flex: 1, margin: 6 },
  img: { width: '100%', height: 130, marginBottom: 4 },
});