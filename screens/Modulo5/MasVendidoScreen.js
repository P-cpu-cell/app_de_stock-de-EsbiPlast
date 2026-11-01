import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList 
} from 'react-native';

export default function MasVendidoScreen() {
  // Simulación del ranking de productos más vendidos
  const [productosTop, setProductosTop] = useState([
    { id: '1', ranking: '1º', codigo: 'P-001', nombre: 'Vasos de Plástico 500ml ', totalVendido: 340, ingresos: '$850,000' },
    { id: '2', ranking: '2º', codigo: 'P-005', nombre: 'Bolsas Camiseta 40x50', totalVendido: 280, ingresos: '$1,120,000' },
    { id: '3', ranking: '3º', codigo: 'P-003', nombre: 'Envase Hermético Bisagra 500cc', totalVendido: 195, ingresos: '$487,500' },
    { id: '4', ranking: '4º', codigo: 'P-008', nombre: 'Bandeja Plástica Descartable N° 103', totalVendido: 150, ingresos: '$300,000' },
  ]);

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <View style={styles.rankingContainer}>
          <Text style={styles.rankingTexto}>{item.ranking}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.codigo}>{item.codigo}</Text>
          <Text style={styles.nombreProducto}>{item.nombre}</Text>
          <Text style={styles.detallesTexto}>
            Unidades vendidas: <Text style={styles.negrita}>{item.totalVendido}</Text> | Total generados: <Text style={styles.textoVerde}>{item.ingresos}</Text>
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Productos de Mayor Movimiento</Text>
      <Text style={styles.subtitulo}>Módulo 5 - Ranking de Ventas (CU10 / RF09)</Text>

      <FlatList
        data={productosTop}
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
  lista: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#dcdde1',
    alignItems: 'center',
  },
  rankingContainer: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#fbc531',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rankingTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  infoContainer: {
    flex: 1,
  },
  codigo: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#718093',
    marginBottom: 2,
  },
  nombreProducto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 4,
  },
  detallesTexto: {
    fontSize: 13,
    color: '#57606f',
  },
  negrita: {
    fontWeight: 'bold',
    color: '#2f3640',
  },
  textoVerde: {
    fontWeight: 'bold',
    color: '#27ae60',
  },
});