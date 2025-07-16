import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake13() {
  const router = useRouter();
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');

  const handleSubmit = () => {
    Alert.alert('Feedback enviado', 'Obrigado pelo seu feedback!');
    router.replace('/'); // volta para o início
  };

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

      <View style={styles.subHeader}>
        <Text style={styles.subHeaderText}>CARRINHO</Text>
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Image
          source={require('../assets/images/foto.png')}
          style={styles.image}
          resizeMode="contain"
        />

        <View style={styles.feedbackContainer}>
          <Text style={styles.feedbackTitle}>FEEDBACK</Text>

          <View style={styles.starsRow}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => setRating(star)}>
                <Text style={styles.star}>{star <= rating ? '★' : '☆'}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <TextInput
            style={styles.input}
            placeholder="Escreva seu comentário"
            placeholderTextColor="#999"
            value={comentario}
            onChangeText={setComentario}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>FINALIZAR FEEDBACK</Text>
          </TouchableOpacity>
        </View>
      </View>

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
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderColor: '#e5ddd6',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#a17d6f',
  },
  content: {
    flexDirection: 'row',
    padding: 20,
  },
  image: {
    width: 140,
    height: 200,
    marginRight: 10,
  },
  feedbackContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  feedbackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7a4e39',
    marginBottom: 10,
  },
  starsRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  star: {
    fontSize: 24,
    marginHorizontal: 2,
    color: '#7a4e39',
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#a17d6f',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitText: {
    color: '#fff',
    fontSize: 13,
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
