import {View, Image, Text, StyleSheet} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function Header() {
    return (
        <View style={styles.container}>
                <AntDesign name="shopping-cart" size={50} color="white" />
            <Text style={styles.logoText}>Ktzx-Shopping</Text>
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
        justifyContent: 'center',
        
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
    }
})