import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake12() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Topo */}
      <View style={styles.topBar}>
        <Text style={styles.link}>procurar</Text>
        <Text style={styles.link}>carrinho</Text>
        <Text style={styles.logo}>MONDELLY</Text>
        <Text style={styles.link}>eventos</Text>
        <Text style={styles.link}>favoritos</Text>
      </View>

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>CARRINHO</Text>
      </View>

      {/* Imagem */}
      <Image
        source={require('../assets/images/foto.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Texto central */}
      <View style={styles.circle}>
        <Text style={styles.circleText}>Compra finalizada</Text>
      </View>

      {/* Botões adicionados */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/fake13')}>
        <Text style={styles.buttonText}>Dar feedback</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/')}>
        <Text style={styles.buttonText}>Voltar ao início</Text>
      </TouchableOpacity>

      {/* Rodapé */}
      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>♡</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>＋</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    alignItems: 'center',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  link: {
    fontSize: 12,
    color: '#a17d6f',
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#be8e80',
  },
  subHeader: {
    backgroundColor: '#f3eee9',
    alignItems: 'center',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#e5ddd6',
    width: '100%',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#a17d6f',
  },
  image: {
    width: 160,
    height: 230,
    marginTop: 20,
  },
  circle: {
    marginTop: 30,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#e6ddd4',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  circleText: {
    textAlign: 'center',
    color: '#7a4e39',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#a17d6f',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerIcon: {
    fontSize: 22,
    color: '#7a4e39',
  },
});
