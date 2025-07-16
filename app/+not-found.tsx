import { Link, Stack } from 'expo-router';
import { StyleSheet, Pressable, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <View style={styles.container}>
        <Text style={styles.title}>MONDELLY</Text>
        <Text style={styles.subtitle}>A moda é você quem faz</Text>

        <Link href="/fake2" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Ir para o cadastro</Text>
          </Pressable>
        </Link>

        <Link href="/login" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5ede3', // fundo bege claro
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '400',
    letterSpacing: 2,
    color: '#7f3d1c', // marrom elegante
    marginBottom: 10,
    fontFamily: 'serif', // fonte sofisticada
  },
  subtitle: {
    fontSize: 14,
    color: '#7f3d1c',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    marginTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: '#7f3d1c',
    fontSize: 16,
    fontWeight: '600',
  },
});
