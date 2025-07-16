import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function Fake6() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.topBar}>
        <Text style={styles.link}>procurar</Text>
        <Text style={styles.activeLink}>carrinho</Text>
        <Text style={styles.logo}>MONDELLY</Text>
        <Text style={styles.link}>eventos</Text>
        <Text style={styles.link}>favoritos</Text>
      </View>

      {/* Subheader */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>PRODUTO</Text>
      </View>

      {/* Product Image */}
      <Image
        source={require('../assets/images/foto.png')}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Comprar Button */}
      <TouchableOpacity
        onPress={() => router.push('/fake7')}
        style={styles.buyButton}
      >
        <Text style={styles.buyButtonText}>Comprar</Text>
      </TouchableOpacity>

      {/* Bottom Navigation */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="heart" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="plus" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <FontAwesome name="user" size={20} color="#fff" />
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
    width: '100%',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  link: {
    fontSize: 12,
    color: '#a17d6f',
  },
  activeLink: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
  },
  logo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#be8e80',
  },
  subHeader: {
    backgroundColor: '#f3eee9',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#e5ddd6',
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a17d6f',
  },
  image: {
    width: '80%',
    height: 400,
    marginTop: 20,
    borderRadius: 10,
  },
  buyButton: {
    marginTop: 25,
    backgroundColor: '#c9b6ac',  // cor mais suave para o botão
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
  },
  buyButtonText: {
    color: '#5a4435',  // texto menos chamativo
    fontSize: 16,
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 25,
    paddingVertical: 12,
    backgroundColor: 'transparent',
  },
  iconButton: {
    backgroundColor: '#7a4e39',
    padding: 10,
    borderRadius: 12,
  },
});
