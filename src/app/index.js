
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter()

  return (
      <View style={styles.container}>
        <Text>Login</Text>
        <Button title="Cadastrar" onPress={() => router.push('/signup')} />
        <Text>________</Text>
        <Button title="Entrar" onPress={() => router.push('/home')} />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    justifyContent: 'center',
    alignItems: 'center'
  }
});