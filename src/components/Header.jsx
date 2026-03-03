import {View, Image, Text, StyleSheet} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Header() {
    return (
        <View style={styles.container}>
                <FontAwesome name="user-circle" size={40} color="black" />
            <Text style={styles.logoText}> Ktzx-User</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "#616161",
        width: "100%",
        height: 140,
        marginBottom: 16,
        alignItems: "center",
        
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
        fontWeight: "Bold"
    }
})