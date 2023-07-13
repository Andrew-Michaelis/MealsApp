import { Text, View, StyleSheet } from 'react-native';

function List({data}) {
  return data.map((dataPoint) => (
    <View style={styles.listItem} key={dataPoint}>
      <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    borderColor: '#bada55',
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 5,
    marginHorizontal: 12,
    backgroundColor: 'white',
  },
  itemText: {
    color: '#132f13',
    textAlign: 'center',
  },
});