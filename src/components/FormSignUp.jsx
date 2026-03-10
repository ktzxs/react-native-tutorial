import { View, Text, StyleSheet, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import { useState } from 'react'

export default function FormSignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handSubmit = () => {
    console.log({name, email, senha})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
        <View style={styles.form}>
            <TextInput 
              style={styles.inputs}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput 
              style={styles.inputs}
              placeholder="email" 
              value={email}
              onChangeText={setEmail}
            />
            <TextInput 
              style={styles.inputs}
              placeholder="senha" 
              secureTextEntry 
               value={senha}
              onChangeText={setSenha}
            />
            <Button title="Cadastrar" onPress={handSubmit} />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        alignItems: 'center',
        justifyContent: "center"
    },
     form: {
        width: "90%",
        gap: 10
    },
     inputs: {
        borderWidth: 1,
        borderColor: "#d1d1d1",
        borderStyle: "solid",
        borderRadius: 6,
        padding: 8
    },
     title: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: 20
     }
})