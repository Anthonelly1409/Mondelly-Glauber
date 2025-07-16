import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Fake3() {
  const { width } = Dimensions.get('window');
  const router = useRouter(); // ← Importante para navegação

  return (
    <View style={styles.container}>
      {/* Faixas diagonais */}
      <View style={[styles.ribbon, styles.ribbon1]} />
      <View style={[styles.ribbon, styles.ribbon2]} />
      <View style={[styles.ribbon, styles.ribbon3]} />

      {/* Círculo central com texto */}
      <View style={styles.circle}>
        <Text style={styles.welcomeText}>BEM VINDO(A)</Text>
      </View>

      {/* Botão Entrar para ir à Fake4 */}
      <View style={styles.buttonWrapper}>
        <Button
          title="Entrar"
          onPress={() => router.push('/fake4')}
          color="#7f3d1c"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ede3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  ribbon: {
    position: 'absolute',
    width: '150%',
    height: 20,
    backgroundColor: '#f2eae2',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  ribbon1: {
    top: '15%',
    transform: [{ rotate: '-20deg' }],
  },
  ribbon2: {
    top: '45%',
    transform: [{ rotate: '-20deg' }],
  },
  ribbon3: {
    top: '75%',
    transform: [{ rotate: '-20deg' }],
  },
  circle: {
    backgroundColor: '#e7dfd6',
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 6,
    marginBottom: 30,
  },
  welcomeText: {
    color: '#7f3d1c',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
  },
});
