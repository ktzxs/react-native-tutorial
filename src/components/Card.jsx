import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

export default function Card() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/user.png')}
        style={styles.user}
      />
      <View>
        <Text style={{ color: "#fff" }}>User</Text>
        <TextInput style={styles.email} value="EMAIL: lucas@gmail.com" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#424242",
    width: "90%",
    height: 140,
    marginBottom: 16,
    alignItems: "center",
  },
  user: {
    width: 70,
    height: 70,
    marginHorizontal: 30,
    borderRadius: 35,
  },
  email: {
    color: "#fff"
  }
});