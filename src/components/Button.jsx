import {View, Text, StyleSheet} from 'react-native';

export default function Button({ title, onPress, boxStyle, textStyle }) {
    return (
        <button onClick={onPress} style={[StyleSheet.container, boxStyle]}>
            <Text style={styles.title, textStyle}>{title}</Text>
        </button>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        backgroundColor: '#0a19ef',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 6,
        paddingHorizontal: 16
    },
    title: {
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: '400'
    }
}) 