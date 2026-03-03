import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

export default function Card({image, name, price, category}) {
  return (
    <View style={styles.container}>
      <Image
        source={image}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#26a8c9",
    width: "48%",
    height: 280,
    marginBottom: 16,
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#00ffdd"
  },
  image: {
    width: 110,
    height: 140,
    marginTop: 16,
    marginHorizontal: 30,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "#ffffff"
  },
  price: {
    color: "#ffffff"
  },
  name: {
    color: "#fff",
    marginTop: 50,
  },
  category: {
    color: "#fff"
  }
});