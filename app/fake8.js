import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake8() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Topo com navegação */}
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

      {/* Corpo do carrinho */}
      <View style={styles.cartContent}>
        <Image
          source={require('../assets/images/foto.png')}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.details}>
          <Text style={styles.title}>Vestido longo bege</Text>
          <Text style={styles.desc}>
            Detalhes: tecidos de linho e Crepe Barcelona, além de detalhes de fitas.
          </Text>
          <Text style={styles.price}>R$: 1.500</Text>
          <Text style={styles.sizeTitle}>Tamanho</Text>
          <Text style={styles.size}>Único M</Text>

          {/* ✅ Botão que navega para fake9 */}
          <TouchableOpacity
            style={styles.checkoutButton}
            onPress={() => router.push('/fake9')}
          >
            <Text style={styles.checkoutText}>Finalizar compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#fff',
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
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#e5ddd6',
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a17d6f',
  },
  cartContent: {
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
  productImage: {
    width: 220,
    height: 300,
    borderRadius: 10,
  },
  details: {
    marginTop: 20,
    alignItems: 'flex-start',
    width: '90%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7a4e39',
  },
  desc: {
    fontSize: 13,
    color: '#5a4234',
    marginTop: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#7a4e39',
  },
  sizeTitle: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 13,
    color: '#a17d6f',
  },
  size: {
    fontSize: 13,
    color: '#5a4234',
    marginTop: 2,
  },
  checkoutButton: {
    marginTop: 20,
    backgroundColor: '#a17d6f',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  checkoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 20,
  },
});
