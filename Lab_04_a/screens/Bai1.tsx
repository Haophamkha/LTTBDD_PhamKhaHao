import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const DATA = [
  { id: '1', name: 'Ca nấu lẩu, nấu mì mini', shop: 'Shop Devang', img: 'https://picsum.photos/id/10/100' },
  { id: '2', name: '1KG KHÔ GÀ BƠ TỎI', shop: 'LTD Food', img: 'https://picsum.photos/id/20/100' },
  { id: '3', name: 'Xe cần cẩu đa năng', shop: 'Thế giới đồ chơi', img: 'https://picsum.photos/id/30/100' },
  { id: '4', name: 'Đồ chơi dạng mô hình', shop: 'Thế giới đồ chơi', img: 'https://picsum.photos/id/40/100' },
  { id: '5', name: 'Lãnh đạo giản đơn', shop: 'Minh Long Book', img: 'https://picsum.photos/id/50/100' },
  { id: '6', name: 'Hiểu lòng con trẻ', shop: 'Minh Long Book', img: 'https://picsum.photos/id/60/100' },
];

export default function Bai1() {
  return (
    <View style={{ flex: 1 }}>
      <View style={s.header}>
        <Text style={s.headerText}>Chat</Text>
      </View>
      <Text style={s.note}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.row}>
            <Image source={{ uri: item.img }} style={s.img} />
            <View style={{ flex: 1 }}>
              <Text numberOfLines={1}>{item.name}</Text>
              <Text style={{ color: 'red' }}>Shop {item.shop}</Text>
            </View>
            <TouchableOpacity style={s.btn}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>Chat</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  header: { backgroundColor: '#1ba9ff', padding: 14, alignItems: 'center' },
  headerText: { color: '#fff', fontSize: 16 },
  note: { padding: 12 },
  row: { flexDirection: 'row', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderColor: '#ddd', gap: 10 },
  img: { width: 50, height: 50 },
  btn: { backgroundColor: 'red', paddingVertical: 10, paddingHorizontal: 28 },
});