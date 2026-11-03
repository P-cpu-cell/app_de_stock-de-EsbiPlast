import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const INITIAL_PRODUCTS = [
  { id: '1', codigo: 'P001', nombre: 'Bolsas Camiseta 40x50', categoria: 'Bolsas', marca: 'SV Plastic', stock: 500, ubicacion: 'Estante A1' },
  { id: '2', codigo: 'P002', nombre: 'Bandeja Plástica Descartable N° 103', categoria: 'Bandejas', marca: 'SV Plastic', stock: 250, ubicacion: 'Estante A2' },
  { id: '3', codigo: 'P003', nombre: 'Vaso Plástico Transparente 330cc', categoria: 'Vasos', marca: 'SV Plastic', stock: 1000, ubicacion: 'Estante B1' },
  { id: '4', codigo: 'P004', nombre: 'Envase Hermético Bisagra 500cc', categoria: 'Envases', marca: 'SV Plastic', stock: 300, ubicacion: 'Estante B2' },
  { id: '5', codigo: 'P005', nombre: 'Plato Plástico Hondo 22cm', categoria: 'Platos', marca: 'SV Plastic', stock: 400, ubicacion: 'Estante C1' },
  { id: '6', codigo: 'P006', nombre: 'Juego de Cubiertos (Tenedor/Cuchillo)', categoria: 'Cubiertos', marca: 'SV Plastic', stock: 800, ubicacion: 'Estante C2' },
];

export default function ProductListScreen({ navigation }) {
  const [busqueda, setBusqueda] = useState('');
  const [productos] = useState(INITIAL_PRODUCTS);

  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.codigo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Catálogo de Productos</Text>
        <TouchableOpacity style={styles.btnNuevo} onPress={() => navigation.navigate('ProductForm')       }>
          <Text style={styles.btnNuevoTexto}>+ Nuevo</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar por código, nombre..."
        placeholderTextColor="#9ca3af"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={productosFiltrados}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View>
              <Text style={styles.productName}>{item.nombre}</Text>
              <Text style={styles.productDetail}>Código: {item.codigo} | Marca: {item.marca}</Text>
              <Text style={styles.productDetail}>Ubicación: {item.ubicacion}</Text>
            </View>
            <View style={styles.stockBadge}>
              <Text style={styles.stockText}>Stock: {item.stock}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  btnNuevo: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  btnNuevoTexto: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  searchInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  productDetail: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 2,
  },
  stockBadge: {
    backgroundColor: '#dbeafe',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  stockText: {
    color: '#1e40af',
    fontWeight: 'bold',
    fontSize: 13,
  },
});