import { StatusBar } from 'expo-status-bar';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';

export default function HomeScreen({ navigation }) {

  const [statusQC, setStatusQC] = useState('Lolos');

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar style="auto" />

      <ScrollView>

        {/* ===================== */}
        {/* HEADER */}
        {/* ===================== */}

        <View style={styles.header}>

          <Image
            source={require('../logo.png')}
            style={styles.logo}
          />

          <Text style={styles.headerTitle}>
            PT. Manufaktur Maju
          </Text>

          <Text style={styles.headerSubtitle}>
            Aplikasi Monitoring Gudang & Mesin
          </Text>

        </View>

        {/* ===================== */}
        {/* MINI PROJECT - PROFIL MESIN (PINDAH KE ATAS) */}
        {/* ===================== */}

        <Text style={styles.sectionTitle}>
          Profil Mesin
        </Text>

        <View style={styles.machineCard}>

          <Image
            source={require('../mesin.jpg')}   // 🔥 SESUAI PERMINTAAN
            style={styles.machineImage}
          />

          <View style={styles.machineInfo}>

            <Text style={styles.machineName}>
              Mesin CNC-01
            </Text>

            <Text style={styles.machineText}>
              Tahun Pembuatan: 2022
            </Text>

            <Text style={styles.machineStatus}>
              Status: AKTIF
            </Text>

          </View>

        </View>

        <View style={styles.machineCard}>

          <Image
            source={require('../mesin.jpg')}
            style={styles.machineImage}
          />

          <View style={styles.machineInfo}>

            <Text style={styles.machineName}>
              Mesin Laser-02
            </Text>

            <Text style={styles.machineText}>
              Tahun Pembuatan: 2021
            </Text>

            <Text style={[styles.machineStatus, { color: '#e74c3c' }]}>
              Status: MAINTENANCE
            </Text>

          </View>

        </View>

        {/* ===================== */}
        {/* CONTENT GUDANG (LATIHAN 1 & 2) */}
        {/* ===================== */}

        <View style={styles.content}>

          <Text style={styles.welcomeText}>
             Daftar Item Inspeksi QC
          </Text>

          {/* Gudang A */}
          const [statusQC, setStatusQC] = useState('Belum Inspeksi');

...

<TouchableOpacity
  style={styles.card}
  onPress={() =>
    navigation.navigate('Detail', {
      statusQC: statusQC,
    })
  }
>
  <Text
    style={[
      styles.cardTitle,
      statusQC === 'Gagal' && { color: 'red' }
    ]}
  >
    Item Inspeksi Produk A
  </Text>

  <Text style={styles.cardValue}>
    Menunggu Inspeksi QC
  </Text>

  <Text style={styles.cardStatus}>
    TEKAN UNTUK INSPEKSI
  </Text>
</TouchableOpacity>

          {/* Gudang B */}
          <TouchableOpacity
            style={[styles.card, styles.cardWarning]}
            onPress={() => Alert.alert("Info", "Detail Gudang B")}
          >
            <Text style={styles.cardTitle}>Status Gudang B</Text>
            <Text style={styles.cardValue}>Kapasitas: 95%</Text>
            <Text style={styles.cardStatusWarning}>PENUH</Text>
          </TouchableOpacity>

          {/* Gudang C */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert("Info", "Detail Gudang C")}
          >
            <Text style={styles.cardTitle}>Status Gudang C</Text>
            <Text style={styles.cardValue}>Kapasitas: 70%</Text>
            <Text style={styles.cardStatus}>TERSEDIA</Text>
          </TouchableOpacity>

          {/* Gudang D */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => Alert.alert("Info", "Detail Gudang D")}
          >
            <Text style={styles.cardTitle}>Status Gudang D</Text>
            <Text style={styles.cardValue}>Kapasitas: 65%</Text>
            <Text style={styles.cardStatus}>TERSEDIA</Text>
          </TouchableOpacity>

          {/* Gudang E */}
          <TouchableOpacity
            style={[styles.card, styles.cardWarning]}
            onPress={() => Alert.alert("Info", "Detail Gudang E")}
          >
            <Text style={styles.cardTitle}>Status Gudang E</Text>
            <Text style={styles.cardValue}>Kapasitas: 98%</Text>
            <Text style={styles.cardStatusWarning}>PENUH</Text>
          </TouchableOpacity>
          <TouchableOpacity
          
  style={{
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  }}
  onPress={() => navigation.navigate('Tambah')}
>
  <Text
    style={{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }}
  >
    Tambah Data Gudang
  </Text>
</TouchableOpacity>
{/* TOMBOL PROFIL MESIN */}
<TouchableOpacity
  style={{
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  }}
  onPress={() => navigation.navigate('ProfilMesin')}
>
  <Text
    style={{
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
    }}
  >
    Lihat Profil Mesin
  </Text>
</TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },

  header: {
    backgroundColor: '#2c3e50',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 15,
    elevation: 5,
  },

  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 10,
    resizeMode: 'contain',
  },

  headerTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  headerSubtitle: {
    color: '#bdc3c7',
    fontSize: 14,
    textAlign: 'center',
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
    color: '#2c3e50',
  },

  /* ===================== */
  /* PROFIL MESIN (FLEX ROW) */
  /* ===================== */

  machineCard: {
    flexDirection: 'row', // WAJIB SOAL
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    alignItems: 'center',
  },

  machineImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    marginRight: 15,
  },

  machineInfo: {
    flex: 1,
  },

  machineName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },

  machineText: {
    fontSize: 14,
    color: '#7f8c8d',
  },

  machineStatus: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#27ae60',
  },

  /* ===================== */
  /* GUDANG (LATIHAN 1 & 2) */
  /* ===================== */

  content: {
    padding: 20,
  },

  welcomeText: {
    fontSize: 18,
    marginBottom: 15,
    color: '#333',
  },

  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 5,
  },

  cardWarning: {
    borderLeftWidth: 5,
    borderLeftColor: '#e74c3c',
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  cardValue: {
    fontSize: 14,
    color: '#7f8c8d',
  },

  cardStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'right',
    marginTop: 5,
  },

  cardStatusWarning: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#e74c3c',
    textAlign: 'right',
    marginTop: 5,
  },

});