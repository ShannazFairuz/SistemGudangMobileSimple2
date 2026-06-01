import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import TambahScreen from './screens/TambahScreen';
import ProfilMesinScreen from './screens/ProfilMesinScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Dashboard Gudang' }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: 'Detail Gudang' }}
        />

        <Stack.Screen
          name="Tambah"
          component={TambahScreen}
          options={{ title: 'Tambah Data' }}
        />
        <Stack.Screen
  name="ProfilMesin"
  component={ProfilMesinScreen}
  options={{ title: 'Profil Mesin' }}
/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}