import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import CardUser from '../components/CardUser';

export default function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState([])

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3000/user")
      const data = await response?.json()
      if(response.ok) {
        console.log(data)
        setUsers(data.users)
        setIsLoading(false)
      } else {
        console.error("Erro ao buscar usuários", data)
        setIsLoading(false)
      }
    }
    getUsers()
  }, [])

  return (
    <View style={styles.container}>
      <Header />

      {isLoading ? <Text>carregando</Text> : users.map((user) => (
        <CardUser
          key={user.id}
          id={user.id}
          avatar={user.avatar}
          name={user.name}
          email={user.email}
          users={users}
          setUsers={setUsers}
        />
      ))}
      <StatusBar style='auto' />
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
