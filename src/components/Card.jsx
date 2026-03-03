import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

export default function Card({avatar, name, email}) {
  return (
    <View style={styles.container}>
      <Image
        source={avatar}
        style={styles.user}
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
    flexDirection: "row",
    backgroundColor: "#808080",
    width: "90%",
    height: 140,
    marginBottom: 16,
    alignItems: "center",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#000"
  },
  user: {
    width: 70,
    height: 70,
    marginHorizontal: 30,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: "#000000"
  },
  email: {
    color: "#ffffff"
  },
  name: {
    color: "#fff"
  }
});