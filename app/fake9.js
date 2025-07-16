import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake9() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Topo de navegação */}
      <View style={styles.topBar}>
        <Text style={styles.link}>procurar</Text>
        <Text style={styles.link}>carrinho</Text>
        <Text style={styles.logo}>MONDELLY</Text>
        <Text style={styles.link}>eventos</Text>
        <Text style={styles.link}>favoritos</Text>
      </View>

      {/* Subtítulo */}
      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>CARRINHO</Text>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Image
          source={require('../assets/images/foto.png')}
          style={styles.productImage}
          resizeMode="contain"
        />

        <View style={styles.buttonGroup}>
          {/* ✅ Vai para fake10.js */}
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => router.push('/fake10')}
          >
            <Text style={styles.paymentText}>Finalizar com cartão</Text>
          </TouchableOpacity>

          {/* Você pode trocar '/fake11' por outro destino depois */}
          <TouchableOpacity
            style={styles.paymentButton}
            onPress={() => router.push('/fake11')}
          >
            <Text style={styles.paymentText}>Finalizar com Pix</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Rodapé com ícones */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.iconBox}>
          <Text style={styles.icon}>🤍</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Text style={styles.icon}>➕</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox}>
          <Text style={styles.icon}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f7f5',
    justifyContent: 'space-between',
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
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#e5ddd6',
  },
  subHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a17d6f',
  },
  content: {
    alignItems: 'center',
    paddingTop: 20,
    flex: 1,
  },
  productImage: {
    width: 220,
    height: 320,
    borderRadius: 10,
  },
  buttonGroup: {
    marginTop: 20,
    gap: 15,
  },
  paymentButton: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  paymentText: {
    color: '#333',
    fontSize: 14,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#d8c1ad',
    paddingVertical: 10,
  },
  iconBox: {
    padding: 8,
    backgroundColor: '#a17d6f',
    borderRadius: 8,
  },
  icon: {
    color: '#fff',
    fontSize: 16,
  },
});
