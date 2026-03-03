import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
        <View style={styles.containerCard}>
          <Card 
            image={"https://m.media-amazon.com/images/I/71wP+zKnB5L._AC_SY450_.jpg"}
            name={"NoteBook-Gamer"}
            category={"eletronico"}
            price={"R$5000"}
          />
          <Card
            image={"https://m.media-amazon.com/images/I/61C5ASIU5JL._AC_SY450_.jpg"}
            name={"Mouse-Gamer"}
            category={"eletronico"}
            price={"R$749"} 
          />
          <Card 
            image={"https://m.media-amazon.com/images/I/51f4wN0EfkL._AC_SY450_.jpg"}
            name={"Teclado-Gamer"}
            category={"eletronico"}
            price={"R$400"} 
          />
          <Card 
            image={"https://m.media-amazon.com/images/I/31DhraXVxcL._AC_SY450_.jpg"}
            name={"Mouse-pad"}
            category={"periferico"}
            price={"R$70"} 
          />
          <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerCard: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 15,
  }
});
