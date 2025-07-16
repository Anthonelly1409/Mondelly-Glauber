import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake7() {
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
        <Text style={styles.subHeaderText}>DETALHES DO PRODUTO</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Imagem maior */}
        <Image
          source={require('../assets/images/foto.png')}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Descrição longa */}
        <Text style={styles.description}>
          Este vestido bege elegante é ideal para eventos sociais e formais. 
          Feito com tecido leve e fluido, proporciona conforto e sofisticação. 
          Possui alças finas e fenda lateral que adicionam charme ao visual.
        </Text>

        {/* Tamanhos ou mais info */}
        <Text style={styles.infoTitle}>Tamanhos disponíveis:</Text>
        <Text style={styles.infoText}>P, M, G, GG</Text>

        <Text style={styles.infoTitle}>Composição:</Text>
        <Text style={styles.infoText}>97% poliéster, 3% elastano</Text>

        {/* Botão Finalizar Compra */}
        <TouchableOpacity
          onPress={() => router.push('/fake8')}
          style={styles.finishButton}
        >
          <Text style={styles.finishButtonText}>Finalizar compra</Text>
        </TouchableOpacity>

        {/* Botão voltar */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>
      </ScrollView>
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
    width: '100%',
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
  scroll: {
    alignItems: 'center',
    paddingBottom: 40,
  },
  image: {
    width: '80%',
    height: 400,
    marginTop: 20,
    borderRadius: 10,
  },
  description: {
    marginTop: 20,
    paddingHorizontal: 30,
    textAlign: 'center',
    fontSize: 14,
    color: '#7a4e39',
    lineHeight: 22,
  },
  infoTitle: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#a17d6f',
  },
  infoText: {
    fontSize: 13,
    color: '#7a4e39',
    marginTop: 5,
  },
  finishButton: {
    marginTop: 30,
    backgroundColor: '#d8c1ad',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  finishButtonText: {
    color: '#333',
    fontWeight: 'bold',
    fontSize: 14,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#7a4e39',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  backText: {
    color: '#fff',
    fontSize: 14,
  },
});
