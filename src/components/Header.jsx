import {View, Image, Text, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logotipo}
            />
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