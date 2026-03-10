import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";

export default function CardUser({ avatar, name, email }) {
    const [nome, setNome] = useState("Lucas");

    useEffect(() => {console.log('test')}, [nome]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={avatar}
            />
            <View>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
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