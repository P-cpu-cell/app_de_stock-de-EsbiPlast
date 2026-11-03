import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';

export default function ProductFormScreen() {
  const [form, setForm] = useState({
    codigo: '',
    nombre: '',
    categoria: '',
    marca: '',
    modelo: '',
    tamanio: '',
    color: '',
    unidadMedida: '',
    precioCompra: '',
    precioVenta: '',
    stockActual: '',
    stockMinimo: '',
    ubicacion: '',
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleGuardar = () => {
    console.log('Datos del producto:', form);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.titulo}>Gestión de Producto</Text>
        <Text style={styles.subtitulo}>Alta y modificación de inventario</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Código Único *</Text>
          <TextInput style={styles.input} value={form.codigo} onChangeText={(val) => handleChange('codigo', val)} />

          <Text style={styles.label}>Nombre *</Text>
          <TextInput style={styles.input} value={form.nombre} onChangeText={(val) => handleChange('nombre', val)} />

          <Text style={styles.label}>Categoría *</Text>
          <TextInput style={styles.input} value={form.categoria} onChangeText={(val) => handleChange('categoria', val)} />

          <Text style={styles.label}>Marca / Modelo</Text>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.half]} placeholder="Marca" value={form.marca} onChangeText={(val) => handleChange('marca', val)} />
            <TextInput style={[styles.input, styles.half]} placeholder="Modelo" value={form.modelo} onChangeText={(val) => handleChange('modelo', val)} />
          </View>

          <Text style={styles.label}>Tamaño / Color / Unidad</Text>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.third]} placeholder="Tamaño" value={form.tamanio} onChangeText={(val) => handleChange('tamanio', val)} />
            <TextInput style={[styles.input, styles.third]} placeholder="Color" value={form.color} onChangeText={(val) => handleChange('color', val)} />
            <TextInput style={[styles.input, styles.third]} placeholder="Unidad" value={form.unidadMedida} onChangeText={(val) => handleChange('unidadMedida', val)} />
          </View>

          <Text style={styles.label}>Precios</Text>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.half]} placeholder="Compra" keyboardType="numeric" value={form.precioCompra} onChangeText={(val) => handleChange('precioCompra', val)} />
            <TextInput style={[styles.input, styles.half]} placeholder="Venta" keyboardType="numeric" value={form.precioVenta} onChangeText={(val) => handleChange('precioVenta', val)} />
          </View>

          <Text style={styles.label}>Stock Actual / Mínimo</Text>
          <View style={styles.row}>
            <TextInput style={[styles.input, styles.half]} placeholder="Actual" keyboardType="numeric" value={form.stockActual} onChangeText={(val) => handleChange('stockActual', val)} />
            <TextInput style={[styles.input, styles.half]} placeholder="Mínimo" keyboardType="numeric" value={form.stockMinimo} onChangeText={(val) => handleChange('stockMinimo', val)} />
          </View>

          <Text style={styles.label}>Ubicación Física *</Text>
          <TextInput style={styles.input} value={form.ubicacion} onChangeText={(val) => handleChange('ubicacion', val)} />

          <TouchableOpacity style={styles.btnGuardar} onPress={handleGuardar}>
            <Text style={styles.btnGuardarTexto}>Guardar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9fafb' },
  scroll: { padding: 20 },
  titulo: { fontSize: 22, fontWeight: 'bold', color: '#111827' },
  subtitulo: { fontSize: 13, color: '#6b7280', marginBottom: 20 },
  formGroup: { gap: 10 },
  label: { fontSize: 13, fontWeight: '600', color: '#374151', marginTop: 6 },
  input: { backgroundColor: '#ffffff', borderWidth: 1, borderColor: '#d1d5db', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 14, color: '#1f2937' },
  row: { flexDirection: 'row', gap: 10 },
  half: { flex: 1 },
  third: { flex: 1 },
  btnGuardar: { backgroundColor: '#16a34a', paddingVertical: 14, borderRadius: 8, alignItems: 'center', marginTop: 20, marginBottom: 30 },
  btnGuardarTexto: { color: '#ffffff', fontSize: 16, fontWeight: 'bold' },
});