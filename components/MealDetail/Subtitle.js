import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
  return(
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  )
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    margin: 8,
    marginHorizontal: 12,
    padding: 6,
    borderBottomColor: '#bada55',
    borderBottomWidth: 4,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'white',
  },
})