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

export default function VentasScreen() {
  const [codigoProducto, setCodigoProducto] = useState('');
  const [cantidadVenta, setCantidadVenta] = useState('');

  // Simulación de un producto en memoria (en el futuro vendrá de la base de datos)
  // Supongamos que este producto tiene 10 unidades disponibles en stock
  const productoMock = {
    nombre: 'Vasos de Plástico 500ml',
    precioVenta: 2500.00,
    stockActual: 10 
  };

  const handleRegistrarVenta = () => {
    if (!codigoProducto || !cantidadVenta) {
      Alert.alert('Error', 'Por favor ingresa el código y la cantidad.');
      return;
    }

    const cantVendida = parseInt(cantidadVenta, 10);

    if (isNaN(cantVendida) || cantVendida <= 0) {
      Alert.alert('Error', 'La cantidad debe ser mayor a 0.');
      return;
    }

    // Validación de Stock Suficiente (RN07)
    if (cantVendida > productoMock.stockActual) {
      Alert.alert(
        'Stock Insuficiente (RN07)', 
        `No se puede realizar la venta. Stock actual disponible: ${productoMock.stockActual} unidades.`
      );
      return;
    }

    // Cálculo del total (RF06)
    const totalVenta = cantVendida * productoMock.precioVenta;
    const nuevoStock = productoMock.stockActual - cantVendida; // Descuento automático (RN05)

    Alert.alert(
      '¡Venta Exitosa!', 
      `Producto: ${productoMock.nombre}\nCantidad vendida: ${cantVendida}\nTotal a cobrar: $${totalVenta.toFixed(2)}\n\nStock actualizado: ${nuevoStock} unidades restantes.`
    );

    // Limpiar campos
    setCodigoProducto('');
    setCantidadVenta('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Ventas (Punto de Venta)</Text>
      <Text style={styles.subtitulo}>Módulo 3 - Salidas y Stock (CU07)</Text>

      <View style={styles.cardInfo}>
        <Text style={styles.cardTitulo}>Producto de Prueba:</Text>
        <Text style={styles.cardTexto}>Nombre: {productoMock.nombre}</Text>
        <Text style={styles.cardTexto}>Precio Unitario: ${productoMock.precioVenta}</Text>
        <Text style={styles.cardTextoStock}>Stock Disponible: {productoMock.stockActual} un.</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Código de Producto o Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. P-001"
          placeholderTextColor="#888"
          value={codigoProducto}
          onChangeText={setCodigoProducto}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cantidad a Vender</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 2"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={cantidadVenta}
          onChangeText={setCantidadVenta}
        />
      </View>

      <TouchableOpacity style={styles.boton} onPress={handleRegistrarVenta}>
        <Text style={styles.textoBoton}>Procesar Venta y Descontar Stock</Text>
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
    marginBottom: 15,
  },
  cardInfo: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdde1',
    marginBottom: 20,
  },
  cardTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 5,
  },
  cardTexto: {
    fontSize: 14,
    color: '#57606f',
    marginBottom: 3,
  },
  cardTextoStock: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginTop: 3,
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
    backgroundColor: '#e84118',
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