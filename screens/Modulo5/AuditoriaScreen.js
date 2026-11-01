import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput 
} from 'react-native';

export default function AuditoriaScreen() {
  const [busqueda, setBusqueda] = useState('');

  const [movimientos, setMovimientos] = useState([
    { id: '1', tipo: 'COMPRA', producto: 'Bolsas Camiseta 40x50', cantidad: '+500', fecha: '30/10/2026 10:15', usuario: 'Admin' },
    { id: '2', tipo: 'VENTA', producto: 'Vaso Plástico Transparente 330cc', cantidad: '-50', fecha: '30/10/2026 11:30', usuario: 'Vendedor1' },
    { id: '3', tipo: 'DEVOLUCION', producto: 'Envase Hermético Bisagra 500cc', cantidad: '+5', fecha: '29/10/2026 16:45', usuario: 'Admin' },
    { id: '4', tipo: 'DAÑADO', producto: 'Bandeja Plástica Descartable N° 103', cantidad: '-12', fecha: '28/10/2026 09:20', usuario: 'Almacenero' },
  ]);

  const movimientosFiltrados = movimientos.filter(item => 
    item.producto.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.tipo.toLowerCase().includes(busqueda.toLowerCase())
  );

  const renderItem = ({ item }) => {
    const esIngreso = item.tipo === 'COMPRA' || item.tipo === 'DEVOLUCION';

    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={[styles.badgeTipo, esIngreso ? styles.badgeIngreso : styles.badgeSalida]}>
            {item.tipo}
          </Text>
          <Text style={styles.fecha}>{item.fecha}</Text>
        </View>

        <Text style={styles.producto}>{item.producto}</Text>

        <View style={styles.cardFooter}>
          <Text style={styles.cantidadTexto}>Cantidad: <Text style={[styles.negrita, esIngreso ? styles.textoVerde : styles.textoRojo]}>{item.cantidad}</Text></Text>
          <Text style={styles.usuario}>👤 {item.usuario}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Auditoría e Historial de Movimientos</Text>
      <Text style={styles.subtitulo}>Módulo 5 - Trazabilidad de Stock (CU14)</Text>

      <TextInput
        style={styles.buscador}
        placeholder="Buscar por producto o tipo de movimiento..."
        placeholderTextColor="#888"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={movimientosFiltrados}
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
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeTipo: {
    fontSize: 11,
    fontWeight: 'bold',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 4,
    color: '#ffffff',
    overflow: 'hidden',
  },
  badgeIngreso: {
    backgroundColor: '#27ae60',
  },
  badgeSalida: {
    backgroundColor: '#e74c3c',
  },
  fecha: {
    fontSize: 12,
    color: '#718093',
  },
  producto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 8,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#f1f2f6',
    paddingTop: 8,
  },
  cantidadTexto: {
    fontSize: 14,
    color: '#57606f',
  },
  negrita: {
    fontWeight: 'bold',
  },
  textoVerde: {
    color: '#27ae60',
  },
  textoRojo: {
    color: '#e74c3c',
  },
  usuario: {
    fontSize: 12,
    color: '#40739e',
    fontWeight: '600',
  },
});