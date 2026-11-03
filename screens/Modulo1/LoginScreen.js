import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


// Recibimos { navigation } por propiedades
export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleIngresar = async () => {
    if (!usuario || !contrasena) {
      alert('Por favor, completá todos los campos.');
      return;
    }
    try{
      const datosUsuario = {
        usuario: usuario,
        fechalogin: new Date().toISOString(),
      };
      await AsyncStorage.setItem('esbiPlasticUsuario', JSON.stringify(datosUsuario));
      console.log('Datos de usuario guardados en AsyncStorage:', datosUsuario);

    navigation.replace('ProductList'); 
    } 
    catch (error) {
      console.error('Error al guardar los datos en AsyncStorage:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          
          {/* Logo y Encabezado */}
          <View style={styles.headerContainer}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100' }}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.subtituloEmpresa}>Esbi PLASTIC</Text>
            <Text style={styles.tituloApp}>Stock App</Text>
          </View>

          <Text style={styles.descripcion}>
            Ingresá tus credenciales para acceder al panel de depósito.
          </Text>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Usuario</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribí tu usuario"
              placeholderTextColor="#a0a0a0"
              value={usuario}
              onChangeText={setUsuario}
              autoCapitalize="none"
            />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Escribí tu contraseña"
              placeholderTextColor="#a0a0a0"
              secureTextEntry={true}
              value={contrasena}
              onChangeText={setContrasena}
            />

            {/* Botón Ingresar */}
            <TouchableOpacity style={styles.botonIngresar} onPress={handleIngresar}>
              <Text style={styles.textoBoton}>Ingresar  →</Text>
            </TouchableOpacity>
          </View>
       

          

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

// Estilos recomendados para que mantenga una buena estética
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 12,
  },
  subtituloEmpresa: {
    fontSize: 12,
    fontWeight: '600',
    color: '#888',
    letterSpacing: 1,
  },
  tituloApp: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007bff',
    marginTop: 4,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  botonIngresar: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

