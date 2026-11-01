import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList, 
  TextInput, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

export default function ProvedoresScreen() {
  const [busqueda, setBusqueda] = useState('');
  const [nombre, setNombre] = useState('');
  const [contacto, setContacto] = useState('');
  const [telefono, setTelefono] = useState('');
  const [direccion, setDireccion] = useState('');

  // Simulación de una lista inicial de proveedores
 const [proveedores, setProveedores] = useState([
    { id: '1', nombre: 'Plásticos del Norte S.R.L.', contacto: 'Carlos Gómez', telefono: '3874123456', direccion: 'Av. Industrial 450' },
    { id: '2', nombre: 'Distribuidora Andina S.A.', contacto: 'María Pérez', telefono: '3874987654', direccion: 'Ruta Nacional 34 Km 1400' },
    { id: '3', nombre: 'Plstisur Mayorista de Plásticos', contacto: 'Esteban Ruiz', telefono: '3875112233', direccion: 'Calle Belgrano 789' },
  ]);

  const proveedoresFiltrados = proveedores.filter(item => 
    item.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    item.contacto.toLowerCase().includes(busqueda.toLowerCase())
  );

  const handleRegistrarProveedor = () => {
    if (!nombre || !contacto || !telefono || !direccion) {
      Alert.alert('Error', 'Por favor completa todos los campos del proveedor.');
      return;
    }

    const nuevoProveedor = {
      id: Date.now().toString(),
      nombre,
      contacto,
      telefono,
      direccion,
    };

    setProveedores([nuevoProveedor, ...proveedores]);
    Alert.alert('Éxito', `Proveedor "${nombre}" registrado correctamente.`);

    // Limpiar campos
    setNombre('');
    setContacto('');
    setTelefono('');
    setDireccion('');
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.nombreProveedor}>{item.nombre}</Text>
        <Text style={styles.textoDetalle}>👤 Contacto: <Text style={styles.negrita}>{item.contacto}</Text></Text>
        <Text style={styles.textoDetalle}>📞 Teléfono: {item.telefono}</Text>
        <Text style={styles.textoDetalle}>📍 Dirección: {item.direccion}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestión de Proveedores</Text>
      <Text style={styles.subtitulo}>Módulo 6 - Administración de Proveedores</Text>

      {/* Formulario rápido para alta de proveedor */}
      <View style={styles.formContainer}>
        <Text style={styles.formTitulo}>Registrar Nuevo Proveedor</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Razón Social / Nombre Empresa"
          placeholderTextColor="#888"
          value={nombre}
          onChangeText={setNombre}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre del Contacto"
          placeholderTextColor="#888"
          value={contacto}
          onChangeText={setContacto}
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
          value={telefono}
          onChangeText={setTelefono}
        />
        <TextInput
          style={styles.input}
          placeholder="Dirección"
          placeholderTextColor="#888"
          value={direccion}
          onChangeText={setDireccion}
        />

        <TouchableOpacity style={styles.boton} onPress={handleRegistrarProveedor}>
          <Text style={styles.textoBoton}>Guardar Proveedor</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.seccionTitulo}>Listado de Proveedores</Text>
      
      <TextInput
        style={styles.buscador}
        placeholder="Buscar proveedor por nombre o contacto..."
        placeholderTextColor="#888"
        value={busqueda}
        onChangeText={setBusqueda}
      />

      <FlatList
        data={proveedoresFiltrados}
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
  formContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#dcdde1',
    marginBottom: 20,
  },
  formTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#f5f6fa',
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 14,
    color: '#2f3640',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#40739e',
    borderRadius: 6,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 10,
  },
  buscador: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    marginBottom: 12,
    color: '#2f3640',
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#dcdde1',
  },
  nombreProveedor: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    marginBottom: 6,
  },
  textoDetalle: {
    fontSize: 13,
    color: '#57606f',
    marginBottom: 3,
  },
  negrita: {
    fontWeight: 'bold',
    color: '#2f3640',
  },
});