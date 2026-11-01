
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importación de tus pantallas
import LoginScreen from './screens/Modulo1/LoginScreen'; 
import ProductListScreen from './screens/Modulo2/ProductListScreen'; 
import ProductFormScreen from './screens/Modulo2/ProductFormScreen';
import VentasScreen from './screens/Modulo3/VentasScreen';
import CompraScreen from './screens/Modulo3/compraScreen'; 
import NovedadesScreen from './screens/Modulo4/NovedadesScreen';
import StockScreen from './screens/Modulo4/StockScreen';
import MasVendidoScreen from './screens/Modulo5/MasVendidoScreen';
import AuditoriaScreen from './screens/Modulo5/AuditoriaScreen'; 
import ProveedoresScreen from './screens/Modulo6/ProveedoresScreen';
import UsuarioypermisoScreen from './screens/Modulo6/UsuarioypermisoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#007bff' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        {/* Módulo 1 */}
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />

        {/* Módulo 2 */}
        <Stack.Screen 
          name="ProductList" 
          component={ProductListScreen} 
          options={{ title: 'Inventario - SV Plastic' }} 
        />
        <Stack.Screen 
          name="ProductForm" 
          component={ProductFormScreen} 
          options={{ title: 'Formulario de Producto' }} 
        />

        {/* Módulo 3 */}
        <Stack.Screen
          name="Ventas"
          component={VentasScreen}
          options={{ title: 'Ventas' }}
        />
        <Stack.Screen
          name="Compra"
          component={CompraScreen}
          options={{ title: 'Compra' }}
        />

        {/* Módulo 4 */}
        <Stack.Screen
          name="Novedades"
          component={NovedadesScreen}
          options={{ title: 'Novedades' }}
        />
        <Stack.Screen
          name="Stock"
          component={StockScreen}
          options={{ title: 'Stock' }}
        />

        {/* Módulo 5 */}
        <Stack.Screen
          name="MasVendido"
          component={MasVendidoScreen}
          options={{ title: 'Productos Más Vendidos' }}
        />
        <Stack.Screen
          name="Auditoria"
          component={AuditoriaScreen}
          options={{ title: 'Auditoría de Movimientos' }}
        />

        {/* Módulo 6 */}
        <Stack.Screen 
          name="Usuarioypermiso" 
          component={UsuarioypermisoScreen} 
          options={{ title: 'Usuarios y Permisos' }} 
        />
        <Stack.Screen 
          name="Proveedores" 
          component={ProveedoresScreen} 
          options={{ title: 'Proveedores' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}