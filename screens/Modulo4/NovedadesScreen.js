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

export default function NovedadesScreen() {
  const [codigoProducto, setCodigoProducto] = useState('');
  const [tipoNovedad, setTipoNovedad] = useState('DEVOLUCION'); // 'DEVOLUCION' o 'DANADO'
  const [cantidad, setCantidad] = useState('');
  const [motivo, setMotivo] = useState('');

  const handleRegistrarNovedad = () => {
    if (!codigoProducto || !cantidad || !motivo) {
      Alert.alert('Error', 'Por favor completa todos los campos obligatorios.');
      return;
    }

    const cantNum = parseInt(cantidad, 10);
    if (isNaN(cantNum) || cantNum <= 0) {
      Alert.alert('Error', 'La cantidad debe ser un número mayor a 0.');
      return;
    }

    const mensajeAccion = tipoNovedad === 'DEVOLUCION' 
      ? `Devolución registrada. Se suman ${cantNum} unidades al stock disponible.`
      : `Producto dañado registrado. Se restan ${cantNum} unidades del stock disponible.`;

    Alert.alert(
      'Novedad Registrada con Éxito',
      `Tipo: ${tipoNovedad === 'DEVOLUCION' ? 'Devolución de Cliente' : 'Mercadería Dañada'}\nProducto: ${codigoProducto}\nCantidad: ${cantNum}\nMotivo: ${motivo}\n\n${mensajeAccion}`
    );

    // Limpiar campos
    setCodigoProducto('');
    setCantidad('');
    setMotivo('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Registro de Novedades</Text>
      <Text style={styles.subtitulo}>Módulo 4 - Devoluciones y Daños (CU11 / CU12)</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Seleccionar Tipo de Novedad</Text>
        <View style={styles.containerBotonesTipo}>
          <TouchableOpacity 
            style={[styles.botonTipo, tipoNovedad === 'DEVOLUCION' && styles.botonTipoActivo]}
            onPress={() => setTipoNovedad('DEVOLUCION')}
          >
            <Text style={[styles.textoBotonTipo, tipoNovedad === 'DEVOLUCION' && styles.textoBotonTipoActivo]}>
              Devolución
            </Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.botonTipo, tipoNovedad === 'DANADO' && styles.botonTipoActivoRojo]}
            onPress={() => setTipoNovedad('DANADO')}
          >
            <Text style={[styles.textoBotonTipo, tipoNovedad === 'DANADO' && styles.textoBotonTipoActivo]}>
              Dañado / Roto
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Código o Nombre del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. P-001"
          placeholderTextColor="#888"
          value={codigoProducto}
          onChangeText={setCodigoProducto}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Cantidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej. 1"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={cantidad}
          onChangeText={setCantidad}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Motivo o Detalle de la Incidencia</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Ej. Producto con fisura por traslado o cambio de modelo por cliente."
          placeholderTextColor="#888"
          multiline
          numberOfLines={3}
          value={motivo}
          onChangeText={setMotivo}
        />
      </View>

      <TouchableOpacity 
        style={[styles.botonRegistrar, tipoNovedad === 'DANADO' ? styles.fondoRojo : styles.fondoAzul]} 
        onPress={handleRegistrarNovedad}
      >
        <Text style={styles.textoBoton}>Registrar Novedad y Ajustar Stock</Text>
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
  containerBotonesTipo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botonTipo: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#dcdde1',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginRight: 5,
  },
  botonTipoActivo: {
    backgroundColor: '#40739e',
    borderColor: '#40739e',
  },
  botonTipoActivoRojo: {
    backgroundColor: '#e74c3c',
    borderColor: '#e74c3c',
  },
  textoBotonTipo: {
    color: '#57606f',
    fontWeight: 'bold',
  },
  textoBotonTipoActivo: {
    color: '#ffffff',
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
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  botonRegistrar: {
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 15,
  },
  fondoAzul: {
    backgroundColor: '#40739e',
  },
  fondoRojo: {
    backgroundColor: '#e74c3c',
  },
  textoBoton: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});