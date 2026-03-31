import {View, Text, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router'

export default function Header() {
    const router = useRouter()

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <AntDesign name="shopping-cart" size={50} color="white" />
                <Text style={styles.logoText}>Ktzx-Shopping</Text>
            </View>
            <Ionicons name="person-add-outline" size={24} color="white" onPress={() => router.push('/singUp')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#26a8c9",
        width: "100%",
        height: 140,
        marginBottom: 16,
        alignItems: "center",
        paddingHorizontal: 16,
        justifyContent: "space-between"
    },
    logotipo: {
        width: "70px",
        height: "70px",
        marginHorizontal: 30,
        borderRadius: "100%"
    },
    logoText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "Bold",
        marginLeft: 10,
    },
    logoContainer: {
        flexDirection: "row",
        alignItems: "center"
    }
})