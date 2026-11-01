import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

export default function StockScreen() {
  const [busqueda, setBusqueda] = useState('');

  // Simulación de una lista de productos en el inventario con sus stocks y mínimos
  const [productos, setProductos] = useState([
    { id: '1', codigo: 'P-001', nombre: 'Vasos"', stockActual: 15, stockMinimo: 10, ubicacion: 'Estantería A1' },
    { id: '2', codigo: 'P-002', nombre: 'Bolsas"', stockActual: 4, stockMinimo: 8, ubicacion: 'Estantería B2' }, // Alerta
    { id: '3', codigo: 'P-003', nombre: 'Envase', stockActual: 25, stockMinimo: 5, ubicacion: 'Estantería C1' },
    { id: '4', codigo: 'P-004', nombre: 'Platos"', stockActual: 2, stockMinimo: 10, ubicacion: 'Estantería A2' }, // Alerta
  ]);

  // Filtrar productos por nombre o código
  const productosFiltrados = productos.filter(item => 
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const renderItem = ({ item }) => {
    // Verificamos si alcanzó o bajó del stock mínimo (RN06)
    const esAlertaStock = item.stockActual <= item.stockMinimo;

    return (
      <View style={[styles.card, esAlertaStock && styles.cardAlerta]}>
        <View style={styles.cardHeader}>
          <Text style={styles.codigo}>{item.codigo}</Text>
          <Text style={styles.ubicacion}>📍 {item.ubicacion}</Text>
        </View>

        <Text style={styles.nombreProducto}>{item.nombre}</Text>

        <View style={styles.stockContainer}>
          <Text style={styles.stockTexto}>Stock Actual: <Text style={styles.negrita}>{item.stockActual}</Text></Text>
          <Text style={styles.stockTexto}>Mínimo: <Text style={styles.negrita}>{item.stockMinimo}</Text></Text>
        </View>

        {esAlertaStock && (
          <View style={styles.badgeAlerta}>
            <Text style={styles.textoBadgeAlerta}>⚠️ ¡Alerta: Stock por debajo del mínimo!</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Consulta de Stock y Alertas</Text>
      <Text style={styles.subtitulo}>Módulo 4 - Control de Inventario (CU08 / CU09)</Text>

      <TextInput
        style={styles.buscador}
        placeholder="Buscar por código o nombre de producto..."
        placeholderTextColor="#888"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f6fa',
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
  buscador: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    marginBottom: 15,
    color: '#2f3640',
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dcdde1',
  },
  cardAlerta: {
    borderColor: '#e74c3c',
    borderWidth: 2,
    backgroundColor: '#fdcb6e15',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  codigo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#718093',
  },
  ubicacion: {
    fontSize: 12,
    color: '#40739e',
    fontWeight: '600',
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 8,
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f1f2f6',
    paddingTop: 8,
  },
  stockTexto: {
    fontSize: 14,
    color: '#57606f',
  },
  negrita: {
    fontWeight: 'bold',
    color: '#2f3640',
  },
  badgeAlerta: {
    marginTop: 10,
    backgroundColor: '#e74c3c',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  textoBadgeAlerta: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});