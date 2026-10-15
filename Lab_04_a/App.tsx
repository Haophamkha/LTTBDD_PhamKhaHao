import { SafeAreaView, StatusBar } from 'react-native';
import Bai1 from './screens/Bai1';
import Bai2 from './screens/Bai2';
import Bai3 from "./screens/Bai3";
import Bai4 from "./screens/Bai4";
import Bai5 from "./screens/Bai5";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight }}>
      <Bai5 />
    </SafeAreaView>
  );
}