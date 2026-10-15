import { SafeAreaView, StatusBar } from 'react-native';
import Bai1 from './screens/Bai1';
import Bai2 from './screens/Bai2';


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', paddingTop: StatusBar.currentHeight }}>
      <Bai2 />
    </SafeAreaView>
  );
}