import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { Heart } from 'lucide-react-native';
import { useRouter } from 'expo-router'; // ✅ usando Expo Router

export default function Fake5() {
  const router = useRouter(); // ✅ navegação com expo-router

  const looks = [
    { nome: 'Vestido Setin Preto', img: require('../assets/images/vestido-setin-preto.png') },
    { nome: 'Vestido Vermelho', img: require('../assets/images/vestido-longo-vermelho.png') },
    { nome: 'Vestido Bege', img: require('../assets/images/vestido-longo-bege.png') },
    { nome: 'Vestido Laranja', img: require('../assets/images/vestido-laranja.png') },
    { nome: 'Vestido Preto', img: require('../assets/images/vestido-longo-preto.png') },
    { nome: 'Macacão', img: require('../assets/images/macacao.png') },
    { nome: 'Corset', img: require('../assets/images/corset.png') },
    { nome: 'Conjunto', img: require('../assets/images/conjunto.png') },
  ];

  const [curtidos, setCurtidos] = useState(Array(looks.length).fill(false));

  const toggleCurtida = (index) => {
    const novosCurtidos = [...curtidos];
    novosCurtidos[index] = !novosCurtidos[index];
    setCurtidos(novosCurtidos);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.header}>
          <Text style={styles.logo}>MONDELLY</Text>
          <View style={styles.searchBox}>
            <TextInput placeholder="O que você está procurando?" style={styles.input} />
          </View>
        </View>

        <View style={styles.grid}>
          {looks.map((look, index) => (
            <View key={index} style={styles.card}>
              <Image source={look.img} style={styles.image} resizeMode="contain" />
              <Text style={styles.caption}>{look.nome}</Text>
              <TouchableOpacity style={styles.heartIcon} onPress={() => toggleCurtida(index)}>
                <Heart color={curtidos[index] ? '#e53935' : '#f48fb1'} size={24} />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => router.push('/fake6')} // ✅ Navega para fake6
          style={styles.footerButton}
          activeOpacity={0.7}
        >
          <Text style={styles.footerText}>Ir para o carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e2cfc3' },
  scrollView: { flex: 1 },
  header: { alignItems: 'center', marginTop: 40, marginBottom: 20 },
  logo: { fontSize: 24, fontWeight: 'bold', color: '#7a4e39' },
  searchBox: {
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '90%',
    elevation: 2,
  },
  input: { fontSize: 14 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    width: '45%',
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    elevation: 3,
  },
  image: { width: '100%', height: 200, borderRadius: 10 },
  caption: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  heartIcon: { marginTop: 4 },
  footer: {
    backgroundColor: '#d9c7b8',
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  footerButton: {
    backgroundColor: '#7a4e39',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  footerText: { fontSize: 16, color: '#fff' },
});
