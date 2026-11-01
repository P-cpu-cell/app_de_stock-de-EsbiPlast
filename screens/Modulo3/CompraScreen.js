import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  Alert 
} from 'react-native';

export default function CompraScreen() {
  const [proveedor, setProveedor] = useState('');
  const [producto, setProducto] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precioCompra, setPrecioCompra] = useState('');

  const handleRegistrarCompra = () => {
    if (!proveedor || !producto || !cantidad || !precioCompra) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    const cantNum = parseInt(cantidad, 10);
    const precioNum = parseFloat(precioCompra);

    if (isNaN(cantNum) || cantNum <= 0) {
      Alert.alert('Error', 'La cantidad debe ser un número válido mayor a 0.');
      return;
    }

    if (isNaN(precioNum) || precioNum <= 0) {
      Alert.alert('Error', 'El precio de compra debe ser mayor a 0.');
      return;
    }

    // Aquí se ejecutaría la lógica para guardar la compra y actualizar el stock (RN04)
    Alert.alert(
      'Éxito', 
      `Compra registrada correctamente.\n\nProveedor: ${proveedor}\nProducto: ${producto}\nCantidad sumada al stock: +${cantNum}`
    );

    // Limpiar campos
    setProveedor('');
    setProducto('');
    setCantidad('');
    setPrecioCompra('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Compras (Entradas)</Text>
      <Text style={styles.subtitulo}>Módulo 3 - Control de Mercadería (CU06)</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Proveedor</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Plásticos del Norte S.R.L."
          placeholderTextColor="#888"
          value={proveedor}
          onChangeText={setProveedor}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. Codo PVC 1/2'' o Código de producto"
          placeholderTextColor="#888"
          value={producto}
          onChangeText={setProducto}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cantidad a ingresar</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 100"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={cantidad}
          onChangeText={setCantidad}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Precio de Compra Unitario ($)</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 1500.50"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={precioCompra}
          onChangeText={setPrecioCompra}
        />
      </View>

      <TouchableOpacity style={styles.boton} onPress={handleRegistrarCompra}>
        <Text style={styles.textoBoton}>Registrar Compra y Actualizar Stock</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f6fa',
    flexGrow: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 14,
    color: '#718093',
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#353b48',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    color: '#2f3640',
  },
  boton: {
    backgroundColor: '#40739e',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});