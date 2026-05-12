import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
  title,
  onPress,
  boxStyle,
  textStyle
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, boxStyle]}
    >
      <Text style={[styles.title, textStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
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
});