import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from 'react';

import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal)=> meal.id === mealId);

  function headerButtonPressedHandler() {
    console.log('Pressed!');
  }

  useLayoutEffect(()=> {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton 
            icon='star'
            color='#bada55'
            onPress={headerButtonPressedHandler}
          />
        );
      }
    });
  }, [navigation, headerButtonPressedHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails 
        duration={selectedMeal.duration} 
        complexity={selectedMeal.complexity} 
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients}/>
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: 250,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    width: '100%',
    alignItems: 'center',
  },
  listContainer: {
    maxWidth: '80%',
  },
})