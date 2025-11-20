import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetaScreen from './src/screens/DetaScreen';
import FavoritosScreen from './src/screens/FavScreen';
import { FavoritosProvider } from './src/context/Favcontext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <FavoritosProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Heladería" component={HomeScreen} />
          <Stack.Screen name="Detail" component={DetaScreen} />
          <Stack.Screen name="Favoritos" component={FavoritosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritosProvider>
  );
}