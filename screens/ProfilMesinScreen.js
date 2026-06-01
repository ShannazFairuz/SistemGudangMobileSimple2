import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfilMesinScreen() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../mesin.jpg')}
        style={styles.image}
      />

      <Text style={styles.title}>
        Mesin CNC-01
      </Text>

      <Text>Tahun Pembuatan : 2022</Text>
      <Text>Status : AKTIF</Text>
      <Text>Kapasitas Produksi : 500 Unit/Hari</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20
  },

  image:{
    width:180,
    height:180,
    borderRadius:10,
    marginBottom:20
  },

  title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:15
  }
});