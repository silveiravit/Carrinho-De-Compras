import { NavigationContainer } from '@react-navigation/native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from './src/pages/Home';
import MeuCarrinho from './src/pages/Carrinho';

import AuthProvider from './src/Context/context';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen 
            name='Home'
            component={Home}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Carrinho'
            component={MeuCarrinho}
            options={{
              headerShown: true,
              headerTitle: 'Meu Carrinho'
            }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
// Case dê erro na instalação de qualquer biblioteca
// comando: npm config set legacy-peer-deps true