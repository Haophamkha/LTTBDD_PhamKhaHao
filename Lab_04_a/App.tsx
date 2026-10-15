import { SafeAreaView, StatusBar } from 'react-native';
import Bai1 from './screens/Bai1';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight }}>
      <Bai1 />
    </SafeAreaView>
  );
}