import { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function CardUser({id, avatar, name, email, users, setUsers }) {
    
    const handleDelete = async () => {
      const response = await fetch(`http://localhost:3000/user/${id}`, {
        method: "Delete"
      })
      const data = await response?.json()
      if(response.ok){
        console.log('Usuario deletado com sucesso', data)
        const newUsers = users.filter(user => user.id !== id)
        setUsers(newUsers)
      }else{
        console.log('Erro ao deletar usuário', data)
      }
    }  

    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={avatar}
            />
            <View style={styles.actions}>
              <EvilIcons name="pencil" size={19} color="white" />
              <Feather name="trash" size={18} color="red" style={styles.trash} onPress={handleDelete} />
            </View>

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
  avatar: {
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
  },
  actions: {
    position: "absolute",
    right: 14,
    top: 14,
    flexDirection: "row",
    gap: 14,
    alignItems: "center",
    justifyContent: "center"
  },
  trash: {
    marginBottom: 2
  }
});