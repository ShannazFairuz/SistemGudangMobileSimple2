import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TambahScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Form Tambah Barang
      </Text>

      <TextInput
        placeholder="Nama Barang"
        style={styles.input}
      />

      <TextInput
        placeholder="Jumlah Barang"
        style={styles.input}
      />

      <TextInput
        placeholder="Lokasi Gudang"
        style={styles.input}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
});