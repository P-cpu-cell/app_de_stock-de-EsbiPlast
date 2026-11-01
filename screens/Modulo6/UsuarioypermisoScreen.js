import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert } from 'react-native';

export default function UsuarioypermisoScreen() {
  // Estado inicial de usuarios para SV Plastic
  const [usuarios, setUsuarios] = useState([
    { id: '1', nombre: 'Juan Pérez', usuario: 'admin', rol: 'Administrador', estado: 'Activo' },
    { id: '2', nombre: 'María Gómez', usuario: 'vendedor1', rol: 'Vendedor', estado: 'Activo' },
    { id: '3', nombre: 'Lucas Rodríguez', usuario: 'almacen', rol: 'Almacenero', estado: 'Inactivo' },
  ]);

  // Cambiar el estado de activo/inactivo de un usuario
  const toggleEstado = (id) => {
    setUsuarios(prevUsuarios =>
      prevUsuarios.map(usr =>
        usr.id === id
          ? { ...usr, estado: usr.estado === 'Activo' ? 'Inactivo' : 'Activo' }
          : usr
      )
    );
  };

  const renderUsuarioItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.nombre}>{item.nombre}</Text>
        <Text style={styles.detalles}>Usuario: {item.usuario}</Text>
        <Text style={styles.detalles}>Rol: <Text style={styles.rolBold}>{item.rol}</Text></Text>
      </View>

      <View style={styles.accionesContainer}>
        <TouchableOpacity
          style={[styles.badge, item.estado === 'Activo' ? styles.badgeActivo : styles.badgeInactivo]}
          onPress={() => toggleEstado(item.id)}
        >
          <Text style={styles.badgeText}>{item.estado}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestión de Usuarios y Permisos</Text>
      
      <FlatList
        data={usuarios}
        keyExtractor={item => item.id}
        renderItem={renderUsuarioItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  nombre: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  detalles: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  rolBold: {
    fontWeight: '600',
    color: '#007bff',
  },
  accionesContainer: {
    alignItems: 'flex-end',
  },
  badge: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  badgeActivo: {
    backgroundColor: '#28a745',
  },
  badgeInactivo: {
    backgroundColor: '#dc3545',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
});