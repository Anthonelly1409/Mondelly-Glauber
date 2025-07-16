import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>MONDELLY</Text>
        <Text style={styles.subtitle}>Login:</Text>

        <TextInput
          placeholder="E-mail"
          placeholderTextColor="#888"
          style={styles.input}
        />

        <TextInput
          placeholder="Senha"
          placeholderTextColor="#888"
          secureTextEntry
          style={styles.input}
        />

        <Link href="/fake1" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </Pressable>
        </Link>

        <Link href="/fake2" asChild>
          <Pressable style={styles.combinedButton}>
            <Text style={styles.secondaryButtonText}>Cadastro</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b99b82',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '95%',
    backgroundColor: '#f9f7f4',
    borderRadius: 8,
    padding: 54,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7f3d1c',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: 2,
    fontFamily: 'serif',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 12,
    color: '#7f3d1c',
    fontWeight: '600',
  },
  input: {
    height: 40,
    backgroundColor: '#e8e6e3',
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#f5f3f1',
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#444',
    fontWeight: '500',
  },
  secondaryButtonText: {
    fontSize: 16,
    marginBottom: 12,
    marginTop: 20,
    color: '#7f3d1c',
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#e0d6cd',
  },
  // ✅ estilo combinado sem array
  combinedButton: {
    backgroundColor: '#e0d6cd',
    paddingVertical: 10,
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 4,
    alignItems: 'center',
    marginTop: 10,
  },
});
