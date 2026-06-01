import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet
} from 'react-native';

export default function DetailScreen() {

  const [status, setStatus] = useState('Belum Dicek');

  return (
    <View style={styles.container}>

      <Image
        source={require('../mesin.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Produk A
      </Text>

      <Text style={styles.subtitle}>
        Standar Kualitas
      </Text>

      <Text>✓ Tidak cacat</Text>
      <Text>✓ Warna sesuai</Text>
      <Text>✓ Kemasan utuh</Text>

      <Text style={styles.status}>
        Status: {status}
      </Text>

      <View style={{ marginTop: 10 }}>
        <Button
          title="LOLOS"
          onPress={() => setStatus('Lolos')}
        />
      </View>

      <View style={{ marginTop: 10 }}>
        <Button
          title="GAGAL"
          onPress={() => setStatus('Gagal')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },

  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  subtitle: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },

  status: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold'
  }
});