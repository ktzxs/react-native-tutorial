import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card 
        avatar={"https://github.com/ktzxs.png"}
        name={"Lucas Alves"}
        email={"lucasalves@gmail.com"}
      />
      <Card
        avatar={"https://github.com/maria.png"}
        name={"Maria Alves"}
        email={"mariaalves@gmail.com"} 
      />
      <Card 
        avatar={"https://github.com/josesantos.png"}
        name={"joao Alves"}
        email={"jaoalves@gmail.com"}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
