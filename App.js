import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#132f13' }, 
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#092409' },
        drawerActiveBackgroundColor: '#bada55',
        drawerActiveTintColor: 'darkslategrey',
        drawerStyle: {backgroundColor: 'beige'},
      }}
    >
      <Drawer.Screen 
        name='Categories'
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (
            <Ionicons 
              name='list' 
              color={color} 
              size={size}
            />)}}
      />
      <Drawer.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons 
              name='star' 
              color={color} 
              size={size}
            />)}}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <FavoritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator 
            initialRouteName='MealsCategories'
            screenOptions={{
              headerStyle: { backgroundColor: '#132f13' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: '#092409' },
            }}
          >
            <Stack.Screen
              name='Drawer' 
              component={DrawerNavigator} 
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name='MealsOverview' 
              component={MealsOverviewScreen}
            />
            <Stack.Screen 
              name='MealDetail'
              component={MealDetailScreen}
              options={{
                title: 'About the Meal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavoritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});